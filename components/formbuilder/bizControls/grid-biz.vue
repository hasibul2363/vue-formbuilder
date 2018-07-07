<template>
<grid
  :name="schema.name"
  :columns="ownColumns"
  :list="ownDatasource">
  </grid>
</template>

<script>
import grid from "./grid";
export default {
  props: ["schema"],
  components: {
    grid: grid
  },
  methods :{
    getColumns: function(){
      let columns = [];
      var dataItem = this.schema.datasource[0];
      Object.keys(dataItem).forEach(e => columns.push(e));
      return columns.map((c)=>{        return { title:c , name: c }      });
    }
  },
  data() {
    return{
      ownColumns : [], ownDatasource:[]
    };
  },
  watch:{
    "schema.datasource":function(){
      this.ownColumns = this.getColumns();
      this.ownDatasource = this.schema.datasource;
    }
  }
};
</script>

