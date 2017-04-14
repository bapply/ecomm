module.exports = function (req, res, next) {
    const {username, password} = req.body
    User.find({ username })
    .then(users => {
        if (users.length > 0) {
            return res.forbidden('User already exists')
        }
        next()
    })
    .catch(err => res.negotiate(err))
}