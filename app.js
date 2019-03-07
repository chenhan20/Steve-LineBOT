// 引用linebot SDK
var linebot = require('linebot');

// 用於辨識Line Channel的資訊
var bot = linebot({
  channelId: '',
  channelSecret: '',
  channelAccessToken: ''
});

// 當有人傳送訊息給Bot時
bot.on('message', function (event) {
  // event.message.text是使用者傳給bot的訊息
  // 使用event.reply(要回傳的訊息)方法可將訊息回傳給使用者
  event.reply({
    "type": "template",
    "altText": "this is a carousel template",
    "template": {
      "type": "carousel",
      "actions": [],
      "columns": [
        {
          "thumbnailImageUrl": "https://instagram.ftpe8-1.fna.fbcdn.net/vp/2099dd948ec4e0e30e95e089d29fd5aa/5D1642AD/t51.2885-15/sh0.08/e35/s750x750/52862123_1847598202013400_7178495964562681826_n.jpg?_nc_ht=instagram.ftpe8-1.fna.fbcdn.net",
          "title": "標題",
          "text": "文字",
          "actions": [
            {
              "type": "message",
              "label": "動作 1",
              "text": "動作 1"
            },
            {
              "type": "message",
              "label": "動作 2",
              "text": "動作 2"
            },
            {
              "type": "message",
              "label": "動作 3",
              "text": "動作 3"
            }
          ]
        },
        {
          "thumbnailImageUrl": "https://instagram.ftpe8-1.fna.fbcdn.net/vp/f5ee82308144a12bdaff9549d00880d9/5D0809AC/t51.2885-15/sh0.08/e35/p640x640/49776331_375652369673197_8459669968340910930_n.jpg?_nc_ht=instagram.ftpe8-1.fna.fbcdn.net",
          "title": "標題",
          "text": "文字",
          "actions": [
            {
              "type": "message",
              "label": "動作 1",
              "text": "動作 1"
            },
            {
              "type": "message",
              "label": "動作 2",
              "text": "動作 2"
            },
            {
              "type": "message",
              "label": "動作 3",
              "text": "動作 3"
            }
          ]
        }
      ]
    }
  }).then(function (data) {
    // 當訊息成功回傳後的處理
  }).catch(function (error) {
    // 當訊息回傳失敗後的處理
  });
});

// Bot所監聽的webhook路徑與port
bot.listen('/linewebhook', 3000, function () {
    console.log('[BOT已準備就緒]');
});