const crypto = require('crypto')
const squareConnect = require('square-connect')

const accessToken = process.env.NODE_ENV === 'production' ? 'EAAAEOm50wYgkAz3Jof26OKkdtzRiZGH-yI0eQKq5qasQ8unViM52BSSlGcBmjqm' : 'EAAAEMse2KRnfVNTYWCXw5OCGEV_wYFf4Xf1KowKvNR6a3GJkPDdhn4fV2qUcTpq'
// const accessToken = 'EAAAEOm50wYgkAz3Jof26OKkdtzRiZGH-yI0eQKq5qasQ8unViM52BSSlGcBmjqm'

// Set Square Connect credentials and environment
const defaultClient = squareConnect.ApiClient.instance

// Configure OAuth2 access token for authorization: oauth2
const oauth2 = defaultClient.authentications['oauth2']
oauth2.accessToken = accessToken

// Set 'basePath' to switch between sandbox env and production env
// sandbox: https://connect.squareupsandbox.com
// production: https://connect.squareup.com

defaultClient.basePath = process.env.NODE_ENV === 'production' ? 'https://connect.squareup.com' : 'https://connect.squareupsandbox.com'
// defaultClient.basePath = 'https://connect.squareup.com'

export const dealPay = (app) => {
  // app.use('/pay/process-payment', tokenHandle)
  app.post('/pay/process-payment', async (req, res) => {

    const request_params = req.body

    // length of idempotency_key should be less than 45
    const idempotency_key = crypto.randomBytes(22).toString('hex')

    // Charge the customer's card
    const payments_api = new squareConnect.PaymentsApi()
    const request_body = {
      source_id: request_params.nonce,
      amount_money: {
        amount: request_params.amount, // $1.00 charge
        currency: 'USD',
      },
      idempotency_key: idempotency_key,
    }

    try {
      const response = await payments_api.createPayment(request_body)
      res.status(200).json({
        'title': 'Payment Successful',
        'result': response,
      })
    } catch (error) {
      res.status(500).json({
        'title': 'Payment Failure',
        'result': error.response.text,
      })
    }
  })

}
