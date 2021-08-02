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
  </div>
</template>

<script lang="ts" src="./App.ts"></script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
