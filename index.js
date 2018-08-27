'use strict';

const line = require('@line/bot-sdk');
const express = require('express');
var request = require('request');
var http = require('http');

// create LINE SDK config from env variables
const config = {
    channelAccessToken: process.env.CAT,
    channelSecret: process.env.CS,
};

// create LINE SDK client
const client = new line.Client(config);

// create Express app
// about Express itself: https://expressjs.com/
const app = express();

// register a webhook handler with middleware
app.post('/webhook', line.middleware(config), (req, res) => {
    Promise
        .all(req.body.events.map(handleEvent))
        .then((result) => res.json(result))
        .catch((err) => {
            console.error(err);
            res.status(500).end();
        });
});



setInterval(function() {
        http.get(process.env.URL);
    }, 600000); // every 10 minutes


// event handler
function handleEvent(event) {
    if (event.type !== 'message' || event.message.type !== 'text') {
        // ignore non-text-message event
        
        return Promise.resolve(null);
    }
    var options1 = {
        method: 'GET',
        url: 'http://api.susi.ai/susi/chat.json',
        qs: {
            timezoneOffset: '-330',
            q: event.message.text
        }
    };
    
  if (event.message.text.toLowerCase() === "who febrian?" || event.message.text.toLowerCase() === "Who febrian?"){
        const answer = {
          "type": "template",
          "altText": "Febrian Dwi Putra is humble people with skill programing and design",
          "template": {
            "type": "buttons",
            "actions": [
              {
                "type": "uri",
                "label": "Facebook",
                "uri": "https://www.facebook.com/febri.krn"
              },
              {
                "type": "uri",
                "label": "Linkedin",
                "uri": "https://www.linkedin.com/in/febrian-dwi-putra-026446163"
              },
              { "type": "uri",
                "label": "Github",
                "uri": "https://github.com/febritecno"
              }
            ],
            "thumbnailImageUrl": "https://avatars2.githubusercontent.com/u/9696688?s=460&v=4",
            "title": "Febrian Dwi Putra",
            "text": "People can solve and make your dream realise"
          }
        };
        return client.replyMessage(event.replyToken, answer);
  }else if (event.message.text.toLowerCase() === "help"){
        const answer = {
          "type": "template",
          "altText": "help about bot",
          "template": {
            "type": "buttons",
            "actions": [
              {
                "type": "message",
                "label": "Show Skill",
                "text": "what can you do ?"
              }
            ],
            "thumbnailImageUrl": "https://dkru86weszx9t.cloudfront.net/blog/wp-content/uploads/2018/05/how-to-ask-for-help-760x400.jpg",
            "title": "Show help",
            "text": "You can get help now"
          }
        };
        return client.replyMessage(event.replyToken, answer);
    
    }else if (event.message.text.toLowerCase() === "what can you do ?"){
        const answer = {
          "type": "text",
          "text": "you can visit https://skills.susi.ai/ , then you look example reference my skill. happy chatting :)"
        };
        const answer1 = {
          "type": "sticker",
          "packageId": "1",
          "stickerId": "4"
        };
        return client.replyMessage(event.replyToken, [answer,answer1]);
    
    } else if (event.message.text.toLowerCase() === "") {
        request(options1, function(error1, response1, body1) {
            if (error1) throw new Error(error1);

            // answer fetched from api susi
            var ans = (JSON.parse(body1)).answers[0].actions[0].expression;
            const sampleQ = [{
                    type: 'text',
                    text: ans
                }
            ]
            return client.replyMessage(event.replyToken, sampleQ);
        });
    } else {
        request(options1, function(error1, response1, body1) {
            if (error1) throw new Error(error1);
            // answer fetched from api susi
            var type = (JSON.parse(body1)).answers[0].actions;
            var ans = (JSON.parse(body1)).answers[0].actions[0].expression;
            if ( ((JSON.parse(body1)).answers[0].data[0].lon) || ((JSON.parse(body1)).answers[0].data[0].lat) ) {
                var lat = JSON.parse(body1).answers[0].data[0].lat;
                var lon = JSON.parse(body1).answers[0].data[0].lon;
                var address = JSON.parse(body1).answers[0].data[0].locationInfo;
                var title = JSON.parse(body1).answers[0].data[0][1];
                const answer = {
                    type: "location",
                    title: title,
                    address: title,
                    latitude: lat,
                    longitude: lon
                };
                // use reply API
                return client.replyMessage(event.replyToken, answer)
                .catch((err) => {
                    console.log('Error - '+err);
                });
            } else if (JSON.parse(body1).answers[0].data[0].type === 'gif') {
                let videoUrl = JSON.parse(body1).answers[0].data[0].v1.original.mp4;
                let previewUrl = JSON.parse(body1).answers[0].data[0].images["480w_still"].url;
                const answer = {
                    type: 'video',
                    originalContentUrl: videoUrl,
                    previewImageUrl: previewUrl
                };
                // use reply API
                return client.replyMessage(event.replyToken, answer)
                .catch((err) => {
                    console.log('Error - '+err);
                });
            } else if (type.length == 1 && type[0].type == "answer") {
                let answer;
                if((JSON.parse(body1)).answers[0].data[0].type === 'photo'){
                    answer = {
                        type: 'image',
                        originalContentUrl: ans,
                        previewImageUrl: ans
                    };
                } else {
                    answer = {
                        type: 'text',
                        text: ans
                    };
                }
                // use reply API
                return client.replyMessage(event.replyToken, answer);

            } else if (type[0].type == "table") {
                var data = JSON.parse(body1).answers[0].data;
                var columns = type[0].columns;
                var key = Object.keys(columns);
                var msg = [];
                console.log(key);

                for (var i = 0; i < 5; i++) {
                    msg[i] = "";
                    msg[i] = {
                        type: 'text',
                        text: key[0].toUpperCase() + ": " + data[i][key[0]] + "\n" + key[1].toUpperCase() + ": " + data[i][key[1]] + "\n" + key[2].toUpperCase() + ": " + data[i][key[2]]
                    }
                }
                return client.replyMessage(event.replyToken, msg);

            } else if (type.length == 2 && type[1].type == "rss") {
                var data = JSON.parse(body1).answers[0].data;
                var columns = type[1];
                var key = Object.keys(columns);
                var msg, title, link, query;
                var carousel = [];
                console.log(key);

                for (var i = 1; i < 4; i++) {
                    title = key[1].toUpperCase() + ": " + data[i][key[1]];
                    query = title;
                    msg = key[2].toUpperCase() + ": " + data[i][key[2]];
                    link = data[i][key[3]]
                    if (title.length >= 40) {
                        title = title.substring(0, 36);
                        title = title + "...";
                    }

                    if (msg.length >= 60) {
                        msg = msg.substring(0, 56);
                        msg = msg + "...";
                    }

                    carousel[i] = {
                        "title": title,
                        "text": msg,
                        "actions": [{
                                "type": "uri",
                                "label": "View detail",
                                "uri": link
                            },
                            {
                                "type": "message",
                                "label": "Ask Hasana again",
                                "text": query
                            }
                        ]
                    };
                }
                const answer = [{
                        type: 'text',
                        text: ans
                    },
                    {
                        "type": "template",
                        "altText": "Web Search",
                        "template": {
                            "type": "carousel",
                            "columns": [
                                carousel[1],
                                carousel[2],
                                carousel[3]
                            ]
                        }
                    }
                ]
                return client.replyMessage(event.replyToken, answer);
            }
    })
  }
}


// listen on port
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`listening on ${port}`);
});