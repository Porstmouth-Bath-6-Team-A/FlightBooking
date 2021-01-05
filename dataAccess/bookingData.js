const dbHelper = require('../helper/dbHelper');
const common = require('../enums/common');

module.exports = {
    insertBooking: async(booking) => {
        return await dbHelper.insert(common.dbCollections.booking, booking);
    },
    getBooking: async(emailAddress) => {
        return await dbHelper.find(common.dbCollections.booking, {emailAddress});
    }
}