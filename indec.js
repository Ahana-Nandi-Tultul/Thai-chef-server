const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const cors = require('cors');
app.use(cors());

app.get('/', (req, res) => {
    res.send('Thai Orchid Bristo is comming');
})

app.listen(port, () => {
    console.log('Orchid is running on port:', $port);
})