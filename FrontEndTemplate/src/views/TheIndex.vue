<template>
  <div id="TheIndex" class="container">
    <span>{{listArticle}}</span>
    <router-link to="/movie">movie</router-link>
    <router-link to="/TheEcharts">TheEcharts</router-link>
    <router-link to="/TheArticle">TheArticle</router-link>
    <router-link to="/TheLogin">TheLogin</router-link>
    <router-link to="/TheWs">TheWs</router-link>
    <div id="main">main</div>
  </div>
</template>
<script>


export default {
  name: 'TheIndex',
  metaInfo:{
    title: 'index'
  },
  data:()=>({
        listOne:[
        {name:"Servers",children:[
          {name:"192.168.41.11",children:[
            {name:"P05",value:false},
            {name:"P06",value:true},
            {name:"P07",value:true},
            {name:"P08",value:true}]
          },
          {name:"192.168.41.41",children:[
            {name:"P13",value:true},
            {name:"P14",value:true}]
          },
          {name:"192.168.41.33",children:[
            {name:"X03",value:true},
            {name:"X12/X13",value:true},
            {name:"others",children:[
              {name:"192.168.41.61",children:[{name:"P01",value:false}]},
              {name:"192.168.41.62",children:[{name:"P04",value:false}]}]
            }]
          }
        ]},
      ],
  }),
  computed: {
    listArticle(){
      return this.$store.states.listArticle
    }
  },
  methods:{
        fDrawChart(){
      // 基於準備好的 DOM，初始化 echarts 實例
      let myChart = this.$echarts.init(document.getElementById("main"))
      let vm = this
      let option = {
        tooltip: {    //提示框组件
            trigger: 'item',    //触发类型，默认：item（数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用）。可选：'axis'：坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用。'none':什么都不触发。
            triggerOn: 'mousemove'    //提示框触发的条件，默认mousemove|click（鼠标点击和移动时触发）。可选mousemove：鼠标移动时，click：鼠标点击时，none：        
          },
        series: [    //系列列表
        {
          type: 'tree',    //树形结构

                data: vm.listOne,    //上面从flare.json中得到的数据

                top: '1%',       //距离上
                left: '2%',      //左
                bottom: '1%',    //下
                right: '22%',    //右的距离

                symbolSize: 12,   //标记的大小，就是那个小圆圈，默认7

                label: {         //每个节点所对应的标签的样式
                  normal: {
                        position: 'left',       //标签的位置
                        verticalAlign: 'middle',//文字垂直对齐方式，默认自动。可选：top，middle，bottom
                        align: 'right',         //文字水平对齐方式，默认自动。可选：top，center，bottom
                        fontSize: 12             //标签文字大小
                      }
                    },

                leaves: {    //叶子节点的特殊配置，如上面的树图示例中，叶子节点和非叶子节点的标签位置不同
                  label: {
                    normal: {
                      position: 'right',
                      verticalAlign: 'middle',
                      align: 'left'
                    }
                  }
                },

                expandAndCollapse: true,    //子树折叠和展开的交互，默认打开
                animationDuration: 550,     //初始动画的时长，支持回调函数,默认1000
                animationDurationUpdate: 750//数据更新动画的时长，默认300
              }
              ]
            }
      // 使用剛指定的配置和數據顯示圖表
      myChart.setOption(option); 
    }
  },
  mounted(){
    this.fDrawChart()
   }
};
</script>
<style lang="scss" scoped>
@import "@/assets/style/style.scss";
 #main{
 width:600px;
 height:400px;
 background-color:#DCDCDC;
}

</style>