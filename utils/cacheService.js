const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 3600 });

const setCache = (key, data) => cache.set(key, data);
const getCache = (key) => cache.get(key);

module.exports = { setCache, getCache };
