<template>
  <div class="wrapper">
    <div class="top">
      <span class="price">￥{{ GoodDetailsList.price }}</span>
      <span class="yuanjia">￥{{ GoodDetailsList.yuanjia }}</span>
      <span class="pindan">已拼{{ GoodDetailsList["pingdanNumber"] }}件</span>
      <div class="desc">{{ GoodDetailsList.tital }}</div>
      <span class="tuihuo">{{ GoodDetailsList.tuihuo }}</span>
    </div>
    <div class="box">
      <span>{{ GoodDetailsList.Introduction }}</span>
      <span class="arrow"> > </span>
    </div>
    <div class="box">
      <span>{{ GoodDetailsList["pingdanIng"] }}人正在拼单，可直接参与</span>
      <span class="arrow">查看更多 > </span>
    </div>
    <!--    正在拼单列表-->
    <div v-for="item in GoodDetailsList.pingdanList" :key="item.userId" class="box user">
      <img alt=""
           class="user-img"
           :src="item.userImg">
      <span class="user-name">{{ item.userName }}</span>
      <div class="user-button">去拼单</div>
      <div class="number">还差1人拼成</div>
    </div>
    <!--        评价栏-->
    <div class="box">
      <span>商品评价({{ GoodDetailsList.commentNumber }})</span>
      <span class="arrow"> 查看全部 ></span>
    </div>
    <div class="pinglun">
      <div class="good green">正品(115)</div>
      <div class="good">系统流畅(158)</div>
      <div class="good">手机很好(141)</div>
    </div>
    <!--    评价列表-->
    <div v-for="item in GoodDetailsList.commentList" :key="item.user_id" class="box pinglun-box">
      <img alt=""
           class="user-img"
           :src="item.userImg">
      <span>{{ item.userName }}</span>
      <div class="content">{{ item.comment }}</div>
    </div>
    <!--    晒图栏-->
    <div class="box">
      <span>精品晒图({{ GoodDetailsList.photoShowNumber }})</span>
      <span class="arrow"> 查看全部 ></span>
    </div>
    <div>
      <div v-for="item in GoodDetailsList.photoShow" :key="item.id" class="saitu">
        <img alt=""
             :src="item.imgUrl">
      </div>
      <div class="xiabiao">
        共{{ GoodDetailsList.photoShowNumber }}张
      </div>
    </div>
    <!--    行家心得-->
    <div class="box">
      <span>行家心得(5)</span>
      <span class="arrow"> 查看全部 ></span>
    </div>
    <div v-for="item in GoodDetailsList.expertReviews" :key="item.userId" class="box hangjiaxingde">
      <img alt=""
           class="user-img"
           src="https://avatar2.pddpic.com/a/Q0dHOGtSSWhKdzhEYlFzaUc5Mk50TU9NQmtIaW1wQ2tLUT09djA0-1634830853?imageMogr2/thumbnail/100x">
      <span>{{ item.userName }}</span>
      <div class="content">{{ item.comment }}</div>
      <div class="exhibition"><img alt=""
                                   :src="item.goodsImg1">
      </div>
      <div class="exhibition"><img alt=""
                                   :src="item.goodsImg2">
      </div>
      <div class="exhibition"><img alt=""
                                   :src="item.goodsImg3">
      </div>
    </div>
    <div class="box">
      <span>该商品所属商家评价</span>
      <span class="arrow"> ></span>
    </div>
    <div class="pinglun">
      <div v-for="item in GoodDetailsList.merchantEvaluation" :key="item.id" class="good"
           v-bind:class="{green:item.id === 1}">{{ item.evaluation }}
      </div>
    </div>
    <div class="dianpu">
      <img alt=""
           :src="GoodDetailsList.storeImg">
      <b>{{ GoodDetailsList.storeName }}</b>
      <div>进店逛逛</div>
    </div>
    <div class="box zonghepingjia">
      <span>综合体验：</span>
      <img
        alt=""
        src="https://promotion.pddpic.com/upload/2020-04-21/46e1fd46-df2b-40eb-8446-cfe5f5d732ab.png?imageView2/2/w/1300/q/80"><img
      alt=""
      src="https://promotion.pddpic.com/upload/2020-04-21/46e1fd46-df2b-40eb-8446-cfe5f5d732ab.png?imageView2/2/w/1300/q/80"><img
      alt=""
      src="https://promotion.pddpic.com/upload/2020-04-21/46e1fd46-df2b-40eb-8446-cfe5f5d732ab.png?imageView2/2/w/1300/q/80"><img
      alt=""
      src="https://promotion.pddpic.com/upload/2020-04-21/46e1fd46-df2b-40eb-8446-cfe5f5d732ab.png?imageView2/2/w/1300/q/80"><img
      alt=""
      src="https://promotion.pddpic.com/upload/2020-04-21/005acc1c-ef80-408d-8da7-9ec78cad21c7.png?imageView2/2/w/1300/q/80">
      <span class="arrow"> 商品数量：2 已拼：10万+件</span>
    </div>
    <img v-for="item in GoodDetailsList.exhibitionList" :key="item.id"
         alt=""
         :src="item.imgUrl">
    <!--    <img-->
    <!--      alt=""-->
    <!--      src="https://img.pddpic.com/mms-material-img/2021-09-15/d2b9bacc-a103-4617-8274-b968c7f8b4b2.jpeg?imageView2/2/w/1300/q/80">-->
  </div>
