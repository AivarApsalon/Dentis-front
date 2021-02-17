<template>
  <div class="input">

    <p class="addRegistration"> Add Registration </p>

    <div class="date">Select a date
      <span class="flex"><Datepicker v-model="date" format="yyyy-MM-dd"></Datepicker></span>
    </div>

    <div>Select Time
      <select v-model="time">
        <option value="09:00">09:00</option>
        <option value="10:00">10:00</option>
        <option value="11:00">11:00</option>
        <option value="12:00">12:00</option>
        <option value="13:00">13:00</option>
        <option value="14:00">14:00</option>
        <option value="15:00">15:00</option>
        <option value="16:00">16:00</option>
      </select>
    </div>

    <div>First Name <input v-model="firstName" placeholder="First Name"></div>
    <div>Last Name <input v-model="lastName" placeholder="Last Name"></div>
    <div>ID Card Nr <input v-model="idCardNr" placeholder="Id Card Nr"></div>

    <div class="select-list">Select dentist
      <select v-model.number="selectedDentist">
        <option v-for="dentist in dentistList" :value="dentist.id">{{ dentist.dentistName }}</option>
      </select>
    </div>

    <div>
    <button v-on:click="saveRegistration()">Add Registration</button>
    <span v-if="error">Please choose other date or time</span>
    </div>

  </div>
</template>

<script>

let getData = function () {
}

import Datepicker from 'vuejs-datepicker';

export default {
  components: {

    Datepicker

  },
  name: "AddRegistration",
  data: function () {
    return {
      date: '',
      time: '',
      firstName: '',
      lastName: '',
      idCardNr: '',
      selectedDentist: '',
      registrationBody: {},

      dentistId: '',
      dentistList: [],
      error: false
    }

  },
  methods: {
    saveRegistration() {
      this.error=false
      this.registrationBody = {
        date: this.date.toISOString().substring(0, 10),
        time: this.time,
        firstName: this.firstName,
        lastName: this.lastName,
        idCardNr: this.idCardNr,
        dentistId: this.selectedDentist
      }
      this.$http.post('/dentist/add-registration', this.registrationBody)
          .then((response) => {
            this.date = '';
            this.time = '';
            this.firstName = '';
            this.lastName = '';
            this.idCardNr = '';
            this.selectedDentist = '';
            this.registrationBody = null;
          })
          .then((response) => {
            (this.$alert("Registration added!"))
          })
          .catch((error) => {
            this.error=true
          });
    },
    async getDentistList() {
      try {
        const {data} = await this.$http.get('/dentist/dentist-list');
        this.dentistList = data;
        console.log(this.dentistList)
      } catch (error) {
      }
    }
  },
  mounted() {
    this.getDentistList();
  }
}

</script>


