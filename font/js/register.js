$(document).ready(function(){
    let Main = {
        data() {
            var phoneCheck = (rule, value, callback) => {
                if (this.errMsg.phone) {
                    var msg = this.errMsg.phone;
                    this.errMsg.phone = '';
                    callback(new Error(msg))
                }
                var reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
                if (reg.test(value)) {
                    callback();
                } else {
                    callback(new Error('请输入正确的手机号'));
                }
            };
            var passWordCheck = (rule, value, callback) => {
                var reg = /^[a-zA-Z0-9_\W]+$/;
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
            var rePasswordCheck = (rule, value, callback) => {
                if (value !== this.user.password) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                user: {
                    "type": 0,
                    "name": "",
                    "sex": "",
                    "age": "",
                    "phone": "",
                    "password": "",
                    "checkPassword": "",
                },
                errMsg: {
                    phone: "",
                },
                rules: {
                    name: [
                        {required: true, message: '请输入姓名', trigger: 'blur'}
                    ],
                    sex: [
                        {required: true, message: '请选择性别', trigger: 'blur'}
                    ],
                    age: [
                        {required: true, message: '请输入年龄', trigger: 'blur'},
                        {type: 'number', message: '年龄必须为数字值'},
                    ],
                    phone: [
                        {required: true, message: '请输入手机号', trigger: 'blur'},
                        {validator: phoneCheck, trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '请输入密码', trigger: 'blur'},
                        {validator: passWordCheck, trigger: 'blur'}
                    ],
                    checkPassword: [
                        {required: true, message: '请再次输入密码', trigger: 'blur'},
                        {validator: rePasswordCheck, trigger: 'blur'}
                    ]
                },
                route: {
                    1: "/index-old.html",
                    21: "/login.html",
                }
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                if (this.route[key]) {
                    window.location.href = this.route[key];
                }
            },
            onSubmit() {
                let _this = this;
                this.$refs.user.validate((valid) => {
                    if (valid) {
                        $.ajax({
                            type: "post",
                            url: "/api/register",
                            data: this.user,
                            success: function (data) {
                                console.log(data);
                                if (data.code === 200) {
                                    $.cookie("accessToken", data.token, {expires: 1});
                                    $.cookie("userType", _this.user.type, {expires: 1});
                                    $.cookie("userName", data.userName, {expires: 1});
                                    if (_this.user.type === 0) {
                                        jump("/index.html");
                                    } else if (_this.user.type === 1) {
                                        jump("/doctor.html");
                                    }
                                } else if (data.code === 401) {
                                    _this.errMsg.phone = data.message;
                                    _this.$refs.user.validateField('phone');
                                } else {
                                    _this.$message.error(data.message);
                                }
                            }
                        })
                    }
                });
            },
        },
    };
    var Ctor = Vue.extend(Main)
    new Ctor().$mount('#app')

});