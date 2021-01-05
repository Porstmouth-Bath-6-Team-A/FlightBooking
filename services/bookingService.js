const bookingData = require('../dataAccess/bookingData');

module.exports = {
    postPaymentSuccess: async (booking) => {
        return await bookingData.insertBooking(booking);
    },
    getBookingFlights: async (emailAddress) => {
        return await insertBooking.getBooking(emailAddress);
    }
}