let data = {
  chefs: [
    { name: 'John Doe' }
  ]
}

export default (req, res) => {
  if (req.method === 'POST') {
    // Process a POST request
    const newChef = req.body.firstName
    console.log('req', newChef)
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(data))
  } else {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(data))
  }
}
