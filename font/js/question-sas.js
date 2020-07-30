$(document).ready(function(){
    new Vue({
        el: '#app',
        data: {
            "options" : quesOption4,
            "questions" : [
                {
                    "index" : 1,
                    "question" : "我觉得比平时容易紧张和着急（焦虑）"
                }, 
                {
                    "index" : 2,
                    "question" : "我无缘无故地感到害怕"
                },
                {
                    "index" : 3,
                    "question" : "我容易心里烦乱或觉得惊恐"
                },
                {
                    "index" : 4,
                    "question" : "我觉得我可能将要发疯"
                },
                {
                    "index" : 5,
                    "question" : "我觉得一切都很好，也不会发生什么不幸",
                    "reverse" : 4
                },
                {
                    "index" : 6,
                    "question" : "我手脚发抖打颤（手足颤抖）"
                },
                {
                    "index" : 7,
                    "question" : "我因为头痛、颈痛和悲痛而苦恼（躯体疼痛）"
                },
                {
                    "index" : 8,
                    "question" : "我容易衰弱和疲乏（乏力）"
                },
                {
                    "index" : 9,
                    "question" : "我觉得心平气和，并且容易安静坐着",
                    "reverse" : 4
                },
                {
                    "index" : 10,
                    "question" : "我觉得心跳的快（心悸）"
                },
                {
                    "index" : 11,
                    "question" : "我因为一阵阵头晕而苦恼"
                },
                {
                    "index" : 12,
                    "question" : "我有晕倒发作，或觉得要晕倒似的"
                },
                {
                    "index" : 13,
                    "question" : "我呼气吸气都感到很容易",
                    "reverse" : 4
                },
                {
                    "index" : 14,
                    "question" : "我手脚麻木和刺痛"
                },
                {
                    "index" : 15,
                    "question" : "我因胃痛和消化不良而苦恼"
                },
                {
                    "index" : 16,
                    "question" : "我常常要小便（尿意频数）"
                },
                {
                    "index" : 17,
                    "question" : "我的手常常是干燥温暖的",
                    "reverse" : 4
                },
                {
                    "index" : 18,
                    "question" : "我脸红发热"
                },
                {
                    "index" : 19,
                    "question" : "我容易入睡并且一夜睡得很好",
                    "reverse" : 4
                },
                {
                    "index" : 20,
                    "question" : "我做噩梦"
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
                    url : '/api/v1/question/4',
                    data: {
                        quesTitle: "焦虑自评量表",
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