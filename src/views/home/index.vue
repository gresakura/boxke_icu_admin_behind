<template>
  <div class="container">
    <div class="shady_deal"></div>
    <!-- <MeteorEffect></MeteorEffect> -->
    <div class="login_bj">
      <canvas ref="canvas" class="canvas"></canvas>
    </div>
    <layout-header />
  </div>
</template>

<script>
import LayoutHeader from '@/components/layout/Header';

export default {
  components: {
    LayoutHeader
  },
  data() {
    return {
      userForm: {
        username: '',
        password: '',
      },
      meteors: [], // 流星数组
      allstar: 40, // 流星数量
      canvas: null, // canvas 元素
      ctx: null, // canvas 上下文
    };
  },
  created() {

  },
  mounted() {
    this.initCanvas();
    this.init();
    this.animate();
  },
  methods: {
    initCanvas() {
      this.canvas = this.$refs.canvas;
      this.ctx = this.canvas.getContext('2d');
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    },
    /**
     * 初始化函数
     *
     * 在这个函数中，会遍历 this.allstar 次，每次调用 this.newmeteor() 方法。
     *
     * @returns void
     */
    init() {
      for (let i = 0; i < this.allstar; i++) {
        this.newmeteor();
      }
    },
    /**
     * 添加一个新的流星对象到meteors数组中
     */
    newmeteor() {
      // 向meteors数组中添加一个新的流星对象
      this.meteors.push({
        // 流星线条数组
        lines: [{
          // 随机生成流星线条的x坐标
          x: parseInt(Math.random() * this.canvas.width),
          // 随机生成流星线条的y坐标，位于画布高度的70%以内
          y: parseInt(Math.random() * this.canvas.height * 0.7),
        }],
        // 随机生成流星的寿命，最小值为100
        life: parseInt(Math.random() * 100) + 100,
        // 流星的生命周期初始值为0
        age: 0,
      });
    },
    /**
     * 绘制流星效果
     */
    draw() {
      // 清除画布
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      // 遍历所有流星
      for (let i = 0; i < this.meteors.length; i++) {
        const meteor = this.meteors[i];
        const lines = meteor.lines;

        // 遍历流星的线段
        for (let j = 0; j < lines.length; j++) {
          // 设置填充样式，根据线段在数组中的位置调整透明度
          this.ctx.fillStyle = `rgba(255,255,255,${j / lines.length})`;
          // 绘制线段上的每个点
          this.ctx.fillRect(lines[j].x, lines[j].y, 1, 1);
        }

        // 设置填充样式为黄色
        this.ctx.fillStyle = 'yellow';
        // 获取流星的最后一个点
        const star = lines[lines.length - 1];
        // 绘制流星的最后一个点，作为星星
        this.ctx.fillRect(star.x, star.y, 2, 2);

        // 判断流星的生命周期
        if (meteor.age <= meteor.life / 2) {
          // 如果流星年龄小于等于生命周期的一半，则在线段末尾添加一个新点
          lines.push({
            x: star.x + -1,
            y: star.y + 0.3,
          });
        } else {
          // 否则，移除线段的最前端点
          lines.shift();
        }

        // 增加流星的年龄
        meteor.age++;

        // 判断流星是否结束生命周期
        if (meteor.age >= meteor.life) {
          // 从数组中移除流星
          this.meteors.splice(i, 1);
          // 生成一个新的流星
          this.newmeteor();
          // 因为数组长度变化，需要调整索引
          i--;
        }
      }
    },
    animate() {
      setInterval(this.draw, 1);
    },

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

  .shady_deal {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);

    ::before {
      content: '';
      width: 100%;
      height: 100%;
    }
  }


  .login_bj {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-image: var(--background-image);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    .canvas {
      filter: drop-shadow(0 0 1px white);
    }
  }
}

.cent {
  display: flex;
  justify-content: center;
}
</style>
