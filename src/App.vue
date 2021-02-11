<template>
  <header>

    <div class="container">
      <nav>
        <ul>
          <li class="name">Dentist</li> |
          <router-link to="/home">Home</router-link> |
          <router-link to="/add-registration">Add Registration</router-link> |
          <router-link to="/registrations">All Registrations</router-link> |
          <router-link to="/registrations-by-id">Get Registration</router-link> |
          <router-link to="/delete-registration">Delete Registration</router-link> |
          <router-link to="/change-registration">Change Registration</router-link>
        </ul>
      </nav>

      <router-view/>
    </div>
  </header>

</template>


<style>

</style>
