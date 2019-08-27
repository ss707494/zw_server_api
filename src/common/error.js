export const catchErr = fn => async (req, res, next) => {
  try {
    await fn(req, res, next)
  } catch (e) {
    next(e)
  }
}

export default function(err, req, res) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).send(err.message || 'invalid token...');
  }
  if (err) {
    res.status(500)
    // return res.json({ error: err })
  }
}
