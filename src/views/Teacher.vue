<template>
    <div class="teacher">
        <Header></Header>
        <div class="box">
            <div class="left">
                <h2>招募中心</h2>
                <p>讲师招募</p>
            </div>
            <div class="right">
                <h2>讲师招募</h2>
                <p style="margin-bottom:40px">本网站是专注于在线教育内容提供的平台,致力于为用户提供优质的在线教育内容。为适应平台的发展和给用户提供更多高质量的内容，我们期待有理想、有追求的您能加入我们一起通过互联网无边界的方式进行传播服务到更多努力求知的用户!</p>
                <span>讲师权益</span>
                <p>·        1、能力变现：技术能力的兑现且收益可持续</p>
                <p>·        2、精湛加密：保护你的知识版权</p>
                <p style="margin-bottom:40px">·        3、品牌塑造：帮你打造在线教育领域个人品牌</p>
                <span>申请条件</span>
                <p>·        1、教育行业内2年以上从业经验，自身有丰富的教学知识体系及经验</p>
                <p>·        2、拥有过讲师、培训讲师经历</p>
                <p>·        3、喜欢在行业内分享心得（写博客，逛论坛等）</p>
                <p style="margin-bottom:20px">·        4、参与过知名教育行业峰会讲师</p>
                <div class="belong">
                    <button>申请成为讲师</button>
                </div>
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
    .teacher{
        padding-top: 100px;
        .box{
            width: 1200px;
            margin: 0 auto;
            display: flex;
            .left{
                width: 167px;
                height: 100px;
                border-radius: 10px;
                background: white;
                margin-right: 20px;
                h2{
                    text-indent: 40px;
                    height: 58px;
                    line-height: 58px;
                    border-bottom: 1px solid #ccc;
                    font-size: 15px;
                }
                p{
                    text-align: center;
                    padding: 10px 0px;
                    font-size: 13px;
                    color: rgb(190, 3, 3);
                }
            }
            .right{
                width: 100%;
                border-radius: 10px;
                background: white;
                font-size: 15px;
                padding: 0px 40px;
                box-sizing: border-box;
                margin-bottom: 400px;
                h2{
                    font-size: 15px;
                    text-align: center;
                    padding: 40px 0px;
                }
                .belong{
                    display: flex;
                    justify-content: center;
                    margin-bottom: 60px;
                    button{
                        color: white;
                        background: rgb(180, 18, 18);
                        border-radius: 5px;
                        padding: 10px 20px;
                        cursor: pointer;
                    }       
                }
            }
        }
    }
</style>
