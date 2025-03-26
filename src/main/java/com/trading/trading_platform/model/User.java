package com.trading.trading_platform.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.trading.trading_platform.domain.User_Role;
import com.trading.trading_platform.domain.UserStatus;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String fullName;
    private String email;
    private String mobile;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String password;

}
