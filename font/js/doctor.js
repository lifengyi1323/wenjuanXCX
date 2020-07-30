$(document).ready(function(){
    new Vue({
        el: '#app',
        data: {
            imgs: [
                "/img/2.jpeg",
                "/img/3.jpg",
                "/img/4.jpg",
            ],
            route: {
                1: "",
                21: "/login.html",
                22: "/register.html",
                23: "/userinfo.html"
            },
            isLogin: false,
            activeNum: 0,
            registerNum: 0,
        },
        created: function() {
            let _this = this;
            judgeLoginAndJump(() => {
                _this.isLogin = true;
                _this.userName = $.cookie("userName");
                myAjax({
                    type: "get",
                    url: "/api/admin/data",
                    success: function (data) {
                        console.log(data);
                        if (data.code === 200) {
                            _this.registerNum = data.data.registerNum;
                            _this.activeNum = data.data.activeNum;
                            console.log(_this);
                        } else if (data.code === 301) {
                            this.$message({
                                message: "您无权访问",
                                type: "warning"
                            });
                        } else {
                            _this.$message.error("网络错误，请稍后重试");
                        }
                    },
                    error: function () {
                        _this.$message.error("网络错误，请稍后重试");
                    }
                })
            });
        },
        methods: {
            handleSelect(key, keyPath) {
                if (key === '24') {
                    logout();
                    this.isLogin = false;
                }
                if (this.route[key]) {
                    jump(this.route[key]);
                }
            },
        }
    })
});