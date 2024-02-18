<template>
  <div class="d-flex" id="wrapper">
    <!-- Sidebar-->
    <div class="border-end bg-white" id="sidebar-wrapper">
      <div
        class="sidebar-heading border-bottom bg-white d-flex justify-content-center py-3"
      >
        <img src="@/assets/images/logo.png" class="logo h-100" />
      </div>
      <div class="list-group list-group-flush">
        <a
          class="list-group-item list-group-item-action list-group-item-light p-3"
          href="http://localhost:5173/dashboard"
          >Dashboard</a
        >
        <a
          class="list-group-item list-group-item-action list-group-item-light p-3"
          href="#!"
          >Schools</a
        >
        <a
          class="list-group-item list-group-item-action list-group-item-light p-3"
          href="#!"
          >Students</a
        >
        <a
          class="list-group-item list-group-item-action list-group-item-light p-3"
          href="http://localhost:5173/staff"
          >Staffs</a
        >
        <a
          class="list-group-item list-group-item-action list-group-item-light p-3"
          href="#!"
          >Drives</a
        >
      </div>
    </div>

    <!-- Page content wrapper-->
    <div id="page-content-wrapper">
      <!-- Top navigation-->
      <nav class="navbar navbar-expand-lg navbar-light border-bottom">
        <div class="container-fluid">
          <button class="btn" id="sidebarToggle">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div id="empty-div"></div>
          <div id="initials">
            <h6 class="d-flex justify-content-center py-2">T B</h6>
          </div>
        </div>
      </nav>

      <!-- Page content-->
      <div id="page-content" class="container-fluid">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const toggleSidebar = () => {};
</script>

<style lang="scss" scoped>
#wrapper {
  #page-content-wrapper {
    background-color: #fff;
  }

  /* min-height: 100vh;
    #sidebar-wrapper {
      width: 27em;
      .sidebar-heading {
      }
    }
    #page-content-wrapper {
      .navbar {
        height: 57px;
      }
    } */
}
</style>
