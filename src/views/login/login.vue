<template>
  <div class="content">
    <van-nav-bar
      title="登录"
      left-text=""
      left-arrow
      @click-left="onClickLeft"
      class="navtabbar"
    />
    <div class="body">
      <div class="body_logo">
        <img src="../../assets/logo.png" alt="网易云" width="100%" style="border-radius: 10px;"/>
      </div>
      <div class="input">
        <div class="item">
          <van-icon name="friends-o" class="item_icon" />
          <input type="text" placeholder="请输入账号" class="inp" />
        </div>
        <div class="item">
          <van-icon name="goods-collect-o" class="item_icon" />
          <input type="text" placeholder="请输入密码" class="inp" />
        </div>

        <div class="button">登录</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="less" scoped>
body {
  background: #f8f8f8;
}
.content {
  .body {
    width: 320px;
    .body_logo {
      width: 50px;
      height: 50px;
      margin: 50px auto 0;
    }
    .input {
      width: 250px;
      height: 100px;
      background: white;
      margin: 20px auto 0;
      .item {
        width: 100%;
        height: 30px;
        // background: yellow;
        display: flex;
        align-items: center;
          border: 1px solid rgb(119, 116, 116);
          border-radius: 10px;
          margin-top: 10px;
          .item_icon{
              font-size: 20px;
              margin-left: 10px;
          }
        .inp {
          width: 100%;
          height: 30px;
          margin-left: 15px;
          font-size: 14px;
        //   text-indent: 10px;
          border: 0;
          background: transparent;
        }
      }
      .button {
        width: 250px;
        height: 35px;
        background: #f82f32;
        margin-top: 20px;
        border-radius: 10px;
        font-size: 16px;
        color: white;
        font-weight: 700;
        text-align: center;
        line-height: 35px;
      }
    }
  }
}
</style>