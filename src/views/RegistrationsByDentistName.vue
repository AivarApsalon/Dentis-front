<template>
  <div class="registrations">

    <p> Get Registrations By Dentist Name </p>

    <div class="select-list">Select dentist
      <select v-model="dentistId">
        <option value="1">Kask</option>
        <option value="2">Kuusk</option>
        <option value="3">Palm</option>
        <option value="4">Pihl</option>
      </select>

      <button v-on:click="getData()">Get Registrations</button>

    </div>

    <p></p>

    <table border="table1">
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
  </div>

</template>

<script>

export default {
  name: 'RegistrationsByDentistId',
  components: {},
  data: function () {
    return {
      registrations: [],
      dentistId: ''
    }
  },
  methods: {
    async getData() {
      try {
        const {data} = await this.$http.get('/dentist/registrations-by-dentist-id/' + this.dentistId);
        this.registrations = data;
      } catch (error) {
        console.log(error);
      }

    },

  }

}
</script>

