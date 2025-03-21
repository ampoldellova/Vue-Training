import restaurant1 from "../assets/restaurants/1.jpg";
import restaurant2 from "../assets/restaurants/2.jpg";
import restaurant3 from "../assets/restaurants/3.jpg";
import restaurantlogo1 from "../assets/logos/1.png";
import restaurantlogo2 from "../assets/logos/2.png";
import restaurantlogo3 from "../assets/logos/3.png";
import food1 from "../assets/foods/1.jpg";
import food2 from "../assets/foods/2.jpg";
import food3 from "../assets/foods/3.jpg";
import food4 from "../assets/foods/4.jpg";
import food5 from "../assets/foods/5.jpg";
import food6 from "../assets/foods/6.jpg";
import food7 from "../assets/foods/7.jpg";
import food8 from "../assets/foods/8.jpg";
import food9 from "../assets/foods/9.jpg";
import food10 from "../assets/foods/10.jpg";
import food11 from "../assets/foods/11.jpg";
import food12 from "../assets/foods/12.jpg";

export const categories = [
  {
    _id: "6537ece708ff5b7de97d0695",
    title: "Fried Rice",
    value: "fried_rice",
    imageUrl:
      "https://d326fntlu7tb1e.cloudfront.net/uploads/4a4cd06e-94de-4478-8588-66eee01354d4-rice.png",
    createdAt: "2023-10-24T16:12:23.571Z",
    updatedAt: "2023-10-24T16:12:23.571Z",
    __v: 0,
  },
  {
    _id: "65310f3381e4d98d60b093c5",
    title: "Curry",
    value: "curry",
    imageUrl:
      "https://d326fntlu7tb1e.cloudfront.net/uploads/ee2d952c-1d7d-48f7-81b3-cb967343eb6c-curry.png",
    __v: 0,
  },
  {
    _id: "6531206cbbe4998e90af3feb",
    title: "Pizza",
    value: "pizza",
    imageUrl:
      "https://d326fntlu7tb1e.cloudfront.net/uploads/466693e6-f999-42e0-8794-09325ece1b45-Pizza.png",
    __v: 0,
  },
  {
    _id: "6531209dbbe4998e90af3fef",
    title: "Pasta",
    value: "pasta",
    imageUrl:
      "https://d326fntlu7tb1e.cloudfront.net/uploads/6645cf41-bc89-4dd0-9f80-bba9487633b2-Spaghetti.png",
    __v: 0,
  },
  {
    _id: "653120babbe4998e90af3ff1",
    title: "Beverages",
    value: "beverages",
    imageUrl:
      "https://d326fntlu7tb1e.cloudfront.net/uploads/93c4b3df-9e55-4308-a834-9fe4ad67c0b3-bar.png",
    __v: 0,
  },
  {
    _id: "65312084bbe4998e90af3fed",
    title: "Burgers",
    value: "burgers",
    imageUrl:
      "https://d326fntlu7tb1e.cloudfront.net/uploads/3c94bc09-b8b9-4961-accb-f68b7e8121cc-Hamburger.png",
    __v: 0,
  },
  {
    _id: "65310efb81e4d98d60b093c3",
    title: "Chicken",
    value: "chicken",
    imageUrl:
      "https://d326fntlu7tb1e.cloudfront.net/uploads/139718b2-2832-40c5-8d7b-11fd9feb0aac-chicken.png",
    __v: 0,
  },
  {
    _id: "653120e1bbe4998e90af3ff3",
    title: "More",
    value: "more",
    imageUrl:
      "https://d326fntlu7tb1e.cloudfront.net/uploads/08323562-a3c6-461d-95a3-b3817c99871b-more.png",
    __v: 0,
  },
];

export const restaurants = [
  {
    _id: "6530ebbcc9e72013e5b65933",
    title: "Lapisara Eatery",
    time: "15",
    isAvailable: false,
    imageUrl: restaurant1,
    owner: "fdfsdfsdfs",
    code: "41007428",
    logoUrl: restaurantlogo1,
    rating: 3,
    ratingCount: "6765",
    coords: {
      latitude: 14.55067,
      longitude: 121.057569,
      address: "698 Post St, San Francisco, CA 94109, United States",
    },
  },
  {
    _id: "6530ea6bc9e72013e5b6592d",
    title: "Hossein's Persian Kebab",
    time: "10",
    isAvailable: true,
    imageUrl: restaurant2,
    owner: "sjgdsjgfjshhjs",
    code: "41007428",
    logoUrl: restaurantlogo2,
    rating: 5,
    ratingCount: "3278",
    coords: {
      latitude: 14.5630044,
      longitude: 121.0283879,
      address: "333 O'Farrell St, San Francisco, CA 94102, United States",
    },
  },
  {
    _id: "6530eb66c9e72013e5b65931",
    title: "La Foods",
    time: "25",
    isAvailable: true,
    imageUrl: restaurant3,
    owner: "fgdgdfgd",
    code: "41007428",
    logoUrl: restaurantlogo3,
    rating: 4,
    ratingCount: "5666",
    coords: {
      latitude: 14.4983209,
      longitude: 121.0566424,
      address: "333 O'Farrell St, San Francisco, CA 94102, United States",
    },
  },
];

