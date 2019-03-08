// 引用linebot SDK
var linebot = require('linebot');
var express = require('express');
var app = express();


//heroku 設定  若本機請自行設定

const channelId = process.env.CHANNELID;
const channelSecret = process.env.CHANNELID;
const channelAccessToken = process.env.CHANNELID;

// 用於辨識Line Channel的資訊
var bot = linebot({
  channelId: channelId,
  channelSecret: channelSecret,
  channelAccessToken: channelAccessToken
});

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

// Bot所監聽的webhook路徑與port
bot.listen('/linewebhook', 3000, function () {
    console.log('[BOT已準備就緒]');
});

// app.get('/', function (req, res) {
//   res.send('Hello LINEBOT已啟動!');
// });

// app.listen(3001, function () {
//   console.log('Example app listening on port 3000!');
// });