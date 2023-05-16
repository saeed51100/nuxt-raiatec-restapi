<template>
  <div>
    <MenuTop/>

    <div style="background-color: #f3edde">
      <div class="container-fluid">
        <div class="row">

          <main class="col-md-9 ms-sm-auto px-md-4">
            <NuxtPage/>

          </main>
          <nav id="sidebarMenu" class="col-md-3 d-md-block bg-light sidebar collapse">
            <div class="position-sticky pt-3">

              <h2>sidebar is here</h2>

            </div>
          </nav>

        </div>
      </div>
    </div>

  </div>
</template>




