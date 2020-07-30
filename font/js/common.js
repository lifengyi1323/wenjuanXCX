let jump = function (to) {
    window.location.href = to;
};
let jumpToLogin = function() {
    jump('/login.html');
};
let jumpIndex = function () {
    jump('/index.html');
};
let myAjax = function (object) {
    if (object === undefined) {
        return;
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
let isLogined = function () {
    let accessToken = $.cookie("accessToken");
    return accessToken !== undefined && accessToken !== '';
};
// 判断登录，未登录跳转至登录页
let judgeLoginAndJump = function (loginCallback) {
    if (!isLogined()) {
        jumpToLogin();
    } else if (loginCallback) {
        loginCallback();
    }
};
// 判断登录，未登录跳转至登录页
let join = function (strArr, separator) {
    let res = '';
    strArr.forEach(str => {
        res += separator + str;
    });
    return res.substr(separator.length);
};
let logout = function() {
    $.cookie("accessToken", "");
    $.cookie("userName", "");
    jumpIndex();
};
String.prototype.format = function(args) {
    var result = this;
    if (arguments.length > 0) {
        if (arguments.length == 1 && typeof (args) == "object") {
            for (var key in args) {
                if(args[key]!==undefined){
                    var reg = new RegExp("({" + key + "})", "g");
                    result = result.replace(reg, args[key]);
                }
            }
        }
        else {
            for (var i = 0; i < arguments.length; i++) {
                if (arguments[i] !== undefined) {
                    //var reg = new RegExp("({[" + i + "]})", "g");//这个在索引大于9时会有问题
                    var reg2= new RegExp("({)" + i + "(})", "g");
                    result = result.replace(reg2, arguments[i]);
                }
            }
        }
    }
    return result;
};
let quesOption4 = [
    {
        "index" : 1,
        "title" : "没有或偶尔"
    },
    {
        "index" : 2,
        "title" : "有时"
    },
    {
        "index" : 3,
        "title" : "经常"
    },
    {
        "index" : 4,
        "title" : "总是"
    }
];
let optionMap = {
    5: ['没有或偶尔', '有时', '经常', '总是']
};