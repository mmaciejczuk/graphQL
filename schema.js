const fetch = require('node-fetch')

const x = fetch('http://api.plos.org/search?q=title:DNA'
)
.then(response => response.text())

