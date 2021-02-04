<template>
    <div class="footer">
        <ul class="box">
            <li>
                <h2>关于我们</h2>
                <p>-</p>
                <p><a href="">公司简介</a></p>
                <p><a href="">联系我们</a></p>
            </li>
            <li>
                <h2>商务合作</h2>
                <p>-</p>
                <p><a href="">课程合作</a></p>
                <p><a href="">项目合作</a></p>
            </li>
            <li>
                <h2>常见问题</h2>
                <p>-</p>
                <p><a href="">如何支付</a></p>
                <p><a href="">如何学习</a></p>
            </li>
            <li>
                <h2>联系客服</h2>
                <p>-</p>
                <p><a href="">客服QQ：3155237748</a></p>
                <p><a href="">客服QQ：2108067059</a></p>
            </li>
            <li>
                <h2>官方微信</h2>
                <img src="./../assets/images/QRcode.jpg" alt="">
            </li>
        </ul>
        <ul class="nav">
            <p>友情链接：</p>
            <li>领课网络</li>
            <li>领课教育</li>
            <li>龙果支付</li>
            <li>IT站导航</li>
            <li>象牙云</li>
            <li>码云</li>
            <li>商标注册</li>
            <li>西安seo</li>
            <li>加盟费查询</li>
            <li>运维监控</li>
            <li>凤舞课堂</li>
            <li>聚看财经</li>
            <li>防伪标签</li>
            <li>乐考网</li>
        </ul>
        <div class="b1">
            Copyright © 2015-2020 广州市领课网络科技有限公司 版权所有
        </div>
        <ul class="b2">
            <li>领课教育云 提供技术支持</li>
            <li>|</li>
            <li><a href="">粤ICP备16009964号</a></li>
            <li>|</li>
            <li><img src="./../assets/images/police.png" alt=""><a href="">粤公网安备 44010602005928号</a></li>
        </ul>
    </div>
</template>

<script>
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

    },
};
</script>

<style scoped lang="less">
    .footer{
        height: 376px;
        width: 100%;
        background: rgb(54, 54, 54);
        .box{
            font-size: 12px;
            width: 1200px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            height: 249px;
            border-bottom: 1px solid rgb(135, 135, 135);
            li{
                color: rgb(215, 215, 215);
                margin-right: 70px;
                img{
                    width: 95px;
                    transform: translateY(20px);
                }
                h2{
                    font-weight: normal;
                    font-size: 22px;
                }
                a{
                    color: rgb(215, 215, 215);
                    &:hover{
                        color: white;
                    }
                }
                p{
                    margin-bottom: 10px;
                    &:nth-child(2){
                        font-size: 30px;
                        font-weight: 600;
                    }
                }
                &:nth-child(4){
                    flex: 1;
                }
            }
        }
        .nav{
            width: 1200px;
            margin: 0 auto;
            display: flex;
            font-size: 12px;
            height: 66px;
            line-height: 66px;
            p{
                color: rgb(215, 215, 215);
                margin-right: 40px;
            }
            li{
                color: rgb(196, 196, 196);
                margin-right: 30px;
                cursor: pointer;
                &:hover{
                    color: white;
                }
            }
        }
        .b1{
            background: rgb(102, 102, 102);
            width: 100%;
            height: 29px;
            line-height: 29px;
            font-size: 12px;
            text-align: center;
            color: rgb(196, 196, 196);
        }
        .b2{
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 12px;
            height: 24px;
            line-height: 24px;
            color: rgb(196, 196, 196);
            li{
                margin-right: 10px;
                img{
                    height: 12px;
                }
                a{
                    color: rgb(196, 196, 196);
                    &:hover{
                        color: red;
                        text-decoration: underline;
                    }
                }
            }
        }
    }
</style>
