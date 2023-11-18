import React, { Component } from 'react';
import axios from 'axios';

class NewsRecommendation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userPreferences: [],
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

    this.setState({ newsTopics });
  };

  handleCheckboxChange = (keyword) => {
    const { userPreferences } = this.state;
    const updatedPreferences = userPreferences.includes(keyword)
      ? userPreferences.filter((preference) => preference !== keyword)
      : [...userPreferences, keyword];

    this.setState({ userPreferences: updatedPreferences });
  };

  recommendNews = () => {
    const { newsTopics, userPreferences } = this.state;
    const visited = new Set();
    const recommendedNews = [];

    userPreferences.forEach((preference) => {
      const relatedTopics = newsTopics[preference] || [];

      relatedTopics.forEach((relatedTopic) => {
        const { title, description, url } = relatedTopic;

        if (!visited.has(url)) {
          visited.add(url);
          recommendedNews.push(relatedTopic);
        }
      });
    });

    this.setState({ recommendedNews });
  };

  render() {
    const { recommendedNews, newsTopics, userPreferences } = this.state;

    return (
      <div className="container mt-4">
        <h1>Choose Keywords</h1>
        <div className="row">
          {Object.keys(newsTopics).map((keyword) => (
            <div className="col-3" key={keyword}>
              <label className="form-check-label">
                <input
                  type="checkbox"
                  className="form-check-input"
                  value={keyword}
                  checked={userPreferences.includes(keyword)}
                  onChange={() => this.handleCheckboxChange(keyword)}
                />
                {keyword}
              </label>
            </div>
          ))}
        </div>
        <button className="btn btn-primary mt-3" onClick={this.recommendNews}>
          Recommend News
        </button>
        <h1 className="mt-4">Recommended News</h1>
        <div className="row">
          {recommendedNews.map((element) => (
            <div className="card col-md-3 m-3" key={element.url}>
              <img src={element.urlToImage} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{!element.title ? '' : element.title.slice(0, 45)}</h5>
                <p className="card-text">{!element.description ? '' : element.description.slice(0, 85)}</p>
                <a href={element.url} target="_blank" className="btn btn-primary">
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default NewsRecommendation;
