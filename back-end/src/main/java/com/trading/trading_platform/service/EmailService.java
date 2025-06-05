package com.trading.trading_platform.service;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.mail.MailSendException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;



@Service
public class EmailService {
    private JavaMailSender mailSender;

    public void sendverificationOtpEmail(String email, String otp) throws MessagingException {
        MimeMessage mimeMessage = mailSender.createMimeMessage();
        MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, "utf-8");

        String subject = "Tradinng platform OTP verification";
        String text = "Your verification code is" + otp;


        mimeMessageHelper.setSubject(subject);
        mimeMessageHelper.setText(text);
        mimeMessageHelper.setTo(email);

        try{
            mailSender.send(mimeMessage);
        }catch(Exception e){
            throw new MailSendException(e.getMessage());
        }

    }
}
