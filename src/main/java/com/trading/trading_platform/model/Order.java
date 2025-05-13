package com.trading.trading_platform.model;


import com.trading.trading_platform.domain.OrderStatus;
import com.trading.trading_platform.domain.OrderType;
import jakarta.persistence.*;
import lombok.Cleanup;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Entity
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    private User user;

    @Column(nullable = false)
    private OrderType orderType;

    @Column(nullable = false)
    private BigDecimal price;

    @Column(nullable = false)
    private OrderStatus status;

    private LocalDateTime timestamp = LocalDateTime.now();

    @OneToOne(mappedBy = "order", cascade = CascadeType.ALL)
    private OrderItem orderIteml;
}
