<template>
  <header class="header">
    <div class="homePage">
      <div class="blogLoge">
        <a class="site-name" href="/" data-pjax-state>
          Sakura
          <img :src="SakuraHome" alt="">
        </a>
      </div>
      <nav>
        <el-link style="color: #ffb7c5; font-size: 20px; font-weight: bold; padding: 0 20px;" v-for="(items, index) in navList" :key="index" :underline="false" >{{ items.name }} <i class="
el-icon-arrow-down" v-if="items.children"></i></el-link>
      </nav>
      <div class="Player_Login">
        <div class="audio">
          <img src="" alt="">
          <div class="audio_widget">
            <div class="audio_name">周杰伦周杰伦周</div>
            <div @mouseenter="showSoundHover" @mouseleave="showSoundHover" class="widget_btn">
              <i class="el-icon-caret-left"></i>
              <i v-if="PlayPause" style="padding: 0 10px;" @click="PlayPauseBtn" class="el-icon-video-pause"></i>
              <i v-else style="padding: 0 10px;" @click="PlayPauseBtn" class="el-icon-video-play"></i>
              <i class="el-icon-caret-right"></i>
              <div v-show="btnShow"  style="margin-left: 10px;">
                <img v-if="soundShow" @click="soundBtn" :src="sound" alt="">
                <img v-else @click="soundBtn" :src="soundTurningOff" alt="">
              </div>
            </div>
          </div>
          <img style="background: transparent; margin-left: 50px;" :src="musicList" alt="">
        </div>
        <div class="login">
          <img :src="loginImg" alt="">
        </div>
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
      sound: require('@/assets/img/audio/sound.png'),
      soundTurningOff: require('@/assets/img/audio/soundTurningOff.png'),
      loginImg: require('@/assets/img/login.png'),
      musicList: require('@/assets/img/audio/musicList.png'),
      PlayPause: true, // 控制播放暂停按钮状态
      soundShow: true, // 控制声音切换按钮状态
      btnShow: false, // 控制声音切换
      showSound: false, // 控制声音显示的隐藏状态
      navList: [
          {
            name: '首页',
            path: '/homePage'
          },
          {
            name: '文章',
            path: '/wej',
            children: []
          },
          {
            name: '休闲',
            path: '/archives',
            children: []
          },
          {
            name: '社交',
            path: '/tags',
            children: []
          },
          {
            name: '网站',
            path: '/categories',
            children: []
          },
          {
            name: '个人',
            path: '/aboutMe',
            children: []
          }
        ],
      activeIndex: '1',
    }
  },
  created() {

  },
  mounted() {

  },
  methods: {
    PlayPauseBtn() {
      this.PlayPause = !this.PlayPause;
    },
    soundBtn() {
     this.soundShow = !this.soundShow; 
    },
    showSoundHover() {
      this.btnShow = !this.btnShow;
    },

  }
}

</script>

<style lang="scss" scoped>
.header {
  display: flex;
  width: 100%;
  height: 60px;
  .homePage {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px 0 20px;
    cursor: default;

    .blogLoge {
      ::before {
        content: "\e602";
        font-family: "iconfont";
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

    .el-menu.el-menu--horizontal {
      border-bottom: none;
    }

    .Player_Login {
      display: flex;
      z-index: 9;
      .audio {
        display: flex;
        align-items: center;
        height: 50px;
        img {
          width: 35px;
          height: 35px;
          border-radius: 50%;
          background: white;
        }
        .audio_widget {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          // align-items: center;
          width: 120px;
          height: 45px;
          color: white;
          font-weight: bold;
          margin-left: 15px;
          .audio_name {
            font-size: 13px;
          }
          .widget_btn {
            display: flex;
            height: 25px;
            font-size: 25px;
            img {
              background: transparent;
              width: 15px;
              height: 15px;
            }
          }
        }
      }
      .login {
        margin-left: 10px;
      }
    }
  }
}

a:hover {
  text-decoration: none;
}

.el-link.el-link--default:hover {
  color: white !important;
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