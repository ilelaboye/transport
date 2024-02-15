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
          href="#!"
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
          href="#!"
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
      <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
        <div class="container-fluid">
          <button class="btn" id="sidebarToggle">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div id="initials">
            <h6 class="d-flex justify-content-center py-2">T B</h6>
          </div>
        </div>
      </nav>
      <!-- Page content-->
      <div id="page-content" class="container-fluid">
        <div class="welcome mt-4">
          <h2>Welcome Tony Brown!</h2>
          <button class="btn btn-success">+ Add New Drives</button>
        </div>
        <div class="cards px-3 mt-4">
          <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-6 g-4">
              <div
                class="each-card d-flex justify-content-center align-items-center text-dark"
              >
                <h6 class="card-text">No Of Schools</h6>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 g-4">
              <div
                class="each-card d-flex justify-content-center align-items-center text-dark"
              >
                <h6 class="card-text">No Of Students</h6>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 g-4">
              <div
                class="each-card d-flex justify-content-center align-items-center text-dark"
              >
                <h6 class="card-text">No Of Staffs</h6>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 g-4">
              <div
                class="each-card d-flex justify-content-center align-items-center text-success"
              >
                <h6 class="card-text">No Of Drives</h6>
              </div>
            </div>
          </div>
        </div>

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
  #page-content {
    .welcome {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .cards {
      .each-card {
        height: 170px;
        box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
      }
    }
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
