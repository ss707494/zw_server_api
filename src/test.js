
const app = require('express')();
const PORT = process.env.PORT = 4500;

app.get('*', function(req, res, next) {
  setImmediate(() => {
    next(new Error('Ohh!! Something went wrong'));
  });
});

app.use(function(error, req, res, next) {
  res.json({ message: error.message });
});

app.listen(PORT, () => {
  console.log('Server is running at PORT',PORT);
});
