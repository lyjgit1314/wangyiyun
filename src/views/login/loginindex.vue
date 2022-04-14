<template>
  <div class="content" @touchmove.prevent>
    <van-nav-bar
      title="登录"
      left-text=""
      right-text=""
      left-arrow
      @click-left="onClickLeft"
      class="loginnav"
    />
    <div class="bigimg">
      <img src="@/assets/logins.png" alt="" />

        <div class="phonelogin" @click="gologin">手机登录</div>
        <div class="phonezhuce" @click="gozhuce">立即注册</div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    //   跳转到注册页面
    gozhuce(){
        this.$router.push('/zhuce')
    },
    // 跳转到登录页面
    gologin(){
        this.$router.push('/login')
    },

    //   点击返回
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="less" scoped>
.content {
  margin: 0;
  padding: 0;
  position: relative;
  .loginnav {
    background: #f5615d;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    border: 0 !important;
    .van-nav-bar .van-icon {
      color: #fff !important;
    }
  }
  .bigimg {
    width: 100vw;
    height: 100vh;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      display: block;
    }
    .phonelogin{
        position: absolute;
        top: 230px;
        left: 30px;
        width: 260px;
        height: 35px;
        // background: green;
        border: 1px solid white;
        border-radius: 25px;
        text-align: center;
        line-height: 35px;
        font-size: 14px;
        color: white;
    }
    .phonezhuce{
        position: absolute;
        top: 280px;
        left: 30px;
        width: 260px;
        height: 35px;
        // background: green;
        border: 1px solid white;
        border-radius: 25px;
        text-align: center;
        line-height: 35px;
        font-size: 14px;
        color: white;
    }
  }
}
   .content /deep/ .van-nav-bar__title{
    color: white !important;
    font-size: 14px;

  }
.content /deep/ .van-nav-bar .van-icon {
    color: white !important;
  }
</style>