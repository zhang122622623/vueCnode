import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

let state = {
  topic: {},
  replies: [],
  replyTime:[],
  user:{},
}

const mutations = {
  updateTopic(context,data){
    context.topic = data;
  },
  updateReplies(context,data){
    context.replies = data;
  },
  updateReplyTime(context,data){
    context.replyTime = data;
  },
  updateUser(context,data){
    context.user = data;
  },
}
export default new Vuex.Store({
  state,
  mutations,
})
