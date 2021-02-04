<template>
    <div class="attendcursor">
        <div class="top">
            <span class="mary">|</span><h2>{{title}}</h2>
            <router-link to="/centerclass">更多课程 &gt;</router-link>
        </div>
        <ul class="content">
            <li v-for="(item, index) in list" :key="index">
                <router-link :to="{path: '/detail/' + item.id}">
                    <img :src="item.imgurl" alt="">
                    <div class="des">
                        <p>{{item.name}}</p>
                        <span>{{item.price}}</span>
                        <span>SVIP：{{item.sprice}}</span>
                    </div>
                    <div class="qizi">
                        <img src="./../assets/images/qizi.png" alt="">
                        <span>秒杀价<br>{{item.onsale}}</span>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import {homeCourse} from './../http/home_http'
export default {
    props: {
        'title':{
            type: String
        }
    },
    data() {
        return {
            list: [],
        };
    },
    created () {
        // 首页课程
        homeCourse().then(res => {
            this.list = res.data.course
        });
    },
    methods: {
        
    },
    components: {

    },
};
</script>

<style scoped lang="less">
    .attendcursor{
        .top{
            color: rgb(55, 55, 55);
            width: 1200px;
            margin: 0 auto;
            display: flex;
            padding-top: 70px;
            padding-bottom: 25px;
            box-sizing: border-box;
            .mary{
                font-size: 30px;
                font-weight: 800;
            }
            h2{
                display: inline-block;
                font-weight: normal;
                font-size: 30px;
                margin-left: 10px;
                flex: 1;
            }
            a{
                font-size: 16px;
                color: rgb(174, 174, 174);
                &:hover{
                    color: rgb(45, 45, 45);
                }
            }
        }
        .content{
            width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            li{
                width: 285px;
                height: 205px;
                border-radius: 10px;
                background: white;
                margin-bottom: 20px;
                cursor: pointer;
                position: relative;
                img{
                    border-radius: 10px 10px 0px 0px;
                    width: 285px;
                    height: 139px;
                }
                .des{
                    padding: 0px 10px;
                    box-sizing: border-box;
                    p{
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        color: rgb(79, 79, 79);
                        margin-bottom: 5px;
                    }
                    span{
                        display: inline-block;
                        color: rgb(213, 6, 6);
                        margin-right: 10px;
                        &:nth-child(3){
                            font-size: 12px;
                        }
                    }
                }
                .qizi{
                    position: absolute;
                    left: -20px;
                    top: -5px;
                    img{
                        width: 105px;
                        height: 60px;
                    }
                    span{
                        text-align: center;
                        left: 35px;
                        top: 10px;
                        position: absolute;
                        color: white;
                        font-size: 12px;
                    }
                }
                &:hover{
                    transition: 0.5s;
                    transform: translateY(-5px);
                    box-shadow: 1px 1px 10px 1px rgb(185, 185, 185);
                }
            }
        }
    }
</style>
