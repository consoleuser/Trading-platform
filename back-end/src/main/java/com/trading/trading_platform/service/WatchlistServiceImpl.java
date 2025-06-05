package com.trading.trading_platform.service;


import com.trading.trading_platform.model.Coin;
import com.trading.trading_platform.model.User;
import com.trading.trading_platform.model.Watchlist;
import com.trading.trading_platform.repository.UserRepository;
import com.trading.trading_platform.repository.WatchlistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public class WatchlistServiceImpl implements WatchlistService {

    @Autowired
    private WatchlistRepository watchlistRepository;
    @Autowired
    private UserRepository userRepository;


    @Override
    public Watchlist findUserWatchlist(Long userId) throws Exception {
        Watchlist watchlist = watchlistRepository.findByUserId(userId);
        if(watchlist == null){
            Watchlist list = new Watchlist();
            Optional<User> user = userRepository.findById(userId);
            user.ifPresent(list::setUser);
            watchlistRepository.save(list);
        }

        return watchlist;

    }



    @Override
    public Watchlist createWatchlist(User user) {
        Watchlist watchlist = new Watchlist();
        watchlist.setUser(user);

        return watchlistRepository.save(watchlist);
    }

    @Override
    public Watchlist findById(Long id) throws Exception {
        Optional<Watchlist> watchlistOptional = watchlistRepository.findById(id);
        if(watchlistOptional.isEmpty()){
            throw new Exception("Watchlist not found");
        }

        return watchlistOptional.get();
    }

    @Override
    public Coin addItemToWatchlist(Coin coin, User user) throws Exception {
        Watchlist watchlist = findUserWatchlist(user.getId());
        if(watchlist.getCoins().contains(coin)){
            watchlist.getCoins().remove(coin);
        }
        else{
            watchlist.getCoins().add(coin);
        }

        watchlistRepository.save(watchlist);

        return coin;
    }
}
