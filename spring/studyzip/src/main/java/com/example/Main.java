package com.example;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class Main {
    public static void main(String[] args) {
        AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(WebConfig.class);

        ExampleController exampleService = context.getBean(ExampleController.class);
        System.out.println(exampleService.sayHello());

        context.close();
    }
}