var express = require("express");
var router = express.Router();
var db = require("../connection");
var crypto = require("crypto"); // 1
var cookie = require("cookie-parser");
var bodyParser = require("body-parser");



router.get("/", function (req, res) {
  res.render("index");
});


router.post("/", function (req, res) {
  var user_id = req.body.user_id;
  var password = req.body.password;
  res.cookie("user_id", user_id);

  if (user_id === user_id && password === password) {
    var sql = "SELECT * FROM member WHERE user_id='" + user_id + "'";
    db.query(sql, function (error, result) {

        var type = result[0].type
        var pk_id = result[0].pk_id

        res.cookie("type",type)
        res.cookie("member_pk_id",pk_id)
        // res.cookie("type",result[0].type)
      if (result.length < 1) {
        res.send(
          '<script type="text/javascript">alert("존재하지 않는 사용자입니다."); history.back();</script>'
        );
      } else {
        console.log(user_id);
        var db_password = result[0].password; //디비에서 가져오려면
        if (password !== db_password) {
          //res.render("archive");
          res.send(
            '<script type="text/javascript">alert("비밀번호가 일치하지않습니다."); history.back();</script>'
          );
        } else {
          res.render("index");
        }
      }
    });
  } else if (user_id == "" || password == "") {
    res.send(
      '<script type="text/javascript">alert("아이디와 비밀번호를 입력해주세요."); history.back();</script>'
    );
  }
});


module.exports = router;
