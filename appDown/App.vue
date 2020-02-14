<script>
	
	export default {
		globalData:{
			httpUrl:'test.mc.cn'
		},
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	*{
		 font-family: "SF Pro Text","SF Pro Icons","Helvetica Neue",Helvetica,Arial,sans-serif;
	}
	page{
		background-color:#eee;
		padding-top:88rpx;
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
		position: fixed;
		top:0;
		left: 0;
		right: 0;
		z-index: 99;
		box-shadow: 0 4px 10px rgba(0,0,0,.08);
	}
	uni-toast .uni-toast{
		background: none!important;
	}
</style>
