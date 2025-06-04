package com.trading.trading_platform.service;


import com.trading.trading_platform.model.Coin;
import com.trading.trading_platform.model.User;
import com.trading.trading_platform.model.Watchlist;

public interface WatchlistService {


    Watchlist findUserWatchlist(Long userId) throws Exception;
    Watchlist createWatchlist(User user);
    Watchlist findById(Long id) throws Exception;

    Coin addItemToWatchlist(Coin coin, User user) throws Exception;





}
