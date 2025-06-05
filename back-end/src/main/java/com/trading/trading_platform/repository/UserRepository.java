package com.trading.trading_platform.repository;
import com.trading.trading_platform.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {


    public User findByEmail(String email);

}