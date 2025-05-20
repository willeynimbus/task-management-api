const errorHandlerMiddleware = (err, req, res, next) => {
    if (err.name === 'ValidationError') {
        res.status(400).send({ message: err.message });
    } else if (err.code === 11000) {
        res.status(400).send({ message: 'Duplicate key error' });
    } else {
        res.status(500).send({ message: 'Internal Server Error' });
    }
};

module.exports = errorHandlerMiddleware;