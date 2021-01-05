const bookingService = require('../services/bookingService');

module.exports = {
    postPaymentSuccess: async (req, res) => {
        return await bookingService.postPaymentSuccess();
    },
    getBookingFlights: async (req, res) => {
        return await bookingService.getBookingFlights();
    }
}