package com.trading.trading_platform.repository;


import com.trading.trading_platform.model.Asset;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AssetRepository extends JpaRepository<Asset, Long> {
    List<Asset> findByUserId(Long UserId);

    Asset findByUserIdAndCoinId(Long userId, String coinId);





}
