const getProfile = (req, res, next) => {
    res.status(200).json(req.user);
}

module.exports = {
    getProfile
}