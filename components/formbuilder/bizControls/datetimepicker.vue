<template>


   <mu-form-item  :label="label" prop="value">
      <mu-date-input v-model="ownValue" format="YYYY/MM/DD" :container="containerContent" :date-time-format="enDateFormat" @input="raiseChangeEvent"></mu-date-input>
    </mu-form-item>

</template>
<script>
const dayAbbreviation = ["S", "M", "T", "W", "T", "F", "S"];
const dayList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthList = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
const monthLongList = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const enDateFormat = {
  formatDisplay(date) {
    return `${dayList[date.getDay()]}, ${
      monthList[date.getMonth()]
    } ${date.getDate()}`;
  },
  formatMonth(date) {
    return `${monthLongList[date.getMonth()]} ${date.getFullYear()}`;
  },
  getWeekDayArray(firstDayOfWeek) {
    let beforeArray = [];
    let afterArray = [];
    for (let i = 0; i < dayAbbreviation.length; i++) {
      if (i < firstDayOfWeek) {
        afterArray.push(dayAbbreviation[i]);
      } else {
        beforeArray.push(dayAbbreviation[i]);
      }
    }
    return beforeArray.concat(afterArray);
  },
  getMonthList() {
    return monthList;
  }
};

var containerContent = "dialog";
/*if(this.document.width && this.document.width <=375){
  containerContent = "dialog";
}*/

export default {
  props: ["label", "name", "value", "required", "readonly", "format"],
  data() {
    return {
      ownValue: "",
      enDateFormat,
      containerContent
    };
  },
   methods:{
    raiseChangeEvent(event){
      this.$emit('update:data',event);
    }
  }
};
</script>


