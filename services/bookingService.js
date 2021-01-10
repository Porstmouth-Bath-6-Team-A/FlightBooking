const bookingData = require('../dataAccess/bookingData');

module.exports = {
    setBookingFlights: async (paymentRef, flight, emailAddress) => {
        await bookingData.insertBooking(paymentRef, flight, emailAddress);
    },
    getBookingFlights: async (emailAddress) => {
        return await bookingData.getBookings(emailAddress);
    }
}