<template>
<div>
  <mu-flex class="form-header"></mu-flex>
  <mu-flex class="form-content">
<mu-container>
<mu-card style="margin:5px;" >
  <mu-card-title title="Test Form"></mu-card-title>
  <mu-form ref="form" :model="validateForm" class="mu-demo-form">
    <!-- <mu-form-item label="User Name" prop="validateForm.username" :rules="usernameRules">
      <mu-text-field v-model="validateForm.username" prop="validateForm.username"></mu-text-field>
    </mu-form-item> -->
    <!-- <autocomplete-biz :schema="formSchema.txt2"></autocomplete-biz> -->
    <!-- <dropdownlist-biz :schema="formSchema.txt2"></dropdownlist-biz> -->


    <text-box-biz :schema="formSchema.txt1"></text-box-biz>
    <dropdownlist-biz :schema="formSchema.post"></dropdownlist-biz>
    <dropdownlist-biz :schema="formSchema.comment"></dropdownlist-biz>
    <text-box-biz :schema="formSchema.txtPassword"></text-box-biz>
    <datetimepicker-biz :schema="formSchema.dateInput"></datetimepicker-biz>
    <grid-biz :schema="formSchema.detailRecords"></grid-biz>

    <!-- <mu-form-item label="Passwprd" prop="validateForm.password" :rules="passwordRules">
        <mu-text-field type="password" v-model="validateForm.password" prop="validateForm.password"></mu-text-field>
    </mu-form-item> -->
    <mu-form-item prop="validateForm.isAgree" :rules="argeeRules">
      <!-- <mu-checkbox label="Agree" v-model="validateForm.isAgree"></mu-checkbox> -->
    </mu-form-item>
    <mu-form-item>
      <mu-button color="primary" @click="submit">Save</mu-button>
      <mu-button @click="test">Clear</mu-button>
    </mu-form-item>
  </mu-form>
  </mu-card>
</mu-container>
  </mu-flex>
  <mu-flex justify-content="center">Footer will go here</mu-flex>
</div>


</template>
<script>
import axios from "axios";
import textBoxBiz from "../components/formbuilder/bizControls/text-box-biz";
import autocompleteBiz from "../components/formbuilder/bizControls/autocomplete-biz";
import dropdownlistBiz from "../components/formbuilder/bizControls/dropdownlist-biz";
import datetimepickerBiz from "../components/formbuilder/bizControls/datetimepicker-biz";
import gridBiz from "../components/formbuilder/bizControls/grid-biz";

export default {
  /*async asyncData({ store }) {
    //const { data } = await axios.get("http://icanhazip.com");
    //var pp = JSON.stringify(data);
    return { myipVal: "Test Form"  }; //+ " from vuex " + store.state.counter
  },*/
  data() {
    return {
      formSchema: {
        txt1: {
          label: "TextBox",
          name: "txt1",
          value: "test",
          placeholder: "here is fun",
          readonly: true,
          maxLength: "5",
          minLength: "2",
          required: true,
          controlType: "textBoxBiz"
        },
        txtPassword: {
          label: "Password Text",
          name: "passwordText",
          value: "",
          placeholder: "here is fun",
          readonly: true,
          maxLength: "5",
          minLength: "2",
          required: true,
          isPassword: true,
          controlType: "textBoxBiz"
        },

        txt2: {
          label: "Your Age",
          name: "txt2",
          value: "1",
          placeholder: "here is fun2",
          required: false,
          data: [
            { userId: 1, userName: "hasibul" },
            { userId: 2, userName: "haque" }
          ],
          valueMember: "userName",
          displayMember: "userName",
          filterable: false,
          loading: false,
          text: ""
        },
        post: {
          label: "Auto Complete",
          name: "post",
          value: "",
          placeholder: "",
          required: false,
          data: [],
          valueMember: "id",
          displayMember: "title",
          filterable: true,
          loading: false,
          text: ""
        },
        comment: {
          label: "Drop Down List",
          name: "comment",
          value: "",
          placeholder: "",
          required: false,
          data: [],
          valueMember: "id",
          displayMember: "name",
          filterable: false,
          loading: false,
          text: ""
        },
        dateInput: {
          label: "Date Input",
          name: "dateInput",
          value: "",
          required: false,
          format: "YYYY/MM/DD",
          readonly: false
        },
        txtSalary:{
          label: "Salary",
          name: "txtSalary",
          value: "",
          formulaTemplate: "{txt2} * 2",
          placeholder: "here is your salary",
          readonly: false,
          required: false,
          controlType: "textBoxFormulaBiz"
        },
        detailRecords:{
          datasource:[]
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
  components: {
    textBoxBiz: textBoxBiz,
    autocompleteBiz: autocompleteBiz,
    dropdownlistBiz: dropdownlistBiz,
    datetimepickerBiz: datetimepickerBiz,
    gridBiz:gridBiz
  },
  methods: {
    submit() {
     alert("Thank you for testing..");
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
      alert(JSON.stringify(this.formSchema.dateInput));
    },
    async loadPosts() {
      let url = "https://jsonplaceholder.typicode.com/posts";
      var posts = await axios.get(url);
      this.formSchema.post.data = posts.data;
    },
    async loadComments(postId) {
      if (postId) {
        this.formSchema.comment.loading = true;
        this.formSchema.comment.value = "";
        let url =
          "https://jsonplaceholder.typicode.com/comments?postId=" + postId;
        var posts = await axios.get(url);
        this.formSchema.comment.data = posts.data;
        this.formSchema.comment.loading = false;
      }
    },

    async loadGridData(){
      let url = "https://jsonplaceholder.typicode.com/users";
      var comments = await axios.get(url);
     var myData = comments.data.map((p) => { return {id:p.id, name:p.name,email:p.email} } ).splice(7);
      this.formSchema.detailRecords.datasource = myData;
    }
  },
  watch: {
    "formSchema.post.value": function() {
      this.loadComments(this.formSchema.post.value);
    }
  },
  async created() {
    this.loadPosts();
    this.loadGridData();
  }
};
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

