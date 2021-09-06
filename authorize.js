const authorize = (req, res, next) => {
    const { user } = req.query;

    if (user === 'babyyy😘') {
        req.user = { name: 'babyyy😘', id: 'my-love-my-life' }
        next();
    } else {
        res.status(401).send('Unauthorized')
    }
}

module.exports = authorize;