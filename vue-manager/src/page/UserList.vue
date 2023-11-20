<template>
  <div>
    <el-table ref="singleTable" :data="tableData" highlight-current-row @current-change="handleCurrentChange"
      style="width: 100%">
      <el-table-column property="id" label="id" width="120">
      </el-table-column>
      <el-table-column property="date" label="日期" width="220">
      </el-table-column>
      <el-table-column property="name" label="姓名" width="120">
      </el-table-column>
      <el-table-column property="area" label="地址">
      </el-table-column>
    </el-table>
    <el-pagination ref="paginationNum"  @current-change="handleCurrentChange" background layout="prev, pager, next" :page-size="pagesize" :page-sizes="pagesizes" :current-page="currentPage" :total="totalCount">
    </el-pagination>
  </div>
</template>

<script>
import { userList } from '@/api/getData.js'
export default {
  data() {
    return {
      tableData: null,
      currentRow: null,
      totalCount: 10,
      currentPage: 1,
      pagesizes: [10, 20, 30],
      pagesize: 20
    }
  },

  methods: {
    setCurrent(row) {
      this.$refs.singleTable.setCurrentRow(row);
    },
    handleCurrentChange(e) {
      console.log(e)
      this.currentRow = e;
      this.queryData(e,this.$data.pagesize)
    },
    queryData(page,pageSize) {
      var res = userList({ "page": page,"pageSize": pageSize })

      res.then(((dat) => {
        console.log( dat)
        this.$data.tableData = dat.data;
        this.$data.totalCount =dat.total
      }))

    },

  },
  created() {
      console.log(123)
      this.queryData(this.$data.currentPage,this.$data.pagesize)
    }
}
</script>