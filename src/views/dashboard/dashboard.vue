<template>
  <div class="welcome mt-4">
    <h2 class="welcome-txt fs-4">Welcome! Tony Brown</h2>
    <!-- Button trigger modal -->
    <button
      type="button"
      class="new btn btn-success"
      data-bs-toggle="modal"
      data-bs-target="#staticBackdrop"
    >
      + Add New Drive
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">New Drive</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="m-3">
                <label class="text-success fw-bolder" for="date">Date</label>
                <input
                  type="date"
                  style="width: 100%; height: 40px"
                  class="form-control rounded border-1 border-secondary px-2"
                />
              </div>
              <div class="m-3">
                <label for="time" class="text-success fw-bolder"> Time</label>
                <input
                  type="time"
                  style="width: 100%; height: 40px"
                  class="form-control rounded border-1 border-secondary"
                />
              </div>
              <div class="dropdown m-3">
                <label class="text-success fw-bolder" for="location"
                  >Location</label
                >
                <select
                  class="form-select border-1 rounded border-secondary"
                  style="height: 40px; width: 100%"
                  aria-label="Default select example"
                >
                  <option selected>select location</option>
                  <option value="1">Island</option>
                  <option value="2">Mainland</option>
                </select>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-success"
              data-bs-dismiss="modal"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="cards px-2 mt-4">
    <div class="row">
      <div class="col-lg-3 col-md-6 col-sm-6 g-4">
        <div class="each-card d-flex justify-content-center align-items-center">
          <div class="card-text text-center">
            <h5 class="num">20</h5>
            <h6>No Of Schools</h6>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6 g-4">
        <div class="each-card d-flex justify-content-center align-items-center">
          <div class="card-text text-center">
            <h5 class="num">100</h5>
            <h6>No Of Students</h6>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6 g-4">
        <div class="each-card d-flex justify-content-center align-items-center">
          <div class="card-text text-center">
            <h5 class="num">25</h5>
            <h6>No Of Staffs</h6>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6 g-4">
        <div class="each-card d-flex justify-content-center align-items-center">
          <div class="card-text text-center">
            <h5 class="num">18</h5>
            <h6>No Of Drives</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts"></script>

<style lang="scss" scoped>
#page-content {
  .welcome {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media only screen and (max-width: 576px) {
    .welcome {
      .welcome-txt {
        font-size: 8px;
      }
      .new {
        padding: 10px 0px;
        width: 100px;
        font-size: 12px;
      }
    }
  }
}
.cards {
  .each-card {
    height: 170px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;

    .card-text .num {
      font-size: 30px;
      font-weight: 700;
    }
  }
}
</style>
