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
        console.log(data)
      } else {
        console.log('Err')
      }
    }, function (err) {
      console.log(err)
    })
  }
}
