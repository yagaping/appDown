<template>
	<view class="content">
		<view class="top">米橙软件</view>
		<view class="list">
			<view class="item" v-for="(item,index) in list" :key="index">
				<navigator class="link" :url="'/pages/soft/soft?gname='+item.gname" hover-class="none">
					<image class="img" :mode="item.mode" :src=item.icon></image>
					<text>{{item.gname}}</text>
				</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				loading:false,
				list:[]
			}
		},
		onLoad() {
			console.log('环境',process.env.NODE_ENV)
			this.sendRequest();
		},
		methods: {
			sendRequest(){
				this.loading = true
				this.$api.appType({
					a: 'progroup'
				}).then((res)=>{
					this.loading = false;
					this.list = res.data.data;
					
				}).catch((err)=>{
					
					this.loading = false;
					console.log('error',err);
				})
			}
		}
	}
</script>

<style>
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
	.list{
		width: calc(100% - 40rpx);
	}
	.item{
		width:calc(50% - 10rpx );
		float:left;
		background-color: #fff;
		text-align: center;
		line-height: 1.75;
		font-size: 28rpx;
		border-radius: 10rpx;
		margin-top:20rpx;
		box-sizing: border-box;
	}
	.item:nth-child(2n){
		margin-left: 20rpx;
	}
	.link{
		padding: 28rpx 20rpx;
	}
	.img{
		display: block;
		width: 180rpx;
		height: 180rpx;
		margin: 0 auto 20rpx;
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
