window.onload = function () {
  let canvas = document.querySelectorAll('.canvas');
  let ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  let meteors = []; // 流星数组
  let allstar = 40; // 流星数量


  function init() {
    for (let i = 0; i < allstar; i++) {
      /* 根据流星数量的设置填充数组 */
      newmeteor();
    }
  }

  function newmeteor() {
    meteors.push({
      /* 用于存放流星尾巴，初始位置随机 */
      lines: [{
        x: parseInt(Math.random() * canvas.width),
        y: parseInt(Math.random() * canvas.height * 0.7),
      }],
      /* 流星寿命，范围为100-200 */
      life: parseInt(Math.random() * 100) + 100,
      /* 当前年龄值 */
      age: 0
    })
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    /* 遍历流星数组 */
    for (var i = 0; i < meteors.length; i++) {
      /* 当前流星 */
      meteor = meteors[i]
      /* 当前流星的尾巴 */
      lines = meteor.lines
      /* 遍历尾巴数组 */
      for (var j = 0; j < lines.length; j++) {
        /* 根据当前的位置设定透明度 */
        ctx.fillStyle = "rgba(255,255,255," + j / lines.length + ")"
        /* 画出尾巴的光点 */
        ctx.fillRect(lines[j].x, lines[j].y, 1, 1)
      }
      /* 改变填充颜色 */
      ctx.fillStyle = "yellow"
      /* 尾巴数组的最后元素，也就是流星的头部 */
      var star = lines[lines.length - 1]
      /* 画出稍大的流星头部 */
      ctx.fillRect(star.x, star.y, 2, 2)
      /* 判断当前年龄是否少于寿命的一半 */
      if (meteor.age <= meteor.life / 2) {
        /* 如过少于寿命的一半，则增加尾巴的长度 */
        lines.push({
          /* 用于设置流星的飞行方向 */
          x: star.x + 1,
          y: star.y + 0.3
        })
      }
      else {
        /* 如过超过寿命的一半，则减少尾巴的长度 */
        lines.shift()
      }
      /* 增加流星的年龄 */
      meteor.age++
      /* 如果年龄达到了寿命的设置，则删除此流星，同时在随机位置增加一颗流星 */
      if (meteor.age >= meteor.life) {
        meteors.splice(i, 1)
        newmeteor()
      }

    }
  }


  init()
  setInterval(draw, 1)

}