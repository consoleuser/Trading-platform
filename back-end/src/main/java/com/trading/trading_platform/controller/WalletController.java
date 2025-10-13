package com.trading.trading_platform.controller;

import com.trading.trading_platform.domain.WalletTransactionType;
import com.trading.trading_platform.model.*;
import com.trading.trading_platform.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.net.URI;
import java.util.List;


@RestController
public class WalletController {

    @Autowired
    private WalletService walletService;
    @Autowired
    private UserService userService;
    @Autowired
    private OrderService orderService;
    @Autowired
    private walletTransactionService walletTransactionService;
    @Autowired
    private PaymentService paymentService;




    @GetMapping("/api/wallet")
    public ResponseEntity<?> getUserWallet(@RequestHeader("Authorization") String jwt) throws Exception {
        User user = userService.findUserProfileByJwt(jwt);
        Wallet wallet = walletService.getUserWallet(user);
        return new ResponseEntity<>(wallet, HttpStatus.ACCEPTED);
    }

    @GetMapping("/api/wallet/payment-success")
    public ResponseEntity<?> handlePaymentSuccess(
            @RequestParam("order_id") Long orderId,
            @RequestParam("payment_id") String paymentId) {

        try {
            // Get the payment order
            PaymentOrder paymentOrder = paymentService.getPaymentOrderById(orderId);

            // Verify payment status with payment_id (this is crucial for security)
            Boolean paymentStatus = paymentService.ProceedPaymentOrder(paymentOrder, paymentId);

            if (paymentStatus) {
                // Payment verified successfully
                return ResponseEntity.status(HttpStatus.FOUND)
                        .location(URI.create("http://localhost:5455/wallet?payment_success=true&order_id=" + orderId + "&payment_id=" + paymentId))
                        .build();
            } else {
                // Payment verification failed
                return ResponseEntity.status(HttpStatus.FOUND)
                        .location(URI.create("http://localhost:5455/wallet?payment_failed=true&order_id=" + orderId))
                        .build();
            }

        } catch (Exception e) {
            // Error occurred - redirect to frontend with error
            return ResponseEntity.status(HttpStatus.FOUND)
                    .location(URI.create("http://localhost:5455/wallet?payment_error=true&order_id=" + orderId + "&error=" + e.getMessage()))
                    .build();
        }
    }





    @PutMapping("/api/wallet/order/{orderId}/pay")
    public ResponseEntity<Wallet> payOrderPayment(@RequestHeader("Authorization")
                                                         String jwt,
                                                         @PathVariable Long orderId


    ) throws Exception{
        User user = userService.findUserProfileByJwt(jwt);
        Order order = orderService.getOrderById(orderId);
        Wallet wallet = walletService.payOrderPayment(order, user);

        return new ResponseEntity<>(wallet, HttpStatus.ACCEPTED);
    }

    @GetMapping("/api/wallet/transactions")
    public ResponseEntity<List<WalletTransaction>> getWalletTransaction(
            @RequestHeader("Authorization")String jwt) throws Exception {
        User user=userService.findUserProfileByJwt(jwt);
        Wallet wallet = walletService.getUserWallet(user);
        List<WalletTransaction> transactions=walletTransactionService.getTransactions(wallet,null);
        return new ResponseEntity<>(transactions, HttpStatus.OK);
    }



    @PutMapping("/api/wallet/deposit")
    public ResponseEntity<Wallet> addBalanceToWallet(@RequestHeader("Authorization") String jwt,
                                                  @RequestParam(name="order_id") Long orderId,
                                                  @RequestParam(name="payment_id") String paymentId
    ) throws Exception{
        User user = userService.findUserProfileByJwt(jwt);
        Wallet wallet = walletService.getUserWallet(user);

        PaymentOrder order = paymentService.getPaymentOrderById(orderId);
        Boolean status = paymentService.ProceedPaymentOrder(order, paymentId);

        if (wallet.getBalance() == null){
            wallet.setBalance(BigDecimal.valueOf(0));
        }
        if(status){
            wallet = walletService.addBalance(wallet, order.getAmount());
        }

        return new ResponseEntity<>(wallet, HttpStatus.ACCEPTED);
    }
    @PutMapping("api/wallet/{walletId}/transfer")
    public ResponseEntity<Wallet> walletToWalletTransfer(
            @RequestHeader("Authorization") String jwt,
            @PathVariable Long walletId,
            @RequestBody WalletTransaction trans) throws Exception{


        User sender = userService.findUserProfileByJwt(jwt);
        Wallet receiver = walletService.findWalletById(walletId);
        Wallet sender_wallet = walletService.walletToWalletTransfer(sender, receiver, trans.getAmount());

        walletTransactionService.createTransaction(sender_wallet,
                WalletTransactionType.WALLET_TRANSFER,
                receiver.getId().toString(),
                trans.getPurpose(),
                trans.getAmount());

        return new ResponseEntity<>(sender_wallet,HttpStatus.OK);

    }




}
