const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const chefs = require('./data/chefs.json');
const thai_foods = require('./data/recipes.json');
const recipes = thai_foods.thai_foods;

const cors = require('cors');
app.use(cors());


app.get('/', (req, res) => {
    res.send('Thai Orchid Bristo is comming');
})

app.get('/chefs', (req, res) => {
    res.send(chefs);
})

app.get('/recipes/:chefId', (req, res) => {
    const chefId = parseInt(req.params.chefId);
    console.log(chefId);
    const selectedRecipes = recipes.filter(re => parseInt(re.chef_id) === chefId);
    res.send(selectedRecipes);
})

app.listen(port, () => {
    console.log(`Orchid is running on port: ${port}`);
})