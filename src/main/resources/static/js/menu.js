
function navBar(data) {
    var ulHtml = '';
    for (var i = 0; i < data.length; i++) {
        if(i==0) {
            ulHtml += '<li data-name="component" data-jump="" class="layui-nav-item layui-nav-itemed" style="">';
        }else{
            ulHtml += '<li data-name="component" data-jump="" class="layui-nav-item" style="">';
        }
        ulHtml += '<a href="javascript:;" lay-tips="' + data[i].title + '" lay-direction="2">';
        ulHtml += '<i class="layui-icon ' + data[i].icon + '"></i> <cite>' + data[i].title + '</cite> <span class="layui-nav-more"></span>';
        ulHtml += '</a>';

        //获取子树
        var child = spread(data[i]);
        if (child != undefined) {
            ulHtml += spread(data[i]);

        }
        ulHtml += '</li>';
    }
    return ulHtml;
};

function spread(data) {
    var ulHtml = '';
    if (data.children == undefined || data.children.length == 0) {
        return "";
    }
    ulHtml += '<dl class="layui-nav-child">';
    for (var i = 0; i < data.children.length; i++) {
        ulHtml += '<dd data-name="grid">';
        if (data.children[i].type == 1) {
            //还有子树
            ulHtml += '<a href="javascript:;">' + data.children[i].title + '</a>';
            ulHtml += spread(data.children[i]);
        } else {
            ulHtml += '<a href="javascript:;" lay-href="'+data.children[i].url+'">' + data.children[i].title + '</a>';
        }
        ulHtml += '</dd>';
    }
    ulHtml += '</dl>';
    return ulHtml;

}