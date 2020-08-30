var app = new Vue({
  el: "#body",
  data: {
    b_type: [],
    b_arr: [],
    b_keyword: "",
  },
  methods: {
    getValue: function () {
      var that = this;
      axios.get("/static/json/page2.json").then(
        function (response) {
          console.log(response.data.book_data);
          that.b_arr = response.data.book_data;
        },
        function (err) {}
      );
    },

    select: function () {
      var that = this;
      axios
        .get("", {
          params: {
            // 通过作者或者书名查询
            keyword: that.b_keyword,
          },
        })
        .then(function (request) {})
        .catch(function (err) {
          console.log("error");
          console.log(that.b_keyword);
        });
    },
    borrow: function (b_id) {
      var that = this;
      axios
        .post("", {
          book_id: b_id,
          csrfmiddlewaretoken: "{{csrf_token}}",
        })
        .then(function (request) {});
    },
  },
  mounted() {
    window.getValue = this.getValue;
    // window.match = this.sortByMath;
  },
});

getValue();
