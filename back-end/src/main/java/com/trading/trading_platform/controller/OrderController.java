package com.trading.trading_platform.controller;

import com.trading.trading_platform.domain.OrderType;
import com.trading.trading_platform.model.Coin;
import com.trading.trading_platform.model.Order;
import com.trading.trading_platform.model.User;
import com.trading.trading_platform.request.CreateOrderRequest;
import com.trading.trading_platform.service.CoinService;
import com.trading.trading_platform.service.OrderService;
import com.trading.trading_platform.service.UserService;
import com.trading.trading_platform.service.walletTransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/orders")
public class OrderController {
    @Autowired
    private OrderService orderService;

    @Autowired
    private UserService userSerivce;

    @Autowired
    private CoinService coinService;

    @Autowired
    private walletTransactionService walletService;

//    private



    @PostMapping("/pay")
    public ResponseEntity<Order> payOrderPayment(
            @RequestHeader("Authorization") String jwt,
            @RequestBody CreateOrderRequest req

    ) throws Exception {
        User user = userSerivce.findUserProfileByJwt(jwt);
        Coin coin = coinService.findById(req.getCoinId());


        Order order = orderService.processOrder(
                coin,
                req.getQuantity(),
                req.getOrderType(),
                user);

        return ResponseEntity.ok(order);

    }

    @GetMapping("/{orderId}")
    public ResponseEntity<Order> getOrderById(
            @RequestHeader("Authorization") String jwtToken,
            @PathVariable Long orderId
    ) throws Exception {
        User user = userSerivce.findUserProfileByJwt(jwtToken);
        Order order = orderService.getOrderById(orderId);


        if (order.getUser().getId().equals(user.getId())) {
            return ResponseEntity.ok(order);
        } else {
            throw new Exception("Invalid user");
        }
    }

    @GetMapping()
    public ResponseEntity<List<Order>> getAllOrdersForUser(
            @RequestHeader("Authorization") String jwt,
            @RequestParam(required = false) OrderType order_type,
            @RequestParam(required = false) String asset_symbol
    ) throws Exception {
        Long userId = userSerivce.findUserProfileByJwt(jwt).getId();
        List<Order> userOrders = orderService.getAllOrdersOfUser(userId,order_type,asset_symbol);
        return ResponseEntity.ok(userOrders);
    }




}
