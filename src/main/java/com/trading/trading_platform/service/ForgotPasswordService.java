package com.trading.trading_platform.service;

import com.trading.trading_platform.domain.VerificationType;
import com.trading.trading_platform.model.ForgotPasswordToken;
import com.trading.trading_platform.model.User;

public interface ForgotPasswordService {
    ForgotPasswordToken createToken(User user, String id,
                                    String otp, VerificationType verificationType,
                                    String sendTo);

    ForgotPasswordToken findById(String id);

    ForgotPasswordToken findByUser(Long userId);

    void deleteToken(ForgotPasswordToken token);


}
