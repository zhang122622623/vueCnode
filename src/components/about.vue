<template>
  <div class="wrapper">
    <el-card class="box-card3">
      <h4>关于：</h4>
      <hr>
      <div class="content" style="margin-top: 20px;">
        <p>1、关于项目</p>
        <hr>
        <ul>
          <li>一个vue的练手小项目，用来学习或者练习vue+webpack构建项目</li>
          <li>一个vue的全家桶项目，涉及vue项目中常用技术，如路由管理、请求发送、状态管理</li>
          <li>一个纯粹的前端项目，无需关注后台，直接调用cnode接口,开发模式下注意跨域处理</li>
        </ul>
      </div>
      <div class="content">
        <p>2、关于技术栈</p>
        <hr>
        <ul>
          <li>项目框架：Vue+webpack</li>
          <li>路由管理：Vue-router</li>
          <li>请求发送：Vue-resource</li>
          <li>状态管理：Vuex</li>
        </ul>
      </div>
      <div class="content">
        <p>3、关于作者：一只正在成长的前端程序猿, 坚信天道酬勤，坚持自强不息</p>
        <hr>
        <ul>
          <li>源码：<a href="https://github.com/zhang122622623/vueCnode" target="_blank">在这里！</a></li>
          <li>Github:<a href="https://github.com/zhang122622623" target="_blank">动动手指！Star</a></li>
          <li>博客：<a href="http://blog.csdn.net/github_39532240" target="_blank">去看看呗！</a></li>
        </ul>
      </div>
    </el-card>
  </div>
</template>

<style scoped>
  .wrapper{
    height: 80%;
    width: 100%;
    padding-top: 20px;
  }
  .box-card3{
    width: 70%;
    max-width:1300px;
    min-width: 900px;
    margin:0 auto 10px;
    background: #F9FBFC;
    text-align: left;
  }
  .box-card3 h4{
    font-size: 18px;
    margin: 0 0 15px 0;
  }
  .box-card3 span{
    float: left;
    display: inline-block;
    margin-left: 1%;
    margin-bottom: 10px;
    font-size: 17px;
    color:#555;
  }
  .box-card3 hr {
    clear: both;
    height: 1px;
    border-top: 1px solid #e7e7e7;
    border-bottom: none;
    border-left: none;
    border-right: none;
    width: 104%;
    margin-left: -2%;
  }
  .content{
    width: 96%;
    margin:0 auto 20px;
  }
  .box-card3 p{
    font-size: 16px;
    margin:0 auto 5px;
    clear: both;
  }
  .content img{
    height:150px;
    width: 45%;
    border-radius: 4px;
    margin-left: 2%;
  }
  .box-card3 label{
    font-size: 14px;
    font-style: italic;
    color: #ccc;
    margin-right: 3px;
  }
  .box-card3 a{
    text-decoration: none;
    margin-left: 10px;
    font-size: 17px;
    color: deepskyblue;
  }
  .box-card3 a:hover{
    color: yellowgreen;
    text-decoration: underline;
  }
</style>
