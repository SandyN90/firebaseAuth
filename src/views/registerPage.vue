<template>
  <div class="register">
    <input type="text" placeholder="Enter Email" v-model="email" />
    <input type="password" placeholder="Enter Password" v-model="password" />
    <button @click="register">Register</button>
    <hr />
    <h1>You can Sign-In via sign-in mail</h1>
    <button @click="linkHandler">Click Here...</button>
  </div>
</template>

<script>
import router from "../router/index.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
} from "firebase/auth";
import app from "../firebase.js";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    register() {
      const auth = getAuth(app);
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          // const user =
          this.$router.push("/login");
          // ...userCredential.user;
          //   console.log(userCredential.val());
          // console.log(user);
        })
        .catch((error) => {
          console.log(error.code);
          console.log(error.message);
          // ..
        });
    },
    linkHandler: function () {
      // const email = prompt("Enter Your Email");
      // const auth = getAuth();
      // const actionCodeSettings = {
      //   // URL you want to redirect back to. The domain (www.example.com) for this
      //   // URl must be authorized domain list in the firebase console.
      //   url: "http://localhost:3000/login",
      //   handleCodeInApp: true,
      // };
      // sendSignInLinkToEmail(auth, email, actionCodeSettings)
      //   .then(() => {
      //     alert("Email Sent Successfully!");
      //     window.localStorage.setItem("emailForSignIn", email);
      //   })
      //   .catch((error) => {
      //     console.log(error.code);
      //   });
      console.log("link handler clicked");

      const auth = getAuth();
      if (isSignInWithEmailLink(auth, window.location.href)) {
        let email = window.localStorage.getItem("emailForSignIn");
        if (!email) {
          email = prompt("Please provide your email for confirmation");
        }
        signInWithEmailLink(auth, email, window.location.href)
          .then((result) => {
            window.localStorage.removeItem("emailForSignIn");
            console.log("removing email from local storage");
          })
          .catch((err) => {
            console.log(err.message);
          });
      } else {
        console.log("Linked handler byPass");
        console.log(window.location.href);
      }
    },
  },
};
</script>

<style scoped>
input {
  /* margin-top: 20px;
  margin-left: 10px; */
  margin: 20px 10px 10px 0;
}
</style>