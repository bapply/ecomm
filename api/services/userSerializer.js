module.exports = {
    show (id) {
        User.findOne(id)
        .then(user => {
            delete user.password
            return res.json(user)
        })
        .catch(err => res.negotiate(err))
    }
}