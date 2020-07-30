$(document).ready(function(){
    new Vue({
        el: '#app',
        data: {
            "options" : quesOption4,
            "questions" : [
                {
                    "index" : 1,
                    "question" : "我感到情绪沮丧、郁闷"
                },
                {
                    "index" : 2,
                    "question" : "我感到早晨心情最好",
                    "reverse" : 4
                }, 
                {
                    "index" : 3,
                    "question" : "我要哭或者想哭"
                },
                {
                    "index" : 4,
                    "question" : "我夜间睡眠不好"
                },
                {
                    "index" : 5,
                    "question" : "我吃饭像平时一样多",
                    "reverse" : 4
                },
                {
                    "index" : 6,
                    "question" : "我与异性接触时和以往一样感到愉快",
                    "reverse" : 4
                },
                {
                    "index" : 7,
                    "question" : "我感到体重减轻"
                },
                {
                    "index" : 8,
                    "question" : "我为便秘烦恼"
                },
                {
                    "index" : 9,
                    "question" : "我的心跳比平时快"
                },
                {
                    "index" : 10,
                    "question" : "我无故感到疲劳"
                },
                {
                    "index" : 11,
                    "question" : "我的头像往常一样清楚",
                    "reverse" : 4
                },
                {
                    "index" : 12,
                    "question" : "我做事情像平时一样不感到困难",
                    "reverse" : 4
                },
                {
                    "index" : 13,
                    "question" : "我坐卧不安，难以保持平静"
                },  
                {
                    "index" : 14,
                    "question" : "我对未来感到有希望",
                    "reverse" : 4
                },
                {
                    "index" : 15,
                    "question" : "我比平时更容易激怒"
                },
                {
                    "index" : 16,
                    "question" : "我觉得决定什么事很容易",
                    "reverse" : 4
                },
                {
                    "index" : 17,
                    "question" : "我感到自己是有用的和不可缺少的人",
                    "reverse" : 4
                },
                {
                    "index" : 18,
                    "question" : "我的生气很有意义",
                    "reverse" : 4
                },
                {
                    "index" : 19,
                    "question" : "假如我死了别人会过的更好"
                },
                {
                    "index" : 20,
                    "question" : "我仍旧喜爱自己平时喜爱的东西",
                    "reverse" : 4
                }
            ],
            submitting : false
        },
        created: function() {
            judgeLoginAndJump();
        },
        methods: {
            submit: function () {
                //console.log(this.questions);
                let _this = this;
                for (let i = 0; i < _this.questions.length; i++) {
                    let score = _this.questions[i].score;
                    if (score === undefined || Number.isNaN(score) || score < 1 || score > 4) {
                        document.getElementById('ques' + _this.questions[i].index).scrollIntoView();
                        return;
                    }
                }
                _this.submitting = true;
                let postData = [];
                this.questions.forEach(question => {
                    postData.push({'index': question['index'], 'score': question['score']});
                });
                myAjax({
                    type: 'post',
                    url : '/api/v1/question/5',
                    data: {
                        quesTitle: "抑郁自评量表",
                        result: JSON.stringify(postData),
                    },
                    success: function (data) {
                        _this.submitting = false;
                        if (data.code === 200) {
                            _this.$alert('', '提交成功', {
                                confirmButtonText: '确定',
                                callback: action => {
                                    jumpIndex();
                                }
                            });
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
                });
            }
        }
    })
});