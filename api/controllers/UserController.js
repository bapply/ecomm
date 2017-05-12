module.exports = {
  register(req, res) {
    const {
      username,
      password
    } = req.body

    User.find({
        username
      })
      .then(users => {
        if (users.length > 0) {
          return res.forbidden('User already exists')
        }
        return User.create({
          username,
          password
        })
      })
      .then(users => {
        return res.json(users)
      })
      .catch(err => res.negotiate(err))
  },

  login(req, res) {
    const {
      username,
      password
    } = req.body
    User.findOne({
        username,
        password
      })
      .then(user => {
        if (!user) {
          return res.forbidden('User not found')
        }
        req.session.id = user.id
        req.session.authenticated = true
        return res.json(user)
      })
      .catch(err => res.negotiate(err))
  },
  logout(req, res) {
    req.session.id = null
    req.session.authenticated = false
    return res.view('homepage')
  },
  index(req, res) {
    return res.view('homepage')
  },
  showLogin(req, res) {
    return res.view('login')
  },
  showRegister(req, res) {
    return res.view('register')
  }
}
