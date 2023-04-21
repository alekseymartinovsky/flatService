package com.example.server.utils;

public class Formatter {
    static public Double toDoubleView(Double num){
        return (Math.round(num * 100.0) / 100.0);
    }
}
