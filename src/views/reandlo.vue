<template>
    <div class="reandlo">
        <div class="header">
            <img src="./../assets/images/logo.png" alt="">
            <router-link to="/">返回首页</router-link>
        </div>
        <div class="set">
            <div class="box">
                <div class="ipt" :class="{'isLogin': isLogin, 'isRegister': isRegister}">
                    <div class="top">
                        <span @click="toLogin()">
                            <router-link to="/reandlo/login">登录</router-link>
                        </span>
                        <span @click="toRegister()">
                            <router-link to="/reandlo/register">注册</router-link>
                        </span>
                    </div>
                    <div class="form">
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
        <div class="b1">
            Copyright © 2015-2020 广州市领课网络科技有限公司 版权所有
        </div>
        <ul class="b2">
            <li>领课教育云 提供技术支持</li>
            <li>|</li>
            <li><a href="">粤ICP备16009964号</a></li>
            <li>|</li>
            <li><img src="./../assets/images/police.png" alt=""><a href="">粤公网安备 44010602005928号</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        
    },
    data() {
        return {
            isLogin: false,
            isRegister: false,
        };
    },
    methods: {
        toLogin(){
            this.isLogin = true;
            this.isRegister = false
        },
        toRegister(){
            this.isLogin = false;
            this.isRegister = true
        },
    },
    components: {

    },
};
</script>

<style scoped lang="less">
    .reandlo{
        width: 100%;
        .header{
            width: 1200px;
            height: 110px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
            img{
                height: 65px;
            }
            a{
                margin-top: 30px;
                color: rgb(51, 133, 205);
            }
        }
        .set{
            width: 100%;
            height: 600px;
            background-image: url('./../assets/images/login.jpg');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            .box{
                width: 1200px;
                margin: 0 auto;
                position: relative;
                .ipt{
                    width: 380px;
                    height: 315px;
                    border-radius: 10px;
                    background: white;
                    position: absolute;
                    right: 0px;
                    top: 50px;
                    .top{
                        height: 59px;
                        line-height: 59px;
                        border-bottom: 1px solid #ccc;
                        display: flex;
                        justify-content: space-around;
                        a{
                            color: rgb(79, 79, 79);
                            cursor: pointer;
                        }
                        .light{
                            color: rgb(181, 5, 5);
                            border-bottom: 2px solid;
                            padding-bottom: 17px;
                        }
                    }
                    .form{
                        padding: 19px 29px;
                    }
                }
                .isLogin{
                    animation: login linear 0.6s;
                }
                .isRegister{
                    animation: register linear 0.6s;
                }
                @keyframes login
                {
                    0% 
                    {
                        transform: rotateY(180deg);
                    }
                    50%{
                        transform: rotateY(90deg);
                    }
                    100% 
                    {
                        transform: rotateY(0deg);
                    }
                }
                @keyframes register
                {
                    0% 
                    {
                        transform: rotateY(-180deg);
                    }
                    50%{
                        transform: rotateY(-90deg);
                    }
                    100% 
                    {
                        transform: rotateY(0deg);
                    }
                }
            }
        }
        .b1{
            background: rgb(102, 102, 102);
            width: 100%;
            height: 29px;
            line-height: 29px;
            font-size: 12px;
            text-align: center;
            color: rgb(196, 196, 196);
        }
        .b2{
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 12px;
            height: 24px;
            line-height: 24px;
            background: rgb(54, 54, 54);
            color: rgb(196, 196, 196);
            li{
                margin-right: 10px;
                img{
                    height: 12px;
                }
                a{
                    color: rgb(196, 196, 196);
                    &:hover{
                        color: red;
                        text-decoration: underline;
                    }
                }
            }
        }
    }
</style>
