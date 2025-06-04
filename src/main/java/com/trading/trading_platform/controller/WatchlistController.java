package com.trading.trading_platform.controller;


import com.trading.trading_platform.model.Coin;
import com.trading.trading_platform.model.User;
import com.trading.trading_platform.model.Watchlist;
import com.trading.trading_platform.service.CoinService;
import com.trading.trading_platform.service.UserService;
import com.trading.trading_platform.service.WatchlistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/watchlist")
public class WatchlistController {

    @Autowired
    private final WatchlistService watchlistService;
    @Autowired
    private final UserService userService;

    @Autowired
    private CoinService coinService;

    @Autowired
    public WatchlistController(WatchlistService watchlistService,
                               UserService userService) {
        this.watchlistService = watchlistService;
        this.userService=userService;
    }

    @GetMapping("/user")
    public ResponseEntity<Watchlist> getUserWatchlist(
            @RequestHeader("Authorization") String jwt) throws Exception {

        User user=userService.findUserProfileByJwt(jwt);
        Watchlist watchlist = watchlistService.findUserWatchlist(user.getId());
        return ResponseEntity.ok(watchlist);

    }

    @GetMapping("/{watchlistId}")
    public ResponseEntity<Watchlist> getWatchlistById(
            @PathVariable Long watchlistId) throws Exception {

        Watchlist watchlist = watchlistService.findById(watchlistId);
        return ResponseEntity.ok(watchlist);

    }

    @PatchMapping("/add/coin/{coinId}")
    public ResponseEntity<Coin> addItemToWatchlist(
            @RequestHeader("Authorization") String jwt,
            @PathVariable String coinId) throws Exception {


        User user=userService.findUserProfileByJwt(jwt);
        Coin coin=coinService.findById(coinId);
        Coin addedCoin = watchlistService.addItemToWatchlist(coin, user);
        return ResponseEntity.ok(addedCoin);

    }
}
