<template>
    <div class="nav-box">
        <ul class="nav">
            <li><img src="./../assets/images/logo.png" alt=""></li>
            <li><router-link to="/home">首页</router-link></li>
            <li><router-link to="/centerclass">课程中心</router-link></li>
            <li><router-link to="">SVIP会员</router-link></li>
            <li><router-link to="">讲师招募</router-link></li>
            <li><input type="text" placeholder="请输入搜索内容"><img class="search" src="./../assets/images/search.png" alt=""></li>
            <li v-if="isLogin"><router-link to="/reandlo/login">登录</router-link> / <router-link to="/reandlo/register">注册</router-link></li>
            <li v-if="logined" class="logined">
                <span class="iconfont icon-lingdang"></span>
                <span>我的课程</span>
                <img src="./../assets/images/friend.jpg" alt="" @mouseover="over()" @click="toMy()">
                <div class="my" v-show="isShow" @mouseleave="leave()">
                    <p>
                        <img src="./../assets/images/friend.jpg" alt="">
                        {{user}}
                        <span class="iconfont icon-huangguan"></span>
                    </p>
                    <ul>
                        <li><router-link to="/my/mylesson"><span class="iconfont icon-read-full"> 我的课程</span></router-link></li>
                        <li><router-link to="/my/myrecord"><span class="iconfont icon-wodebiji"> 学习记录</span></router-link></li>
                        <li><router-link to="/my/mycollection"><span class="iconfont icon-star_full"> 我的收藏</span></router-link></li>
                        <li><router-link to="/my"><span class="iconfont icon-shezhi"> 个人设置</span></router-link></li>
                        <p class="out" @click="out()">退出账号</p>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
            isLogin: true,
            logined: false,
            user: '',
            isShow: false
        };
    },
    mounted () {
        if(localStorage.getItem('phone') != null){
            this.isLogin = false;
            this.logined = true;
            this.user = localStorage.getItem('phone');
        }
    },
    methods: {
        out(){
            localStorage.removeItem('phone');
            window.location.reload();
        },
        over(){
            this.isShow = true;
        },
        leave(){
            this.isShow = false;
        },
        toMy(){
            this.$router.push('/my')
        }
    },
    components: {

    },
};
</script>

<style scoped lang="less">
    .nav-box{
        width: 100%;
        background: white;
        box-shadow: 1px 1px 10px 1px rgb(186, 186, 186);
        position: fixed;
        top: 0;
        z-index: 99;
        .nav{
            width: 1200px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            position: relative;
            >li{
                height: 70px;
                line-height: 70px;
                font-size: 17px;
                padding: 0px 15px;
                color: rgb(108, 108, 108);
                a{
                    color: rgb(108, 108, 108);
                    &:hover{
                        color: rgb(174, 28, 28);
                    }
                }
                img{
                    height: 55px;
                    vertical-align: middle;
                }
                input{
                    background: rgb(227, 227, 227);
                    width: 300px;
                    height: 40px;
                    text-indent: 10px;
                    border-radius: 10px;
                    font-size: 15px;
                    &::placeholder{
                        font-size: 15px;
                    }
                }
                &:nth-child(6){
                    flex: 1;
                    img{
                        height: 30px;
                        cursor: pointer;
                        transform: translateX(-35px);
                    }
                }
            }
            .logined{
                .iconfont{
                    font-size: 18px;
                }
                span{
                    cursor: pointer;
                    display: inline-block;
                    margin-right: 20px;
                    font-size: 15px;
                    &:hover{
                        color: rgb(183, 1, 1);
                    }
                }
                img{
                    border-radius: 50%;
                    border: 2px solid rgb(190, 190, 190);
                    height: 35px;
                    cursor: pointer;
                    &:hover{
                        border: 2px solid rgb(183, 1, 1);
                    }
                }
                .my{
                    position: absolute;
                    width: 300px;
                    height: 200px;
                    border-radius: 5px;
                    background: white;
                    right: 0;
                    top: 70px;
                    padding: 20px 20px;
                    box-shadow: 1px 1px 10px 1px rgb(79, 79, 79);
                    p{
                        display: flex;
                        align-items: center;
                        font-size: 20px;
                        color: rgb(88, 88, 88);
                        margin-bottom: 20px;
                        img{
                            height: 60px;
                            margin-right: 10px;
                            cursor: pointer;
                            border: none;
                        }
                        span{
                            cursor: pointer;
                            display: inline-block;
                            margin-left: 10px;
                            color: #ccc;
                            font-size: 20px;
                        }
                    }
                    ul{
                        display: flex;
                        flex-wrap: wrap;
                        position: relative;
                        li{
                            width: 110px;
                            border-radius: 5px;
                            height: 30px;
                            line-height: 30px;
                            background: rgb(241, 241, 241);
                            margin-right: 10px;
                            margin-bottom: 10px;
                            padding: 0px 15px;
                            cursor: pointer;
                            a{
                                color: rgb(108, 108, 108);
                                span{
                                    font-size: 13px;
                                    &:hover{
                                        color: rgb(108, 108, 108);
                                    }
                                }
                            }
                            &:hover{
                                background: rgb(225, 225, 225);
                            }
                        }
                        .out{
                            cursor: pointer;
                            font-size: 14px;
                            position: absolute;
                            color: rgb(145, 145, 145);
                            position: absolute;
                            right: 0;
                            top: 70px;
                            &:hover{
                                color: rgb(89, 89, 89);
                            }
                        }
                    }
                }
            }
        }
    }
</style>
