//package org.huber.layui.controller;
//
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.servlet.ModelAndView;
//
//import javax.annotation.Resource;
//import javax.servlet.http.HttpServletRequest;
//import java.util.Map;
//
//public class ViewController {
////    @Resource
////    UserService userService;
//
//    private String base = "/";
//
//    @GetMapping({"/**"})
//    public ModelAndView dispatchPF(HttpServletRequest request){
//        System.out.println("haha");
//        Map<String,String[]> parmeters = request.getParameterMap();
//        System.out.println(parmeters.toString());
//        ModelAndView mav = new ModelAndView(request.getServletPath().replace("/view",""));
//        for (Map.Entry<String,String[]> param : parmeters.entrySet()){
//            mav.addObject(param.getKey(),param.getValue()[param.getValue().length-1]);
//        }
////        //添加权限
////        UserRolePermissionBrief user =userService.getUserBrief(UserService.getUsername());
////        mav.addObject("user",user);
////        mav.addObject("token", UserService.getToken());
//        mav.addObject("base",base);
//        return mav;
//    }
//}
