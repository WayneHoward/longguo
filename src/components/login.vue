<template>
    <div class="login">
        <input type="number" placeholder="请输入手机号" v-model="phone">
        <input type="password" placeholder="6-20位密码，可用数字/字母/符号组合" v-model="password">
        <button @click="log()">登录</button>
        <div class="bot">
            <div class="left">
                <input type="checkbox"> 下次自动登录
            </div>
            <div class="right">
                <span>账号修复</span>
                <span>|</span>
                <span>忘记密码</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
            phone: '',
            password: '',
        };
    },
    methods: {
        log(){
            localStorage.setItem('phone', this.phone);
            this.$router.push('/');
        }
    },
    components: {

    },
};
</script>

<style scoped lang="less">
    .login{
        display: flex;
        flex-direction: column;
        >input{
            width: 100%;
            border-radius: 5px;
            height: 43px;
            border: 1px solid #ccc;
            text-indent: 10px;
            margin-bottom: 20px;
            &::placeholder{
                color: #ccc;
            }
        }
        button{
            width: 100%;
            border-radius: 5px;
            height: 43px;
            cursor: pointer;
            margin-bottom: 20px;
            background: rgb(207, 44, 44);
            color: white;
        }
        .bot{
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 14px;
            .left{
                color: rgb(83, 83, 83);
            }
            .right{
                span{
                    color: rgb(56, 196, 242);
                    cursor: pointer;
                    &:nth-child(2){
                        color: rgb(69, 69, 69);
                        cursor: auto;
                        display: inline-block;
                        margin-left: 10px;
                        margin-right: 10px;
                    }
                }
            }
        }
    }
</style>
