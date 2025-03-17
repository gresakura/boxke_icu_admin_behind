<template>
  <div class="typewriter">
    <h1 class="nameBlog">sakura博客</h1>
    <h3>
      <span id="box" ref="typewriter"></span>
    </h3>
  </div>
</template>

<script>
import Typed from 'typed.js';


export default {
  name: "Typewriter",
  data() {
    return {
      typedInstance: null
    }
  },
  mounted() {
    this.typedInstance = new Typed(this.$refs.typewriter, {
      strings: [
        '探索未来的无限可能！',
        '发现生活的美好，记录每一段旅程！',
        '成为更好的自己，从今天开始!',
        '用美食治愈生活，用味道记录时光！',
        '用文字点亮心灵，用故事连接世界！',
        '用音乐传递情感，用旋律记录人生！',
      ],
      typeSpeed: 50, // 打字速度
      backSpeed: 25, // 回退速度
      loop: true, // 是否循环
      showCursor: true, // 是否显示光标
      cursorChar: '|', // 光标字符
      attr: null, // 自定义属性
      contentType: 'html', // 文本类型
      startDelay: 0, // 开始延迟
      backDelay: 500, // 回退延迟
      loopCount: false, // 循环次数，false为无限循环
      fadeOut: false, // 淡出效果
      fadeOutClass: 'typed-fade-out', // 淡出效果的CSS类
      fadeOutDelay: 600, // 淡出延迟
      beforeType: null, // 打字前的回调函数
      afterType: null, // 打字后的回调函数
      beforeBackSpace: null, // 回退前的回调函数
      afterBackSpace: null // 回退后的回调函数
    });
  },
  beforeDestroy() {
    if (this.typedInstance) {
      this.typedInstance.destroy();
    }
  },
  methods: {

  }


}
</script>

<style lang="scss" scoped>
.typewriter {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 600px;

  .nameBlog {
    margin-top: -5px;
    color: #fff;
    text-align: center;
  }

  h3 {
    color: #fff;
  }

  .nameBlog,h3 {
    z-index: 9;
    margin-top: -5px;
  }

  span.mark {
    border-right: 2px solid #fff;
    animation: blink 0.6s step-end infinite;
  }

  @keyframes blink {

    from,
    to {
      border-color: transparent;
    }

    50% {
      border-color: #fff;
    }
  }
}
</style>