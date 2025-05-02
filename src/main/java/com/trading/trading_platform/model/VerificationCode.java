package com.trading.trading_platform.model;


import com.trading.trading_platform.domain.VerificationType;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class VerificationCode {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String otp;

    @OneToOne
    private User user;

    private String email;

    private String mobile;

    private VerificationType verificationType;
}
