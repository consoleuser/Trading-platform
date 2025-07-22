package com.trading.trading_platform.model;


import jakarta.persistence.*;
import lombok.Data;

import javax.swing.plaf.basic.BasicEditorPaneUI;
import java.math.BigDecimal;

@Entity
@Data
public class Wallet {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @OneToOne
    private User user;
    private BigDecimal balance= BigDecimal.ZERO;



}
