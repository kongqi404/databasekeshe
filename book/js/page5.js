var page5 = new Vue({
  el: ".login_box",
  data: {
    us_name: "",
    password_1: "",
    password_2: "",
    error: "",
    isError: false,
    enterPW: "请再次输入密码：",
  },
  methods: {
    errorF: function () {
      if (this.password_1 != "" && this.password_2 != "") {
        if (this.password_1 !== this.password_2) {
          this.isError = true;
        }
      }
      if (this.password_1 != "" && this.password_2 != "") {
        if (this.password_1 === this.password_2) {
          this.isError = false;
        }
      }
      if (this.password_2 === "") {
        this.isError = false;
      }
      this.error = this.isError ? "has-error" : "";
      this.enterPW = this.isError ? "两次输入的密码不一致" : "请再次输入密码：";
    },
    click: function () {
      if (this.us_name === "") {
        alert("请先输入用户名信息！");
      } else if (this.password_1 === "") {
        alert("请先输入密码！");
      } else if (this.password_2 === "") {
        alert("请先再次输入密码以确认！");
      } else if (this.password_2 !== "" && this.isError === true) {
        alert("两次输入的密码不一致，请检查！");
      } else {
        alert("注册失败，并且不想告诉你为啥失败！");
      }
    },
  },
});
