import jwt from 'jsonwebtoken'
import { secret } from '../jwtConfig'
import { signToken } from './utils'

function UnauthorizedError(code, error) {
  this.name = "UnauthorizedError";
  this.message = error.message;
  Error.call(this, error.message);
  Error.captureStackTrace(this, this.constructor);
  this.code = code;
  this.status = 401;
  this.inner = error;
}

UnauthorizedError.prototype = Object.create(Error.prototype);
UnauthorizedError.prototype.constructor = UnauthorizedError;

export const tokenHandle = (req, res, next) => {
  if (!req.headers || !req.headers.authorization) {
    return next(new UnauthorizedError('credentials_required', { message: 'No authorization token was found' }));
  }
  const parts = req.headers.authorization.split(' ');
  if (parts.length !== 2) {
    return next(new UnauthorizedError('credentials_bad_scheme', { message: 'Format is Authorization: Bearer [token]' }));
  }
  const credentials = parts[1];
  jwt.verify(credentials, secret, function(err, decoded) {
    if (err) {
      console.log('权限验证失败,查看REFRESH_TOKEN')
      if (req.headers.refresh_token) {
        jwt.verify(req.headers.refresh_token, secret, function(err, decoded1) {
          if (err) {
            next(new UnauthorizedError('invalid_token', err));
          }
          const tokenObj = signToken(decoded1)
          res.set('refreshToken', JSON.stringify(tokenObj))
          req.headers.authorization = tokenObj.token
          console.log('REFRESH_TOKEN 成功, 更新token')
          next(null, decoded1)
        })
      } else {
        next(new UnauthorizedError('invalid_token', err));
      }
    } else {
      next(null, decoded)
    }
  });
}

export default tokenHandle
