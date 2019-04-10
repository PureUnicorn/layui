package org.huber.layui.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/view")
public class WebController {
    @RequestMapping(value="/{module}/{module2}/{name}")
    public String commonController(@PathVariable String module, @PathVariable String module2, @PathVariable String name) {

        System.out.println("ahha1");
        return module+"/"+module2+"/"+name;
    }


    @RequestMapping(value="/{module}/{name}")
    public String commonController2(@PathVariable String module, @PathVariable String name) {

        System.out.println("ahha2");
        return module+"/"+name;
    }

    @RequestMapping(value="/{name}")
    public String commonController(@PathVariable String name) {

        System.out.println("ahha3");
        return name;
    }
}
