var form = new Vue({
  el: "#login",
  data: {
    login_inf: {
      //csrfmiddlewaretoken: "{{csrf_token}}",
      user_name: "",
      password: "",
      is_remember: false,
    },
  },
  methods: {
    login: function () {
      console.log(this.login_inf);
      axios
        .post("login", this.login_inf)
        .then(function (response) {
          console.log(response);
          if (response.code === 200) {
            alert("登录失败，请重试！");
          } else {
            location.href = "/page3";
          }
        })
        .catch(function (err) {
          console.log(err);
        });
    },
  },
});
