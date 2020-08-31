var classification = new Vue({
  el: ".classification",
  data() {
    return{
      info:{
         classification: [],
          book_arr: [],
          select: 1,
      },
  }
  },
  methods: {
    getValue: function (index) {
      var that = this;
      that.select = index;
      axios
        .post("get_class_value", {
          classification: index+1,
        })
        .then(function (response) {
          console.log(response.data.books)
          that.info.book_arr = response.data.books;
          console.log(response);
        });
    },
    borrow: function (b_id,is_borrowable) {
      var that = this;
      if(is_borrowable){
        axios
        .post("borrow", {
          book_id: b_id,
        })
        .then(function (request) {
          console.log(request);
          if(request.data.code === 100){
            alert("借阅成功，请记得及时归还！");
             location.href="page1";
          }else{
            alert("借书失败！")
          }

        })
        .catch(function (err) {
          console.log(err);
        });
      }

    },
  },
  // 页面加载时执行
  created: function () {
    //请求获取分类信息
    var that = this;
    axios
      .get("classification")
      .then(function (request) {

        console.log(request.data.b_type);
        that.info.classification = request.data.b_type;
        console.log(this.info.classification);
      })
      .catch(function (err) {
        console.log(err);
      });


      axios
        .get("all_books", {

        })
        .then(function (response) {
          console.log(response.data.book_data)
          that.info.book_arr = response.data.book_data;
          console.log(response);
        });
  },
});
