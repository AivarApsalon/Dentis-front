<template>
  <div class="registrations">

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
      <tr v-for="row in registrations">
        <td>{{ row.id }}</td>
        <td>{{ row.date }}</td>
        <td>{{ row.time }}</td>
        <td>{{ row.firstName }}</td>
        <td>{{ row.lastName }}</td>
        <td>{{ row.idCardNr }}</td>
        <td>{{ row.dentistName }}</td>
      </tr>

    </table>
  </div>

</template>

<script>
let getData = function () {
  this.$http.get('/dentist/registrations')
      .then(response => this.registrations = response.data)
      .catch(response => console.log(response))

// @ is an alias to /src
// let saveInJs = function () {
//   this.$http.post('/dentist/registrations', this.registrations)
//       .then(() => this.getData());
}
export default {
  name: 'AllRegistrations',
  components: {},
  data: function () {
    return {
      registrations: []
    }
  },
  methods: {
    getData: getData
  },
  mounted() {
    this.getData();
  }
}
</script>
