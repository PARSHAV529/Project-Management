package com.projectmangement.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class Appconfig implements WebMvcConfigurer {


    
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("*") // Allow requests from any origin
                .allowedMethods("GET", "POST", "PUT", "DELETE") // Allow specified HTTP methods
                .allowedHeaders("*"); // Allow all headers
    }

    // SecurityFilterChain

    // @Bean
    // public UserDetailsService userDetailsService(){


    // }
    
    // @Bean
    // public PasswordEncoder passwordEncoder(){

    // }
}
