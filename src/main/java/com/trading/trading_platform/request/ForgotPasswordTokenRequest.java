package com.trading.trading_platform.request;

import com.trading.trading_platform.domain.VerificationType;
import lombok.Data;

@Data
public class ForgotPasswordTokenRequest {

    private String sendTo;
    private String otp;
    private VerificationType verificationType;


}
