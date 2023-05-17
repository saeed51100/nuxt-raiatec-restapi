<script lang="ts" setup>
const {data: posts} = await useWpApi().getPosts<any>();
</script>
<template>


  <!--    Blog Grid Starts   -->
  <div id="rt_archive" class="py-5">
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

        <BlogCard
            v-for="post in posts"
            :key="post.id"
            :title="post.title.rendered"
            :excerpt="post.excerpt.rendered"
            :image="post && post._embedded && post._embedded['wp:featuredmedia'] ? post._embedded['wp:featuredmedia'][0].source_url : ' '"
            :slug="post.slug"
        />

      </div>
    </div>
  </div>
  <!--    Blog Grid Ends     -->

</template>

<style lang="scss">
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}

/* https://stackoverflow.com/questions/15909489/text-overflow-ellipsis-on-two-lines */
.rt_title_lines {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

/*https://stackoverflow.com/questions/15909489/text-overflow-ellipsis-on-two-lines*/
.rt_excerpt_lines {
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.shadow-sm {
  box-shadow: 0 0 10px 0 rgb(0 0 0 / 10%) !important;

  &
  :hover {
    box-shadow: 0 0 10px 0 rgb(0 0 0 / 20%) !important;
  }

}

img {
  opacity: 90%;
  border-radius: 0.3333rem 0.3333rem 0 0;
}

svg {
  opacity: 90%;
}

a {

  &
  :hover {

    > img {
      opacity: 100%;
    }

    > svg {
      opacity: 100%;
    }

  }

  color: #151414;
  text-decoration: none;
}

</style>