<template>
  <div class="welcome mt-4">
    <h2 class="welcome-txt fs-4">Staff</h2>
    <!-- Button trigger modal -->
    <button
      type="button"
      class="new btn btn-success"
      data-bs-toggle="modal"
      data-bs-target="#staticBackdrop"
    >
      + Add Staff
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
            <h5 class="modal-title" id="staticBackdropLabel">New Staff</h5>
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
                <label class="text-success fw-bolder" for="name"> Name</label>
                <input
                  type="text"
                  style="width: 100%; height: 40px"
                  class="form-control rounded border-1 border-secondary px-2"
                />
              </div>
              <div class="m-3">
                <label for="number" class="text-success fw-bolder">
                  Phone Number</label
                >
                <input
                  type="number"
                  style="width: 100%; height: 40px"
                  class="form-control rounded border-1 border-secondary"
                />
              </div>
              <div class="dropdown m-3">
                <label class="text-success fw-bolder" for="Location"
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
  <div class="table-responsive mt-5">
    <table class="table table-striped">
      <tr>
        <th>Name</th>
        <th>Phone Number</th>
        <th>Location</th>
      </tr>
      <tr>
        <td>Adesoye Adebukola Kemisola</td>
        <td>08160900520</td>
        <td>Mainland</td>
      </tr>
      <tr>
        <td>Adekunle Timilehin Ibukunoluwa</td>
        <td>08149948382</td>
        <td>Mainland</td>
      </tr>
      <tr>
        <td>Adekunle Tioluwanimi Taiwo</td>
        <td>09123344567</td>
        <td>Island</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts"></script>

<style lang="scss" scoped>
#page-content {
  .welcome {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .welcome-txt {
      font-size: 8px;
    }
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
</style>
