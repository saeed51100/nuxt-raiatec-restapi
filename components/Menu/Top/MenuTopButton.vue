<ul class="nav justify-content-center">


<li :class="{'list-groop': $route.path === '/'}">
  <NuxtLink to="/">Home</NuxtLink>
</li>
<li :class="{'list-groop': $route.path === '/categories'}">
  <NuxtLink to="/categories">Categories</NuxtLink>
</li>
<li :class="{'list-groop': $route.path === '/about'}">
  <NuxtLink to="/about">About Me</NuxtLink>
</li>


<!--                <li><a href="http://localhost/test.raiatec.com/about-us/" class="nav-link px-2 text-white">About Me</a></li>-->
</ul>