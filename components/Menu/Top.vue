<script lang="ts" setup></script>

<template>
  <header class="p-1 bg-light sticky-top shadow">

    <div class="d-flex flex-wrap align-items-center justify-content-around">

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
      <img src="~assets/img/raiatec.svg" alt="Raiatec Logo"/>

    </div>

  </header>
</template>

<style>
.nav-scroller {
.nav {
  display: flex;
  flex-wrap: nowrap;
  padding-bottom: 1rem;
  margin-top: -1px;
  overflow-x: auto;
  text-align: center;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}
}
.nav {
>li {
  margin-right: 10px;
  margin-top: 5px;
  list-style-type: none;
>a {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  direction: rtl;
  color: #585858;
  padding: .43em;
  border-radius: 4px;
  font-size: medium;
  font-weight: 500 !important;
&:hover {
   background-color: #ffeda0;
 }
&:focus {
   background-color: #e6e6e6;
 }
}
}
>li.active {
>a {
  outline: 1px solid #b2b2b2;
  border-radius: 4px;
  background-color: #ffeda0;
}
}
}
.list-groop {
  pointer-events: none;
  outline: 1px solid #8ed5ba;
  padding: .43em;
  border-radius: 4px;
  background-color: #d2f4ea;
}
.admin-bar {
.sticky-top {
  top: 32px;
}
}
a {
  color: #151414;
  text-decoration: none;
}

</style>