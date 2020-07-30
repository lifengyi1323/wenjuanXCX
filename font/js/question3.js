$(document).ready(function(){
    new Vue({
        el: '#app',
        data: {
            options : [
                {
                    "index" : 1,
                    "title" : "没有（基本不）"
                },
                {
                    "index" : 2,
                    "title" : "很少（有一点）"
                },
                {
                    "index" : 3,
                    "title" : "有时（有些）"
                },
                {
                    "index" : 4,
                    "title" : "常常（相当）"
                },
                {
                    "index" : 5,
                    "title" : "总是（十分）"
                }
            ],
            questions : [
                {
                    "index" : 1,
                    "question" : "您精神充分吗？",
                    "category" : "A"
                },
                {
                    "index" : 2,
                    "question" : "您容易疲惫吗？",
                    "category" : "A",
                    "reverse" : 5
                },
                {
                    "index" : 3,
                    "question" : "您说话声响有力吗？",
                    "category" : "A",
                    "reverse" : 5
                },                {
                    "index" : 4,
                    "question" : "您感到心花怒放吗？",
                    "category" : "A",
                    "reverse" : 5
                },                
                {
                    "index" : 5,
                    "question" : "您比普通 人耐受不了冰冷（冬天的冰冷，夏天的冷空调、电扇）吗？",
                    "category" : "A",
                    "reverse" : 5
                },                
                {
                    "index" : 6,
                    "question" : "您能顺应外界自然和社会环境的变化吗？",
                    "category" : "A"
                },                
                {
                    "index" : 7,
                    "question" : "您容易失眠吗？",
                    "category" : "A",
                    "reverse" : 5
                },                
                {
                    "index" : 8,
                    "question" : "您容易忘事（健忘）吗？",
                    "category" : "A",
                    "reverse" : 5
                },      
                {
                    "index" : 9,
                    "question" : "你容易疲惫吗",
                    "category" : "B"
                },               
                {
                    "index" : 10,
                    "question" : "您容易气短、呼吸急促，接不上气吗？",
                    "category" : "B"
                },                
                {
                    "index" : 11,
                    "question" : "您容易心慌吗？",
                    "category" : "B"
                },               
                {
                    "index" : 12,
                    "question" : "容易头晕或站起时晕眩吗？",
                    "category" : "B"
                },               
                {
                    "index" : 13,
                    "question" : "您比他人容易患感冒吗？",
                    "category" : "B"
                },               
                {
                    "index" : 14,
                    "question" : "您喜欢安静、懒得说话吗？",
                    "category" : "B"
                },               
                {
                    "index" : 15,
                    "question" : "您说话声响有力吗？",
                    "category" : "B"
                },
                {
                    "index" : 16,
                    "question" : "您活动后就容易出虚汗吗？",
                    "category" : "B"
                },  
                {
                    "index" : 17,
                    "question" : "您手脚发凉吗？",
                    "category" : "C"
                },                
                {
                    "index" : 18,
                    "question" : "您胃脘部、背部或腰膝部怕冷吗？",
                    "category" : "C"
                },               
                {
                    "index" : 19,
                    "question" : "您感到怕冷衣服比他人穿得多吗？",
                    "category" : "C"
                },               
                {
                    "index" : 20,
                    "question" : "您比普通人更不耐受冬天的冰冷，夏天的冷空调、电扇等？",
                    "category" : "C"
                },               
                {
                    "index" : 21,
                    "question" : "您比他人容易患感冒吗？",
                    "category" : "C"
                },               
                {
                    "index" : 22,
                    "question" : "您吃（喝）凉的东西会感到不舒适或许怕吃（喝）凉东西吗？",
                    "category" : "C"
                },               
                {
                    "index" : 23,
                    "question" : "你受凉或吃（喝）凉的东西后，容易腹泻（拉肚子）吗？",
                    "category" : "C"
                },   
                {
                    "index" : 24,
                    "question" : "您感到手脚心发热吗？",
                    "category" : "D"
                },                
                {
                    "index" : 25,
                    "question" : "您觉得身体、脸上发热吗？",
                    "category" : "D"
                },                
                {
                    "index" : 26,
                    "question" : "您皮肤或口唇干吗？",
                    "category" : "D"
                },               
                {
                    "index" : 27,
                    "question" : "您口唇的颜色比普通人红吗？",
                    "category" : "D"
                },               
                {
                    "index" : 28,
                    "question" : "您容易便秘或大便枯燥吗？",
                    "category" : "D"
                },
                {
                    "index" : 29,
                    "question" : "您面部两潮红或偏红吗？",
                    "category" : "D"
                },               
                {
                    "index" : 30,
                    "question" : "您感到眼睛干涩吗？",
                    "category" : "D"
                },               
                {
                    "index" : 31,
                    "question" : "您活动量稍大容易出虚汗吗？",
                    "category" : "D"
                },
                {
                    "index" : 32,
                    "question" : "您感到胸闷或腹部胀满吗？",
                    "category" : "E"
                },                
                {
                    "index" : 33,
                    "question" : "您感身体不轻松或不直爽？",
                    "category" : "E"
                },                
                {
                    "index" : 34,
                    "question" : "您腹部肥满坚实吗？",
                    "category" : "E"
                },               
                {
                    "index" : 35,
                    "question" : "您有额部油脂分泌多景象吗？",
                    "category" : "E"
                },               
                {
                    "index" : 36,
                    "question" : "您上眼睑比他人肿（仍细微隆起的景象）吗？",
                    "category" : "E"
                },
                {
                    "index" : 37,
                    "question" : "您嘴里有黏黏的感觉吗？",
                    "category" : "E"
                },               
                {
                    "index" : 38,
                    "question" : "您平常痰多，特别是咽喉部总感到有痰堵着吗？",
                    "category" : "E"
                },               
                {
                    "index" : 39,
                    "question" : "您舌苔厚腻或有舌苔厚厚的感觉吗？",
                    "category" : "E"
                },
                {
                    "index" : 40,
                    "question" : "您面部或鼻部有清淡感或许油亮发光吗？",
                    "category" : "F"
                },                               
                {
                    "index" : 41,
                    "question" : "你容易生痤疮或疮疖吗？",
                    "category" : "F"
                },               
                {
                    "index" : 42,
                    "question" : "您感到口苦或嘴里有异味吗？",
                    "category" : "F"
                },               
                {
                    "index" : 43,
                    "question" : "您大便黏滞不爽、有解不尽的觉得吗？",
                    "category" : "F"
                },
                {
                    "index" : 44,
                    "question" : "您小便时尿道有发热感、尿色浓（深）吗？",
                    "category" : "F"
                },                             
                {
                    "index" : 45,
                    "question" : "",
                    "question-male" : "您的阴囊部位湿润吗？",
                    "question-female" : "您带下色黄（白带颜色发黄）吗？",
                    "category" : "F"
                },
                {
                    "index" : 46,
                    "question" : "您的皮肤在不知不觉中会呈现青紫瘀斑（皮下出血）吗？",
                    "category" : "G"
                },                
                {
                    "index" : 47,
                    "question" : "您两颧部有纤细红丝吗？",
                    "category" : "G"
                },                
                {
                    "index" : 48,
                    "question" : "您身体上有哪里疼痛吗？",
                    "category" : "G"
                },               
                {
                    "index" : 49,
                    "question" : "您面色晦黯或容易呈现褐斑吗？",
                    "category" : "G"
                },               
                {
                    "index" : 50,
                    "question" : "您容易有黑眼圈吗？",
                    "category" : "G"
                },
                {
                    "index" : 51,
                    "question" : "您容易忘事（健忘）吗？",
                    "category" : "G"
                },               
                {
                    "index" : 52,
                    "question" : "您口唇颜色偏黯吗？",
                    "category" : "G"
                },               
                {
                    "index" : 53,
                    "question" : "您感到闷闷不乐、情绪低落吗？",
                    "category" : "G"
                },
                {
                    "index" : 54,
                    "question" : "您容易肉体紧张、焦虑不安吗？",
                    "category" : "H"
                },                
                {
                    "index" : 55,
                    "question" : "您多愁善感、感情软弱吗？",
                    "category" : "H"
                },               
                {
                    "index" : 56,
                    "question" : "您容易感到惧怕或遭到惊吓吗？",
                    "category" : "H"
                },               
                {
                    "index" : 57,
                    "question" : "您胁肋部或乳房腹痛吗？",
                    "category" : "H"
                },
                {
                    "index" : 58,
                    "question" : "您事出有因叹息吗？",
                    "category" : "H"
                },               
                {
                    "index" : 59,
                    "question" : "您咽喉部有异物感，且吐之不出、咽之不下吗？",
                    "category" : "H"
                },               
                {
                    "index" : 60,
                    "question" : "您没有感冒时也会打喷嚏吗？",
                    "category" : "I"
                },
                {
                    "index" : 61,
                    "question" : "您没有感冒时也会鼻塞、流鼻涕吗？",
                    "category" : "I"
                },                
                {
                    "index" : 62,
                    "question" : "您有因时节变化、温度变化或异味等缘由而咳喘的景象吗？",
                    "category" : "I"
                },               
                {
                    "index" : 63,
                    "question" : "您容易过敏（对药物、食物、气息、花粉或在时节交替、气候变化时）吗？",
                    "category" : "I"
                },               
                {
                    "index" : 64,
                    "question" : "您的皮肤容易起荨麻疹（风团、风疹块、风疙瘩）吗？",
                    "category" : "I"
                },
                {
                    "index" : 65,
                    "question" : "您的因过敏呈现过紫癜（紫白色瘀点、瘀斑）吗？",
                    "category" : "I"
                },               
                {
                    "index" : 66,
                    "question" : "您的皮肤一抓就红，并呈现抓痕吗？",
                    "category" : "I"
                }         
            ],
            submitting : false
        },
        created: function() {
            let _this = this;
            judgeLoginAndJump(() => {
                let errorOption = function() {
                    _this.questions = undefined;
                    _this.options = undefined;
                    _this.$message.error("网络错误，请稍后重试");
                };
                myAjax({
                    type: "get",
                    url: "/api/v1/question/sex",
                    success: function (data) {
                        if (data === 'm') {
                            _this.questions[44].question = _this.questions[44]['question-male'];
                        } else if (data === 'f') {
                            _this.questions[44].question = _this.questions[44]['question-female'];
                        } else {
                            errorOption();
                        }
                    },
                    error: function () {
                        errorOption()
                    }
                });
            });
        },
        methods: {
            submit: function () {
                console.log(JSON.stringify(this.questions));
                let _this = this;
                for (let i = 0; i < _this.questions.length; i++) {
                    let score = _this.questions[i].score;
                    if (score === undefined || Number.isNaN(score) || score < 1 || score > 5) {
                        document.getElementById('ques' + _this.questions[i].index).scrollIntoView();
                        return;
                    }
                }
                _this.submitting = true;
                myAjax({
                    type: 'post',
                    url : '/api/v1/question/3',
                    data: {
                        quesTitle: "中医体质分类与判定自测表",
                        result: JSON.stringify(this.questions),
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
                })

            }
        }
    })
});