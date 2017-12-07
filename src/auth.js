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
        console.log('Error')
      }
    }, function (err) {
      console.log(err)
    })
  },
  getTopic (context, id, param) {
    context.$http.get('v1/topic/' + id, { params: param }).then(function (res) {
      let success = res.data.success
      if (success) {
        context.topic = res.data.data
        context.create = context.topic.create_at.split('T')[0]
        console.log(context.topic)
      }
    }, function (err) {
      console.log(err)
    })
  }
}
