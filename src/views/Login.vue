<template>
  <v-container>
    <v-card width="500" class="mx-auto my-auto">
      <v-card-title>
        <h1>Login</h1>
      </v-card-title>
      <v-card-text>
        <v-form ref="form">
          <v-text-field
            v-model="loginFormData.email"
            :rules="emailRules"
            label="Email"
            prepend-icon="mdi-account-circle"
            clearable
          />
          <v-text-field
            v-model="loginFormData.password"
            :rules="[(v) => !!v || 'Password is required']"
            :type="showPassword ? 'text' : 'password'"
            label="Password"
            clearable
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          />
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="error" @click="reset">Reset</v-btn>
        <v-btn color="warning" @click="btnRegister">Register</v-btn>
        <v-btn color="info" @click="btnLogin">Login</v-btn>
      </v-card-actions>
    </v-card>

    <v-snackbar
      v-model="snackbar"
      :timeout="msg.timeout"
      top
      right
      color="pink"
    >
      {{ msg.text }}
      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <v-overlay :value="overlay">
      <v-progress-circular
        indeterminate
        size="64"
      ></v-progress-circular>
    </v-overlay>
  </v-container>
</template>

<script>
// Firebase App (the core Firebase SDK) is always required
// and must be listed first
import firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";
//import * as firebaseui from "firebaseui";

export default {
  data() {
    return {
      overlay: false,
      showPassword: false,
      snackbar: false,
      ui: null,
      fbUser: {},
      firebaseConfig: {
        apiKey: "AIzaSyB71LK8t6JZAUupd42bp4AXUxYOSdexUF0",
        authDomain: "fir-1a50d.firebaseapp.com",
        databaseURL: "https://fir-1a50d-default-rtdb.firebaseio.com",
        projectId: "fir-1a50d",
        storageBucket: "fir-1a50d.appspot.com",
        messagingSenderId: "974616580560",
        appId: "1:974616580560:web:b62946571ce98ddffc29d5",
        measurementId: "G-ZF4YQ690BT",
      },
      msg: {
        text: "",
        timeout: 3000,
      },
      loginFormData: {
        email: "",
        password: "",
      },
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
    };
  },
  methods: {
    async btnLogin() {
      if (this.$refs.form.validate()) {
        this.overlay=true;
        await firebase
          .auth()
          .signInWithEmailAndPassword(
            this.loginFormData.email,
            this.loginFormData.password
          )
          .then((authCredential) => {            
            // POST TO SERVER
            this.fbUser = authCredential.user;            
            if (this.fbUser.emailVerified) {

              // 取得登入當下的時間
              //let date = new Date();
              //let now = date.getTime();
              let now = this.$moment().format("YYYY-MM-DD HH:MM");
              let YM = this.$moment().format("YYYY-MM");
              firebase
                .database()
                .ref("/vue2-spa/logs/" + YM + "/" + this.fbUser.uid)
                .update({
                  signin: now,
                  email: this.loginFormData.email,
                })
                .then(async () => {
                  // signed in and go to home page.
                  this.snackbar = true;
                  this.msg.text = "登入成功, 將轉至首頁";
                  await setTimeout(() => {
                    this.$router.push("/home");
                    this.overlay=false;                   
                  }, this.msg.timeout);
                  
                })
                .catch((error) => {
                  // Error occurred. Inspect error.code.
                  this.msg.text = error;
                  this.snackbar = true;
                  this.overlay=false;
                });
            } else {
                this.snackbar = true;
                this.msg.text = "請先驗證信箱, 再登入";
                this.overlay=false;
            }
            
          })
          .catch((error) => {
            // Handle Errors here.
            this.msg.text = error;
            this.snackbar = true;
            this.overlay=false;
          });        
      } else {
        this.msg.text = "送出錯誤";
        this.snackbar = true;
      }
    },
    async btnRegister() {
      if (this.$refs.form.validate()) {
        this.overlay=true;
        await firebase
          .auth()
          .createUserWithEmailAndPassword(
            this.loginFormData.email,
            this.loginFormData.password
          )
          .then((authCredential) => {
            this.fbUser = authCredential.user;
            firebase
              .auth()
              .currentUser.sendEmailVerification()
              .then(async () => {
                // 取得註冊當下的時間
                //let date = new Date();
                //let now = date.getTime();
                let now = this.$moment().format("YYYY-MM-DD HH:MM");
                let YM = this.$moment().format("YYYY-MM");
                firebase
                  .database()
                  .ref("/vue2-spa/logs/" + YM + "/" + this.fbUser.uid)
                  .set({
                    signup: now,
                    email: this.loginFormData.email,
                  })
                  .catch((error) => {
                    // Handle Errors here.
                    this.msg.text = error;
                    this.snackbar = true;
                  });
                // Verification email sent.
                this.snackbar = true;
                this.msg.text = "註冊成功, 已發出信件";
                await setTimeout(() => {
                  this.$router.push("/home");
                  this.overlay=false;
                }, this.msg.timeout);
              })
              .catch(function(error) {
                // Handle Errors here.
                this.msg.text = error;
                this.snackbar = true;
                this.overlay=false;
              });
          })
          .catch((error) => {
            // Handle Errors here.
            this.msg.text = error;
            this.snackbar = true;
            this.overlay=false;
          });
      } else {
        this.msg.text = "送出錯誤";
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    },
  },
  created() {
    // Initialize Firebase
    firebase.initializeApp(this.firebaseConfig);
    // Initialize the FirebaseUI Widget using Firebase.
    //this.ui = new firebaseui.auth.AuthUI(firebase.auth());
  },
};
</script>
