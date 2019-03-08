// 引用linebot SDK
const linebot = require('linebot');
const express = require('express');
const app = express();
const reptile = require('./reptile.js');
const messageFun = require('./messageFn.js');



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
bot.on('message', async (event) => {
  // event.message.text是使用者傳給bot的訊息
  // 使用event.reply(要回傳的訊息)方法可將訊息回傳給使用者
  let returnText = '';
  switch (messageFun(event.message.text)) {
    case 'AllTeam':
      let Team = await reptile();
      for (let t in Team) {
        returnText += Team[t].fullName + '\r\n';
      }
      break;
    default:
      returnText = '沒有對應' + event.message.text + '的字詞啦!'
  }
  event.reply(returnText).then(function (data) {
    // 當訊息成功回傳後的處理
  }).catch(function (error) {
    // 當訊息回傳失敗後的處理
  });
});



app.post('/linewebhook', linebotParser);

app.get('/', function (req, res) {
  res.send('Hello Welcome Steve LineBOT webpage!');
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!');
});