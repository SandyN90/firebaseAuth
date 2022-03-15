<template>
  <div>
    <br />
    Login page
    <div class="form-container">
      <input type="text" placeholder="Enter Email" v-model="email" />
      <input type="password" placeholder="Enter password" v-model="password" />
      <button @click="login">Login</button>
    </div>
  </div>
</template>

<script>
import app from "../firebase.js";
// import firebase from "firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login: function () {
      //   console.log(this.email);
      const auth = getAuth(app);
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          this.$router.push("/user");
          console.log(userCredential.user);
          // ...
        })
        .catch((error) => {
          console.log(error.code);
          console.log(error.message);
          // ..
        });
    },
  },
};
</script>

<style scoped>
input {
  margin: 20px 10px 20px 0;
}
</style>