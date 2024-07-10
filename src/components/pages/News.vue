<template>
    <div class="news-container">
      <h1>News</h1>
      <div class="news-list">
        <div class="news-item" v-for="news in newsList" :key="news.id">
          <h2>{{ news.title }}</h2>
          <p>{{ news.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newsList: [
          {
            id: 1,
            title: 'News Article 1',
            description: 'This is the description for news article 1.'
          },
          {
            id: 2,
            title: 'News Article 2',
            description: 'This is the description for news article 2.'
          },
          // Aggiungi altre notizie qui
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .news-container {
    max-width: 800px;
    margin: 10rem auto;
    padding: 20px;
  }
  
  h1 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .news-list {
    margin-top: 20px;
  }
  
  .news-item {
    border-bottom: 1px solid #ccc;
    padding: 10px 0;
  }
  
  .news-item h2 {
    margin: 0 0 10px;
  }
  
  .news-item p {
    margin: 0;
  }
  </style>
  