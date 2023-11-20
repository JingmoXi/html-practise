<template>
  <div class="manage">
    <el-container style="height: 100%; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(50, 64, 87)">
        <!-- 左侧菜单 -->
        <el-menu :default-openeds="['1', '3']" default-active="1"  active-text-color="#20a0ff" text-color="#bfcbd9" background-color="#324157"
          router>
          <router-link to="/manage/firstPage"><el-menu-item index="1" route="firstPage" @click="menuChange(1)"><i
                class="el-icon-message"></i>首页</el-menu-item></router-link>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-message"></i>数据管理</template>
            <router-link to="/manage/userList"><el-menu-item index="2-1"
                style="color: #bfcbd9;">用户列表</el-menu-item></router-link>
            <router-link to="/manage/userList"><el-menu-item index="2-2" style="color: #bfcbd9;"
                route="userList">商家列表</el-menu-item></router-link>
            <router-link to="/manage/userList"><el-menu-item index="2-3"
                style="color: #bfcbd9;">选项3</el-menu-item></router-link>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-message"></i>添加数据</template>
            <el-menu-item index="3-1" style="color: #bfcbd9;">添加商铺</el-menu-item>
            <el-menu-item index="3-2" style="color: #bfcbd9;">添加商品</el-menu-item>

          </el-submenu>
          <el-submenu index="4">
            <template slot="title"><i class="el-icon-message"></i>图标</template>
            <el-menu-item index="4-1" style="color: #bfcbd9;">用户分布</el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title"><i class="el-icon-message"></i>编辑</template>
            <el-menu-item index="5-1" style="color: #bfcbd9;">文本编辑</el-menu-item>
          </el-submenu>

          <el-submenu index="6">
            <template slot="title"><i class="el-icon-message"></i>设置</template>
            <el-menu-item index="6-1" style="color: #bfcbd9;">管理员设置</el-menu-item>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title"><i class="el-icon-message"></i>说明</template>
            <el-menu-item index="6-1" style="color: #bfcbd9;">说明</el-menu-item>
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
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    };
    return {
      tableData: Array(5).fill(item)
    }
  },
  methods: {
    menuChange(index) {
      console.log(index)
      // if (index == 1) {
      //   this.$router.push('manage')
      // } else {
      //   this.$router.push('manage')
      // }
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
  background-color: blue; /* 或者你喜欢的任何颜色 */
}

</style>