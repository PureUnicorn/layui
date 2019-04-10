import jQuery from 'jquery'
import '../layui/layui.js'
import '../layui/css/layui.css'
import '../layui/css/admin.css'
import '../layui/css/layui-extend.css'
import '../js/plugins/jquery.form.js'
import '../js/plugins/jquery.validate.min.js'
import '../js/plugins/jquery.validate.unobtrusive.js'
import '../js/plugins/jquery.serializejson.min.js'
import '../js/plugins/messages_zh.js'
// import '../easyui/themes/default/easyui.css'
// import '../easyui/themes/icon.css'
// import '../easyui/jquery.min.js'
// import '../easyui/jquery.easyui.min.js'
//初始化layui配置
layui.config({
    dir: 'layui/',
    base: 'layui/lay/modules/'
});
//jquery全局错误处理
$(function(){  
    // 设置jQuery Ajax全局的参数  
    $.ajaxSetup({  
        type: "POST",  
        error: function(jqXHR, textStatus, errorThrown){  
            switch (jqXHR.status){  
                case(500):  
                    layer.alert("服务器系统内部错误");  
                    break;  
                case(501):  
                    layer.alert("服务器不具备完成请求的功能");  
                    break;  
                case(502):  
                    layer.alert("错误网关");  
                    break;  
                case(503):  
                    layer.alert("服务不可用");  
                    break;
                case(504):  
                    layer.alert("网关超时");  
                    break;
                case(400):  
                    layer.alert("错误请求");  
                    break;  
                case(401):  
                    layer.alert("请登录后请求");  
                    break;  
                case(403):  
                    layer.alert("无权限执行此操作");  
                    break; 
                case(404):  
                    layer.alert("请求地址无效");  
                    break;
                case(406):  
                    layer.alert("服务器不接受该类型的请求");  
                    break;    
                case(408):  
                    layer.alert("请求超时");  
                    break;  
                case(409):  
                    layer.alert("数据已存在");  
                    break;  
                case(410):  
                    layer.alert("请求的数据或资源已删除");  
                    break;  
                case(415):  
                    layer.alert("不支持的媒体类型");  
                    break;  
                default:  
                     layer.alert(jqXHR.responseJSON.msg);
            }  
        }
    });  
});  