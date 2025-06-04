package com.trading.trading_platform.repository;

import com.trading.trading_platform.model.PaymentDetails;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PaymentDetailsRepository extends JpaRepository<PaymentDetails,Long> {

    PaymentDetails findByUserId(Long userId);

}
