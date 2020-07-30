$(document).ready(function(){
    new Vue({
        el: '#app',
        data: {
            imgs: [
                "/img/2.jpeg",
                "/img/3.jpg",
                "/img/4.jpg",
            ],
            isLogin: false,
            categoryStrMap: {
                'A' : '平和质',
                'B' : '气虚质',
                'C' : '阳虚质',
                'D' : '阴虚质',
                'E' : '痰湿质',
                'F' : '湿热质',
                'G' : '血瘀质',
                'H' : '气郁质',
                'I' : '特禀质',
            }
        },
        created: function() {
            $.cookie("fromUrl", "");
            let token = $.cookie("accessToken");
            if (token !== undefined && token !== '') {
                this.isLogin = true;
                this.userName = $.cookie("userName");
            }
        },
        methods: {
            needDevelop() {
                this.$message({
                    message: "功能开发中",
                    type: "warning"
                });
            },
            handleSelect(key, keyPath) {
                if (key === 'logout') {
                    logout();
                    this.isLogin = false;
                }
                let action = key.split('/');
                if (action[0] === "jump") {
                    jump(action[1]);
                }
                if (action[0] === "scroll") {
                    document.getElementById(action[1]).scrollIntoView();
                }
            },
            watchResult(quesNum) {
                let _this = this;
                let showResult = function (quesNum, result) {
                    if (quesNum === undefined || result === undefined || result === '') {
                        _this.$alert('', '获取测评结果失败，请稍后重试', {
                            confirmButtonText: '确定'
                        });
                        return;
                    }
                    let text = '';
                    if (quesNum === 3) {
                        let originScore = {};
                        result.forEach(ques => {
                            if (originScore.hasOwnProperty(ques.category)) {
                                originScore[ques.category].score += ques.score;
                                originScore[ques.category].count++;
                            } else {
                                originScore[ques.category] = {count: 1, score: ques.score};
                            }
                        });
                        // 偏颇体质
                        let weakConstitution = [];
                        // 倾向体质
                        let preferConstitution = [];
                        let normal = false;
                        for (let key in originScore) {
                            let convertScore = (originScore[key].score - originScore[key].count) / (originScore[key].count * 4) * 100;
                            if (key === 'A') {
                                if (convertScore >= 60) {
                                    normal = true;
                                } 
                            } else {
                                if (convertScore >= 40) {
                                    weakConstitution.push(_this.categoryStrMap[key]);
                                } else if (convertScore >= 30) {
                                    preferConstitution.push(_this.categoryStrMap[key]);
                                }
                            }
                        }
                        if (weakConstitution.length > 0) {
                            text += '体质出现偏颇，以' + join(weakConstitution, '、') + '为主';
                            if (preferConstitution.length > 0) {
                                text += "，同时倾向" + join(preferConstitution, '、');
                            }
                            text += '。';
                        } else {
                            if (normal) {
                                if (preferConstitution.length > 0) {
                                    text += '体质基本为平和质，倾向' + join(preferConstitution, '、') + '。';
                                } else {
                                    text += '体质为平和质。';
                                }
                            }
                        }
                    } else if (quesNum === 4) {
                        let score = 0;
                        result.forEach(ques => {
                            score += ques.score;
                        });
                        text += "精神焦虑自评得分" + score + "分";
                    } else if (quesNum === 5) {
                        let score = 0;
                        result.forEach(ques => {
                            score += ques.score;
                        });
                        text += "精神抑郁自评得分" + score + "分";
                    } else if (quesNum === 6) {
                        let score = 0;
                        result.forEach(ques => {
                            score += ques.score;
                        });
                        text += "精神症状自评得分" + score + "分";
                    }
                    _this.$alert(text, '问卷自评结果', {
                        confirmButtonText: '确定'
                    });
                };
                myAjax({
                    type: 'get',
                    url : '/api/v1/question/' + quesNum + '/answer',
                    success: function (data) {
                        _this.submitting = false;
                        if (data.code === 200) {
                            showResult(quesNum, JSON.parse(data.answer))
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
                        _this.submitting = false;
                        _this.$alert('', '服务器内部错误，请稍后重试', {
                            confirmButtonText: '确定'
                        });
                    }
                })
            }
        }
    })
});