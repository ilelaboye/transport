<template>
  <div class="welcome mt-4">
    <h2 class="welcome-txt fs-4">Schools</h2>
    <!-- Button trigger modal -->
    <button
      type="button"
      class="new btn btn-success"
      data-bs-toggle="modal"
      data-bs-target="#staticBackdrop"
    >
      + Add School
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
            <h5 class="modal-title" id="staticBackdropLabel">New School</h5>
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
  <Schtable></Schtable>
</template>

<script lang="ts" setup>
import Schtable from "@/components/tables/schtable.vue";
</script>

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
</style>
