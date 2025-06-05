package com.trading.trading_platform.service;

import com.trading.trading_platform.domain.WithdrawalStatus;
import com.trading.trading_platform.model.User;
import com.trading.trading_platform.model.Withdrawal;
import com.trading.trading_platform.repository.WithdrawalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;


@Service
public class WithdrawalServiceImpl implements WithdrawalService {

    @Autowired
    private WithdrawalRepository withdrawalRepository;


    @Override
    public Withdrawal requestWithdrawal(Long amount, User user) {
        Withdrawal withdrawal = new Withdrawal();
        withdrawal.setAmount(amount);
        withdrawal.setUser(user);
        withdrawal.setStatus(WithdrawalStatus.PENDING);

        return withdrawalRepository.save(withdrawal);

    }

    @Override
    public Withdrawal proceedWithWithdrawal(Long withdrawalId, boolean accept) throws Exception {
        Optional<Withdrawal> withdrawal = withdrawalRepository.findById(withdrawalId);
        if(withdrawal.isEmpty()) {
            throw new Exception("withdrawal not found");
        }

        Withdrawal withdrawal1 = withdrawal.get();
        withdrawal1.setDate(LocalDateTime.now());

        if(accept){
            withdrawal1.setStatus(WithdrawalStatus.SUCCESS);
        }else{
            withdrawal1.setStatus(WithdrawalStatus.DECLINED);
        }

        return withdrawalRepository.save(withdrawal1);
    }

    @Override
    public List<Withdrawal> getUsersWithdrawalHistory(User user) {
        return withdrawalRepository.findByUserId(user.getId());
    }

    @Override
    public List<Withdrawal> getAllWithdrawalRequests() {
        return withdrawalRepository.findAll();
    }
}
