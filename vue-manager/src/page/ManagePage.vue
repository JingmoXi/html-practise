<template>
  <div class="manage">
    <el-container style="height: 100%; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(50, 64, 87)">
        <!-- 左侧菜单 -->
        <el-menu :default-openeds="['1', '3']" active-text-color="#20a0ff" text-color="#bfcbd9" background-color="#324157"  >
          <el-submenu  index="1" >
            <template  slot="title"  ><i class="el-icon-message" ></i>导航一</template>
              <el-menu-item background-color="#fffff" index="1-1" style="color: #bfcbd9;">选项1</el-menu-item>
              <el-menu-item background-color="#1f2d3d" index="1-2" style="color: #bfcbd9;">选项2</el-menu-item>
              <el-menu-item background-color="#1f2d3d" index="1-3" style="color: #bfcbd9;">选项3</el-menu-item>
          </el-submenu>

        </el-menu>


      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>王小虎</span>
        </el-header>

        <el-main>
          <el-table :data="tableData">
            <el-table-column prop="date" label="日期" width="140">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="address" label="地址">
            </el-table-column>
          </el-table>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
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
  }
}
</script>

<style>
@import '../style/min.less';

.manage {
  height: 100%;
}
.el-icon-message {
  color: rgb(50, 64, 87);
}
</style>