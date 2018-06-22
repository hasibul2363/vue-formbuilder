<template>
       <mu-select label="Normal" filterable  v-model="ownValue" full-width @change="handleSelected" @keyup="exp">
        <mu-option v-for="dataItem in datasource" :key="dataItem.userId" :label="dataItem.userName" :value="dataItem.userId"></mu-option>
      </mu-select>
</template>
<script>
export default {
  props: [
    "datasource",
    "name",
    "value",
    "placeholder",
    "required",
    "displayMember",
    "valueMember"
  ],

  data() {
    return {
      ownValue:  this.datasource.filter(p=>p.userId == this.value)[0].userName
    };
  },
  methods: {
    handleSelected(value) {
      //alert(JSON.stringify(value));
      if (value) {
        this.$emit("update:data", value);
      } else {
        this.$emit("update:data", "");
      }
    },
    exp(value){
       console.log(this.$ref);
    }
  },
  mounted() {
    //this.processData();
    //this.$watch("datasource", this.processData);
  }
};
</script>
