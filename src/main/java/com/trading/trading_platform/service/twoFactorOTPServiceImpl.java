package com.trading.trading_platform.service;

import com.trading.trading_platform.model.User;
import com.trading.trading_platform.model.twoFactorOTP;
import com.trading.trading_platform.repository.twoFactorOTPRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
public class twoFactorOTPServiceImpl implements TwoFactorOtpService{

    @Autowired
    private twoFactorOTPRepository twoFactorOTPRepository;

    @Override
    public twoFactorOTP createTwoFactorOtp(User user, String otp, String jwt) {
        UUID uuid = UUID.randomUUID();
        String id = uuid.toString();

        twoFactorOTP twofactorOTP = new twoFactorOTP();
        twofactorOTP.setOtp(otp);
        twofactorOTP.setJwt(jwt);
        twofactorOTP.setId(id);
        twofactorOTP.setUser(user);

        return twoFactorOTPRepository.save(twofactorOTP);
    }

    @Override
    public twoFactorOTP findByUser(Long userId) {
        return twoFactorOTPRepository.findByUserId(userId);
    }

    @Override
    public twoFactorOTP findById(String id) {
        Optional<twoFactorOTP> otp = twoFactorOTPRepository.findById(id);
        return otp.orElse(null); // if its present return otp, otherwise
                                       // return null
    }

    @Override
    public boolean verifyTwoFactorOtp(twoFactorOTP twoFactorOtp, String otp) {
        return twoFactorOtp.getOtp().equals(otp);
    }

    @Override
    public void deleteTwoFactorOtp(twoFactorOTP twoFactorOTP) {
        twoFactorOTPRepository.delete(twoFactorOTP);
    }

}
