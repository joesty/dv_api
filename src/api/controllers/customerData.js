module.exports = () => {
   const customerDataDB = require('../data/customerData.json');
   const controller = {};
   
   controller.listCustomerData = (req, res) => res.status(200).json(customerDataDB);
   
   return controller;
}