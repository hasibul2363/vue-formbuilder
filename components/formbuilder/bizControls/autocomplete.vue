<template>
      <mu-auto-complete :data="ownDatasource" label="activate and display input prompts" v-model="ownValue" @select="handleSelected"></mu-auto-complete>
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
      ownDatasource: [],
      ownValue: ""
    };
  },
  methods: {
    processData() {
      this.ownDatasource = this.datasource.map(p=> p[this.displayMember]);
      if(this.value){
        var selectedText = this.datasource.filter(p=> p[this.valueMember] == this.value);
        if (selectedText.length >0){
          this.ownValue = selectedText[0][this.displayMember];
        }
      }
    },

    handleSelected(value, index) {
      if (index) {
        var selectedValue = this.datasource.filter(p=> p[this.displayMember] == value);
        if (selectedValue.length >0){
          selectedValue = selectedValue[0][this.valueMember];
        }
        this.$emit("update:data", selectedValue);
      } else {
        this.$emit("update:data", "");
      }
    }
  },
  mounted() {
    this.processData();
    this.$watch("datasource", this.processData);
  }
};
</script>
