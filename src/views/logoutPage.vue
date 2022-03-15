<template>
  <div class="logoutPage">
    <button @click="logout">LogOut</button>
    <button @click="deleteuser">deleteUser</button>
    <h1>You successfully logged out</h1>
  </div>
</template>

<script>
import { getAuth, onAuthStateChanged, deleteUser } from "firebase/auth";
import app from "../firebase.js";
export default {
  methods: {
    logout: function () {
      const auth = getAuth(app);
      onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log("user state changed", user.email);
        } else {
          console.log("user is not signed-In");
        }
      });
    },
    deleteuser: function () {
      const auth = getAuth();
      deleteUser(auth.currentUser)
        .then(() => {
          console.log("userDeleted");
        })
        .catch((err) => {
          console.log(err.code);
        });
    },
  },
  created() {
    const auth = getAuth();
    if (auth.currentUser) {
      console.log(
        "This is getting user information using currentUser",
        auth.currentUser
      );
    } else {
      console.log("NO user is signed In");
    }
  },
};
</script>

<style>
.logoutPage {
  margin-top: 20px;
}
.logoutPage button {
  margin-right: 10px;
}
</style>