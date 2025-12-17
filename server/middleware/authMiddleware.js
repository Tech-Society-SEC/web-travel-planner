const jwt = require('jsonwebtoken')

module.exports = function(req, res, next) {
  const auth = req.headers.authorization
  if (!auth) return res.status(401).json({ message: 'No token' })
  const parts = auth.split(' ')
  if (parts.length !== 2) return res.status(401).json({ message: 'Invalid token' })
  const token = parts[1]
  try {
    const data = jwt.verify(token, process.env.JWT_SECRET || 'secret')
    req.userId = data.id
    next()
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' })
  }
}
