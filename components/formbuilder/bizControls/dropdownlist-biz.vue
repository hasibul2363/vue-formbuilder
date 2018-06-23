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
  :text.sync="schema.text"
  :displayMember="schema.displayMember"
  :valueMember="schema.valueMember"
  :filterable="schema.filterable"
  :loading="schema.loading"
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
