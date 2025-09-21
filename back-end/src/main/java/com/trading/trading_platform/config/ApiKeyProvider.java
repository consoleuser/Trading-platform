package com.trading.trading_platform.config;


import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties(prefix = "gecko.api")
public class ApiKeyProvider {

    private String key;


    public String getKey() {
        return "&x_cg_demo_api_key=" + key;
    }
    public String geDifferentKey() { return "?x_cg_demo_api_key=" + key;}
    public void setKey(String key) {
        this.key = key;
    }
}
