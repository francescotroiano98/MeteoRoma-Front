<template>
    <div class="curiosities-container">
      <h1>Curiosities</h1>
      <div class="curiosity-item" v-for="curiosity in curiositiesList" :key="curiosity.id">
        <h2>{{ curiosity.title }}</h2>
        <p>{{ curiosity.description }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        curiositiesList: [
          {
            id: 1,
            title: 'Curiosity 1',
            description: 'This is the description for curiosity 1.'
          },
          {
            id: 2,
            title: 'Curiosity 2',
            description: 'This is the description for curiosity 2.'
          },
          // Aggiungi altre curiosità qui
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .curiosities-container {
    max-width: 800px;
    margin: 10rem auto;
    padding: 20px;
  }
  
  h1 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .curiosity-item {
    border-bottom: 1px solid #ccc;
    padding: 10px 0;
  }
  
  .curiosity-item h2 {
    margin: 0 0 10px;
  }
  
  .curiosity-item p {
    margin: 0;
  }
  </style>
  