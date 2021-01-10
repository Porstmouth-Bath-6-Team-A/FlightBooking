const bookingService = require('../services/bookingService');

module.exports = {
    setBookingFlights: async (req, res) => {
        await bookingService.setBookingFlights(req.body.paymentRef, req.body.flight, req.body.emailAddress);
        res.json({
            StatusCode: 'OK',
            StatusDesc: ''
        });
    },
    getBookingFlights: async (req, res) => {
        let booking = await bookingService.getBookingFlights(req.query.emailAddress);

        res.json({
            StatusCode: 'OK',
            StatusDesc: booking
        });
    }
}