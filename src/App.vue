<template>
  <div>
    <header>
      <nav class="menu">
        <h1>Dentist</h1>
        <ul>
          <li>
            <router-link to="/home">Home</router-link>
          </li>
          <li>
            <router-link to="/dentist-list">Dentists</router-link>
          </li>
          <li>
            <router-link to="/add-registration">Add Registration</router-link>
          </li>
          <li>
            <router-link to="/registrations">All Registrations</router-link>
          </li>
          <li>
            <router-link to="/registrations-by-dentist-id">Dentist registrations</router-link>
          </li>
        </ul>
      </nav>
    </header>

    <main>
      <router-view/>
    </main>
  </div>

</template>

<style>

</style>
