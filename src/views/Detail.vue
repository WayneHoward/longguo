<template>
    <div class="detail">
        <Header></Header>
        <div class="showDetail">
            <div class="box" v-if="list[detailId-1]">
                <p class="bread"><router-link to="/">首页</router-link>&gt;<router-link to="/centerclass">录播中心</router-link>&gt;<span>{{list[detailId-1].name}}</span></p>
                <div class="goods">
                    <div class="left">
                        <img :src="list[detailId-1].imgurl" alt="">
                    </div>
                    <div class="right">
                        <h2>{{list[detailId-1].name}}</h2>
                        <p class="price"><span>价格：</span>{{list[detailId-1].price}}</p>
                        <p class="price"><span>SVIP：</span>{{list[detailId-1].sprice}}<router-link to="/svip">立即开通 &gt;</router-link></p>
                        <p class="teacher">
                            友凡
                        </p>
                        <p class="buy">
                            <button>立即购买</button>
                            <a><span class="iconfont icon-star_full"></span> 收藏</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="detailClass">
            <div class="left">
                <ul class="nav" v-if="list[detailId-1]">
                    <li><router-link :to="{path: '/detail/' + list[detailId-1].id + '/detailClass1'}">课程介绍</router-link></li>
                    <li><router-link :to="{path: '/detail/' + list[detailId-1].id + '/detailClass2'}">录播课程</router-link></li>
                </ul>
                <div class="show">
                    <router-view></router-view>
                </div>
            </div>
            <div class="right">
                <div class="title">
                    讲师简介
                </div>
                <div class="content">
                    <img src="./../assets/images/teacherhead.jpg" alt="">
                    <div>
                        <p>
                            <span>友凡</span>
                            <span class="iconfont icon-star_full">关注</span>
                        </p>
                        <p>多年移动互联网产品设计和开发经验，带领团队完成多个知名互联网产品，历任多家知名公司Java和大数据架构师，负责过多个大型Java和大数据系统的架构和开发。精通Java、Go、Python、Hadoop、Storm、Spark、Docker、NoSQL等语言和大数据技术，IT一线行业8年实战经验，目前已经出品《秒杀系统》《分布式任务调度》《数据统计分析系统》等教程，教程案例全部均来自真实工业界开发场景。对分布式、高并发、高可用、微服务、缓存、虚拟化、海量数据处理有丰富的实战经验和解决方案。</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import {homeCourse} from './../http/home_http'
import Header from './../components/header.vue'
import Footer from './../components/footer.vue'
export default {
    props: {

    },
    data() {
        return {
            list: [],
            detailId: '',
        };
    },
    created () {
        // 首页课程
        homeCourse().then(res => {
            this.list = res.data.course
        });
        this.detailId = this.$route.params.id;
        // console.log(this.detailId);
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
    .detail{
        padding-top: 70px;
        .showDetail{
            width: 100%;
            background: rgb(54, 54, 54);
            margin-bottom: 30px;
            .box{
                width: 1200px;
                margin: 0 auto;
                height: 410px;
                .bread{
                    line-height: 55px;
                    height: 55px;
                    font-size: 13px;
                    color: white;
                    a{
                        display: inline-block;
                        margin: 0px 10px;
                        color: white;
                    }
                    span{
                        display: inline-block;
                        margin-left: 10px;
                    }
                }
                .goods{
                    display: flex;
                    .left{
                        margin-right: 30px;
                        img{
                            width: 600px;
                            height: 330px;
                        }
                    }
                    .right{
                        width: 100%;
                        position: relative;
                        h2{
                            font-weight: normal;
                            color: white;
                            font-size: 18px;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                        }
                        .price{
                            color: rgb(178, 34, 34);
                            font-size: 30px;
                            font-weight: 600;
                            margin-top: 10px;
                            span{
                                display: inline-block;
                                margin-right: 10px;
                                font-weight: normal;
                                font-size: 15px;
                                color: rgb(125, 125, 125);
                            }
                            a{
                                display: inline-block;
                                margin-left: 5px;
                                font-weight: normal;
                                font-size: 17px;
                                color: rgb(67, 132, 196);
                            }
                            &:nth-child(3){
                                font-size: 20px;
                                font-weight: normal;
                            }
                        }
                        .teacher{
                            margin-top: 10px;
                            width: 100%;
                            border-top: 1px solid rgb(125, 125, 125);
                            padding-top: 30px;
                            box-sizing: border-box;
                            font-size: 15px;
                            color: rgb(125, 125, 125);
                        }
                        .buy{
                            margin-top: 115px;
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            font-size: 16px;
                            button{
                                width: 135px;
                                height: 35px;
                                border-radius: 10px;
                                background: rgb(200, 28, 28);
                                color: white;
                                cursor: pointer;
                            }
                            a{
                                color: rgb(125, 125, 125);
                                cursor: pointer;
                                &:hover{
                                    color: rgb(200, 28, 28);
                                }
                            }
                        }
                    }
                }
            }
        }
        .detailClass{
            width: 1200px;
            margin: 0 auto;
            display: flex;
            .left{
                margin-right: 20px;
                .nav{
                    display: flex;
                    width: 920px;
                    height: 65px;
                    line-height: 65px;
                    background: white;
                    border-radius: 10px;
                    margin-bottom: 25px;
                    li{
                        margin-left: 30px;
                        margin-right: 60px;
                        a{
                            color: rgb(74, 74, 74);                        }
                        .light{
                            color: rgb(222, 28, 28);
                            border-bottom: 3px solid rgb(222, 28, 28);
                            padding-bottom: 19px;
                        }
                    }
                }
                .show{
                    width: 920px;
                    background: white;
                    border-radius: 10px;
                    margin-bottom: 50px;
                    padding: 40px 40px;
                    box-sizing: border-box;
                }
            }
            .right{
                width: 260px;
                height: 400px;
                background: white;
                border-radius: 10px;
                .title{
                    color: rgb(110, 110, 110);
                    height: 58px;
                    line-height: 58px;
                    padding-left: 20px;
                    box-sizing: border-box;
                    border-bottom: 1px solid rgb(212, 212, 212);
                }
                .content{
                    padding: 10px 10px;
                    font-size: 13px;
                    color: rgb(93, 93, 93);
                    img{
                        width: 45px;
                        float: left;
                        margin-right: 10px;
                    }
                    p{
                        &:nth-child(1){
                            margin-top: 5px;
                            display: flex;
                            justify-content: space-between;
                        }
                        &:nth-child(2){
                            margin-top: 5px;
                            line-height: 1.5;
                        }
                    }
                    span{
                        cursor: pointer;
                        &:nth-child(1){
                            font-size: 15px;
                            font-weight: 600;
                            &:hover{
                                color: rgb(176, 25, 25);
                                text-decoration: underline;
                            }
                        }
                        &:nth-child(2){
                            &:hover{
                                color: rgb(176, 25, 25);
                            }
                        }
                    }
                }
            }
        }
    }
</style>
