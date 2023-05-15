<script lang="ts" setup>
export default {
  name: 'App',
  data(){
    return {
      mySVG: require('./assets/raiatec.svg')
    }
  }
}
</script>

<template>
  <header class="p-1 bg-light sticky-top shadow">

    <div class="d-flex flex-wrap align-items-center justify-content-around">

      <a href="http://localhost/test.raiatec.com/"
         class="mb-2 mb-lg-0 text-white text-decoration-none">
        <img src="mySVG" class="<!--bi me-2-->" width="0" height="0" role="img" aria-label="Bootstrap">


      </a>

      <?php if (!is_page('about-us')): ?>

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


      <?php endif ?>

      <form class="d-none d-md-block" role="search">
        <input type="search" class="form-control bg-light" placeholder="Search..."
               aria-label="Search">
      </form>

      <ul class="nav justify-content-center">


        <li>
          <a href="http://localhost/test.raiatec.com/"
          <?php echo(is_home() ? 'class="list-groop"' : ''); ?> >
          Home
          </a>
        </li>

        <li><NuxtLink to="/about">About Me</NuxtLink></li>


        <!--                <li><a href="http://localhost/test.raiatec.com/about-us/" class="nav-link px-2 text-white">About Me</a></li>-->
      </ul>


    </div>

  </header>








  <nav class="bg-gray-900 text-white py-5">
    <div class="container flex justify-between">
      <NuxtLink to="/" class="logo text-xl font-bold">raiatec.com</NuxtLink>
      <ul class="inline-flex gap-2">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/categories">Categories</NuxtLink></li>
        <li><NuxtLink to="/about">About Me</NuxtLink></li>
      </ul>
    </div>
  </nav>
</template>

