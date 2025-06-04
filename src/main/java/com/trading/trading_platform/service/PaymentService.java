package com.trading.trading_platform.service;


import com.stripe.exception.StripeException;
import com.trading.trading_platform.domain.PaymentMethod;
import com.trading.trading_platform.model.PaymentOrder;
import com.trading.trading_platform.model.User;
import com.trading.trading_platform.response.PaymentResponse;

public interface PaymentService {

    PaymentOrder createOrder(User user, Long amount, PaymentMethod method);
    PaymentOrder getPaymentOrderById(Long id) throws Exception;
    Boolean ProceedPaymentOrder(PaymentOrder paymentOrder, String paymentId);
    PaymentResponse createStripePaymentLink(User user, Long amount, Long orderId) throws StripeException;





}
