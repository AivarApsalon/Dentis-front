<template>
  <div class="registrations">

    <p> Get Registrations By Dentist Name </p>

    <div class="select-list">Select dentist
      <select v-model="dentistId">
        <option v-for="dentist in dentistList" :value="dentist.id">{{dentist.dentistName}} </option>

      </select>

      <button v-on:click="getData()">Get Registrations</button>

    </div>

    <p></p>

    <table v-if="registrations.length" border="table1">
      <tr>
        <th>Reg.ID</th>
        <th>Date</th>
        <th>Time</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Id Card Nr</th>
        <th>Dentist Name</th>

      </tr>
      <tr v-for="registration in registrations">
        <td>{{ registration.id }}</td>
        <td>{{ registration.date }}</td>
        <td>{{ registration.time }}</td>
        <td>{{ registration.firstName }}</td>
        <td>{{ registration.lastName }}</td>
        <td>{{ registration.idCardNr }}</td>
        <td>{{ registration.dentistName }}</td>
      </tr>
    </table>
    <p v-else>No Registrations</p>
  </div>

</template>

<script>

export default {
  name: 'RegistrationsByDentistId',
  components: {},
  data: function () {
    return {
      registrations: [],
      dentistId: '',
      dentistList: []
    }
  },
  methods: {
    getData() {
      this.$http.get('/dentist/registrations-by-dentist-id/' + this.dentistId)
          .then(response => {
            this.registrations = response.data
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
    this.getDentistList();
  }
}
</script>

