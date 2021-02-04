<template>
    <div class="myinfo">
        <Data>
            <template #cl1>
                录播课程
            </template>
            <template #cl2>
                开源
            </template>
            <template #cl3>
                资讯
            </template>
            <template #dl1>
                <span class="iconfont icon-read-full"> 暂时没有数据</span>
            </template>
            <template #dl2>
                <span class="iconfont icon-read-full"> 暂时没有数据</span>
            </template>
            <template #dl3>
                <span class="iconfont icon-read-full"> 暂时没有数据</span>
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
                color: rgb(137, 137, 137);
                text-align: center;
                span{

                    font-size: 40px;
                }
            }
        }
    }
</style>
