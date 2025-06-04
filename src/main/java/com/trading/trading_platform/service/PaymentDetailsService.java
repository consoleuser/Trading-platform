package com.trading.trading_platform.service;


import com.trading.trading_platform.model.PaymentDetails;
import com.trading.trading_platform.model.User;

public interface PaymentDetailsService {


    public PaymentDetails addPaymentDetails(String accountNumber,String accountHolder, String ifsc, String bankName
                                            ,User user);

    public PaymentDetails getUsersPaymentDetails(User user);

}
