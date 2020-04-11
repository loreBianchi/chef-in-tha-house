import chefs from '../../mocks/chefs';

let data = {chefs};

export default (req, res) => {
  if (req.method === 'POST') {
    // Process a POST request
    const newChef = req.body
    data.chefs.push(newChef);
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(data))
  } else {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(data))
  }
}
