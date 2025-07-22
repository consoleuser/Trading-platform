package com.trading.trading_platform.repository;

import com.trading.trading_platform.model.VerificationCode;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VerificationCodeRepository extends JpaRepository<VerificationCode, Long> {

     VerificationCode findByUserId(Long userId);

}
