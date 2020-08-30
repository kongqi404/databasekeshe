var app = new Vue({
  el: "#body",
  data: {
    b_type:[],
    b_arr: [],

  },
  methods: {
    getValue: function () {
      var that = this;
      axios.get("../json/page2.json").then(
        function (response) {b_type:
          console.log(response.data.book_data);
          that.b_arr = response.data.book_data;
        },
        function (err) {}
      );
    },

    select: function () {
      this.newsArr = [];
      if (this.sArr.length < this.temp.length) {
        this.sArr = this.temp;
      }
      if (this.sName != "") {
        for (var i = 0; i < this.sArr.length; i++) {
          if (this.sArr[i].sName === this.sName) {
            this.newsArr.push(this.sArr[i]);
          }
        }
        if (this.newsArr.length !== 0) {
          this.temp = this.sArr;
          this.sArr = this.newsArr;
          this.newsArr = this.temp;
          // this.sArr = this.temp;
        } else {
          alert("查询无果！");
        }
      }
      // } else this.sArr = this.temp;
      console.log(this.sArr);
      this.sortByAdd();
    },

    addStu: function () {
      if (this.addArr.sC == null) {
        alert("添加失败，请输入正确的信息！");
        this.addArr = [
          { sName: "", sC: 0, sM: 0, sE: 0, sP: 0, sCm: 0, sB: 0, sAdd: 0 },
        ];
      } else {
        console.log(this.addArr);
        this.sArr.push(this.addArr);
        this.add();
        this.sortByAdd();
        this.$forceUpdate();
        this.addArr = [
          { sName: "", sC: 0, sM: 0, sE: 0, sP: 0, sCm: 0, sB: 0, sAdd: 0 },
        ];
      }
    },
  },
  mounted() {
    window.getValue = this.getValue;
    // window.match = this.sortByMath;
  },
});

getValue();
