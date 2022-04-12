<template>
  <div class="content">
    <div class="top">
      <div class="one" @click="gologin()">
        <div class="one_img">
          <img src="" alt="">
        </div>
        <div class="name">立即登录</div>
        <div class="one_size">
          <div class="one_one">15关注</div>
          <div class="one_one">2粉丝</div>
          <div class="one_one">Lv.8</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
      // 跳转到登录页面
      gologin(){
        this.$router.push('/login')
      }
    }
}
</script>

<style lang="less" scoped>
.content{
  overflow: hidden;
  .top{
    width: 280px;
    height: 100px;
    // background: white;
    margin: 50px auto 0;
    // border-radius: 15px;
    .one{
      width: 100%;
      height: 100px;
      background: white;
    border-radius: 15px;
    position: relative;
    .one_img{
      width: 60px;
      height: 60px;
      // margin: -30px auto 0;
      position: absolute;
      top: -30px;
      left: 110px;
      img{
        width: 100%;
        height: 100%;
        display: block;
        background: white;
        border-radius: 30px;
        border: 0;
      }
    }
    .name{
      font-size: 14px;
      text-align: center;
      font-weight: 700;
      color: #000;
      padding-top: 40px;
    }
    .one_size{
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 10px;
      .one_one{
        font-size: 12px;
        color: #b0aeaf;
        margin: 0 5px;
      }
    }
    }
  }
}
</style>