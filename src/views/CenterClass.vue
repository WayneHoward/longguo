<template>
    <div class="center-class">
        <Header></Header>
        <div class="classify">
            <ul class="line">
                <li v-for="item in myClassify" @click="toggle(item)" :key="item.id"><span :class="{'light': item.isLight}">{{item.name}}</span></li>
            </ul>
            <ul class="line" v-if="line2">
                <li v-for="(it, ind) in myClassify[showId].son" :key="ind" @click="toggle1(it)"><span :class="{'light': it.isLight}">{{it.name}}</span></li>
            </ul>
            <ul class="line" style="border:none">
                <li v-for="item in payClassify" :key="item.id" @click="toggle2(item)"><span :class="{'light': item.isLight}">{{item.name}}</span></li>
            </ul>
        </div>
        <div class="list">
			<Attendcursor></Attendcursor>
			<Attendcursor></Attendcursor>
		</div>
        <div class="page">
            <el-pagination
                background
                :page-size="pageSize"
                :page-sizes="[1,10,20,30]"
                layout="pager"
                :total="myClassify.length">
            </el-pagination>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from './../components/header.vue'
import Attendcursor from './../components/attendcursor'
import Footer from './../components/footer.vue'
import { classify } from '../http/home_http';
export default {
    props: {

    },
    data() {
        return {
            myClassify: [],
            payClassify: [],
            showId: 0,
            line2: false,
            pageSize: 10,
        };
    },
    mounted () {
        // 课程中心顶部分类
        classify().then(res => {
            this.myClassify = res.data.classify,
            this.payClassify = res.data.payclassify
        });  
    },
    methods: {
        toggle(item){
            this.myClassify.forEach((it, ind) => {
                it.isLight = false
            });
            item.isLight = true;
            this.showId = item.id;
            this.line2 = true;
            if(item.id == 0 || item.id == 6){
                this.line2 = false;
            }
            if(item.id != 0 && item.id != 6){
                this.myClassify[this.showId].son.forEach((it, ind) => {
                    it.isLight = false
                });
                this.myClassify[this.showId].son[0].isLight = true;
            }
        },
        toggle1(item){
            this.myClassify[this.showId].son.forEach((it, ind) => {
                it.isLight = false
            });
            item.isLight = true;
        },
        toggle2(item){
            this.payClassify.forEach((it, ind) => {
                it.isLight = false
            });
            item.isLight = true;
        },
    },
    components: {
        Header,
        Attendcursor,
		Footer
    },
};
</script>

<style scoped lang="less">
    .center-class{
        padding-top: 70px;
        .classify{
            width: 100%;
            background: white;
            margin-bottom: 30px;
            .line{
                width: 1200px;
                margin: 0 auto;
                display: flex;
                border-bottom: 1px solid rgb(168, 168, 168);
                li{
                    height: 72px;
                    line-height: 72px;
                    margin-right: 25px;
                    span{
                        cursor: pointer;
                        color: rgb(98, 98, 98);
                        padding: 5px;
                        &:hover{
                            color: red;
                        }
                    }
                    .light{
                        color: white;
                        background: rgb(59, 59, 59);
                        border-radius: 5px;
                        &:hover{
                            color: white;
                        }
                    }
                }
            }
        }
        .list{
            margin-bottom: 30px;
            /deep/ .top{
                display: none !important;
            }
        }
        .page{
            margin-bottom: 20px;
            display: flex;
            justify-content: center;
            /deep/ .el-pager{
                .active{
                    background: orange !important;
                }
                li{
                    min-width: 45px
                }
            }
        }
    }
</style>
