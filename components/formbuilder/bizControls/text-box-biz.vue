<template>
<text-box
  :name="schema.name"
  :placeholder="schema.placeholder"
  :maxLength="schema.maxLength"
  :minLength="schema.minLength"
  :readonly="schema.readonly"
  :required="schema.required"
  :value="schema.value"
  :label="schema.label"
  :isPassword="schema.isPassword"
  :data.sync="schema.value">
  </text-box>
</template>

<script>
import textBox from "./text-box";
export default {
  props: ["schema"],
  components: {
    textBox: textBox
  }
};
</script>

