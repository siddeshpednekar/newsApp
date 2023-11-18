import React, { useState, useEffect } from 'react';

const NewsRecommendationSystem = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('us'); // Default country is set to 'us'
    const [recommendedNews, setRecommendedNews] = useState([]);

    const apiKey = '4568983a4b1f43af94a1e9e4c9a1d16b'; // Replace with your actual News API key
    const getRecommendedNews = async () => {
      const visited = new Set();
      const queue = [];
      const result = [];
  
      selectedCategories.forEach((category) => {
        if (!visited.has(category)) {
          visited.add(category);
          queue.push({ category, level: 0 });
        }
      });
  
      while (queue.length > 0) {
        const current = queue.shift();
        const articles = await getNewsArticlesFromAPI(current.category, selectedCountry);
  
        if (articles.length > 0) {
          result.push({ category: current.category, articles });
        }
  
        for (const neighbor of newsGraph[current.category]) {
          if (!visited.has(neighbor)) {
            visited.add(neighbor);
            queue.push({ category: neighbor, level: current.level + 1 });
          }
        }
      }
  
      setRecommendedNews(result.filter((news) => selectedCategories.includes(news.category)));
    };
    const newsGraph = {
        'Sports': ['Sports Technology', 'Entertainment', 'Health'],
        'Sports Technology': ['Sports', 'Technology', 'Science'],
        'Technology': ['Sports Technology', 'Business', 'Science', 'Health'],
        'World News': ['Technology', 'Business', 'Politics'],
        'Science': ['Technology', 'Sports Technology'],
        'Business': ['World News', 'Technology'],
        'Politics': ['World News', 'Business', 'Technology'],
        'Entertainment': ['Sports', 'Technology', 'Health'],
        'Health': ['Entertainment', 'Technology'],
    };

    useEffect(() => {
        getRecommendedNews();
    }, [selectedCategories, selectedCountry]);

    const getNewsArticlesFromAPI = async (category, country) => {
        try {
            const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`);
            const data = await response.json();

            if (data.status === 'ok') {
                return data.articles;
            } else {
                console.error('Error fetching news:', data.message);
                return [];
            }
        } catch (error) {
            console.error('Error fetching news:', error.message);
            return [];
        }
    };

    const bfs = async (selectedCategories, selectedCountry) => {
        const visited = new Set();
        const queue = [];
        const result = [];

        selectedCategories.forEach(category => {
            if (!visited.has(category)) {
                visited.add(category);
                queue.push({ category, level: 0 });
            }
        });

        while (queue.length > 0) {
            const current = queue.shift();
            const articles = await getNewsArticlesFromAPI(current.category, selectedCountry);

            if (articles.length > 0) {
                result.push({ category: current.category, articles });
            }

            for (const neighbor of newsGraph[current.category]) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push({ category: neighbor, level: current.level + 1 });
                }
            }
        }

        setRecommendedNews(result.filter(news => selectedCategories.includes(news.category)));
    };

    const handleCheckboxChange = (category) => {
        const updatedCategories = [...selectedCategories];

        if (updatedCategories.includes(category)) {
            // If category is already selected, remove it
            updatedCategories.splice(updatedCategories.indexOf(category), 1);
        } else {
            // If category is not selected, add it
            updatedCategories.push(category);
        }

        setSelectedCategories(updatedCategories);
    };

    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
    };

    return (
        <div id="container">
            <h1>News Recommendation System</h1>
            <label>Select your preferred news categories:</label>
            <div className="news-category">
                <input type="checkbox" id="sports" value="Sports" onChange={() => handleCheckboxChange('Sports')} checked={selectedCategories.includes('Sports')} />
                <label htmlFor="sports">Sports</label>
            </div>
            <div className="news-category">
                <input type="checkbox" id="technology" value="Technology" onChange={() => handleCheckboxChange('Technology')} checked={selectedCategories.includes('Technology')} />
                <label htmlFor="technology">Technology</label>
            </div>
            <div className="news-category">
                <input type="checkbox" id="world-news" value="World News" onChange={() => handleCheckboxChange('World News')} checked={selectedCategories.includes('World News')} />
                <label htmlFor="world-news">World News</label>
            </div>
            <div className="news-category">
                <input type="checkbox" id="business" value="Business" onChange={() => handleCheckboxChange('Business')} checked={selectedCategories.includes('Business')} />
                <label htmlFor="business">Business</label>
            </div>
            <div className="news-category">
                <input type="checkbox" id="politics" value="Politics" onChange={() => handleCheckboxChange('Politics')} checked={selectedCategories.includes('Politics')} />
                <label htmlFor="politics">Politics</label>
            </div>
            <div className="news-category">
                <input type="checkbox" id="entertainment" value="Entertainment" onChange={() => handleCheckboxChange('Entertainment')} checked={selectedCategories.includes('Entertainment')} />
                <label htmlFor="entertainment">Entertainment</label>
            </div>
            <div className="news-category">
                <input type="checkbox" id="health" value="Health" onChange={() => handleCheckboxChange('Health')} checked={selectedCategories.includes('Health')} />
                <label htmlFor="health">Health</label>
            </div>
            <label>Select your country:</label>
            <select onChange={handleCountryChange} value={selectedCountry}>
                <option value="us">United States</option>
                <option value="gb">United Kingdom</option>
                <option value="ca">Canada</option>
                {/* Add more country options as needed */}
            </select>
            <button onClick={getRecommendedNews}>Get Recommended News</button>

            <div id="news-container">
                {recommendedNews.map((news, index) => (
                    <div key={index} className="row">
                        {news.articles.map(element => (
                            <div key={element.url} className="card col-md-3 m-3">
                                <div className="card-body">
                                    <img src={element.urlToImage} className="card-img-top" alt="..." />
                                    <h5 className="card-title">{!element.title ? '' : element.title.slice(0, 45)}</h5>
                                    <p className="card-text">{!element.description ? '' : element.description.slice(0, 85)}</p>
                                    <a href={element.url} target="_blank" className="btn btn-primary">Read more</a>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewsRecommendationSystem;
