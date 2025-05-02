package com.trading.trading_platform.controller;
import com.trading.trading_platform.config.JWTProvider;
import com.trading.trading_platform.model.User;
import com.trading.trading_platform.model.twoFactorOTP;
import com.trading.trading_platform.repository.UserRepository;


import com.trading.trading_platform.response.AuthResponse;
import com.trading.trading_platform.service.CostumerUserDetailsService;
import com.trading.trading_platform.service.EmailService;
import com.trading.trading_platform.service.TwoFactorOtpService;
import com.trading.trading_platform.utils.OtpUtils;
import io.jsonwebtoken.Jwts;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CostumerUserDetailsService costumerUserDetailsService;

    @Autowired
    private TwoFactorOtpService twoFactorOtpService;

    @Autowired
    private EmailService emailService;
    @Autowired
    private com.trading.trading_platform.repository.twoFactorOTPRepository twoFactorOTPRepository;


    @PostMapping("/signup")
    public ResponseEntity<AuthResponse> register(@RequestBody User user) throws Exception {

        User doesEmailExist = userRepository.findByEmail(user.getEmail());

        if(doesEmailExist != null){
            throw new Exception("This email already exists.");
        }


        User newUser = new User();
        newUser.setEmail(user.getEmail());
        newUser.setPassword(user.getPassword());
        newUser.setEmail(user.getEmail());
        newUser.setFullName(user.getFullName());
        User savedUser = userRepository.save(newUser);


        Authentication auth = new UsernamePasswordAuthenticationToken(
                user.getEmail(),
                user.getPassword()
        );

        SecurityContextHolder.getContext().setAuthentication(auth);

        String jwt = JWTProvider.generateToken(auth);

        AuthResponse res = new AuthResponse();
        res.setJwt(jwt);
        res.setStatus(true);
        res.setMessage("User registered successfully.");

        return new ResponseEntity<>(res, HttpStatus.CREATED);


    }


    @PostMapping("/signin")
    public ResponseEntity<AuthResponse> login(@RequestBody User user) throws Exception {

        //get credentials to check for authenticity
        String userName = user.getEmail();
        String password = user.getPassword();
        System.out.println("Retrieving user data -----");
        System.out.println("userName: " + userName);
        System.out.println("password: " + password);

        //verify if the email, and password are part of the database
        // using authenticate method

        Authentication auth = authenticate(userName, password);
        SecurityContextHolder.getContext().setAuthentication(auth);
        String jwt = JWTProvider.generateToken(auth);

        User authUser = userRepository.findByEmail(userName);


        if(user.getTwoFactorAuth().isEnabled()){
            AuthResponse res = new AuthResponse();
            res.setMessage("Two factor auth is enabled.");
            res.setTwoFactorAuthEnabled(true);
            String otp = OtpUtils.generateOtp();
            twoFactorOTP oldTwoFactorOTP = twoFactorOtpService.findByUser(authUser.getId());

            if(oldTwoFactorOTP != null) {
                twoFactorOtpService.deleteTwoFactorOtp(oldTwoFactorOTP);
            }

            twoFactorOTP newTwoFactorOTP = twoFactorOtpService.createTwoFactorOtp(authUser, otp, jwt);
            emailService.sendverificationOtpEmail(userName, otp);
            res.setSession(newTwoFactorOTP.getId());
            return new ResponseEntity<>(res, HttpStatus.ACCEPTED);

        }


        AuthResponse res = new AuthResponse();
        res.setJwt(jwt);
        res.setStatus(true);
        res.setMessage("Login successful.");
        return new ResponseEntity<>(res, HttpStatus.CREATED);


    }

    private Authentication authenticate(String userName, String password) {
        UserDetails userDetails = costumerUserDetailsService.loadUserByUsername(userName);

        if(userDetails == null){
            throw new BadCredentialsException("invalid username or password.");
        }
        if(!password.equals(userDetails.getPassword())){
            throw new BadCredentialsException("invalid password.");
        }

        return new UsernamePasswordAuthenticationToken(userDetails, password, userDetails.getAuthorities());
    }

    @PostMapping("/two-factor/otp/{otp}")
    public ResponseEntity<AuthResponse> verifySigninOtp(
            @PathVariable String otp,
            @RequestParam String id) throws Exception{

        twoFactorOTP twoFactorOTP = twoFactorOtpService.findById(id);

        if(twoFactorOtpService.verifyTwoFactorOtp(twoFactorOTP, otp)){
            AuthResponse res = new AuthResponse();
            res.setMessage("Two factor auth is verified.");
            res.setStatus(true);
            res.setTwoFactorAuthEnabled(true);
            res.setJwt(twoFactorOTP.getJwt());
            return new ResponseEntity<>(res, HttpStatus.OK);


        }
        throw new Exception("invalid otp");


    }


}