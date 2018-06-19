<template>
<div>
  <mu-flex class="form-header"></mu-flex>
  <mu-flex class="form-content">
<mu-container>
<mu-card style="margin:5px;" >
  <mu-card-title :title="myipVal"></mu-card-title>
  <mu-form ref="form" :model="validateForm" class="mu-demo-form">
    <!-- <mu-form-item label="User Name" prop="validateForm.username" :rules="usernameRules">
      <mu-text-field v-model="validateForm.username" prop="validateForm.username"></mu-text-field>
    </mu-form-item> -->

    <text-box-biz :schema="formSchema.txt1"></text-box-biz>

    <mu-form-item label="Passwprd" prop="validateForm.password" :rules="passwordRules">
        <mu-text-field type="password" v-model="validateForm.password" prop="validateForm.password"></mu-text-field>
    </mu-form-item>
    <mu-form-item prop="validateForm.isAgree" :rules="argeeRules">
      <!-- <mu-checkbox label="Agree" v-model="validateForm.isAgree"></mu-checkbox> -->
    </mu-form-item>
    <mu-form-item>
      <mu-button color="primary" @click="submit">Login</mu-button>
      <mu-button @click="test">Clear</mu-button>
    </mu-form-item>
  </mu-form>
  </mu-card>
</mu-container>
  </mu-flex>
  <mu-flex justify-content="center"  >Footer will go here</mu-flex>
</div>


</template>
<script>
import axios from "axios";
import textBoxBiz from "../components/formbuilder/bizControls/text-box-biz";
export default {
  async asyncData({store}) {
    const { data } = await axios.get("http://icanhazip.com");
    var pp = JSON.stringify(data);
    return { myipVal: "You are using from" + pp }; //+ " from vuex " + store.state.counter

  },
  data() {
    return {
      formSchema: {
        txt1: {
          label: "userName",
          name: "txt1",
          value: "test",
          placeholder: "here is fun",
          readonly: true,
          maxLength: "5",
          minLength: "2",
          required: true,
          controlType:"textBoxBiz"
        },
        txt2: {
          label: "Your Age",
          name: "txt2",
          value: "2",
          placeholder: "here is fun2",
          readonly: false,
          maxValue: 5,
          minValue: 2,
          required: false,
          controlType:"textBoxNumberBiz"
        },
        txtSalary: {
          label: "Salary",
          name: "txtSalary",
          value: "",
          formulaTemplate: "{txt2} * 2",
          placeholder: "here is your salary",
          readonly: false,
          required: false,
          controlType:"textBoxFormulaBiz"
        }
      },

      usernameRules: [
        { validate: val => !!val, message: "User name must be filled in" },
        {
          validate: val => val.length >= 3,
          message: "The username length is greater than 3"
        }
      ],
      passwordRules: [
        { validate: val => !!val, message: "Must fill in the password" },
        {
          validate: val => val.length >= 3 && val.length <= 10,
          message: "Password length greater than 3 and less than 10"
        }
      ],
      argeeRules: [
        { validate: val => !!val, message: "Must agree to user agreement" }
      ],
      validateForm: {
        username: "",
        password: "",
        isAgree: false
      }
    };
  },
  components:{
    textBoxBiz:textBoxBiz
  },
  methods: {
    submit() {
      this.$refs.form.validate();
    },
    clear() {
      this.$refs.form.clear();
      this.validateForm = {
        username: "",
        password: "",
        isAgree: false
      };
    },
     test() {
      alert(JSON.stringify(  this.formSchema.txt1));
    }
  }
}
</script>

<style>
.mu-demo-form {
  padding: 15px;
}
.form-header {
  background-color: rgb(66, 133, 244);
  height: 200px;
}
.form-content {
  margin-top: -60px;
}

@media only screen and (max-device-height: 667px) {
  .form-content {
    margin-top: -150px;
  }
}
</style>