</template>

<script>
export default {
  name: 'GoodMiddle',
  props: {
    GoodDetailsList: Object
  },
  data() {
    return {}
  }

}
</script>

<style lang="stylus" scoped>
.wrapper
  padding .5rem

  .top
    height 0
    padding-bottom 23%
    overflow hidden
    position relative
    margin-top .5rem

    .price
      font-size 1.5rem
      color #e02e24
      float left

    .yuanjia
      float left
      font-size .7rem
      color #cccccc
      text-decoration line-through
      margin-top .2rem

    .pindan
      float right
      font-size .8rem

    .desc
      margin-top 1.6rem
      font-weight bold

    .tuihuo
      position absolute
      right 6rem
      top 3rem
      background-color #25b513
      color white
      font-size .8rem

  .box
    height 0
    overflow hidden
    padding-bottom 8%
    border-bottom .07rem soild #eeeeee
    font-size 0.8rem
    margin-top .3rem
    width 100%

    .arrow
      float right
      font-size .7rem
      color #9c9c9c

  .pinglun
    .good
      height 2rem
      min-width 5rem
      max-width 8rem
      text-align center
      font-size .7rem
      font-weight bold
      margin .2rem 0 .5rem 1rem
      float left
      background-color #fceae9
      line-height 1rem
      //margin-left 1.5rem
      border-radius .4rem
      padding .5rem

    .green
      background-color #daf8cd

  .user
    padding-bottom 10%
    line-height 2rem
    .user-name
      margin-left 0.5rem
      margin-right 0.5rem
      font-size 0.9rem

    .user-img
      width 2rem
      height 2rem
      border-radius 50%
      float left

    .user-button
      float right
      width 4rem
      height 2rem
      text-align center
      background-color #e02e24
      color white
      border-radius 0.5rem
      line-height 29px

    .number
      float right
      //margin-top 0.2rem
      font-size 1rem
      margin-right 0.4rem

  .pinglun-box
    width 100%
    padding-bottom 20%

    .user-img
      width 2rem
      height 2rem
      border-radius 50%
      float left
      margin-right 0.5rem

    .content
      clear both
      color #58595b
      margin-top 1.5rem

    span
      position relative
      top .4rem

  img
    width 100%

  .saitu
    display inline-block
    position relative
    width 22.5%
    margin-left 1.5%
    height 5rem

    img
      height 5rem
      display inline-block

  .xiabiao
    padding 0
    margin 0
    position relative
    right 0.91rem
    bottom 1.6rem
    float right
    font-size .3rem
    color white
    background-color #323232
    width 3.2rem
    text-align center

  .hangjiaxingde
    padding-bottom 20%
    clear float
    height 13rem

    .user-img
      width 2rem
      height 2rem
      border-radius 50%
      float left
      margin-right 0.5rem

    .content
      clear both
      color #58595b
      margin-top 1.5rem

    span
      position relative
      top .4rem

    .exhibition
      width 30%
      height 7rem
      overflow hidden
      display inline-block
      margin .2rem

  // TODO: 修改样式

  .dianpu
    display inline-block
    width 100%
    position: relative
    font-size 0.8rem

    div
      display inline-block
      position: absolute
      right 1%
      top 25%
      border #323232 1px solid
      border-radius .2rem
      padding .2rem

    b
      position: absolute
      left 16%
      top 25%

    img
      width 3rem

  .zonghepingjia
    display inline-block
    height 5rem
    width 100%

    img
      width .8rem
</style>
