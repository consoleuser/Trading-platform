package com.trading.trading_platform.service;

import com.trading.trading_platform.model.User;
import com.trading.trading_platform.model.Withdrawal;

import java.util.List;


public interface WithdrawalService {

    Withdrawal requestWithdrawal (Long amount, User user);

    Withdrawal proceedWithWithdrawal(Long withdrawalId, boolean accept) throws Exception;

    List<Withdrawal> getUsersWithdrawalHistory(User user);

    List<Withdrawal> getAllWithdrawalRequests();


}
