module.exports = {
    register (req, res) {
          const {username, password} = req.body
        
        User.find({ username })
        .then(users => {
            if (users.length > 0) {
                return res.forbidden('User already exists')
            }
            return User.create({ username, password })
        })
        .then(users => {
            return res.json(users)
        })
        .catch(err => res.negotiate(err))
    },

    login (req, res) {
        const {username, password} = req.body
        User.findOne({username, password})
        .then(user => {
            if (!user) {
                return res.forbidden('User not found')
            }
            req.session.id = user.id
            return res.json(user)
        })
        .catch(err => res.negotiate(err))
    }
}