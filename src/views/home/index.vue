<template>
  <div class="container">
    <Typewriter></Typewriter>
    <div class="SlidingEffect">
      <div class="mouse"></div>
      <i class="el-icon-arrow-down bottomEffect firstIcon "></i>
      <i style="margin-top: -15px;" class="el-icon-arrow-down bottomEffect secondIcon "></i>
    </div>
  </div>
</template>

<script>

import Typewriter from '@/components/layout/Typewriter';
export default {
  components: {
    Typewriter
  },
  data() {
    return {
      userForm: {
        username: '',
        password: '',
      },

    };
  },
  created() {

  },

  methods: {


    /**
 * 登入
 * @param
 * @return
 */
    login() {
      this.$router.push('/home')
    }
  },
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;

  .SlidingEffect {
    display: flex;
    // justify-content: center;
    justify-content: flex-end;
    flex-direction: column;
    align-items: center;
    height: 116px;
    // background: red;

    .mouse {
      position: relative;
    }

    .bottomEffect {
      color: #ffb7c5;
      font-size: 20px;
      font-weight: bold;
      z-index: 9;
      // animation: HideBelow 1s forwards infinite linear;
    }

    .firstIcon {
      // animation: fadeIn 1s ease-in-out infinite linear;
      animation: fadeIn 1s forwards infinite linear;
      /* 第一个元素显示动画 */
    }

    .secondIcon {
      // animation: fadeIn 1s ease-in-out 1s forwards infinite linear;
      animation: fadeIn 2s .3s infinite;
      /* 第二个元素显示动画，延迟1秒 */
    }

    .mouse::before {
      content: "";
      display: block;
      width: 30px;
      height: 45px;
      border: 3px solid #ffb7c5;
      border-radius: 35%;
    }

    .mouse::after {
      content: "";
      display: block;
      position: absolute;
      top: 5px;
      left: 44%;
      width: 5px;
      height: 7px;
      border-radius: 38%;
      box-shadow: 0px -5px 3px rgb(150, 150, 150);
      background: #fff;
      animation: sliding 1s forwards infinite linear;
    }
  }
}

@keyframes fadeIn {
  0% {
    // transform: translateY(0px);
    opacity: 0;
  }

  50% {
    // transform: translateY(10px);
    opacity: 1;
  }

  100% {
    // transform: translateY(20px);
    opacity: 0;
  }
}

@keyframes fadeOut {
  0% {
    // transform: translateY(0px);
    opacity: 0;
  }

  50% {
    // transform: translateY(10px);
    opacity: 1;
  }

  100% {
    // transform: translateY(20px);
    opacity: 0;
  }
}

@keyframes sliding {
  0% {
    transform: translateY(0px);
    opacity: 0;
  }

  50% {
    transform: translateY(10px);
    opacity: 1;
  }

  100% {
    transform: translateY(20px);
    opacity: 0;
  }
}

@keyframes HideBelow {
  0% {
    // transform: translateY(0px);
    opacity: 0;
  }

  50% {
    // transform: translateY(10px);
    opacity: 1;
  }

  100% {
    // transform: translateY(20px);
    opacity: 0;
  }
}

.cent {
  display: flex;
  justify-content: center;
}
</style>
