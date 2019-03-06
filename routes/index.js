var express = require('express');
var router = express.Router();
const linebot = require('linebot');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

var bot = linebot({
  channelId: '1553484708',
  channelSecret: '6325bb545b2c56c5e4f293d1415635dc',
  channelAccessToken: 'N16uq6aydWNjlGByU31ETxxui6Qk/JUkl7Wd3sdWHgKP5uF4xNYJtRATe7g1I+4EL7oRQvY01hKnwNfgVDKuOjVGDN3Stp2NatpbT+c9zdcNUVZJZSlnujkb8u1Yv65RCFyRwUtF+9xtZb9aMosiqgdB04t89/1O/w1cDnyilFU='
});

const linebotParser = bot.parser();
router.post('/linewebhook', linebotParser);


// 當有人傳送訊息給Bot時
bot.on('message', function (event) {
  // event.message.text是使用者傳給bot的訊息
  // 使用event.reply(要回傳的訊息)方法可將訊息回傳給使用者
  event.reply(event.message.text).then(function (data) {
    // 當訊息成功回傳後的處理
  }).catch(function (error) {
    // 當訊息回傳失敗後的處理
  });
});

module.exports = router;