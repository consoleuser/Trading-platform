package com.trading.trading_platform.service;

import com.trading.trading_platform.domain.OrderType;
import com.trading.trading_platform.model.Coin;
import com.trading.trading_platform.model.Order;
import com.trading.trading_platform.model.OrderItem;
import com.trading.trading_platform.model.User;

import java.util.List;

public interface OrderService {
    Order createOrder(User user, OrderItem orderItem, OrderType orderType);
    Order getOrderById(Long orderId) throws Exception;
    List<Order> getAllOrdersOfUser(Long userId, OrderType orderType, String assetSymbol);
    Order processOrder(Coin coin, double quantity, OrderType orderType, User user) throws Exception;







}
