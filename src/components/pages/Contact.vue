<template>
    <div class="contact-container">
      <h1>Contact Us</h1>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="name" required />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea id="message" v-model="message" required></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        message: ''
      };
    },
    methods: {
      handleSubmit() {
        // Aggiungi qui la logica di invio del modulo
        console.log('Name:', this.name);
        console.log('Email:', this.email);
        console.log('Message:', this.message);
  
        // Esempio di invio dei dati al server
        // axios.post('/api/contact', {
        //   name: this.name,
        //   email: this.email,
        //   message: this.message
        // }).then(response => {
        //   console.log('Message sent:', response.data);
        // }).catch(error => {
        //   console.error('Error sending message:', error);
        // });
      }
    }
  };
  </script>
  
  <style scoped>
  .contact-container {
    max-width: 600px;
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
  
  input, textarea {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
  }
  
  textarea {
    height: 100px;
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
  