<template>
    <div>
        <el-table ref="singleTable" :data="tableData" highlight-current-row @current-change="handleCurrentChange"
            style="width: 100%">
            <el-table-column property="id" label="" width="120">
            </el-table-column>
            <el-table-column property="date" label="店铺名称" width="220">
            </el-table-column>
            <el-table-column property="name" label="店铺地址" width="120">
            </el-table-column>
            <el-table-column property="area" label="店铺介绍">
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                    <el-button type="text" size="small">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination ref="paginationNum" @current-change="handleCurrentChange" background layout="prev, pager, next"
            :page-size="pagesize" :page-sizes="pagesizes" :current-page="currentPage" :total="totalCount">
        </el-pagination>
    </div>
</template>

<script>
export default {

    //
}
</script>

<style></style>