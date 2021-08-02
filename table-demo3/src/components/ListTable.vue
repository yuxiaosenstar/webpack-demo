<template>
  <div>
    <el-table
      ref="table"
      :row-key="rowKey"
      :stripe="stripe"
      :border="border"
      :empty-text="emptyText"
      :height="height"
      :data="data"
      @selection-change="handleSelectionChange"
    >
      <!--多选 -->
      <el-table-column v-if="selectable && multiple" type="selection" width="55" reserve-selection> </el-table-column>
      <!--单选-->
      <el-table-column width="48" v-if="selectable && !multiple">
        <template slot-scope="scope">
          <el-radio v-model="singleSelected" :label="scope.$index" :index="scope.$index">&nbsp;</el-radio>
        </template>
      </el-table-column>
      <!-- 动态列 -->
      <el-table-column v-for="col in columnsConfig" :prop="col.id" :key="col.id" :label="col.label" :width="col.width">
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      v-if="hasPage"
      class="pagination"
      layout="total, sizes, prev, pager, next, jumper"
      :current-page="pageNum"
      :page-sizes="pageSizes"
      :page-size="pageSize"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    >
    </el-pagination>
  </div>
</template>

<script lang="ts" src="./ListTable.ts"></script>

<style lang="scss" scoped>
.pagination {
  text-align: right;
  margin-top: 10px;
}
</style>
