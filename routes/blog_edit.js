var express = require('express');
var router = express.Router();
var db = require("../connection")



router.get('/', function (req, res, next) {


    var pk_id = req.query.pk_id //해당 pk_id가지고 수정을 하기위함.

    var select_sql = "select A.*, M.type from admin A inner join member as M on M.pk_id = A.member_id where A.pk_id = " + pk_id + ""
    db.query(select_sql, function (err, data) {

        if (err) {
            console.log(err)
        } else {
            res.send(data)//데이터 뷰로 전송

        }
    })

});

module.exports = router;