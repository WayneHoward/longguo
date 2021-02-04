<template>
    <div class="my">
        <Header></Header>
        <div class="box">
            <div class="nav">
                <ul class="lesson">
                    <p class="title"><span class="iconfont icon-huodong"> 课程中心</span></p>
                    <li><router-link to="/my/hongbao">我的红包</router-link></li>
                </ul>
                <ul class="lesson">
                    <p class="title"><span class="iconfont icon-read-full"> 课程中心</span></p>
                    <li><router-link to="/my/mylesson">我的课程</router-link></li>
                    <li><router-link to="/my/mycollection">我的收藏</router-link></li>
                    <li><router-link to="/my/myrecord">学习记录</router-link></li>
                </ul>
                <ul class="lesson">
                    <p class="title"><span class="iconfont icon-yonghu"> 个人资料</span></p>
                    <li><router-link to="/my/info">个人信息</router-link></li>
                    <li><router-link to="/my/changepass">修改密码</router-link></li>
                    <li><router-link to="/my/myorder">我的订单</router-link></li>
                    <li><router-link to="/my/mycare">我的关注</router-link></li>
                    <li><router-link to="/my/mymessage">我的通知</router-link></li>
                </ul>
            </div>
            <div class="content">
                <router-view></router-view>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from './../components/header'
import Footer from './../components/footer'
export default {
    props: {

    },
    data() {
        return {

        };
    },
    methods: {

    },
    components: {
        Header,
        Footer
    },
};
</script>

<style scoped lang="less">
    .my{
        padding-top: 100px;
        /deep/.nav-box{
            li{
                input{
                    display: none;
                }
                .search{
                    display: none;
                }
            }
            .logined{
                display: none;
            }
        }
        .box{
            width: 1200px;
            margin: 0 auto;
            display: flex;
            margin-bottom: 370px;
            .nav{
                margin-right: 20px;
                width: 170px;
                .lesson{
                    border-radius: 10px;
                    background: white;
                    color: rgb(74, 74, 74);
                    font-size: 15px;
                    margin-bottom: 20px;
                    .title{
                        text-align: center;
                        font-weight: 600;
                        border-bottom: 1px solid #ccc;
                        height: 60px;
                        line-height: 60px;
                    }
                    li{
                        text-align: center;
                        padding: 15px 0px;
                        a{
                            color: rgb(74, 74, 74);
                            &:hover{
                                color: rgb(183, 61, 61);
                            }
                        }
                    }
                    .light{
                        color: rgb(196, 0, 0);
                    }
                }
            }
            .content{
                background: white;
                width: 100%;
                border-radius: 10px;
            }
        }
    }
</style>
