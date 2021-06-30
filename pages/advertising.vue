<template>
  <div>
    <div class="sectionPurple">
      <div class="label">ＭeLoop廣告投放</div>
      <div class="plainText">
        還在苦惱自己的產品沒有年輕人認識嗎？恭喜你！在 Ｍe Loop
        內有100%的活耀大學生。現在您可以選擇投放廣告來推廣您的重要產品或活動訊息，讓內容出現在顯眼的版位頁面以及
        Ｍe Loop 經營的相關粉絲團，進而獲得更多的關注瀏覽與效益喔！此外，在 Ｍe
        Loop
        內擁有區域型廣告的特性，可針對想曝光的學校進行篩選，達到精準行銷的效果。想讓品牌受眾年輕化嗎？那就交給
        Ｍe Loop 吧！
      </div>
    </div>
    <div class="sectionBlue marginTop">
      <AdvertisingCard
        class="advCard"
        :title="advertiseOne.title"
        :img="advertiseOne.img"
        :text="advertiseOne.text"
        :price="advertiseOne.price"
      />
      <AdvertisingCard
        class="advCard"
        :title="advertiseTwo.title"
        :img="advertiseTwo.img"
        :text="advertiseTwo.text"
        :price="advertiseTwo.price"
      />
    </div>
  </div>
</template>

<script>
import { ADVERTISEONE, ADVERTISETWO } from "@/static/advertise/adv";
export default {
  data() {
    return {
      advertiseOne: ADVERTISEONE,
      advertiseTwo: ADVERTISETWO,
    };
  },
};
</script>

<style scoped>
.label {
  font-size: 28px;
  line-height: 41px;
  letter-spacing: 0.05em;
  font-family: Noto Sans TC;
  color: #353b55;
  font-weight: 700;
}

.plainText {
  font-size: 18px;
  line-height: 32px;
  font-weight: 400;
  text-align: left;
  font-family: Noto Sans TC;
  color: #353b55;
  margin-top: 20px;
}

.marginTop{
  margin-top: 76px;
}

.advCard {
  padding: 32px 24px;
  margin-bottom: 32px;
}
</style>
