<template>
    <div class="svip">
        <div class="back">
            <div class="box">
                <div class="top">
                    <div class="btn">
                        <router-link to="centerclass">
                            <img style="height:18px" src="./../assets/images/s1.png" alt="">
                            查看免费录播课程
                        </router-link>
                    </div>
                </div>
                <div class="prerogative">
                    <h1>超级会员（SVIP） 享专属特权</h1>
                    <p>海量课程专享，付费课程免费学习，超低折扣课程，资源随心下，一切只为助力您的学习成长。</p>
                    <div class="l3">
                        <div class="mod">
                            <img src="./../assets/images/s2.png" alt="">
                            <p>免费课程</p>
                            <span>专属课程免费看</span>
                        </div>
                        <div class="mod">
                            <img src="./../assets/images/s3.png" alt="">
                            <p>超低折扣</p>
                            <span>购买课程最低5折起</span>
                        </div>
                        <div class="mod">
                            <img src="./../assets/images/s4.png" alt="">
                            <p>活动专享</p>
                            <span>平台活动可以折上折</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="b1">
            <img src="./../assets/images/b1.png" alt="">
        </div>
        <div class="b2">
            <img src="./../assets/images/b2.png" alt="">
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
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
        Footer
    },
};
</script>

<style scoped lang="less">
.svip{
    .back{
        width: 100%;
        height: 450px;
        background-image: url('./../assets/images/svipback.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        .box{
            width: 1200px;
            margin: 0 auto;
            .top{
                height: 75px;
                padding-top: 10px;
                .btn{
                    font-size: 13px;
                    padding: 5px;
                    line-height: 35px;
                    border-radius: 5px;
                    background: #5a5351;
                    float: right;
                    cursor: pointer;
                    img{
                        vertical-align: middle;
                    }
                    a{
                        color: rgb(180, 149, 110);
                    }
                }
            }
            .prerogative{
                color: rgb(180, 149, 110);
                text-align: center;
                margin-bottom: 20px;
                h1{
                    font-weight: normal;
                    margin-bottom: 20px;
                    font-size: 45px;
                }
                >p{
                    margin-bottom: 50px;
                }
                .l3{
                    display: flex;
                    justify-content: space-around;
                    padding: 0px 230px;
                    .mod{
                        img{
                            height: 60px;
                            margin-bottom: 15px;
                        }
                        p{
                            font-size: 20px;
                            color: white;
                            margin-bottom: 10px;
                        }
                    }
                }
            }
        }
    }
    .b1{
        text-align: center;
        transform: translateY(-50px);
        img{
            width: 890px;
        }
    }
    .b2{
        text-align: center;
        transform: translateY(-20px);
        img{
            width: 890px;
        }
    }
}
</style>
