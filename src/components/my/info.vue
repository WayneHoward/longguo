<template>
    <div class="myinfo">
        <Data>
            <template #cl1>
                基础信息
            </template>
            <template #dl1>
                <ul class="info">
                    <p>用户名：{{user}}</p>
                    <li>昵称：</li>
                    <li>性别：保密</li>
                    <p>所在地区：</p>
                    <li>生日：</li>
                    <p>用户头像：<img src="./../../assets/images/friend.jpg" alt=""></p>
                </ul>
            </template>
        </Data>
    </div>
</template>

<script>
import Data from './data'
export default {
    props: {

    },
    data() {
        return {
            user: ''
        };
    },
    mounted () {
        this.user = localStorage.getItem('phone');  
    },
    methods: {

    },
    components: {
        Data
    },
};
</script>

<style scoped lang="less">
    .myinfo{
        /deep/ .data{
            .blank{
                padding: 60px 60px;
                color: rgb(79, 79, 79);
                .info{
                    li{
                        margin-left: 20px;
                        margin-top: 50px;
                        margin-bottom: 50px;
                    }
                    p{
                        img{
                            width: 80px;
                            vertical-align: top;
                        }
                    }
                }
            }
        }
    }
</style>
