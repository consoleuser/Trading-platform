package com.trading.trading_platform.service;


import com.trading.trading_platform.model.Order;
import com.trading.trading_platform.model.User;
import com.trading.trading_platform.model.Wallet;

public interface WalletService {
    Wallet getUserWallet(User user);
    Wallet addBalance(Wallet wallet, Long amount);
    Wallet findWalletById(Long id) throws Exception;
    Wallet walletToWalletTransfer(User sender, Wallet receiver, Long amount) throws Exception;
    Wallet payOrderPayment(Order order, User user) throws Exception;



}
