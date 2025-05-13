package com.trading.trading_platform.repository;

import com.trading.trading_platform.model.Wallet;
import org.springframework.data.jpa.repository.JpaRepository;



public interface WalletRepository extends JpaRepository<Wallet, Long> {

    Wallet findByUserId(Long userId);


}
