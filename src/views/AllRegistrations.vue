<template>
  <div class="registrations">
    <table border="1">
      <tr>
        <th>Date</th>
        <th>Time</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Id Card Nr</th>
        <th>Dentist Id</th>

      </tr>
      <tr v-for="row in registrations">
        <td>{{ row.date }}</td>
        <td>{{ row.time }}</td>
        <td>{{ row.firstName }}</td>
        <td>{{ row.lastName }}</td>
        <td>{{ row.idCardNr }}</td>
        <td>{{ row.dentistId }}</td>

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
