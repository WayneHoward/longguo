<template>
    <div class="register">
        <input type="number" placeholder="请输入手机号">
        <input type="password" placeholder="请输入验证码">
        <img src="./../assets/images/code.jpeg" alt="">
        <p><input type="checkbox"> 我已经阅读并同意<span>《用户协议》</span></p>
        <button @click="reg()">注册</button>
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
        reg(){
            this.$router.push('/reandlo')
        }
    },
    components: {

    },
};
</script>

<style scoped lang="less">
    .register{
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
        img{
            width: 100px;
            height: 45px;
            border-radius: 0px 5px 5px 0px;
            position: absolute;
            top: 145px;
            right: 28px;
        }
        button{
            width: 100%;
            border-radius: 5px;
            height: 43px;
            cursor: pointer;
            margin-top: 20px;
            background: rgb(207, 44, 44);
            color: white;
        }
        p{
            font-size: 14px;
            color: rgb(88, 88, 88);
            span{
                cursor: pointer;
                color: rgb(44, 139, 234);
                &:hover{
                    color: rgb(207, 44, 44);
                    text-decoration: underline;
                }
            }
        }
    }
</style>
