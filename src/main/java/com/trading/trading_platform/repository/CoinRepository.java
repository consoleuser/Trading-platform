package com.trading.trading_platform.repository;

import com.trading.trading_platform.model.Coin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CoinRepository extends JpaRepository<Coin, String> {


}
