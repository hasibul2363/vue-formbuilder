<template>
   <mu-form-item :label="overrideLabel" prop="value" :rules="validationRules">
      <mu-text-field :type=componentType :value="value"  @input="raiseChangeEvent"></mu-text-field>
    </mu-form-item>
</template>
<script>
export default {
  props: ["label","name", "value", "placeholder", "minlength", "maxLength", "required", "readonly", "isPassword" ],
  data(){
    let validationRules =   [];
    if  (this.maxLength && this.maxLength > 0){
      validationRules.push({
          validate: val => this.value.length < this.maxLength,
          message: "max length is " + this.maxLength
        });
    }
    if(this.required){
        validationRules.push({
          validate: val => this.value.length > 0,
          message: "Cannot be empty"
        });
    }

    let componentType = "text"
    if(this.isPassword === true){
      componentType = "password"
    }
    return {
      validationRules :validationRules,
      overrideLabel: this.label +" *",
      componentType:componentType
    }
  },
  methods:{
    raiseChangeEvent(event){
      this.$emit('update:data',event);
    }
  },
  created(){
    //alert(this.label);
  }

};
</script>

