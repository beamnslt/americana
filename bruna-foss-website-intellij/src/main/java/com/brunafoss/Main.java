package com.brunafoss;

import io.javalin.Javalin;

public class Main {

    public static void main(String[] args) {

        Javalin app = Javalin.create(config -> {
            config.staticFiles.add("/public");
        }).start(7070);

        app.get("/", ctx -> ctx.redirect("/index.html"));

        System.out.println("Bruna Foss website running at:");
        System.out.println("http://localhost:7070");
    }
}
