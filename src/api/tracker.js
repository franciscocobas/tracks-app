import axios from 'axios'

// To start ngrok `ngrok http 3000`
export default axios.create({
  baseURL: 'http://dc22c92b.ngrok.io'
})