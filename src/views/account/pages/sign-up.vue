<template>
  <section>
      <h1>ModelHouse</h1>
      <h2>sign up</h2>
      <div class="form">
          <div class="flex flex-column gap-2">
              <label for="email">Email Address</label>
              <InputText id="email" v-model="email" aria-describedby="email-help"/>
          </div>
          <div class="flex flex-column gap-2">
              <label for="password">Password</label>
              <InputText id="password" v-model="password" aria-describedby="password-help" />
          </div>
          <div class="flex flex-column gap-2">
              <label for="confirm_password">Confirm Password</label>
              <InputText id="confirm_password" v-model="confirm_password" aria-describedby="confirm-password-help" />
          </div>
          <div class="flex flex-column gap-2">
              <div style="font-size: 12px;">
                  you are agreeing to our <b><u style="cursor: pointer;">privacy policy</u></b>
                  and <b><u style="cursor: pointer;">terms of service.</u></b></div>
          </div>
          <div class="flex flex-column gap-2">
              <Button label="REGISTER" style="background-color: #02AA8B;
              border-color: #02AA8B; width: 400px;"/>
          </div>
      </div>
  </section>

</template>

<script>
export default {
    name: "sign-up",
    data() {
        return {
            email: null,
            password: null,
            confirm_password: null,
        }
    }
}
</script>
<style scoped>
h1{
    font-size: 80px;
    font-weight: 600;
    font-style: normal;
    line-height: 144px;
    padding: 0;
    margin: 10px;
}
h2{
    font-size: 36px;
    margin: 0;
}
h1, h2{
    text-align: center;
}
section{
    text-transform: capitalize;
    position:  relative;
    top: 100px;
    margin: 0 auto;
    width: 50%;

}
label{
    display: block;
    padding: 0 0 10px 0;
}
.flex{
    padding: 20px 0;
    position: relative;
    left: 100px;
}
#email, #password, #confirm_password{
    width: 400px;
}
</style>