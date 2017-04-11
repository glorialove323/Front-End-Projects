function ajax(url, fnSucc, fnFaild) {
    // 1、创建Ajax对象
    /*非IE6
    var oAjax = new XMLHttpRequest();
    IE6
    var oAjax = new ActiveXObject("Microsoft.XMLHTTP");*/
    // 做兼容
    if (window.XMLHttpRequest) {
        var oAjax = new XMLHttpRequest();
    } else {
        var oAjax = new ActiveXObject("Microsoft.XMLHTTP");
    }

    // 2、连接服务器
    // open(方法，文件名，异步传输)
    oAjax.open('GET', url, true);

    // 3、发送请求
    oAjax.send();

    // 4、接收返回
    oAjax.onreadystatechange = function() {
        // oAjax.readyState 浏览器和服务器进行到哪一步了
        // 完成不代表成功，所以需要进一步验证
/*        readyState属性： 请求状态
        0（ 未初始化） 还没有调用open() 方法
        1（ 载入） 已调用send() 方法， 正在发送请求
        2（ 载入完成） send() 方法完成， 已收到全部响应内容
        3（ 解析） 正在解析响应内容
        4（ 完成） 响应内容解析完成， 可以在客户端调用了
*/
        if (oAjax.readyState == 4) {
            if (oAjax.status == 200) {
                fnSucc(oAjax.responseText);
            } else {
                if (fnFaild) {
                    fnFaild(oAjax.status);
                }
            }
        }
    }
}
