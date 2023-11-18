import React, { Component } from 'react';
import axios from 'axios';

class NewsRecommendation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userPreferences: ['politics','sports','technology','more','apple'],
      newsTopics: {},
      recommendedNews: [],
    };
  }

  componentDidMount() {
    this.fetchNewsData();
  }

  fetchNewsData = async () => {
    const apiKey = '8d1c7ff32fac4e5d8a20d32842cd9054'; // Replace with your News API key
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    try {
      const response = await axios.get(apiUrl);
      const articles = response.data.articles;
      this.processNewsData(articles);
    } catch (error) {
      console.error('Error fetching news data:', error);
    }
  };

  processNewsData = (newsData) => {
    // Process the news data and build the newsTopics graph
    const newsTopics = {};
    newsData.forEach((article) => {
      const title = article.title || '';
      const description = article.description || '';
      const keywords = (title + ' ' + description).split(' ').filter(Boolean);
  
      keywords.forEach((keyword) => {
        if (!newsTopics[keyword]) {
          newsTopics[keyword] = [];
        }
        newsTopics[keyword].push(article);
      });
    });
  
    console.log(newsTopics); // Log newsTopics to identify any potential issues
  
    this.setState({ newsTopics }, this.recommendNews);
  };
  
  
  

  recommendNews = () => {
    const { newsTopics, userPreferences } = this.state;
    const visited = new Set();
    const recommendedNews = [];
  
    userPreferences.forEach((preference) => {
      const relatedTopics = newsTopics[preference] || [];
  
      relatedTopics.forEach((relatedTopic) => {
        const { title, description, url } = relatedTopic;
  
        // Check if the title or URL contains the user preference
        if (
          title.toLowerCase().includes(preference) ||
          url.toLowerCase().includes(preference)
        ) {
          if (!visited.has(url)) {
            visited.add(url);
            recommendedNews.push(relatedTopic);
          }
        }
  
        // Check if the description is not null and contains the user preference
        if (description && description.toLowerCase().includes(preference)) {
          if (!visited.has(url)) {
            visited.add(url);
            recommendedNews.push(relatedTopic);
          }
        }
      });
    });
  
    this.setState({ recommendedNews });
  };
  
  
  
  render() {
    const { recommendedNews } = this.state;

    return (
      <div>
        <h1>Recommended News</h1>
        <ul>
        <div className='row'>
          {recommendedNews.map((element) => {
            return <div class="card col-md-3 m-3" key={element.url} style={{ width: "18rem" }} >
            <img src={element.urlToImage} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{!element.title?"":element.title.slice(0,45)}</h5>
                <p class="card-text">{!element.description?"":element.description.slice(0,85)}</p>
                <a href={element.url} target='_blank' class="btn btn-primary">Read more</a>
            </div>
        </div>
  })}
  </div>
        </ul>
      </div>
    );
  }
}

export default NewsRecommendation;