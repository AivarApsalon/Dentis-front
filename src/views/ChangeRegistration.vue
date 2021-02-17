<template>
  <div class="input">

    <p class="changeRegistration"> Change Registration </p>

    <div class="date">Select a date
      <Datepicker v-model="registration.date" format="yyyy-MM-dd"></Datepicker>
    </div>

    <div>Select Time
      <select v-model="registration.time">
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

    <div>First Name <input v-model="registration.firstName" placeholder="First Name"></div>
    <div>Last Name <input v-model="registration.lastName" placeholder="Last Name"></div>
    <div>ID Card Nr <input v-model="registration.idCardNr" placeholder="Id Card Nr"></div>

    <div class="select-list">Select dentist
      <select v-model="registration.dentistId">
        <option v-for="dentist in dentistList" :value="dentist.id">{{ dentist.dentistName }}</option>
      </select>

      <button v-on:click="changeRegistration()">Change Registration</button>

    </div>

  </div>

</template>

<script>

import Timeselector from 'vue-timeselector';
import TimePicker from 'vue2-timepicker'
import Datepicker from 'vuejs-datepicker';

export default {
  components: {
    Timeselector,
    TimePicker,
    Datepicker
  },
  name: "ChangeRegistration",
  data: function () {
    return {
      registration: {},
      dentistList: []
    }
  },
  methods: {
    getRegistrationById(id) {
      this.$http.get('dentist/registration-by-id/' + id)
          .then(response => {
            this.registration = response.data
          })
    },

    changeRegistration() {
      this.$confirm("Change Registration?")
          .then(() => {
            let id = this.$route.params.id;
            this.$http.put('dentist/change-registration/' + id, this.registration);
            this.registration = {}


          })
    },

    async getDentistList() {
      try {
        const {data} = await this.$http.get('/dentist/dentist-list');
        this.dentistList = data;
        console.log(this.dentistList)
      } catch (error) {
        console.log(error);
      }
    }
  },

  mounted() {
    this.getRegistrationById(this.$route.params.id);
    this.getDentistList();
  }
}

</script>


