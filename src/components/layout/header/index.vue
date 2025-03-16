<template>
  <header class="header">
    <div class="homePage">
      <div class="blogLoge">
        <a class="site-name" href="/" data-pjax-state>
          Sakura
          <img :src="SakuraHome" alt="">
        </a>
      </div>
    </div>
  </header>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      SakuraHome: require('@/assets/img/header/sakuraHome.png'),
      navigationHomePage: require('@/assets/img/navigation-homePage.png'),
    }
  },
  methods: {

  }
}

</script>

<style lang="scss" scoped>
.header {
  display: flex;
  width: 100%;
  height: 60px;
  // background-color: red;

  .homePage {
    display: flex;
    align-items: center;
    padding: 0 20px 0 20px;
    cursor: default;

    .blogLoge {
      ::before {
        content: "\e607";
        font-family: "iconfont";
        // background: url('@/assets/img/navigation-homePage.png') no-repeat;
        background-color: rgb(57, 197, 187);
        border-radius: 8px;
        -webkit-border-radius: 8px;
        transition: .3;
        -webkit-transition: .3;
        display: inline-block;
        width: 100%;
        height: 100%;
        margin-left: 5px;
        animation: blink 1s infinite;
        position: absolute;
        top: 0;
        right: 0;
        color: #ffb7c5;
        box-shadow: 0 0 5px rgb(57, 197, 187) !important;
        text-align: center;
        opacity: 0;
        line-height: 35px;
        font-size: 20px;
      }
    }

    .site-name {
      display: flex;
      align-items: center;
      text-decoration: none;
      font-size: 30px;
      font-weight: bold;
      background: linear-gradient(90deg, #ffb7c5, #ffd1dc, #ffb7c5);
      background-size: 200% auto;
      color: transparent;
      -webkit-background-clip: text;
      background-clip: text;
      animation: gradientAnimation 3s linear infinite;
      position: relative;

      &:hover::before {
        opacity: 1;
        scale: (1.03);
      }
    }

    img {
      width: 30px;
      height: 30px;
    }
  }
}

@keyframes gradientAnimation {
  0% {
    background-position: 0% 50%;
  }

  100% {
    background-position: 100% 50%;
  }
}
</style>