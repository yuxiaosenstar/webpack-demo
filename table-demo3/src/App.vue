<template>
  <div id="app">
    <list-table
      row-key="id"
      :page="page"
      :total="total"
      :data="data"
      :columns="columns"
      :selected="selected"
      :multiple="false"
      :selectable="true"
      @page-changed="pageChanged"
      @select-changed="selectChanged"
    ></list-table>
    <el-button type="primary" @click="onClick">切换</el-button>
    <div class="content" ref="content">
      <div class="top">
        <el-select v-model="selectValue" placeholder="">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
        </el-select>
      </div>
      <div class="bottom"></div>
    </div>
  </div>
</template>

<script lang="ts" src="./App.ts"></script>

<style lang="scss">
html,
body {
  height: 100%;
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  .content {
    display: flex;
    align-items: center;
    justify-items: center;
    flex-direction: column;
    flex-shrink: 0;
    .top {
      width: 100%;
      height: 200px;
      background: pink;
    }
    .bottom {
      width: 100%;
      flex: 1;
      background: paleturquoise;
      height: 100%;
    }
  }
}
</style>
