package org.huber.layui.controller;

public class ErrorData extends ResponseData {
    public ErrorData(String msg) {
        throw new RuntimeException(msg);
    }
}
