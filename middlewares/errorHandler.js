const { logError } = require('../utils/logger');

const errorHandler = (err, req, res, next) => {
    logError(err.message);
    res.status(500).json({ error: 'Something went wrong!' });
};

module.exports = errorHandler;
