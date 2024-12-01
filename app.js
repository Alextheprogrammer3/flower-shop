const express = require('express');
const path = require('path');
const app = express();

// Set up view engine and views folder
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'src', 'views'));  // Ensure the views directory is correct

// Serve static files (like images, styles, scripts)
app.use(express.static(path.join(__dirname, 'public')));  // Ensure the public folder is correctly referenced

// Sample data for services
const services = [
  {
    title: "Wedding Bouquets",
    description: "Custom-made wedding bouquets tailored to your style, with a selection of the freshest flowers for your special day.",
    image: "/images/service1.jpg",  // Make sure images are in the 'public/images' folder
    link: "/services/wedding-bouquets"
  },
  {
    title: "Corporate Arrangements",
    description: "We offer elegant flower arrangements for corporate events, offices, and conferences, creating a welcoming atmosphere.",
    image: "/images/service2.jpg",
    link: "/services/corporate-arrangements"
  },
  {
    title: "Event Florals",
    description: "Our florists specialize in designing stunning floral displays for events such as birthdays, anniversaries, and more.",
    image: "/images/service3.jpg",
    link: "/services/event-florals"
  },
  {
    title: "Custom Bouquets",
    description: "Create a personalized bouquet for any occasion. Choose from a wide variety of flowers and styles.",
    image: "/images/service4.jpg",
    link: "/services/custom-bouquets"
  }
];

// Route for the homepage
app.get('/', (req, res) => {
  res.render('index');  // This renders the homepage (index.pug)
});

// Route for the bouquet builder page
app.get('/bouquet', (req, res) => {
  res.render('bouquet');  // This renders the bouquet builder page (bouquet.pug)
});

// Route for the cart page
app.get('/cart', (req, res) => {
  res.render('cart');  // This renders the cart page (cart.pug)
});

// Route for the about page
app.get('/about', (req, res) => {
  res.render('about');  // Renders the about page
});

// Route for the products page
app.get('/products', (req, res) => {
  res.render('products');  // This renders the products page (products.pug)
});

// Route for the services page, with dynamic content
app.get('/services', (req, res) => {
  res.render('services', { services: services });
});

// Route for Blog Page (simplified)
app.get('/blog', (req, res) => {
  res.render('blog', { title: 'Our Blog' });
});

// Route for individual services
app.get('/services/:serviceId', (req, res) => {
  const serviceId = req.params.serviceId;
  const service = services.find(s => s.link.split('/').pop() === serviceId);
  
  if (service) {
    res.render('service-detail', { service: service });
  } else {
    res.status(404).send('Service not found');
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
