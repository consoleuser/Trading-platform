package com.trading.trading_platform.service;

import com.trading.trading_platform.domain.VerificationType;
import com.trading.trading_platform.model.User;

public interface UserService {

    public User findUserProfileByJwt(String jwt) throws Exception;
    public User findUserProfileByEmail(String email) throws Exception;
    public User findUserProfileById(Long userId) throws Exception;
    public User enableTwoFactorAuthentication(VerificationType verificationType, String sendto, User user);
    public User updatePassword(User user, String newPassword);


}
