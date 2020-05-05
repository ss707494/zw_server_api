export const catchErr = fn => async (req, res, next) => {
  try {
    await fn(req, res, next)
  } catch (e) {
    next(e)
  }
}

// noinspection JSUnusedLocalSymbols
export default function(err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({
      error: err.message || 'invalid token...'
    });
  } else if (err) {
    res.status(500).json({
      error: err
    })
    // return res.json({ error: err })
  }
}

export const netError = () => {
  return new Error('Network')
}