export const foods = [
  {
    _id: "65316968f94c6496dc84f3c1",
    title: "Tiramisu",
    foodTags: ["Italian", "Dessert", "Coffee", "Mascarpone", "Cocoa"],
    isAvailable: true,
    restaurant: {
      _id: "6530eb66c9e72013e5b65931",
      title: "La Foods",
      time: "25",
      isAvailable: true,
      imageUrl: restaurant3,
      owner: "fgdgdfgd",
      code: "41007428",
      logoUrl: restaurantlogo3,
      rating: 4,
      ratingCount: "5666",
      coords: {
        latitude: 14.4983209,
        longitude: 121.0566424,
        address: "333 O'Farrell St, San Francisco, CA 94102, United States",
      },
    },
    rating: 4.9,
    ratingCount: "420",
    description:
      "A classic Italian dessert made of layers of coffee-soaked ladyfingers and creamy mascarpone, topped with cocoa.",
    price: 7.99,
    additives: [
      {
        id: 1,
        title: "Ladyfingers",
        price: "1.00",
      },
      {
        id: 2,
        title: "Coffee",
        price: "1.50",
      },
      {
        id: 3,
        title: "Mascarpone Cheese",
        price: "2.50",
      },
      {
        id: 4,
        title: "Cocoa",
        price: "0.50",
      },
      {
        id: 5,
        title: "Sugar",
        price: "0.50",
      },
    ],
    imageUrl: food1,
    __v: 0,
    category: "6531209dbbe4998e90af3fef",
    time: "35 min",
  },
  {
    _id: "653168e9f94c6496dc84f3bf",
    title: "Spaghetti Carbonara",
    foodTags: ["Italian", "Creamy", "Pasta", "Bacon", "Egg"],
    foodType: ["Main Course", "Lunch", null],
    code: "41007428",
    isAvailable: true,
    restaurant: {
      _id: "6530ea6bc9e72013e5b6592d",
      title: "Hossein's Persian Kebab",
      time: "10",
      isAvailable: true,
      imageUrl: restaurant2,
      owner: "sjgdsjgfjshhjs",
      code: "41007428",
      logoUrl: restaurantlogo2,
      rating: 5,
      ratingCount: "3278",
      coords: {
        latitude: 14.5630044,
        longitude: 121.0283879,
        address: "333 O'Farrell St, San Francisco, CA 94102, United States",
      },
    },
    rating: 4.7,
    ratingCount: "310",
    description:
      "A traditional Italian pasta dish with creamy egg sauce, pancetta, and cheese.",
    price: 14.99,
    additives: [
      {
        id: 1,
        title: "Egg",
        price: "1.00",
      },
      {
        id: 2,
        title: "Pancetta",
        price: "3.00",
      },
      {
        id: 3,
        title: "Parmesan Cheese",
        price: "2.00",
      },
      {
        id: 4,
        title: "Black Pepper",
        price: "0.50",
      },
      {
        id: 5,
        title: "Pasta",
        price: "3.00",
      },
    ],
    imageUrl: food2,
    __v: 2,
    category: "6531209dbbe4998e90af3fef",
    time: "20 min",
  },
  {
    _id: "653169a9f94c6496dc84f3c3",
    title: "Vegan Salad Bowl",
    foodTags: ["Vegan", "Healthy", "Salad", "Fresh", "Organic"],
    foodType: ["Starter", "Lunch", "Dinner", "Health", "Vegan"],
    code: "41007428",
    isAvailable: true,
    restaurant: {
      _id: "6530ebbcc9e72013e5b65933",
      title: "Lapisara Eatery",
      time: "15",
      isAvailable: false,
      imageUrl: restaurant1,
      owner: "fdfsdfsdfs",
      code: "41007428",
      logoUrl: restaurantlogo1,
      rating: 3,
      ratingCount: "6765",
      coords: {
        latitude: 14.55067,
        longitude: 121.057569,
        address: "698 Post St, San Francisco, CA 94109, United States",
      },
    },
    rating: 4.6,
    ratingCount: "230",
    description:
      "A refreshing mix of organic vegetables, nuts, seeds, and a tangy vinaigrette.",
    price: 11.99,
    additives: [
      {
        id: 1,
        title: "Mixed Greens",
        price: "1.50",
      },
      {
        id: 2,
        title: "Walnuts",
        price: "2.00",
      },
      {
        id: 3,
        title: "Quinoa",
        price: "1.50",
      },
      {
        id: 4,
        title: "Cherry Tomatoes",
        price: "1.00",
      },
      {
        id: 5,
        title: "Vinaigrette",
        price: "0.50",
      },
    ],
    imageUrl: food3,
    __v: 0,
    category: "6531209dbbe4998e90af3fef",
    time: "55 min",
  },
  {
    _id: "65316771f94c6496dc84f3bd",
    title: "Margherita Pizza",
    foodTags: ["Italian", "Cheesy", "Vegetarian"],
    foodType: ["Main Course"],
    code: "41007428",
    isAvailable: true,
    restaurant: {
      _id: "6530ea6bc9e72013e5b6592d",
      title: "Hossein's Persian Kebab",
      time: "10",
      isAvailable: true,
      imageUrl: restaurant2,
      owner: "sjgdsjgfjshhjs",
      code: "41007428",
      logoUrl: restaurantlogo2,
      rating: 5,
      ratingCount: "3278",
      coords: {
        latitude: 14.5630044,
        longitude: 121.0283879,
        address: "333 O'Farrell St, San Francisco, CA 94102, United States",
      },
    },
    rating: 4.5,
    ratingCount: "150",
    description:
      "A classic Margherita pizza with fresh tomatoes, mozzarella cheese, basil, and olive oil.",
    price: 12.99,
    additives: [
      {
        id: 1,
        title: "Cheese",
        price: "2.00",
      },
      {
        id: 2,
        title: "Pepperoni",
        price: "2.50",
      },
      {
        id: 3,
        title: "Ketch up",
        price: "0.50",
      },
    ],
    imageUrl: food4,
    __v: 0,
    category: "6531209dbbe4998e90af3fef",
    time: "30 min",
  },
  {
    _id: "65316a01f94c6496dc84f3c7",
    title: "Tropical Fruit Smoothie",
    foodTags: ["Fruit", "Smoothie", "Refreshing", "Sweet", "Cold"],
    foodType: ["Drink", "Breakfast", "Snack", "Dessert", "Vegan"],
    code: "41007428",
    isAvailable: true,
    restaurant: {
      _id: "6530ebbcc9e72013e5b65933",
      title: "Lapisara Eatery",
      time: "15",
      isAvailable: false,
      imageUrl: restaurant1,
      owner: "fdfsdfsdfs",
      code: "41007428",
      logoUrl: restaurantlogo1,
      rating: 3,
      ratingCount: "6765",
      coords: {
        latitude: 14.55067,
        longitude: 121.057569,
        address: "698 Post St, San Francisco, CA 94109, United States",
      },
    },
    rating: 4.7,
    ratingCount: "280",
    description:
      "A delightful blend of tropical fruits, creating the perfect sweet and refreshing drink.",
    price: 6.99,
    additives: [
      {
        id: 1,
        title: "Mango",
        price: "2.00",
      },
      {
        id: 2,
        title: "Pineapple",
        price: "1.50",
      },
      {
        id: 3,
        title: "Banana",
        price: "1.00",
      },
      {
        id: 4,
        title: "Coconut Milk",
        price: "1.50",
      },
      {
        id: 5,
        title: "Ice",
        price: "0.50",
      },
    ],
    imageUrl: food5,
    __v: 0,
    category: "6531209dbbe4998e90af3fef",
    time: "25 min",
  },
  {
    _id: "653169d8f94c6496dc84f3c5",
    title: "Mixed Grill Platter",
    foodTags: ["Barbecue", "Meat", "Grilled", "Spicy", "Savory"],
    foodType: ["Main Course", "Dinner", "Grill", "Non-Vegetarian", "Barbecue"],
    code: "41007428",
    isAvailable: true,
    restaurant: {
      _id: "6530eb66c9e72013e5b65931",
      title: "La Foods",
      time: "25",
      isAvailable: true,
      imageUrl: restaurant3,
      owner: "fgdgdfgd",
      code: "41007428",
      logoUrl: restaurantlogo3,
      rating: 4,
      ratingCount: "5666",
      coords: {
        latitude: 14.4983209,
        longitude: 121.0566424,
        address: "333 O'Farrell St, San Francisco, CA 94102, United States",
      },
    },
    rating: 4.8,
    ratingCount: "320",
    description:
      "A succulent assortment of grilled meats, served with sides and sauces.",
    price: 18.99,
    additives: [
      {
        id: 1,
        title: "Chicken",
        price: "3.00",
      },
      {
        id: 2,
        title: "Beef",
        price: "4.00",
      },
      {
        id: 3,
        title: "Lamb",
        price: "4.00",
      },
      {
        id: 4,
        title: "Pork",
        price: "3.50",
      },
      {
        id: 5,
        title: "Barbecue Sauce",
        price: "1.00",
      },
    ],
    imageUrl: food6,
    __v: 0,
    category: "6531209dbbe4998e90af3fef",
    time: "45 min",
  },
  {
    _id: "65316968f94c6496dc84f3c2",
    title: "Chicken Shawarma",
    foodTags: ["Middle Eastern", "Halal", "Chicken", "Spicy"],
    isAvailable: true,
    restaurant: {
      _id: "6530eb66c9e72013e5b65931",
      title: "Lapisara Eatery",
      time: "25",
      isAvailable: true,
      imageUrl: restaurant3,
      owner: "fgdgdfgd",
      logoUrl: restaurantlogo3,
      rating: 4,
      ratingCount: "5666",
      coords: {
        latitude: 14.4983209,
        longitude: 121.0566424,
        address: "333 O'Farrell St, San Francisco, CA 94102, United States",
      },
    },
    rating: 4.9,
    ratingCount: "420",
    description:
      "Marinated chicken cooked on a vertical rotisserie, served with pita bread, vegetables, and tahini sauce.",
    price: 9.99,
    additives: [
      {
        id: 1,
        title: "Extra Chicken",
        price: "2.00",
      },
      {
        id: 2,
        title: "Tahini Sauce",
        price: "1.00",
      },
      {
        id: 3,
        title: "Pita Bread",
        price: "1.50",
      },
      {
        id: 4,
        title: "Vegetables",
        price: "1.00",
      },
    ],
    imageUrl: food7,
    __v: 0,
    category: "6531209dbbe4998e90af3fef",
    time: "35 min",
  },
  {
    _id: "653168e9f94c6496dc84f3be",
    title: "Lamb Biryani",
    foodTags: ["Indian", "Halal", "Rice", "Spicy"],
    isAvailable: true,
    restaurant: {
      _id: "6530ea6bc9e72013e5b6592d",
      title: "Hossein's Persian Kebab",
      time: "10",
      isAvailable: true,
      imageUrl: restaurant2,
      owner: "sjgdsjgfjshhjs",
      logoUrl: restaurantlogo2,
      rating: 5,
      ratingCount: "3278",
      coords: {
        latitude: 14.5630044,
        longitude: 121.0283879,
        address: "333 O'Farrell St, San Francisco, CA 94102, United States",
      },
    },
    rating: 4.7,
    ratingCount: "310",
    description:
      "A fragrant rice dish cooked with tender lamb, spices, and herbs.",
    price: 14.99,
    additives: [
      {
        id: 1,
        title: "Extra Lamb",
        price: "3.00",
      },
      {
        id: 2,
        title: "Raita",
        price: "1.50",
      },
      {
        id: 3,
        title: "Boiled Egg",
        price: "1.00",
      },
      {
        id: 4,
        title: "Salad",
        price: "1.50",
      },
    ],
    imageUrl: food8,
    __v: 2,
    category: "6531209dbbe4998e90af3fef",
    time: "20 min",
  },
  {
    _id: "653169a9f94c6496dc84f3cz",
    title: "Falafel Wrap",
    foodTags: ["Middle Eastern", "Halal", "Vegetarian", "Healthy"],
    isAvailable: true,
    restaurant: {
      _id: "6530ebbcc9e72013e5b65933",
      title: "Lapisara Eatery",
      time: "15",
      isAvailable: false,
      imageUrl: restaurant1,
      owner: "fdfsdfsdfs",
      logoUrl: restaurantlogo1,
      rating: 3,
      ratingCount: "6765",
      coords: {
        latitude: 14.55067,
        longitude: 121.057569,
        address: "698 Post St, San Francisco, CA 94109, United States",
      },
    },
    rating: 4.6,
    ratingCount: "230",
    description:
      "Crispy falafel balls wrapped in pita bread with fresh vegetables and tahini sauce.",
    price: 7.99,
    additives: [
      {
        id: 1,
        title: "Extra Falafel",
        price: "2.00",
      },
      {
        id: 2,
        title: "Tahini Sauce",
        price: "1.00",
      },
      {
        id: 3,
        title: "Pita Bread",
        price: "1.50",
      },
      {
        id: 4,
        title: "Vegetables",
        price: "1.00",
      },
    ],
    imageUrl: food9,
    __v: 0,
    category: "6531209dbbe4998e90af3fef",
    time: "55 min",
  },
  {
    _id: "65316771f94c6496dc84f3bm",
    title: "Beef Kebabs",
    foodTags: ["Middle Eastern", "Halal", "Grilled", "Spicy"],
    isAvailable: true,
    restaurant: {
      _id: "6530ea6bc9e72013e5b6592d",
      title: "Hossein's Persian Kebab",
      time: "10",
      isAvailable: true,
      imageUrl: restaurant2,
      owner: "sjgdsjgfjshhjs",
      code: "41007428",
      logoUrl: restaurantlogo2,
      rating: 5,
      ratingCount: "3278",
      coords: {
        latitude: 14.5630044,
        longitude: 121.0283879,
        address: "333 O'Farrell St, San Francisco, CA 94102, United States",
      },
    },
    rating: 4.5,
    ratingCount: "150",
    description:
      "Juicy beef kebabs grilled to perfection, served with rice and vegetables.",
    price: 12.99,
    additives: [
      {
        id: 1,
        title: "Extra Beef",
        price: "3.00",
      },
      {
        id: 2,
        title: "Rice",
        price: "2.00",
      },
      {
        id: 3,
        title: "Salad",
        price: "1.50",
      },
    ],
    imageUrl: food10,
    __v: 0,
    category: "6531209dbbe4998e90af3fef",
    time: "30 min",
  },
  {
    _id: "65316771f94c6496dc84f3bq",
    title: "Grilled Fish",
    foodTags: ["Middle Eastern", "Halal", "Grilled", "Savory"],
    isAvailable: true,
    restaurant: {
      _id: "6530eb66c9e72013e5b65931",
      title: "La Foods",
      time: "25",
      isAvailable: true,
      imageUrl: "restaurant3",
      owner: "fgdgdfgd",
      code: "41007428",
      logoUrl: "restaurantlogo3",
      rating: 4,
      ratingCount: "5666",
      coords: {
        latitude: 14.4983209,
        longitude: 121.0566424,
        address: "333 O'Farrell St, San Francisco, CA 94102, United States",
      },
    },
    rating: 4.4,
    ratingCount: "170",
    description:
      "Delicious grilled fish served with lemon, herbs, and a side of vegetables.",
    price: 14.99,
    additives: [
      {
        id: 1,
        title: "Extra Fish",
        price: "5.00",
      },
      {
        id: 2,
        title: "Lemon",
        price: "1.00",
      },
      {
        id: 3,
        title: "Vegetables",
        price: "2.00",
      },
    ],
    imageUrl: food11,
    __v: 0,
    category: "6531209dbbe4998e90af3fef",
    time: "30 min",
  },
  {
    _id: "65316771f94c6496dc84f3bp",
    title: "Lamb Kofta",
    foodTags: ["Middle Eastern", "Halal", "Grilled", "Spicy"],
    isAvailable: true,
    restaurant: {
      _id: "6530ea6bc9e72013e5b6592d",
      title: "Hossein's Persian Kebab",
      time: "10",
      isAvailable: true,
      imageUrl: "restaurant2",
      owner: "sjgdsjgfjshhjs",
      code: "41007428",
      logoUrl: "restaurantlogo2",
      rating: 5,
      ratingCount: "3278",
      coords: {
        latitude: 14.5630044,
        longitude: 121.0283879,
        address: "333 O'Farrell St, San Francisco, CA 94102, United States",
      },
    },
    rating: 4.6,
    ratingCount: "220",
    description:
      "Flavorful lamb kofta served with rice, salad, and yogurt sauce.",
    price: 13.99,
    additives: [
      {
        id: 1,
        title: "Extra Lamb",
        price: "4.00",
      },
      {
        id: 2,
        title: "Yogurt Sauce",
        price: "2.00",
      },
      {
        id: 3,
        title: "Rice",
        price: "2.50",
      },
    ],
    imageUrl: food12,
    __v: 0,
    category: "6531209dbbe4998e90af3fef",
    time: "35 min",
  },
];
