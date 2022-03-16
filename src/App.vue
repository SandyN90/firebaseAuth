<script>
import { getAuth, onAuthStateChanged, signOut } from "@firebase/auth";
import app from "./firebase";
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

// import { RouterView } from "vue-router";

// import HelloWorld from './components/HelloWorld.vue'
export default {
  data() {
    return {
      url: "",
    };
  },
  methods: {
    logout: () => {
      const auth = getAuth(app);
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          console.log("THis is logout");
        })
        .catch((error) => {
          // An error happened.
        });
    },
  },
  created() {
    const auth = getAuth(app);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("user logged In", user.email);
        this.url = user.photoURL;
      } else {
        console.log("  signed out");
      }
    });
  },
};
</script>

<template>
  <router-link class="routerlink" to="/register">Register</router-link> |
  <router-link class="routerlink" to="/login"> Login </router-link> |
  <router-link class="routerlink" to="/">Home </router-link> |
  <router-link class="routerlink" to="/user">User </router-link>|
  <button @click="logout">Logout</button>
  <!-- <button @click="logout">Logout</button> -->
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
  <router-view></router-view>

  <hr />
  <br />
  <img :src="url" alt="" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.routerlink {
  text-decoration: none;
  margin-left: 10px;
  margin-bottom: 20px;
}
</style>
