<template>
  <div>
    <br />
    Login page
    <div class="form-container">
      <input type="text" placeholder="Enter Email" v-model="email" />
      <input type="password" placeholder="Enter password" v-model="password" />
      <button @click="login">Login</button>
      <hr />
      <button @click="googlePopUp">GooglePopUp</button>
      <hr />
      <button @click="googleRedirect">googleRedirect</button>
      <hr />
      <button scope="public_profile,email" @click="checkLoginState">
        FacebookLogin
      </button>
    </div>
  </div>
</template>

<script>
import app from "../firebase.js";
// import firebase from "firebase";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  FacebookAuthProvider,
} from "firebase/auth";

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
    googlePopUp: function () {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google access token. You can use it to access the googel api
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          const user = result.user;
        })
        .catch((err) => {
          console.log(err.code, err.message, err.email);
          const credential = GoogleAuthProvider.credentialFromError(err);
        });
    },
    googleRedirect: function () {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      signInWithRedirect(auth, provider);
      getRedirectResult(auth)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          console.log(result.user);
        })
        .catch((err) => {
          console.log(err.code);
          const credential = GoogleAuthProvider.credentialFromError(err);
        });
    },
    checkLoginState() {
      const auth = getAuth(app);
      signInWithPopup(auth, new FacebookAuthProvider())
        .then((result) => {
          // The signed-in user info.
          const user = result.user;

          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          const credential = FacebookAuthProvider.credentialFromResult(result);
          const accessToken = credential.accessToken;
          console.log("user ", accessToken);
          // ...
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.email;
          // The AuthCredential type that was used.
          const credential = FacebookAuthProvider.credentialFromError(error);
          console.log(
            "credential ",
            errorCode,
            errorMessage,
            email,
            credential
          );

          // ...
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