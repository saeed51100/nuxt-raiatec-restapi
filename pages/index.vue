<script lang="ts" setup></script>
<template>
  <main>
    <PageHeader>
      <!--        Image -->
      <div
          class="w-[200px] relative h-[200px] mr-5 rounded overflow-hidden shadow-md"
      >
        <img
            src="~assets/img/42565948.jpg"
            class="w-full h-full absolute object-cover"
        >
      </div>
      <!--      Header text-->
      <div>
        <h1 class="text-4xl font-bold mb-2">Elon Musk</h1>
        <p class="mb-3">I built SpaceX, acquired Tesla, Twitter.<br/>
          In my free time i sh*t post on twitter.
        </p>
        <a class="btn bg-sky-500 text-sky-50 py-2 px-4 rounded inline-block hover:bg-sky-600 duration-200"
           href="https://github.com/saeed51100">My Github
        </a>
      </div>
    </PageHeader>
    <!--    Blog Grid Starts   -->
    <section class="container py-16">
      <div class="grid sm:grid-cols-3 gap-5">
        <BlogCard v-for="i in 9"
                  :key="i"
                  title="Reference site about Lorem Ipsum, gits or"
                  excerpt="Reference site about
                  Lorem Ipsum, giving information on its origins,
                  as well as a random Lipsum generator."
                  image="http://localhost/test.raiatec.com/wp-content/uploads/2022/08/raiatec-lamp.jpg"
                  slug="blog-1"
        />


      </div>
    </section>
    <!--    Blog Grid Ends     -->
  </main>
</template>