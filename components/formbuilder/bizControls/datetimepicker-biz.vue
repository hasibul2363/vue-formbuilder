<template>
<datetimepicker
  :name="schema.name"
  :readonly="schema.readonly"
  :required="schema.required"
  :value="schema.value"
  :label="schema.label"
  :format="schema.format"
  :data.sync="schema.value">
  </datetimepicker>
</template>

<script>
import datetimepicker from "./datetimepicker";
export default {
  props: ["schema"],
  components: {
    datetimepicker: datetimepicker
  }
};
</script>

