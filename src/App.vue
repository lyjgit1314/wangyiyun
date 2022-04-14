<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
body {
  margin: 0;
  padding: 0;
}
// 隐藏滚动条
body::-webkit-scrollbar {
  display: none;
}
//谷歌适用

::-webkit-scrollbar {
  display: none;
}
.element {
  -ms-overflow-style: none;
}
.element {
  overflow: -moz-scrollbars-none;
}
</style>
