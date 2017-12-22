<template>
  <div class="wrapper">
    <el-card class="box-card3">
      <h4>项目中使用的API:</h4>
      <span>以下 api 路径均以 <a href="/api">https://cnodejs.org/api/v1</a> 为前缀</span>
      <hr>
      <div class="content" style="margin-top: 20px;">
        <p>1、get /topics - 主题首页</p>
        <hr>
        <p>接收 get 参数</p>
        <ul>
          <li>page:<label>Number</label> 页数</li>
          <li>tab:<label>String</label> 主题分类,目前有 ask share job good</li>
          <li>limit:<label>Number</label> 每一页的主题数量</li>
          <li>mdrender:<label> String</label> 当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本。</li>
        </ul>
      </div>
      <div class="content">
        <p>2、get /topic/:id 主题详情</p>
        <hr>
        <p>接收 get 参数</p>
        <ul>
          <li>mdrender:<label>String</label> 当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本。</li>
          <li>accesstoken:<label> String</label>当需要知道一个主题是否被特定用户收藏以及对应评论是否被特定用户点赞时，才需要带此参数。会影响返回值中的 is_collect 以及 replies 列表中的 is_uped 值。</li>
        </ul>
      </div>
      <div class="content">
        <p>3、get /user/:loginname - 用户详情</p>
        <hr>
        <p>无参数</p>
      </div>
      <div class="content" style="margin-top:40px;">
        <h4>关于vue-resource中的跨域处理：</h4>
        <hr>
        <p>项目中采用代理的方式，具体操作为，在config/index.js文件中配置如下：</p>
        <img src="../assets/proxy.png">
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
    max-width:1300px;
    min-width: 900px;
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
    width: 104%;
    margin-left: -2%;
  }
  .content{
    width: 98%;
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
    font-style: italic;
    font-size: 16px;
  }
  .box-card3 a:hover{
    color: wheat;
    text-decoration: underline;
  }
</style>
