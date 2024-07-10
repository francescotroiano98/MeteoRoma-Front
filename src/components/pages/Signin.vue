<template>
    <div class="signin-container">
      <h1>Sign In</h1>
      <form @submit.prevent="handleSignin">
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username" required />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <div class="form-group">
          <label for="confirmPassword">Confirm Password:</label>
          <input type="password" id="confirmPassword" v-model="confirmPassword" required />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        confirmPassword: ''
      };
    },
    methods: {
      handleSignin() {
        if (this.password !== this.confirmPassword) {
          alert('Passwords do not match');
          return;
        }
        
        // Aggiungi qui la logica di registrazione
        console.log('Username:', this.username);
        console.log('Password:', this.password);
  
        // Esempio di invio dei dati al server
        // axios.post('/api/signin', {
        //   username: this.username,
        //   password: this.password
        // }).then(response => {
        //   console.log('Sign in successful:', response.data);
        // }).catch(error => {
        //   console.error('Sign in failed:', error);
        // });
      }
    }
  };
  </script>
  
  <style scoped>
  .signin-container {
    max-width: 400px;
    margin: 10rem auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    border: none;
    color: white;
    font-size: 16px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  