<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  components:{
    "Header": Header,
    "Footer": Footer
  }
}
</script>
<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html{
  width: 100%;
  overflow-x: hidden;
  font-size: 62.5%;
  line-height: 1.15;
}
body{
    font-size: 1.5rem;
    line-height: 2rem;
    display: flex;
    flex-direction: column;
    min-height: 100%;
    background: #fff;
    color: #000;
    font-family: "FSElliotPro", Helvetica, Arial, "Microsoft YaHei", "微软雅黑", STXihei, "华文细黑", sans-serif;
    font-weight: normal;
}
.main{
  margin-top: 120px;
  width: 100%;
}
/* 清除浮动 */
.clearfix::after{
  display: block;
  content: '';
  clear: both;
}

</style>
