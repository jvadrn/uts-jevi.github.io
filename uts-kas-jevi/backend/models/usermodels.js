const { Callback } = require("jquery");

module.exports = {
    fetchDataa: (db, Callback) => {
        db.query('SELECT * FROM tbl_transaksi', Callback)
    },

    getById: (db, id, Callback) => {
        db.query()
    }
}
