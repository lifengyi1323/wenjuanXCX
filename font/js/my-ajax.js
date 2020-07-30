let myAjax = function (object) {
    if (object === undefined) {
        return;
    }
    if (object.statusCode === undefined) {
        object.statusCode = {
            //返回状态码为401时，跳转sso登录页
            401: function () {
                $.cookie("currentUrl", window.location.href);
                var host = location.host;
                var ipRegex = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;
                if (host.match(ipRegex)) {
                    window.location.href = "http://ssosv.it.beta.sankuai.com/sson/login?redirect_uri=http://"
                        + host + "/callback.html&client_id=com.sankuai.web.deal.dealmanage";
                } else if (host.indexOf("test") >= 0 || host.startsWith("localhost")) {
                    window.location.href = "http://ssosv.it.beta.sankuai.com/sson/login?redirect_uri=http://"
                        + host + "/callback.html&client_id=com.sankuai.web.deal.dealmanage";
                } else {
                    window.location.href = "https://ssosv.sankuai.com/sson/login?redirect_uri=http://"
                        + host + "/callback.html&client_id=com.sankuai.web.deal.dealmanage";
                }
            },
            //返回状态码为402时，说明无权限访问
            402: function () {
                window.location.href = "/unauthorized.html"
            }
        }
    }
    object.beforeSend = function (e) {
        e.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        var token = $.cookie("accessToken");
        if (token === undefined) {
            token = "";
        }
        e.setRequestHeader("accessToken", token);
    };
    return $.ajax(object);
};