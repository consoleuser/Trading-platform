package com.trading.trading_platform.service;

import com.trading.trading_platform.model.User;
import com.trading.trading_platform.model.twoFactorOTP;

public interface TwoFactorOtpService {


    twoFactorOTP createTwoFactorOtp(User user, String otp, String jwt);

    twoFactorOTP findByUser(Long userId);

    twoFactorOTP findById(String id);

    boolean verifyTwoFactorOtp(twoFactorOTP twoFactorOtp,String otp);

    void deleteTwoFactorOtp(twoFactorOTP twoFactorOTP);
}
