<template>
  <div class="mui-content">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <ul class="mui-table-view mui-grid-view mui-grid-9">
          <li v-for="item in page" :key="item.id" class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <img class="icon-img" :src="item.imgUrl" alt="">
            <div class="mui-media-body">{{item.content}}</div></a></li>
        </ul>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      iconList: [
        {
          'id': '001',
          'imgUrl': 'https://img.pddpic.com/goods/2020-04-29/798a43c5ae721a5d3dbbcbd5f95488db.png?imageView2/2/w/117/q/80',
          'contennt': '限时秒杀'
        },
        {
          'id': '002',
          'imgUrl': 'https://img.pddpic.com/goods/2020-03-08/2723bae18ca29e72c195562bfdace6cd.png?imageView2/2/w/117/q/80',
          'contennt': '断货清仓'
        },
        {
          'id': '003',
          'imgUrl': 'https://img.pddpic.com/goods/2020-04-19/ecdc795c12e256a869a883f247ccdc5d.png?imageView2/2/w/117/q/80',
          'contennt': '发现好货'
        },
        {
          'id': '004',
          'imgUrl': 'https://img.pddpic.com/goods/2020-01-14/b39df4af9b17ba0d063c04da0aea85aa.png?imageView2/2/w/117/q/80',
          'contennt': '多多果园'
        },
        {
          'id': '005',
          'imgUrl': 'https://img.pddpic.com/goods/2020-01-14/8ed387bd5d07f45ce6fee30a0ab80e80.png?imageView2/2/w/117/q/80',
          'contennt': '9块9特卖'
        },
        {
          'id': '006',
          'imgUrl': 'https://img.pddpic.com/goods/2020-01-14/0fab520471880b5728fb7150d77f5390.png?imageView2/2/w/117/q/80',
          'contennt': '充值中心'
        },
        {
          'id': '007',
          'imgUrl': 'https://img.pddpic.com/goods/2020-02-26/f9e3069d2e461cd5f5eb7d77ffce9d9d.png?imageView2/2/w/117/q/80',
          'contennt': '医药馆'
        },
        {
          'id': '008',
          'imgUrl': 'https://img.pddpic.com/goods/2020-02-24/1ac41ebf88457e29ac4f8b5a01e72f1d.png?imageView2/2/w/117/q/80',
          'contennt': '签到'
        },
        {
          'id': '009',
          'imgUrl': 'https://commimg.pddpic.com/oms_img_ng/2020-06-05/6709569b-84e6-4556-b82d-4c9f32840257.png?imageView2/2/w/117/q/80',
          'contennt': '多多赚大钱'
        },
        {
          'id': '010',
          'imgUrl': 'https://commimg.pddpic.com/oms_img_ng/2020-12-04/c1a20306-bdb3-42c5-b0bb-e4018ce9f4d6.png?imageView2/2/w/117/q/80',
          'contennt': '行家帮你选'
        },
        {
          'id': '011',
          'imgUrl': 'https://img.pddpic.com/goods/2020-04-29/798a43c5ae721a5d3dbbcbd5f95488db.png?imageView2/2/w/117/q/80',
          'contennt': '限时秒杀'
        },
        {
          'id': '012',
          'imgUrl': 'https://img.pddpic.com/goods/2020-03-08/2723bae18ca29e72c195562bfdace6cd.png?imageView2/2/w/117/q/80',
          'contennt': '断货清仓'
        },
        {
          'id': '013',
          'imgUrl': 'https://img.pddpic.com/goods/2020-04-19/ecdc795c12e256a869a883f247ccdc5d.png?imageView2/2/w/117/q/80',
          'contennt': '发现好货'
        },
        {
          'id': '014',
          'imgUrl': 'https://img.pddpic.com/goods/2020-01-14/b39df4af9b17ba0d063c04da0aea85aa.png?imageView2/2/w/117/q/80',
          'contennt': '多多果园'
        },
        {
          'id': '015',
          'imgUrl': 'https://img.pddpic.com/goods/2020-01-14/8ed387bd5d07f45ce6fee30a0ab80e80.png?imageView2/2/w/117/q/80',
          'contennt': '9块9特卖'
        },
        {
          'id': '016',
          'imgUrl': 'https://img.pddpic.com/goods/2020-01-14/0fab520471880b5728fb7150d77f5390.png?imageView2/2/w/117/q/80',
          'contennt': '充值中心'
        },
        {
          'id': '017',
          'imgUrl': 'https://img.pddpic.com/goods/2020-02-26/f9e3069d2e461cd5f5eb7d77ffce9d9d.png?imageView2/2/w/117/q/80',
          'contennt': '医药馆'
        },
        {
          'id': '018',
          'imgUrl': 'https://img.pddpic.com/goods/2020-02-24/1ac41ebf88457e29ac4f8b5a01e72f1d.png?imageView2/2/w/117/q/80',
          'contennt': '签到'
        },
        {
          'id': '019',
          'imgUrl': 'https://commimg.pddpic.com/oms_img_ng/2020-06-05/6709569b-84e6-4556-b82d-4c9f32840257.png?imageView2/2/w/117/q/80',
          'contennt': '多多赚大钱'
        },
        {
          'id': '020',
          'imgUrl': 'https://commimg.pddpic.com/oms_img_ng/2020-12-04/c1a20306-bdb3-42c5-b0bb-e4018ce9f4d6.png?imageView2/2/w/117/q/80',
          'contennt': '行家帮你选'
        }
      ]
    }
  },
  computed: {
    pages () {
      // 二维数组 -> pages[page1[0],page2[1]]
      // page1[0]类里面储存着iconList中的前十条数据
      // page2[1]类里面储存着iconList中的后十条数据
      var pages = []
      // 根据iconList中的数据量进行分类存放，前10条 -> page[0],后十条page[1]
      this.iconList.forEach((item, index) => {
        // page变量表示页码，他的值只有0或1，更具page的值把对应的数据放到二维数组对应小数组中
        var page = Math.floor(index / 10)
        // 容错处理，万一page的值不是0或1，则赋予一个空数组
        if (!pages[page]) {
          pages[page] = []
        }
        // 否则根据page的值把对应的数组放到二维数组对应的小数组中
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style scoped lang="stylus">
  .mui-content .mui-table-view
    margin-top 0
  .swipper-box >>> .swiper-pagination-bullet-active
    background #df2127
  .swipper-box{
    height : 0;
    padding-bottom : 31%;
    overflow: hidden;
  }
  .mui-content .mui-grid-view.mui-grid-9
    background  white
    border 0
  .mui-content ,mui-grid-vied.mui-grid-9 .mui-table-view-cell
    border 0
    padding 0
  .mui-content .mui-grid-view.mui-grid-9 .mui-col-xs-4
    width 20%
  .mui-table-view.mui-grid-view .mui-table-view-cell .icon-img
    width 70%
  .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body
    margin-top 0
    text-align center
    font-size 50%
  .mui-table-view.mui-grid-view .mui-table-view-cell
    padding-left 0
    padding-right 0
</style>
