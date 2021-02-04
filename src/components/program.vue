<template>
    <div class="program">
        <h3>课程大纲</h3>
        <ul v-for="item in list" :key="item.id">
            <p>
                <span>第{{item.id}}章</span>
                {{item.title}}
            </p>
            <li v-for="it in item.list" :key="it.id">
                <span class="iconfont icon-bofang"></span>
                <span>第{{it.num}}讲</span>
                <span>{{it.name}}</span>
                <span>{{it.free}}</span>
                <span>{{it.time}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
import {homeCourse} from './../http/home_http'
export default {
    props: {

    },
    data() {
        return {
            list: []
        };
    },
    created () {
        homeCourse().then(res => {
            this.list = res.data.program
        });  
    },
    methods: {

    },
    components: {

    },
};
</script>

<style scoped lang="less">
    .program{
        h3{
            padding-left: 5px;
            color: rgb(60, 60, 60);
            font-size: 20px;
            border-left: 4px solid rgb(60, 60, 60);
        }
        ul{
            color: rgb(135, 135, 135);
            p{
                margin-top: 15px;
                margin-bottom: 20px;
            }
            li{
                display: flex;
                cursor: pointer;
                padding-right: 10px;
                span{
                    display: inline-block;
                    margin-left: 10px;
                    margin-top: 10px;
                    margin-bottom: 10px;
                    &:nth-child(3){
                        flex: 1;
                    }
                    &:nth-child(4){
                        color: rgb(89, 181, 239);
                    }
                }
                &:hover{
                    background: rgb(245, 245, 245);
                }
            }
        }
    }
</style>
