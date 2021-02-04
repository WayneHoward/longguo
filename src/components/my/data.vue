<template>
    <div class="data">
        <ul class="title">
            <li v-for="(item, index) in lightList" :key="index" @click="tab(item)" :class="{'light': item.isLight}"><slot :name="'cl'+(index+1)"></slot></li>
        </ul>
        <ul class="blank">
            <li v-for="(item, index) in lightList" :key="index" v-show="item.isLight"><slot :name="'dl'+(index+1)"></slot></li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        
    },
    data() {
        return {
            lightList:[
                {
                    name: '1',
                    isLight: true
                },
                {
                    name: '2',
                    isLight: false
                },
                {
                    name: '3',
                    isLight: false
                },
                {
                    name: '4',
                    isLight: false
                },
            ]
        };
    },
    mounted () {
    },
    methods: {
        tab(it){
            this.lightList.forEach((item, index) => {
                item.isLight = false;
            });
            it.isLight = true;
        }
    },
    components: {

    },
};
</script>

<style scoped lang="less">
    .data{
        .title{
            height: 60px;
            line-height: 60px;
            border-bottom: 1px solid #ccc;
            display: flex;
            li{
                padding: 0px 30px;
                font-size: 15px;
                color: rgb(74, 74, 74);
                cursor: pointer;
                &:hover{
                    color: rgb(212, 22, 22);
                }
            }
            .light{
                color: rgb(212, 22, 22);
                border-bottom: 2px solid rgb(212, 22, 22);
            }
        }
    }
</style>
