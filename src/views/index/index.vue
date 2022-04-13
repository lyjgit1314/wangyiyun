<template>
  <div class="content">
    <div class="top">
        <router-view></router-view>
    </div>


    <!-- 播放器 -->
    <div class="acitive">
      <musictabbar></musictabbar>
    </div>
    <!-- 底部导航 -->
    <div class="tabbar">
      <tabbar></tabbar>
    </div>
  </div>
</template>

<script>
import Musictabbar from '@/components/musictabbar.vue';
import tabbar from "../../components/tabbar.vue";
export default {
  components: { tabbar, Musictabbar },
  data() {
    return {};
  },
  mounted() {
    // this.getSingerMv()
  },
  methods: {
    //     async getSingerMv() {
    //   // 这个接口没有offset 参数
    //   let res = await this.$api("/cellphone/existence/check", {
    //     phone:19133430825
    //   });
    //   console.log(res);
    // //   this.singerMvInfo = res.data;
    // },
  },
};
</script>

<style lang="less" scoped>
.content {
    width: 320px;
    height: 90vh;
    background: #f8f8f8;
    position: relative;
    .acitive{
      width: 320px;
      height: 30px;
      background: white;
      position: fixed;
      bottom: 48px;
      left: 0;
    }
  .tabbar {
    width: 320px;
    height: 48px;
    // background: red;
    position: fixed;
    bottom: 0;
    left: 0;
  }
}
</style>