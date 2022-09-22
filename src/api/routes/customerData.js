module.exports = app => {
    const controller = require('../controllers/customerData')();
    app.route('/api/v1/customerData').get(controller.listCustomerData);
}