<template>
   <mu-form-item :label="label" prop="value" :rules="validationRules">
      <mu-text-field :value="value"  @input="raiseChangeEvent"></mu-text-field>
    </mu-form-item>
</template>
<script>
export default {
  props: ["label","name", "value", "placeholder", "minlength", "maxLength", "required", "readonly"],
  data(){
    let validationRules =   [];
    if  (this.maxLength && this.maxLength > 0){
      validationRules.push({
          validate: val => this.value.length >= 3,
          message: "The username length is greater than 3"
        });
    }
    return {
      validationRules :validationRules
    }
  },
  methods:{
    raiseChangeEvent(event){
      this.$emit('update:data',event);
    }
  },
  created(){
    //alert(this.maxlength);
  }

};
</script>

