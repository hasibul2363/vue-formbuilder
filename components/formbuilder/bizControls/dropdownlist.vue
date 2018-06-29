<template>
<mu-row gutter>
  <mu-col lg="11" sm="10" span="11">
        <mu-select :label="label" :filterable="filterable" full-width  v-model="ownValue" @change="handleSelected">
          <mu-option v-for="dataItem in datasource" :key="dataItem[valueMember]" :label="dataItem[displayMember]" :value="dataItem[valueMember]"></mu-option>
        </mu-select>
  </mu-col>
  <mu-col lg="1" sm="2" span="11" v-if="loading">
    <div class="myloader">
      <mu-circular-progress class="demo-circular-progress" :size="22"></mu-circular-progress>
    </div>
  </mu-col>
</mu-row>
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
    "valueMember",
    "filterable",
    "loading",
    "label"
  ],

  data() {
    return {
      ownValue: ""
    };
  },
  methods: {
    setValue() {
      let tempValue = "";
      var dataItem = this.datasource.filter(p => p[this.valueMember] == this.value);
      if (dataItem.length > 0) {
        tempValue = dataItem[0][this.displayMember];
      }

        this.ownValue = tempValue;

    },

    handleSelected(value) {
      if (value) {
        this.$emit("update:data", value);
      } else {
        this.$emit("update:data", "");
      }
    }
  },
  mounted() {
    this.setValue();
    this.$watch("value", this.setValue);
  }
};
</script>
<style>
.myloader {
  margin-top: 32px;
}
</style>
