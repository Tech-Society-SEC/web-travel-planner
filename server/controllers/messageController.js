const Message = require('../models/Message')

exports.saveContactMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body
    if (!name || !email || !message) return res.status(400).json({ message: 'Missing fields' })
    const m = new Message({ name, email, message })
    await m.save()
    res.json({ ok: true })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Server error' })
  }
}
