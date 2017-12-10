export default {
  getTopics (context, param) {
    context.$http.get('v1/topics', { params: param }).then(function (res) {
      let success = res.data.success
      if (success) {
        let data = res.data.data
        context.info = data
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
    context.$http.get('v1/topic/' + id, { params: param }).then(function (res) {
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
        context.$store.commit('updateTopic',context.topic)
        context.$store.commit('updateReplies',context.replies);
        context.$store.commit('updateReplyTime',context.replyTime)
        console.log( context.replies)
      } else {
        alert('Something Wrong!')
        this.$router.push('/')
      }
    }, function (err) {
      console.log(err)
    })
  },
  getUser (context, name) {
    context.$http.get('v1/user/' + name).then(function (res) {
      let success = res.data.success
      if (success) {
        let data = res.data.data
        context.score = data.score
      } else {
        alert('Something Wrong!')
        this.$router.push('/')
      }
    }, function (err) {
      console.log(err)
    })
  }
}
