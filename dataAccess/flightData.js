const dbHelper = require('../helper/dbHelper');
const common = require('../enums/common');

module.exports = {
    getPlaces: async () => {
        return await dbHelper.find(common.dbCollections.place);
    },
    setPlaces: async (places) => {
        await dbHelper.insert(common.dbCollections.place, places);
    },
    deletePlaces: async () => {
        await dbHelper.delete(common.dbCollections.place, {});
    }
}