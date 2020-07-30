$(document).ready(function(){
    new Vue({
        el: '#app',
        data: {
            "options" : [
                {
                    "index" : 1,
                    "title" : "没有"
                },
                {
                    "index" : 2,
                    "title" : "很轻"
                },
                {
                    "index" : 3,
                    "title" : "中等"
                },
                {
                    "index" : 4,
                    "title" : "偏重"
                },
                {
                    "index" : 5,
                    "title" : "严重"
                }
            ],
            "questions" : [
                {
                    "index" : 1,
                    "question" : "头痛"
                },
                {
                    "index" : 2,
                    "question" : "神经过敏，心中不踏实"
                },
                {
                    "index" : 3,
                    "question" : "头脑中有不必要的想法或字句盘旋"
                },
                {
                    "index" : 4,
                    "question" : "头晕或昏倒"
                },
                {
                    "index" : 5,
                    "question" : "对异性的兴趣减退"
                },
                {
                    "index" : 6,
                    "question" : "对旁人责备求全"
                },
                {
                    "index" : 7,
                    "question" : "感到别人能控制你的思想"
                },
                {
                    "index" : 8,
                    "question" : "责怪别人制造麻烦"
                },
                {
                    "index" : 9,
                    "question" : "忘记性大"
                },
                {
                    "index" : 10,
                    "question" : "担心自己的衣饰整齐及仪态的端庄"
                },
                {
                    "index" : 11,
                    "question" : "容易烦恼和激动"
                },
                {
                    "index" : 12,
                    "question" : "胸痛"
                },
                {
                    "index" : 13,
                    "question" : "害怕空旷的场所或街道"
                },
                {
                    "index" : 14,
                    "question" : "感到自己精力下降，活动减慢"
                },
                {
                    "index" : 15,
                    "question" : "想结束自己的生命"
                },
                {
                    "index" : 16,
                    "question" : "听到旁人听不到声音"
                },
                {
                    "index" : 17,
                    "question" : "发抖"
                },
                {
                    "index" : 18,
                    "question" : "感到大多数人都不可信任"
                },
                {
                    "index" : 19,
                    "question" : "胃口不好"
                },
                {
                    "index" : 20,
                    "question" : "容易哭泣"
                },
                {
                    "index" : 21,
                    "question" : "同异性相处时感到害羞不自在"
                },
                {
                    "index" : 22,
                    "question" : "感到受骗，中了圈套或有人想抓你"
                },
                {
                    "index" : 23,
                    "question" : "无缘无故的感觉到害怕"
                },
                {
                    "index" : 24,
                    "question" : "自己不能控制的大发脾气"
                },
                {
                    "index" : 25,
                    "question" : "怕单独出门"
                },
                {
                    "index" : 26,
                    "question" : "经常责怪自己"
                },
                {
                    "index" : 27,
                    "question" : "腰痛"
                },
                {
                    "index" : 28,
                    "question" : "感到难以完成任务"
                },
                {
                    "index" : 29,
                    "question" : "感到孤独"
                },
                {
                    "index" : 30,
                    "question" : "感到苦闷"
                },
                {
                    "index" : 31,
                    "question" : "过分担忧"
                },
                {
                    "index" : 32,
                    "question" : "对事物不感兴趣"
                },
                {
                    "index" : 33,
                    "question" : "感到害怕"
                },
                {
                    "index" : 34,
                    "question" : "你的感情容易受到伤害"
                },
                {
                    "index" : 35,
                    "question" : "旁人能知道你的私下想法"
                },
                {
                    "index" : 36,
                    "question" : "感到别人不理解你不同情你"
                },
                {
                    "index" : 37,
                    "question" : "感到人们对你不友好，不喜欢你"
                },
                {
                    "index" : 38,
                    "question" : "做事情必须做得很慢以保证做正确"
                },
                {
                    "index" : 39,
                    "question" : "心跳得厉害"
                },
                {
                    "index" : 40,
                    "question" : "恶心或胃不舒服"
                },
                {
                    "index" : 41,
                    "question" : "感到比不上别人"
                },
                {
                    "index" : 42,
                    "question" : "肌肉酸痛"
                },
                {
                    "index" : 43,
                    "question" : "感到有人在监视你谈论你"
                },
                {
                    "index" : 44,
                    "question" : "难以入睡"
                },
                {
                    "index" : 45,
                    "question" : "做事必须反复检查"
                },
                {
                    "index" : 46,
                    "question" : "难以做出决定"
                },
                {
                    "index" : 47,
                    "question" : "怕乘电车、公共汽车、地铁或火车"
                },
                {
                    "index" : 48,
                    "question" : "呼吸困难"
                },
                {
                    "index" : 49,
                    "question" : "一阵阵发冷或发热"
                },
                {
                    "index" : 50,
                    "question" : "因为感到害怕而避开某些东西、场合或活动"
                },
                {
                    "index" : 51,
                    "question" : "脑子变空了"
                },
                {
                    "index" : 52,
                    "question" : "身体发麻或刺痛"
                },
                {
                    "index" : 53,
                    "question" : "喉咙有梗塞感"
                },
                {
                    "index" : 54,
                    "question" : "感到前途没有希望"
                },
                {
                    "index" : 55,
                    "question" : "不能集中注意力"
                },
                {
                    "index" : 56,
                    "question" : "感到身体的某一部分软弱无力"
                },
                {
                    "index" : 57,
                    "question" : "感到紧张或容易紧张"
                },
                {
                    "index" : 58,
                    "question" : "感到手或脚发重"
                },
                {
                    "index" : 59,
                    "question" : "感到死亡的事"
                },
                {
                    "index" : 60,
                    "question" : "吃得太多"
                },
                {
                    "index" : 61,
                    "question" : "当别人看着你或谈论你时感到不自在"
                },
                {
                    "index" : 62,
                    "question" : "有一些属于你自己的看法"
                },
                {
                    "index" : 63,
                    "question" : "有想打人或伤害他人的冲动"
                },
                {
                    "index" : 64,
                    "question" : "醒得太早"
                },
                {
                    "index" : 65,
                    "question" : "必须反复洗手、点数目或触摸某些东西"
                },
                {
                    "index" : 66,
                    "question" : "睡得不稳不深"
                },
                {
                    "index" : 67,
                    "question" : "有想摔坏或破坏东西的冲动"
                },
                {
                    "index" : 68,
                    "question" : "有一些别人没有的想法或念头"
                },
                {
                    "index" : 69,
                    "question" : "感到对别人神经过敏"
                },
                {
                    "index" : 70,
                    "question" : "在商场或电影院等人多的地方感到不自在"
                },
                {
                    "index" : 71,
                    "question" : "感到任何事情都很困难"
                },
                {
                    "index" : 72,
                    "question" : "一阵阵恐惧或惊恐"
                },
                {
                    "index" : 73,
                    "question" : "感到在公共场合吃东西很不舒服"
                },
                {
                    "index" : 74,
                    "question" : "经常与人争论"
                },
                {
                    "index" : 75,
                    "question" : "单独一个人时神经很紧张"
                },
                {
                    "index" : 76,
                    "question" : "别人对你的成绩没有做出恰当的评论"
                },
                {
                    "index" : 77,
                    "question" : "即使和别人在一起也感到孤独"
                },
                {
                    "index" : 78,
                    "question" : "感到坐立不安心神不定"
                },
                {
                    "index" : 79,
                    "question" : "感到自己没有什么价值"
                },
                {
                    "index" : 80,
                    "question" : "感到熟悉的东西变陌生或不象真的"
                },
                {
                    "index" : 81,
                    "question" : "大叫或摔东西"
                },
                {
                    "index" : 82,
                    "question" : "害怕会在公共场合昏倒"
                },
                {
                    "index" : 83,
                    "question" : "感到别人想占你便宜"
                },
                {
                    "index" : 84,
                    "question" : "为一些有关“性”的想法而苦恼"
                },
                {
                    "index" : 85,
                    "question" : "你认为应该因为自己的过错而受惩罚"
                },
                {
                    "index" : 86,
                    "question" : "感到要赶快把事情做完"
                },
                {
                    "index" : 87,
                    "question" : "感到自己的身体有严重问题"
                },
                {
                    "index" : 88,
                    "question" : "从未感到和其他人亲近"
                },
                {
                    "index" : 89,
                    "question" : "感到自己有罪"
                },
                {
                    "index" : 90,
                    "question" : "感到自己的脑子有毛病"
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
                    if (score === undefined || Number.isNaN(score) || score < 1 || score > 5) {
                        document.getElementById('ques' + _this.questions[i].index).scrollIntoView();
                        return;
                    }
                }
                _this.submitting = true;
                myAjax({
                    type: 'post',
                    url : '/api/v1/question/6',
                    data: {
                        quesTitle: "症状自评量表(SCL-90)",
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
                });
            }
        }
    })
});