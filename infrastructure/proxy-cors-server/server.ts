import express, { Request, Response } from 'express'
import axios from 'axios'
import cors from 'cors'
// eslint-disable-next-line import/no-extraneous-dependencies
import bodyParser from 'body-parser'

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.post('/api/games', async (req: Request, res: Response) => {
  try {
    const { accessTokenURL, dataAPIURL, dataFields, authHeaders } = req.body

    if (!accessTokenURL || !dataAPIURL || !dataFields || !authHeaders) {
      throw new Error('Missing required fields')
    }

    const auth = await axios.post(accessTokenURL)

    // eslint-disable-next-line camelcase
    const { access_token } = auth.data
    const headers = {
      ...authHeaders,
      // eslint-disable-next-line camelcase
      Authorization: `Bearer ${access_token}`
    }

    const requestBody = {
      fields: dataFields
    }

    const response = await axios.post(dataAPIURL, requestBody, { headers })

    res.send(response.data)
  } catch (err: any) {
    // Ajout de : any pour définir un type
    console.error(`Error: ${err.message}`)
    console.log(err)
    res.status(400).json({ message: err.message })
  }
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
