<template>
  <div class="wrapper">
    <el-card class="box-card3">
      <h4>项目中使用的API:</h4>
      <span>以下 api 路径均以 <a href="/api">https://cnodejs.org/api/v1</a> 为前缀</span>
      <hr>
      <div class="content">
        <p>1、/topics - 主题首页</p>
        <p></p>
      </div>
    </el-card>
  </div>
</template>

<style scoped>
  .wrapper{
    height: 100%;
    width: 100%;
    padding-top: 20px;
  }
  .box-card3{
    width: 70%;
    margin:0 auto 10px;
    background: #F9FBFC;
    text-align: left;
  }
  .box-card3 h4{
    font-size: 17px;
    margin: 0 0 10px 0;
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
    background-color: #e7e7e7;
    width: 104%;
    margin-left: -2%;
  }
  .content{
    width: 98%;
    margin:0 auto;
  }
  .box-card3 p{
    font-size: 16px;
    margin:0 auto 5px;
    clear: both;
  }
  .box-card3 img{
    height:60px;
    width: 60px;
    border-radius: 4px;
    border:1px solid #ccc;
    margin: 10px 15px 15px 0;
    float: left;
    cursor: pointer;
  }
  .box-card3 a{
    text-decoration: none;
    font-style: italic;
    font-size: 16px;
  }
  .box-card3 a:hover{
    color: wheat;
    text-decoration: underline;
  }
</style>
