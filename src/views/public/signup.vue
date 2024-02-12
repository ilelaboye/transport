<template>
  <div class="container">
    <div class="page-wrapper">
      <div class="brand">
        <img src="@/assets/images/logo.png" alt="" /> TRANSPORT
      </div>
      <div class="form-side">
        <form>
          <div class="each-input">
            <div class="input-group">
              <span class="input-group-text">
                <svg
                  class="icon"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1rem"
                  viewBox="0 0 448 512"
                >
                  <path
                    d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
                  />
                </svg>
              </span>
              <input
                type="email"
                v-model="email"
                placeholder="Email"
                class="form-control"
              />
            </div>
            <div class="error-msg" v-if="errors.email">{{ eMsg.email }}</div>
          </div>

          <div class="each-input">
            <div class="input-group">
              <span class="input-group-text">
                <svg
                  height="1rem"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"
                  />
                </svg>
              </span>
              <input
                type="password"
                v-model="password"
                placeholder="Password"
                class="form-control"
              />
            </div>
            <div class="error-msg" v-if="errors.password">
              {{ eMsg.password }}
            </div>
          </div>

          <div class="pass-reminder mt-5 d-flex">
            <div class="checkbox"><input type="checkbox" /> Remember Me</div>
            <div>
              <h6 class="password">Forgot Password?</h6>
            </div>
          </div>

          <div>
            <button type="submit" class="sign-in-btn mt-4">Sign In</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "login-page",
  setup() {
    const email = ref("");
    const password = ref("");
    const errors = ref({
      email: false,
      password: false,
    });
    const eMsg = ref({
      email: "This field is required",
      password: "This field is required",
    });
    return {
      email,
      password,
      errors,
      eMsg,
    };
  },
});
</script>

<style>
.container {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.page-wrapper .brand {
  text-align: center;
}
.page-wrapper .brand img {
  height: 40px;
  margin-bottom: 23px;
}
.form-side {
  padding: 25px;
  width: 450px;
  height: fit-content;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
}
form .each-input {
  margin-bottom: 20px;
}
form .input-group {
  height: 45px;
}
form .input-group .input-group-text {
  background: none;
  cursor: pointer;
}
.pass-reminder {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.password {
  color: black;
  font-size: 14px;
  font-weight: 400;
}

.sign-in-btn {
  width: 100%;
  height: 48px;
  background-color: rgb(3, 110, 44);
  border: 0;
  color: #fff;
  border-radius: 8px;
}
.error-msg {
  color: red;
  font-size: 12px;
  margin-left: 40px;
}
</style>
