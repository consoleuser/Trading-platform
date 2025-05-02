package com.trading.trading_platform.repository;

import com.trading.trading_platform.model.twoFactorOTP;
import org.springframework.data.jpa.repository.JpaRepository;

public interface twoFactorOTPRepository extends JpaRepository<twoFactorOTP,String> {
    twoFactorOTP findByUserId(Long userId);

}
