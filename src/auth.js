const root =  process.env.API_ROOT;

export default {
  getTopics (context, param) {
    console.log(root);
    context.$http.get(root+'/topics', { params: param }).then(function (res) {
      let success = res.data.success
      if (success) {
        let data = res.data.data
        context.info = data;
        let create = []
        data.map(function (e, i) {
          create[i] = e.create_at.split('T')[0]
        })
        context.create = create
      } else {
        alert('Something Wrong!')
      }
    }, function (err) {
      console.log(err)
    })
  },
  getTopic (context, id, param) {
    let that = this
    context.$http.get(root+'/topic/' + id, { params: param }).then(function (res) {
      let success = res.data.success
      if (success) {
        context.topic = res.data.data
        context.create = context.topic.create_at.split('T')[0]
        context.loginname = context.topic.author.loginname
        that.getUser(context, context.loginname)
        context.replies = context.topic.replies
        context.replies.map(function (e, i) {
          let t1 = e.create_at.split('T')
          let t2 = t1[1].split('.')[0]
          context.replyTime[i] = t1[0] + ' ' + t2
          context.ups[i] = e.ups.length
        })
        context.$store.commit('updateTopic',context.topic);
        context.$store.commit('updateReplies',context.replies);
        context.$store.commit('updateReplyTime',context.replyTime);
       // console.log( context.replies)
      } else {
        alert('Something Wrong!')
        this.$router.push('/')
      }
    }, function (err) {
      console.log(err)
    })
  },
  getUser (context, name) {
    context.$http.get(root+'/user/' + name).then(function (res) {
      let success = res.data.success
      if (success) {
        let data = res.data.data;
        context.score = data.score;
        context.$store.commit('updateUser',data);
      } else {
        alert('Something Wrong!')
        this.$router.push('/')
      }
    }, function (err) {
      console.log(err)
    })
  },
  openFullScreen(context) {
    context.fullscreenLoading = true;
    setTimeout(() => {
      context.fullscreenLoading = false;
    }, 800);
  },
}
