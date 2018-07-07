<template>
    <div>
      <label>Detail Records</label>
      <br><br>
      <mu-paper :z-depth="4">
        <mu-data-table stripe :columns="columns" :data="list"></mu-data-table>
      </mu-paper>
    </div>
</template>
<script>
export default {
  props:["columns", "list"]
}
</script>

