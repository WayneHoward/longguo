<template>
    <div class="myinfo">
        <Data>
            <template #cl1>
                修改密码
            </template>
            <template #dl1>
                <p>
                    <span>手机号：</span><input type="text" v-model="user" readonly>
                </p>
                <p>
                    <span>验证码：</span><input type="text" placeholder="请输入手机验证码">
                    <button>获取验证码</button>
                </p>
                <p>
                    <span>重置密码：</span><input type="password" placeholder="请输入新密码">
                </p>
                <p>
                    <span>确定密码：</span><input type="password" placeholder="请再次输入新密码">
                </p>
                <button>确认</button>
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
                display: flex;
                flex-direction: column;
                p{
                    color: rgb(74, 74, 74);
                    margin-bottom: 30px;
                    position: relative;
                    span{
                        display: inline-block;
                        width: 80px;
                    }
                    input{
                        border: 1px solid #ccc;
                        border-radius: 5px;
                        width: 320px;
                        height: 50px;
                        color: rgb(69, 69, 69);
                        font-size: 15px;
                        text-indent: 10px;
                    }
                    button{
                        border: 1px solid rgb(193, 8, 8);
                        position: absolute;
                        width: 100px;
                        color: white;
                        background: rgb(193, 8, 8);
                        border-radius: 0px 5px 5px 0px;
                        left: 221px;
                        top: 1px;
                        cursor: pointer;
                    }
                }
                button{
                    border-radius: 5px;
                    width: 320px;
                    height: 50px;
                    color: white;
                    background: #cccccc;
                    margin-left: 80px;
                    cursor: pointer;
                }
            }
        }
    }
</style>
