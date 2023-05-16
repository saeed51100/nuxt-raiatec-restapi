<script lang="ts" setup></script>

<template>
  <header class="p-1 bg-light sticky-top shadow">

    <div class="d-flex flex-wrap align-items-center justify-content-around">

      <img src="~assets/img/raiatec.svg" alt="Raiatec Logo"/>


      <!-- Button trigger modal -->
      <button class="navbar navbar-toggler d-md-none collapsed"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              aria-controls="sidebarMenu"
              aria-expanded="false"
              aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>


      <form class="d-none d-md-block" role="search">
        <input type="search" class="form-control bg-light" placeholder="Search..."
               aria-label="Search">
      </form>

      <ul class="nav justify-content-center">


        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/categories">Categories</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">About Me</NuxtLink>
        </li>


        <!--                <li><a href="http://localhost/test.raiatec.com/about-us/" class="nav-link px-2 text-white">About Me</a></li>-->
      </ul>


    </div>

  </header>
</template>

<style>

</style>