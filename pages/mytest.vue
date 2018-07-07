<template>
  <mu-container>
  <mu-row gutter>
  <mu-col span="12" lg="4" sm="6">
    <mu-button color="primary">Primary</mu-button>
  </mu-col>

  <mu-col span="12" lg="4" sm="6">
    <mu-date-input icon="today" v-model="value1" label="选择日期" label-float full-width></mu-date-input>
  </mu-col>
  <mu-col span="12" lg="4" sm="6">
    <mu-date-input icon="today" v-model="value2" label="横屏显示" label-float full-width landscape></mu-date-input>
  </mu-col>
  <mu-col span="12" lg="4" sm="6">
    <mu-date-input icon="today" v-model="value3" label="隐藏日期展示" label-float full-width no-display></mu-date-input>
  </mu-col>
</mu-row>
</mu-container>
</template>
<script>
export default {};
</script>

<style>
</style>
