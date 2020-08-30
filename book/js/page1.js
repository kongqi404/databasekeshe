var classS = new Vue({
  el: ".all_class",
  data: {
    class_inf:[],
    classOn: 0,
    isSelect: [true, false, false],
    isShowSelect: true,
  },
  methods: {
    getValue: function () {
      var that = this;
      axios.get("../json/page1.json").then(
          function (response) {
            console.log(response.data.class_inf);
            that.class_inf = response.data.class_inf;

          },
          function (err) {}
      );
    },
    select1: function () {
      this.classOn = 0;
      if (this.isSelect[0] != true) {
        for (var i = 0; i < this.isSelect.length; i++) {
          this.isSelect[i] = false;
        }
        this.isSelect[0] = true;
      }
    },
    select2: function () {
      this.classOn = 1;
      if (this.isSelect[1] != true) {
        for (var i = 0; i < this.isSelect.length; i++) {
          this.isSelect[i] = false;
        }
        this.isSelect[1] = true;
      }
    },
    select3: function () {
      this.classOn = 2;
      if (this.isSelect[2] != true) {
        for (var i = 0; i < this.isSelect.length; i++) {
          this.isSelect[i] = false;
        }
        this.isSelect[2] = true;
      }
    },
    nextSelect: function () {
      for (var i = 0; i < this.isSelect.length; i++) {
        if (this.isSelect[i] === true) {
          if (i === 0) {
            this.select2();
            return;
          }
          if (i === 1) {
            this.select3();
          }
        }
      }
    },
    previous: function () {
      for (var i = this.isSelect.length - 1; i >= 0; i--) {
        if (this.isSelect[i] === true) {
          if (i === 2) {
            this.select2();
            return;
          }
          if (i === 1) {
            this.select1();
          }
        }
      }
    },
  },
  mounted() {
    window.getValue = this.getValue;
  },
});

getValue();