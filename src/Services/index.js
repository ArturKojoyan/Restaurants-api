const restaurantSchema = require("../Models/restaurant-schema");

class Services {
  async getRestaurants() {
    const list = await restaurantSchema.find();
    return list;
  }

  async getRestaurantById(id) {
    const restaurant = await restaurantSchema.findOne({ _id: id });
    return restaurant;
  }

  async createRestaurant(props) {
    const { name, image, address, description, latitude, longitude, feedbacks } = props;
    await restaurantSchema.create(
      {
        name: name,
        image: image,
        address: address,
        description: description,
        latitude: latitude,
        longitude: longitude,
        feedbacks: feedbacks ? feedbacks : [{
          feedback: '',
          rate: 0,
        }],
      },
      (err) => {
        err ? console.log(err) : console.log("created successfully");
      }
    );
    return "ok";
  }

  async deleteRestaurant(id) {
    return await restaurantSchema.deleteOne({ _id: id });
  }

  async updateRestaurant(props, id) {
    const { feedback, rate } = props;
    const restaurant = await this.getRestaurantById(id);
    const feedbacks = restaurant.feedbacks;
    const currentFeedback = {
        feedback: feedback,
        rate: rate
    };
    feedbacks.push(currentFeedback)
    
    restaurant.feedbacks = feedbacks;
    restaurant.save();

    return "updated";
  }
}

module.exports = new Services();
