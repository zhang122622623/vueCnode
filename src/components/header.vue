<template>
  <div class="header">
    <img src="../assets/cnodejs.svg"  title="Cnode" @click="go('/')">
    <ul>
      <li @click="go('/')">首页</li>
      <li @click="go('/api')">API</li>
      <li @click="dialogVisible = true">关于</li>
    </ul>
    <el-dialog
      title="提示" :visible.sync="dialogVisible"
      width="35%" :before-close="handleClose">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
         <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        dialogVisible: false
      }
    },
    methods: {
      go (route) {
        this.$router.push(route)
      },
      handleClose(done) {
        this.dialogVisible = false;
      }
    }
  }
</script>

<style scoped>
  .header{
    height: 70px;
    width: 100%;
    background: #545c64;
  }
  .header img{
    height: 70px;
    width: 100px;
    float: left;
    margin-left: 10%;
    cursor: pointer;
  }
  .header ul{
    height: 70px;
    line-height: 70px;
    float: right;
    margin:0 10% 0 0 ;
  }
  .header li{
    display: inline-block;
    color: #fff;
    list-style: none;
    font-size: 18px;
    margin:0 20px;
    cursor: pointer;
  }
</style>
