package org.huber.layui.controller;

import jdk.nashorn.internal.runtime.logging.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RestController
public class LoginController {
    @PostMapping("/login")
    public ResponseData login(HttpServletResponse response , @RequestParam String username , @RequestParam String password){
        System.out.println("login");
        ResponseData responseData = null;
        if("admin".equals(username)&&"123456".equals(password)){
//            重定向：
            try {
                response.sendRedirect("/view/home");
                responseData = new ResponseData(200,"登陆成功");
            } catch (IOException e) {
                e.printStackTrace();
            }
        }else{
//            return "haha";
            responseData = new ResponseData(400,"登陆失败");
        }
        return responseData;
    }

}
