<template>
  <div class="content">
    <van-nav-bar title="" left-text="" :left-arrow='false'>
        <template #left>
        <div class="left_icon">
            <van-icon name="wap-nav" />
        </div>
      </template>
      <template #title>
        <div class="nav">
            <div class="nav_icon">
                <img src="@/assets/sousuo.png" alt="">
            </div>
            <input type="text" placeholder="爱意随风起，风止意难平" disabled>
        </div>
      </template>
      <template #right>
        <div class="left_icon">
            <van-icon name="music" />
        </div>
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.content{
    .van-nav-bar{
        background: #e1e1e1 !important;
    }
    .van-nav-bar .van-icon{
        font-size: 20px;
        color: #000;
    }
    .nav{
        // width: 100%;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: white;
        padding: 4px 20px;
        border-radius: 15px;
        .nav_icon{
            width: 15px;
            height: 15px;
            flex-shrink: 0;
            img{
                width: 100%;
                height: 100%;
                display: block;
            }
        }
        input{
            font-size: 10px;
            border: 0;
            background: transparent;
            color: #9c999a;
        }
    }
}
</style>