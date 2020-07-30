$(document).ready(function(){
    let Main = {
        data() {
            return {
                user: {

                },
                route: {
                    1: "/index.html",
                },
            };
        },
        created: function() {
            let _this = this;
            judgeLoginAndJump(() => {
                myAjax({
                    type: "get",
                    url: "/api/v1/user/info",
                    success: function (data) {
                        //console.log(data);
                        if (data.code === 200) {
                            _this.user = data.user;
                        } else if (data.code === 402) {
                            // 用户未登录
                            _this.$alert('', '该用户不存在，请重新登录', {
                                confirmButtonText: '确定',
                                callback: action => {
                                    jumpToLogin();
                                }
                            });
                        } else {
                            _this.$alert('', '服务器内部错误，请稍后重试', {
                                confirmButtonText: '确定'
                            });
                        }
                    },
                    error: function () {
                        _this.$alert('', '服务器内部错误，请稍后重试', {
                            confirmButtonText: '确定'
                        });
                    }
                });
            });
        },
        methods: {
            handleSelect(key, keyPath) {
                if (key === 24) {
                    return logout();
                    this.isLogin = false;
                }
                if (this.route[key]) {
                    jump(this.route[key]);
                }
            }
        },
    };
    var Ctor = Vue.extend(Main)
    new Ctor().$mount('#app')

});