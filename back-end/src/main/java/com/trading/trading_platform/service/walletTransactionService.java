package com.trading.trading_platform.service;


import com.trading.trading_platform.domain.WalletTransactionType;
import com.trading.trading_platform.model.Wallet;
import com.trading.trading_platform.model.WalletTransaction;

import java.util.List;

public interface walletTransactionService {
    WalletTransaction createTransaction(Wallet wallet,
                                        WalletTransactionType type,
                                        String transferId,
                                        String purpose,
                                        Long amount
    );

    List<WalletTransaction> getTransactions(Wallet wallet, WalletTransactionType type);
}
