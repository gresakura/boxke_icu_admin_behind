<template>
  <div class="contionst">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo laymenu"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <div class="logo">132</div>
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="2">网站管理</el-menu-item>
      <el-menu-item index="3">系统管理</el-menu-item>
      <el-menu-item index="4">接口管理</el-menu-item>
      <el-menu-item index="5">跳转前台</el-menu-item>
    </el-menu>
    <el-dropdown :hide-on-click="false" class="loginInfo">
      <span class="el-dropdown-link"> 下拉菜单 </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>个人信息</el-dropdown-item>
        <el-dropdown-item>退出登入</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
    },
  };
</script>

<style scoped>
  .el-menu--horizontal > .el-menu-item,
  .el-menu--horizontal > .el-menu-item.is-active {
    border-bottom: none;
  }

  .contionst {
    display: flex;
    width: 100%;
  }

  .laymenu {
    display: flex;
    width: 100%;
    align-items: center;
    .logo {
      padding: 0 45px 0 50px;
    }
  }
  .loginInfo {
    display: flex;
    background: #545c64;
    color: #fff;
    .el-dropdown-link {
      color: white;
      border-bottom: solid 1px #e6e6e6;
      width: 80px;
      line-height: 60px;
    }
  }
</style>
