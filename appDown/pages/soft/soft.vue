<template>
	<view class="soft">
		<view class="top">
			<text class="back" @tap="goBack">返回</text>米橙软件
		</view>
		<view>
			<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scrolltoupper="upper" @scrolltolower="lower"
			@scroll="scroll">
				<view v-for="(item,index) in list" :key="index" class="scroll-view-item uni-bg-red">
					<view class="type">{{index}}</view>
					
						<view class="info" v-for="(child,index) in item" :key="index">
							<navigator :url="'/pages/version/version?id='+child.id+'&gname='+gname" class="link" hover-class="none">
								<image class="icon" mode="scaleToFill" :src="child.icon"></image>
								<view class="dic">
									<text class="name">{{child.name}}</text>
									<text class="load" v-if="child.lv_ps">{{child.lv_ps}}</text>
									<text class="none" v-else>无备注</text>
									<text class="update">{{child.lv_utime}}<text class="line">|</text>{{child.lv_vname}}</text>
								</view>
							</navigator>
							<view class="install" @tap.top="install">安装</view>
						</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				gname:'',
				title: 'Hello',
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				list:[]
			}
		},
		onLoad(option) {
			var app = getApp();
			this.sendRequest();
			this.gname = option.gname;
		},
		methods: {
			sendRequest(){
				const gname = this.$mp.query.gname;
				this.$api.versionApi({
					a: 'projects',
					gname
				}).then((res)=>{
					const list = res.data.data;
					let obj = {};
					let arr = [];
					for(let i=0;i<list.length;i++){
						let item = list[i];
						if(item.type=== '1'){
							if(!obj['iOS安装包']){
								obj['iOS安装包'] = [];
							}
							obj['iOS安装包'].push(item)
						}else if(item.type === '2'){
							if(!obj['Android安装包']){
								obj['Android安装包'] = [];
							}
							obj['Android安装包'].push(item)
						}else if(item.type === '3'){
							if(!obj['Windows安装包']){
								obj['Windows安装包'] = [];
							}
							obj['Windows安装包'].push(item)
						}
					}
					this.list = obj;
					
				}).catch((err)=>{
					console.log('error',err);
				})
			},
			goBack(){
				uni.navigateTo({
				    url: '/pages/index/index'
				});
			},
			install(){
			},
			upper: function(e) {
				console.log(e)
			},
			lower: function(e) {
				console.log(e)
			},
			scroll: function(e) {
				console.log(e)
				this.old.scrollTop = e.detail.scrollTop
			}
		}
	}
</script>

<style>
	.back{
		width: 160rpx;
		height: 88rpx;
		position: absolute;
		top:0;
		left: 0;
	}
	.top{
		display: block;
		text-align: center;
		width: 100%;
		font-size: 28rpx;
		font-weight: 400;
		color:#333;
		height: 88rpx;
		line-height: 88rpx;
		background-color: #fff;
	}
	.type{
		height: 80rpx;
		line-height: 80rpx;
		text-indent: 40rpx;
		margin-top: 20rpx;
		font-size: 28rpx;
		overflow: hidden;
	}
	.info{
		width: calc(100% - 40rpx);
		padding: 28rpx 20rpx;
		margin-bottom: 1px;
		position: relative;
		background: #fff;
		border-radius: 0;
	}
	.icon{
		width: 120rpx;
		height: 120rpx;
		border-radius: 27rpx;
		float: left;
	}
	.dic{
		padding-left:140rpx;
	}
	.name{
		font-size: 28rpx;
		color: #000;
		line-height: 1.7;
		display: block;
	}
	.load{
		color: #ff8000;
		font-size: 22rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		line-height: 1.75;
		display: block;
	}
	.none{
		    font-size: 22rpx;
		    color: #aaa;
		    overflow: hidden;
		    text-overflow: ellipsis;
		    white-space: nowrap;
			line-height: 1.75;
	}
	.update{
		font-size: 22rpx;
		color: #888;
		line-height: 1.75;
		display: block;
	}
	.line{
		color: #ddd;
		margin: 0 10rpx;
	}
	.install{
		    width: 114rpx;
		    height: 54rpx;
			line-height: 54rpx;
		    border: 1rpx solid #f80;
		    border-radius: 10rpx;
		    position: absolute;
		    right: 20rpx;
		    top: 63rpx;
			color: #f80;
			text-align: center;
			z-index: 3;
			font-size: 28rpx;
	}
</style>
