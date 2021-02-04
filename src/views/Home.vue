<template>
    <div class="home">
		<Header></Header>
        <div class="banner">
			<ul>
				<li>后台开发<span>&gt;</span>
					<ul>
						<li>系统架构</li>
						<li>项目实战</li>
						<li>单点突破</li>
						<li>基础</li>
					</ul>
				</li>
				<li>云计算/大数据<span>&gt;</span>
					<ul style="top: -52px">
						<li>机器学习</li>
						<li>人工智能</li>
						<li>Spark</li>
						<li>爬虫</li>
						<li>Python</li>
						<li>云计算</li>
						<li>大数据</li>
						<li>区块链</li>
						<li>GO语言</li>
					</ul>
				</li>
				<li>数据存储<span>&gt;</span>
					<ul style="top: -104px">
						<li>MySQL</li>
						<li>Redis</li>
						<li>FastDFS</li>
					</ul>
				</li>
				<li>运维/测试<span>&gt;</span>
					<ul style="top: -156px">
						<li>运维</li>
						<li>测试</li>
					</ul>
				</li>
				<li>产品/运营<span>&gt;</span>
					<ul style="top: -208px">
						<li>产品</li>
					</ul>
				</li>
				<li>网络考试/认证<span>&gt;</span>
					<ul style="top: -260px">
						<li> </li>
					</ul>
				</li>
				<li>开源项目<span>&gt;</span>
					<ul style="top: -312px">
						<li>后台管理系统</li>
						<li>龙果支付系统</li>
					</ul>
				</li>
			</ul>
			<swiper ref="mySwiper" :options="swiperOptions">
				<swiper-slide><img src="./../assets/images/banner1.jpg" alt=""></swiper-slide>
				<swiper-slide><img src="./../assets/images/banner2.jpg" alt=""></swiper-slide>
				<swiper-slide><img src="./../assets/images/banner3.jpg" alt=""></swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
    	</div>
		<div class="new">
			<Attendcursor title="最新课程"></Attendcursor>
		</div>
		<div class="quality">
			<Attendcursor title="精品课程"></Attendcursor>
		</div>
		<div class="hot">
			<Attendcursor title="热门课程"></Attendcursor>
		</div>
		<Footer></Footer>
    </div>
</template>

<script>
import Header from './../components/header.vue'
import Attendcursor from './../components/attendcursor'
import Footer from './../components/footer.vue'
export default {
    props: {

    },
    data() {
        return {
			swiperOptions: {
				effect : 'fade',
                pagination: {
					el: ".swiper-pagination",
                },
                autoplay: {
                    delay: 1500,
                    stopOnLastSlide: false,
                    disableOnInteraction: false,
                },
                loop: true,
            },
        };
	},
	mounted () {

	},
    methods: {

    },
    components: {
		Header,
		Attendcursor,
		Footer
    },
};
</script>

<style scoped lang="less">
	.home{
		padding-top: 100px;
		box-sizing: border-box;
		 .banner{
			display: flex;
			width: 1200px;
			height: 365px;
			margin: 0 auto;
			border-radius: 10px;
			box-shadow: 1px 1px 15px 1px;
			>ul{
				border-radius: 10px 0px 0px 10px;
				background: rgb(76, 76, 76);
				li{
					padding-right: 10px;
					font-size: 13px;
					box-sizing: border-box;
					width: 180px;
					height: 52px;
					line-height: 52px;
					color: rgb(213, 213, 213);
					text-indent: 10px;
					cursor: pointer;
					display: flex;
					justify-content: space-between;
					&:hover{
						background: rgb(244, 244, 244);
						color: rgb(203, 17, 17);
						ul{
							display: block;
							box-shadow: none;
						}
					}
					&:nth-child(1){
						border-radius: 10px 0px 0px 0px;
					}
					&:last-child{
						border-radius: 0px 0px 0px 10px;
					}
					position: relative;
					ul{
						position: absolute;
						z-index: 97;
						left: 180px;
						top: 0;
						display: none;
						border-radius: 0 0 0 0;
						background: white;
						height: 365px;
						li{
							height: 40px;
							line-height: 40px;
							text-indent: 30px;
							width: 200px;
							color: rgb(76, 76, 76);
							&:hover{
								background: white;
							}
						}
					}
				}
			}
			.swiper-wrapper{
				img{
					border-radius: 0px 10px 10px 0px;
					width: 1020px;
					height: 365px;
				}
			}
		}
		.quality{
			background: white;
		}
		.hot{
			margin-bottom: 60px;
		}
	}
</style>
