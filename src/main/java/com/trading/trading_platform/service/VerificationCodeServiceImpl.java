package com.trading.trading_platform.service;

import com.trading.trading_platform.domain.VerificationType;
import com.trading.trading_platform.model.User;
import com.trading.trading_platform.model.VerificationCode;
import com.trading.trading_platform.repository.VerificationCodeRepository;
import com.trading.trading_platform.utils.OtpUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class VerificationCodeServiceImpl implements VerificationCodeService{

    @Autowired
    private VerificationCodeRepository verificationCodeRepository;


    @Override
    public VerificationCode sendVerificationCode(User user, VerificationType verificationType) {
        VerificationCode verificationCode1 = new VerificationCode();
        verificationCode1.setOtp(OtpUtils.generateOtp());
        verificationCode1.setVerificationType(verificationType);
        verificationCode1.setUser(user);

        return verificationCodeRepository.save(verificationCode1);


    }

    @Override
        public VerificationCode getVerificationCode(Long id) throws Exception {
        Optional<VerificationCode> verificationCode = verificationCodeRepository.findById(id);

        if(verificationCode.isPresent()) {
            return verificationCode.get();
        }
        throw new Exception("Verification code has not been found");
    }

    @Override
    public VerificationCode getVerificationCodeByUser(Long userId) {
        return verificationCodeRepository.findByUserId(userId);
    }

    @Override
    public void deleteVerificationCodeById(VerificationCode verificationCode) {
        verificationCodeRepository.delete(verificationCode);
    }


}
