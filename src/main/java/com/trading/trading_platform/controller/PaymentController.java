package com.trading.trading_platform.controller;


import com.stripe.exception.StripeException;
import com.trading.trading_platform.domain.PaymentMethod;
import com.trading.trading_platform.model.PaymentOrder;
import com.trading.trading_platform.model.User;
import com.trading.trading_platform.response.PaymentResponse;
import com.trading.trading_platform.service.PaymentService;
import com.trading.trading_platform.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class PaymentController {
    @Autowired
    private UserService userService;

    @Autowired
    private PaymentService paymentService;



    @PostMapping("/api/payment/{paymentMethod}/amount/{amount}")
    public ResponseEntity<PaymentResponse> paymentHandler(
            @PathVariable PaymentMethod paymentMethod,
            @PathVariable Long amount,
            @RequestHeader("Authorization") String jwt) throws Exception, StripeException {

        User user = userService.findUserProfileByJwt(jwt);

        PaymentResponse paymentResponse;

        PaymentOrder order= paymentService.createOrder(user, amount,paymentMethod);
        paymentResponse=paymentService.createStripePaymentLink(user,amount, order.getId());


        return new ResponseEntity<>(paymentResponse, HttpStatus.CREATED);
    }
}

