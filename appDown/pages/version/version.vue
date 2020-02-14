<template>
	<view class="version">
		<view class="top">
			<text class="back" @tap="goBack">返回</text>版本列表
		</view>
		<view class="content">
			<view class="list" v-for="(item,index) in list" :key="index">
				<view class="dic">
					<image class="icon" :src="icon" mode="scaleToFill"></image>
					<view class="info">
						<view class="name">{{title}}</view>
						<view class="vers">{{item.vname}}<text class="line"> | </text>{{item.appsize}}</view>
						<view class="time">{{item.utime}}</view>
					</view>
				</view>
				<view class="tips" v-if="item.ps">
					<text class="tips_p" v-for="(item,index) in formatText(item.ps)" :key="index">
						{{item}}
					</text>
				</view>
				<view class="tips" v-if="item.uinfo">
					<text class="tips_p" v-for="(item,index) in formatText(item.uinfo)" :key="index">
						{{item}}
					</text>
				</view>
				<button class="btn" :class="{active:index===0}" type="primary">安装</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				gname:'',
				title:'',
				icon:'',
				scrollTop: 0,
				loading:false,
				old: {
					scrollTop: 0
				},
				list:[]
			}
		},
		onLoad(option) {
			this.gname = option.gname;
			this.sendRequest();
		},
		methods: {
			sendRequest(){
				this.loading = true;
				uni.showLoading({mask:true});
				const id = this.$mp.query.id;
				this.$api.versionApi({
					a: 'proversions',
					id
				}).then((res)=>{
					const list = res.data.data;
					this.title = list.project.name;
					this.icon = list.project.icon;
					this.loading = false;
					for(let i=0;i<list.versions.length;i++){
						let item = list.versions[i];
						if(item.ps){
							list.versions[i].ps = item.ps.replace(/\r\n/g,'__BR__')
						}
						if(item.uinfo){
							list.versions[i].uinfo = item.uinfo.replace(/\r\n/g,'__BR__')
						}
					}
					this.list = list.versions;
					 uni.hideLoading();
				}).catch((err)=>{
					this.loading = false;
					 uni.hideLoading();
				})
			},
			formatText(text){
				if(text){
					text = text.split('__BR__');
				}
				return text;
			},
			goBack(){
				uni.navigateTo({
					url:'/pages/soft/soft?gname='+this.gname
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
	.content{
		width: calc(100% - 40rpx);
		padding:20rpx 0;
		margin: 0 auto;
	}
	.dic{
		overflow: hidden;
	}
	.list{
		width: calc(100% - 40rpx);
		padding: 28rpx 20rpx;
		background: #fff;
		border-radius: 10rpx;
		margin-bottom: 20rpx;
		color: #333;
		overflow: hidden;
	}
	.icon{
		float: left;
		width: 120rpx;
		height: 120rpx;
	}
	.info{
		padding-left:140rpx;
	}
	.name{
		line-height: 1.7;
		font-size: 28rpx;
		color: #000;
	}
	.vers{
		font-size: 22rpx;
		-webkit-text-size-adjust: none;
		color: #aaa;
		line-height: 1.5;
	}
	.line{
		color: #aaa;
		margin: 0 10rpx;
	}
	.time{
		font-size: 22rpx;
		-webkit-text-size-adjust: none;
		color: #aaa;
		line-height: 1.5;
	}
	.tips{
		text-align: left;
		font-size: 22rpx;
		line-height: 1.5;
		-webkit-text-size-adjust: none;
		color: #aaa;
		padding-top: 20rpx;
	}
	.btn{
		
		display: block;
		width: 100%;
		height: 88rpx;
		line-height: 88rpx;
		text-align: center;
		border-radius: 10rpx;
		margin-top: 20rpx;
		font-size: 28rpx;
		color: #333;
		background: #f4f4f4;
	}
	.active{
		background-color: #00b916;
		color: #fff;
	}
	.btn:after{
		border-color: #f4f4f4;
	}
	.tips_p{
		display: block;
		font-size: 22rpx;
		line-height: 1.5;
		min-height: 33rpx;
	}
</style>
