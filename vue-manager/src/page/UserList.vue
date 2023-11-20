<template>

  <div>
    <el-table ref="singleTable" :data="tableData" highlight-current-row @current-change="handleCurrentChange"
    style="width: 100%">
    <el-table-column property="id" label="id" width="120">
    </el-table-column>
    <el-table-column property="date" label="日期" width="120">
    </el-table-column>
    <el-table-column property="name" label="姓名" width="120">
    </el-table-column>
    <el-table-column property="area" label="地址">
    </el-table-column>
  </el-table>
  <el-pagination background layout="prev, pager, next" :page-sizes="[10,20,30]"	  :total="100">
    </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      currentRow: null
    }
  },



  methods: {
    setCurrent(row) {
      this.$refs.singleTable.setCurrentRow(row);
    },
    handleCurrentChange(val) {
      this.currentRow = val;
    },
    queryData(){
      //

    }
  }
}
</script>