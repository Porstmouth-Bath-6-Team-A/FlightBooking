const dbHelper = require('../helper/dbHelper');
const common = require('../enums/common');

module.exports = {
    insertBooking: async(paymentRef, flight, emailAddress) => {
        return await dbHelper.insert(common.dbCollections.booking, [{
            paymentRef: paymentRef,
            flight: flight,
            emailAddress: emailAddress
        }]);
    },
    getBookings: async(emailAddress) => {
        return await dbHelper.find(common.dbCollections.booking, {emailAddress: emailAddress});
    }
}