<template>
    <div class="forecast-container">
      <h1>Weather Forecast</h1>
      <div class="forecast-item" v-for="forecast in forecastList" :key="forecast.id">
        <h2>{{ forecast.date }}</h2>
        <p>{{ forecast.description }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        forecastList: [
          {
            id: 1,
            date: '2024-07-10',
            description: 'Sunny with a chance of rain.'
          },
          {
            id: 2,
            date: '2024-07-11',
            description: 'Partly cloudy.'
          },
          // Aggiungi altre previsioni qui
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .forecast-container {
    max-width: 800px;
    margin: 10rem auto;
    padding: 20px;
  }
  
  h1 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .forecast-item {
    border-bottom: 1px solid #ccc;
    padding: 10px 0;
  }
  
  .forecast-item h2 {
    margin: 0 0 10px;
  }
  
  .forecast-item p {
    margin: 0;
  }
  </style>
  