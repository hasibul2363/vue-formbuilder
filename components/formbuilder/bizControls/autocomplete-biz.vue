<template>
<div>
<autocomplete
  :name="schema.name"
  :placeholder="schema.placeholder"
  :datasource= "schema.data"
  :required="schema.required"
  :value="schema.value"
  :label="schema.label"
  :data.sync="schema.value"
  :displayMember="schema.displayMember"
  :valueMember="schema.valueMember"
  >
  </autocomplete>
</div>
</template>

<script>
import autocomplete from "./autocomplete";
export default {
  props: ["schema"],
  components: {
    autocomplete: autocomplete
  },

  // created() {
  //   this.schema.data = [
  //     { userId: 1, userName: "hasibul" },
  //     { userId: 2, userName: "haque" }
  //   ];
  // }
};
</script>
