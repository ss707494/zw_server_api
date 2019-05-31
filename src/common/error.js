export const catchErr = fn => async (req, res, next) => {
  try {
    await fn(req, res, next)
  } catch (e) {
    next(e)
  }
}

export default function(err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).send('invalid token...');
  }
  if (err) {
    res.status(500)
    res.json({ error: err })
  }
}
