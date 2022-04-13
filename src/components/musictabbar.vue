<template>
  <div class="music_tabbar">
    <div class="left">
      <div class="left_img">
        <img
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F4k%2Fs%2F02%2F2109242332225H9-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652420738&t=3fc4c35ddb8f7454cfa9e3c6b687847d"
          width="100%"
          height="100%"
          style="border-radius: 5px;display:block;"
          alt=""
        />
      </div>
      <div class="left_name">这个是名字</div>
    </div>
    <div class="right">
        <div class="right_icon">
            <img src="@/assets/shangyishou.png" width="100%" height="100%" style="display:block;" alt="">
        </div>
        <div class="right_icon">
            <img src="@/assets/bofang.png" style="display:block;" width="90%" height="90%" alt="">
            <!-- <img src="@/assets/zanting.png" style="display:block;" width="100%" height="100%" alt=""> -->
        </div>
        <div class="right_icon">
            <img src="@/assets/xiayishou.png" style="display:block;" width="100%" height="100%" alt="">
        </div>
    </div>
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
.music_tabbar {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
    justify-content: space-between;
    border-top: 1px solid #dddbdc;
  .left {
    display: flex;
    align-items: center;
    margin-left: 15px;
    .left_img {
      width: 20px;
      height: 20px;
    }
    .left_name {
      font-size: 11px;
      margin-left: 10px;
    }
  }
  .right{
      margin-right: 15px;
      display: flex;
      align-items: center;
      .right_icon{
          width: 20px;
          height: 20px;
        //   background: red;
          margin: 0 5px;
          display: flex;
          align-items: center;
          justify-content: center;
      }
  }
}
</style>