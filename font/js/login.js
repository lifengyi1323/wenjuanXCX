$(document).ready(function(){
    let Main = {
        data() {
            let phoneCheck = (rule, value, callback) => {
                let reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
                if (reg.test(value)) {
                    callback();
                } else {
                    callback(new Error('手机号格式有误'));
                }
            };
            let passWordCheck = (rule, value, callback) => {
                if (this.errMsg.password) {
                    let msg = this.errMsg.password;
                    this.errMsg.password = '';
                    callback(new Error(msg))
                }
                let reg = /^[a-zA-Z0-9_\W]+$/;
                if (reg.test(value)) {
                    if (/^.{8,30}$/.test(value)) {
                        if (this.user.checkPassword !== '') {
                            this.$refs.user.validateField('checkPassword');
                        }
                        callback();
                    } else {
                        callback(new Error('密码长度为8-30位'));
                    }
                } else {
                    callback(new Error('密码为数字，大小写字母或特殊字符'));
                }
            };
            return {
                "user": {
                    "type": 0,
                    "phone": "",
                    "password": "",
                },
                errMsg: {
                    password: "",
                },
                rules: {
                    phone: [
                        {required: true, message: '请输入手机号', trigger: 'blur'},
                        {validator: phoneCheck, trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '请输入密码', trigger: 'blur'},
                        {validator: passWordCheck, trigger: 'blur'}
                    ]
                },
                route: {
                    1: "/index-old.html",
                    22: "/register.html"
                }
            }
        },
        methods: {
            onSubmit: function () {
                let _this = this;
                this.$refs.user.validate((valid) => {
                    if (valid) {
                        $.ajax({
                            type: "post",
                            url: "/api/auth",
                            data: this.user,
                            success: function (data) {
                                console.log(data);
                                if (data.code === 200) {
                                    $.cookie("accessToken", data.token, {expires: 1, path: '/'});
                                    $.cookie("userType", _this.user.type, {expires: 1, path: '/'});
                                    $.cookie("userName", data.userName, {expires: 1, path: '/'});
                                    if (_this.user.type === 0) {
                                        window.location.href = "index.html";
                                    } else if (_this.user.type === 1) {
                                        window.location.href = "doctor.html";
                                    }
                                } else if (data.code === 403) {
                                    _this.errMsg.password = data.message;
                                    _this.$refs.user.validateField('password');
                                } else {
                                    _this.$message.error(data.message);
                                }
                            }
                        })
                    }
                })
            },
            handleSelect(key, keyPath) {
                if (this.route[key]) {
                    window.location.href = this.route[key];
                }
            }
        }
    };
    let Ctor = Vue.extend(Main);
    new Ctor().$mount('#app')
});