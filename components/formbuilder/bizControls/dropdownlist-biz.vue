<template>
<div>
<dropdownlist
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
  </dropdownlist>
</div>
</template>

<script>
import dropdownlist from "./dropdownlist";
export default {
  props: ["schema"],
  components: {
    dropdownlist: dropdownlist
  }
};
</script>
