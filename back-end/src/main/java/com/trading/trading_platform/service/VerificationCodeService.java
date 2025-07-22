package com.trading.trading_platform.service;

import com.trading.trading_platform.domain.VerificationType;
import com.trading.trading_platform.model.User;
import com.trading.trading_platform.model.VerificationCode;

public interface VerificationCodeService {

    VerificationCode sendVerificationCode(User user, VerificationType verificationType);
    VerificationCode getVerificationCode(Long id) throws Exception;
    VerificationCode getVerificationCodeByUser(Long userId);
    void deleteVerificationCodeById(VerificationCode verificationCode);


}
