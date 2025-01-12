const axios = require('axios');
const { getCache, setCache } = require('../utils/cacheService');

exports.getNews = async (req, res) => {
    const { category = 'general' } = req.query;
    const cacheKey = `news_${category}`;

    if (getCache(cacheKey)) {
        return res.status(200).json({ news: getCache(cacheKey) });
    }

    try {
        const response = await axios.get(
            `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${process.env.NEWS_API_KEY}`
        );

        const articles = response.data.articles;
        setCache(cacheKey, articles);
        res.status(200).json({ news: articles });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch news' });
    }
};

