var help = new Vue({
    el:".help",
    data:{
      helpArr:[]
          ,
        isMore:[],
    },
    mounted(){
        for(var i = 0;i < this.helpArr.length;i++){
            this.isMore[i] = false;
        }
        var that = this;
        axios.get("../json/page3.json").then(
            function (response) {
                console.log(response.data.helpArr);
                that.helpArr = response.data.helpArr;
            },
            function (err) {}
        );
        console.log(this.helpArr)
    },
    methods:{
        change:function (index) {
            // this.isMore[index] = !this.isMore[index];
            // console.log(this.isMore[index])
            //不能通过直接修改数组的值控制v-for生成的数组中的true 或 false
            this.$set(this.isMore,index,!this.isMore[index]);
                console.log(this.helpArr[0].isMore)

        }
    }
})