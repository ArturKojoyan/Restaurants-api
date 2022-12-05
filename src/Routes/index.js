const app = require('../../app')
const controllers = require('../Controllers')

app.get('/restaurants', controllers.getRestaurants)

app.get('/restaurant/:id', controllers.getRestaurantById)

app.post('/restaurant', controllers.createRestaurant)

app.post('/restaurant/:id/feedback', controllers.updateRestaurant)

app.delete('/restaurant/:id', controllers.deleteRestaurant)
