<template>
  <div class="input">
    <p class="changeRegistration"> Change Registration </p>
    <div>Date <input v-model="registration.date" placeholder="Date"></div>
    <div>Time <input v-model="registration.time" placeholder="Time"></div>
    <div>First Name <input v-model="registration.firstName" placeholder="First Name"></div>
    <div>Last Name <input v-model="registration.lastName" placeholder="Last Name"></div>
    <div>ID Card Nr <input v-model="registration.idCardNr" placeholder="Id Card Nr"></div>
    <div>Select dentist
      <select v-model="registration.dentistId">
        <option value="1">Kask</option>
        <option value="2">Kuusk</option>
        <option value="3">Palm</option>
      </select>
    </div>

    <button v-on:click="changeRegistration()">Change Registration</button>

  </div>
</template>

<script>

export default {
  name: "ChangeRegistration",
  data: function () {
    return {
      registration: {}
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
    }
  },
  mounted() {
    this.getRegistrationById(this.$route.params.id);

  }
}

</script>


