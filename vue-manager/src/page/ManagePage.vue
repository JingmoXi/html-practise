<template>
  <div class="manage">
    <el-container style="height: 100%; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(50, 64, 87)">
        <!-- 左侧菜单 -->
        <el-menu :default-active="defaultactive"  :unique-opened="uniqueopened" active-text-color="#ffd04b"
          text-color="#bfcbd9" background-color="#324157" @select="handleSelect" @open="handleOpen" @close="handleClose"
          router>
          <router-link to="/manage/firstPage"><el-menu-item index="1"  ><i
                class="el-icon-message"></i>首页</el-menu-item></router-link>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-message"></i>数据管理</template>
            <router-link to="/manage/userList"><el-menu-item index="2-1" ref="userlist"
                >用户列表</el-menu-item></router-link>
            <router-link to="/manage/sellerPage"><el-menu-item index="2-2"
                >商家列表</el-menu-item></router-link>
            <router-link to="/manage/userList"><el-menu-item index="2-3"
                >选项3</el-menu-item></router-link>
          </el-submenu>
          <el-submenu index="3" >
            <template slot="title"><i class="el-icon-message"></i>添加数据</template>
            <el-menu-item ref="shangpu" index="3-1"  >添加商铺</el-menu-item>
            <el-menu-item index="3-2" >添加商品</el-menu-item>

          </el-submenu>
          <el-submenu index="4">
            <template slot="title"><i class="el-icon-message"></i>图标</template>
            <el-menu-item index="4-1" >用户分布</el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title"><i class="el-icon-message"></i>编辑</template>
            <el-menu-item index="5-1" >文本编辑</el-menu-item>
          </el-submenu>

          <el-submenu index="6">
            <template slot="title"><i class="el-icon-message"></i>设置</template>
            <el-menu-item index="6-1" >管理员设置</el-menu-item>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title"><i class="el-icon-message"></i>说明</template>
            <el-menu-item index="6-1" >说明</el-menu-item>
          </el-submenu>

        </el-menu>

      </el-aside>

      <el-container>
        <el-header>
          <span>首页</span>
          <img id="user-icon" src="../assets/logo.png">
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>

      </el-container>
    </el-container>
  </div>
</template>

<script>

// import PageHead from '@/components/PageHead.vue' 

export default {
  data() {
    return {
      uniqueopened: true,
      colll: '#20a0ff',
      defaultactive: "2-1",
      defaultopeneds: ['2']
    }
  },
  methods: {

    handleSelect(key, keyPath) {
      console.log("handleSelect")
      console.log(key)
      console.log(keyPath)
      this.$data.defaultactive="2-2"
      console.log(this.$data)
      console.log("handleSelect")
    },
    handleOpen(key, keyPath) {
      console.log("handleOpen")
      console.log(key);
      this.$data.defaultopeneds=keyPath
      
    },
    handleClose(key, keyPath) {
      console.log("handleClose")
      console.log(key, keyPath);
    }
  },
  components: {
    // PageHead
  }
}
</script>

<style>
@import '../style/min.less';


.el-header {
  /* display: flex; */
  position: relative;
}

#user-icon {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: #333 solid 1px;
  vertical-align: middle;
  display: inline-block;
  position: absolute;
  top: 14px;
  right: 50px;
  /* 处于最右边 */
}

.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}


.el-aside {
  color: #333;
}

.manage {
  height: 100%;
}

.el-icon-message {
  color: rgb(50, 64, 87);
}

.router-link-active {
  background-color: blue;
  /* 或者你喜欢的任何颜色 */
}
</style>