// 引用linebot SDK
const linebot = require('linebot');
const express = require('express');
const app = express();


//heroku 設定  若本機請自行設定

const channelId = process.env.CHANNELID;
const channelSecret = process.env.CHANNELSECRET;
const channelAccessToken = process.env.CHANNELACCESSTOKEN;

// 用於辨識Line Channel的資訊
var bot = linebot({
  channelId: channelId,
  channelSecret: channelSecret,
  channelAccessToken: channelAccessToken
});

const linebotParser = bot.parser();

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


app.post('/linewebhook',linebotParser);

app.get('/', function (req, res) {
  res.send('Hello Welcome Steve LineBOT webpage!');
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!');
});