package com.trading.trading_platform.controller;


import com.trading.trading_platform.request.ForgotPasswordTokenRequest;
import com.trading.trading_platform.domain.VerificationType;
import com.trading.trading_platform.model.ForgotPasswordToken;
import com.trading.trading_platform.model.User;
import com.trading.trading_platform.model.VerificationCode;
import com.trading.trading_platform.request.ResetPasswordRequest;
import com.trading.trading_platform.response.ApiResponse;
import com.trading.trading_platform.response.AuthResponse;
import com.trading.trading_platform.service.EmailService;
import com.trading.trading_platform.service.ForgotPasswordService;
import com.trading.trading_platform.service.UserService;
import com.trading.trading_platform.service.VerificationCodeService;
import com.trading.trading_platform.utils.OtpUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
public class UserController {

    @Autowired
    private UserService userService;
    @Autowired
    private VerificationCodeService verificationCodeService;

    @Autowired
    private EmailService emailService;
    @Autowired
    private ForgotPasswordService forgotPasswordService;
    private String jwt;




    @GetMapping("/api/users/profile")
    public ResponseEntity<User> getUserProfile(@RequestHeader("Authorization") String jwt) throws Exception {
        User user = userService.findUserProfileByJwt(jwt);
        return new ResponseEntity<User>(user, HttpStatus.OK);
    }



    @GetMapping("/api/users/{userId}")
    public ResponseEntity<User> findUserById(
            @PathVariable Long userId,
            @RequestHeader("Authorization") String jwt) throws Exception {

        User user = userService.findUserProfileById(userId);
        user.setPassword(null);

        return new ResponseEntity<>(user, HttpStatus.ACCEPTED);
    }

    @PatchMapping("api/users/enable-two-factor/verify-otp/{otp}")
    public ResponseEntity<User> enableTwoFactorAuthentication(
            @PathVariable String otp,
            @RequestHeader("Authorization") String jwt) throws Exception {
        User user = userService.findUserProfileByJwt(jwt);

        VerificationCode verificationCode = verificationCodeService.getVerificationCodeByUser(user.getId());
        String sendTo = verificationCode.getVerificationType()
                .equals(VerificationType.EMAIL)
                ? verificationCode.getEmail() : verificationCode.getMobile();

        boolean isVerified = verificationCode.getOtp().equals(otp);
        if(isVerified){
            User updatedUser = userService.enableTwoFactorAuthentication(verificationCode.getVerificationType(), sendTo, user);
            verificationCodeService.deleteVerificationCodeById(verificationCode);
            return new ResponseEntity<>(updatedUser, HttpStatus.OK);
        }

        throw new Exception("Wrong otp used");
    }


    @PostMapping("/api/users/verification/{verificationType}/send-otp")
    public ResponseEntity<String> sendVerificationOTP(
            @PathVariable VerificationType verificationType,
            @RequestHeader("Authorization") String jwt)
            throws Exception {
        User user = userService.findUserProfileByJwt(jwt);
        VerificationCode verificationCode = verificationCodeService.getVerificationCodeByUser(user.getId());

        if(verificationCode == null){
            verificationCode = verificationCodeService.sendVerificationCode(user, verificationType);
        }
        if(verificationType.equals(VerificationType.EMAIL)){
            emailService.sendverificationOtpEmail(user.getEmail(), verificationCode.getOtp());
        }

        return new ResponseEntity<>("verification otp sent successfully", HttpStatus.OK);

    }



    @PostMapping("/auth/users/reset-password/send-otp")
    public ResponseEntity<AuthResponse> sendForgotPasswordOtp(
            @RequestBody ForgotPasswordTokenRequest req)
            throws Exception {

        User user = userService.findUserProfileByEmail(req.getSendTo());
        String otp = OtpUtils.generateOtp();
        UUID uuid = UUID.randomUUID();
        String id = uuid.toString();

        ForgotPasswordToken token = forgotPasswordService.findByUser(user.getId());
        if(token == null){
            token = forgotPasswordService.createToken(user, id, otp, req.getVerificationType(), req.getSendTo());
        }

        if(req.getVerificationType().equals(VerificationType.EMAIL)){
            emailService.sendverificationOtpEmail(user.getEmail(), token.getOtp());
        }

        AuthResponse authResponse = new AuthResponse();
        authResponse.setSession(token.getId());
        authResponse.setMessage("Password reset otp request sent successfully");


        return new ResponseEntity<>(authResponse, HttpStatus.OK);

    }

    @PatchMapping("auth/users/reset-password/verify-otp")
    public ResponseEntity<ApiResponse> resetPassword(
            @RequestParam String id,
            @RequestBody ResetPasswordRequest req,
            @RequestHeader("Authorization") String jwt) throws Exception {
        ForgotPasswordToken forgotPasswordToken = forgotPasswordService.findById(id);
        boolean isVerified = forgotPasswordToken.getOtp().equals(req.getOtp());

        if(isVerified){
            userService.updatePassword(forgotPasswordToken.getUser(), req.getPassword());
            ApiResponse res = new ApiResponse();
            res.setMessage("Password reset otp request sent successfully");
            return new ResponseEntity<>(res, HttpStatus.ACCEPTED);
        }

        throw new Exception("Wrong otp used");

    }





}
