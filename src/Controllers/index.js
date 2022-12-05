const { deleteRestaurant } = require("../Services");
const services = require("../Services");

class Controllers {
  
    async getRestaurants(req, res){
       res.send(await services.getRestaurants());
    }

    async getRestaurantById(req, res){
      let restaurant = await services.getRestaurantById(req.params.id)
      res.send(restaurant)
    }

    async createRestaurant(req, res){
      let response;
      await services.createRestaurant(req.body).then(res => response = res);

      if(response === 'ok') {
         res.sendStatus(201)
      }
      else {
         res.sendStatus(400)
      }
      
   }

   async deleteRestaurant(req, res){
      await services.deleteRestaurant(req.params.id)
      res.sendStatus(202)
   }

   async updateRestaurant(req, res){
      await services.updateRestaurant(req.body, req.params.id)
      res.sendStatus(204)
   }
     
}

module.exports = new Controllers();
