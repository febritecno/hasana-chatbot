'use strict';

const line = require('@line/bot-sdk');
const express = require('express');
var xray = require('x-ray');
var request = require('request');
var http = require('http');
var apicache = require('apicache');

var s = require('./scrape'); //load scrape function target

//var word = require('./keyword');

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

var x=xray(); //scraper
var c=apicache.middleware('1 hour'); //cached middleware

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








// Function router

function isNumber(n){   //cek apakah type number
  return !isNaN(parseFloat(n)) && !isNaN(n - 0) 
}

var addmore_category = async (url,adapter) => {
  
  app.get(url+'/:kategori'+'/more/:num',async function(req,res){
   
   function isNumber(n){  return !isNaN(parseFloat(n)) && !isNaN(n - 0) }
   
    var num = await req.params.num; //untuk manipulasi parameter jumlah num
    var category = await req.params.kategori;

    if (await isNumber(num) !== true){

        res.json({status: '200',message: 'use number for paramater to show data example '+url+'/more/'+':number',code: 'error'});

    }else{

        await adapter(res,category,num);

    }

})
  
}

var addmore = async (url,adapter) => {
  
  app.get(url+'/more/:num',async function(req,res){
   
    var display = await req.params.num; //untuk manipulasi parameter num

    if (await isNumber(display) !== true){

        res.json({
                  status: '200',
                  message: 'use number for paramater to show data example '+url+'/more/'+':number',
                  code: 'error'
                 });
    }else{

        await adapter(res,display);

    }

})
  
}



// router


app.use(c); //use cached middleware on router

app.get('/nime',function (req, res) { //index drivenime
  s.nime(res,1); // limit sesuai dengan jumlah item perhalaman
})

app.get('/recom',function (req, res) { //top anime drivenime
  s.recom(res,1);
})

app.get('/free',function (req, res) { //index kupon free udemy
  s.smartybro(res,1);
})

app.get('/free/:kategori',async function (req, res) { //katagori kupon free udemy
  var category = await req.params.kategori;
  s.smartybro_katagori(res,category,1);
})

app.get('/diskon',function (req, res) { //index kupon udemy smartybro
  s.diskon(res,1);
})


app.get('/diskon/:kategori',async function (req, res) { //katagori kupon udemy smartybro
  var category = await req.params.kategori;
  s.diskon_katagori(res,category,1);
})


app.get('/ebook',function (req, res) { // index free ebook all programing
  s.ebook(res);
})
  
app.get('/ebook/:name',async function (req, res) { // getpage or detail page for download ebook
  var name = await req.params.name;
  s.getpage(res,name);
})

addmore('/recom',s.recom);
addmore('/free',s.smartybro);
addmore('/diskon',s.diskon);
addmore_category('/diskon',s.diskon_katagori);
addmore_category('/free',s.smartybro_katagori);

//




// event handler area bot line

async function handleEvent(event) {
  // simple reply function
const replyText = (token, texts) => {
  texts = Array.isArray(texts) ? texts : [texts];
  return client.replyMessage(
    token,
    texts.map((text) => ({ type: 'text', text }))
  );
};

    
    var menu = () => {
    
      const menu = {
            "type": "template",
            "altText": "menu utama",
            "template": {
                "type": "carousel",
                "columns": [
                {
                  "thumbnailImageUrl": "https://i.imgur.com/A1xzRuo.png",
                  "imageBackgroundColor": "#FFFFFF",
                  "title": "Batch Anime",
                  "text": "Latest Update Batch Anime",
                  "defaultAction": {
                      "type": "message",
                      "label": "LATEST ANIME",
                      "text": "latest anime today"
                  },
                  "actions": [
                      {
                          "type": "message",
                          "label": "LATEST ANIME",
                          "text": "latest anime today"
                      },
                      {
                          "type": "message",
                          "label": "RECOMMENDED ANIME",
                          "text": "popular anime today"
                      },
                      {
                          "type": "message",
                          "label":"CATEGORY ANIME",
                          "text": "choose category anime"
                      }
                  ]
                },
                {
                  "thumbnailImageUrl": "https://i.imgur.com/toDUruo.png",
                  "imageBackgroundColor": "#000000",
                  "title": "Free Ebook",
                  "text": "Download Referance Ebook Programing",
                  "defaultAction": {
                          "type": "message",
                          "label": "LATEST EBOOK",
                          "text": "latest ebook"
                  },
                  "actions": [
                      {
                          "type": "message",
                          "label": "LATEST EBOOK",
                          "text": "latest ebook"
                      },
                       {
                          "type": "message",
                          "label": "DOWNLOAD EBOOK",
                          "text": "choose ebook"
                      },
                      {
                          "type": "message",
                          "label":" ",
                          "text": " "
                      }
                  ]
                },
                  {
                  "thumbnailImageUrl": "https://i.imgur.com/FePUDRa.png",
                  "imageBackgroundColor": "#FFFFFF",
                  "title": "Udemy Coupon",
                  "text": "Latest Coupon Code",
                  "defaultAction": {
                          "type": "message",
                          "label": "LATEST COUPON CODE",
                          "text": "coupon today"
                  },
                  "actions": [
                      {
                          "type": "message",
                          "label": "LATEST COUPON CODE",
                          "text": "coupon today"
                      },
                      {
                          "type": "message",
                          "label":"CATEGORY COUPON",
                          "text": "choose coupon"
                      },
                      {
                          "type": "message",
                          "label":" ",
                          "text": " "
                      }
                  ]
                },
                  {
                  "thumbnailImageUrl": "https://i.imgur.com/1djYIeZ.png",
                  "imageBackgroundColor": "#FFFFFF",
                  "title": "Free 100% Course",
                  "text": "Latest Coupon Smartybro",
                  "defaultAction": {
                       "type": "message",
                       "label": "LATEST SMARTYBRO",
                       "text": "smartybro today"
                  },
                  "actions": [
                      {
                          "type": "message",
                          "label": "LATEST SMARTYBRO",
                          "text": "smartybro today"
                      },
                      {
                          "type": "message",
                          "label":"CATEGORY SMARTYBRO",
                          "text": "choose smartybro"
                      },
                      {
                          "type": "message",
                          "label":" ",
                          "text": " "
                      }
                  ]
                }
            ],
            "imageAspectRatio": "rectangle",
            "imageSize": "cover"
        }
      }

            return client.replyMessage(event.replyToken, menu);
    
    }
  
    var err = () => {
       if (typeof(type) == 'undefined'){
          const answer = {
            "type": "text",
            "text": "ouh, i'm don't know what your say my lord. maybe, i will show menu to help you. keep calm :)"
          };
          const answer1 = {
            "type": "sticker",
            "packageId": "1",
            "stickerId": "3"
          };
               
          const menu = { 
            "type": "template",
            "altText": "Choose Your Favorite Services",
            "template": {
              "type": "buttons",
              "actions": [
                {
                  "type": "message",
                  "label": "CLICK HERE",
                  "text": "show menu"
                }
              ],
                  "thumbnailImageUrl": "https://i.imgur.com/lGtnHm0.jpg",
                  "title": "Want to go to the menu ?",
                  "text": "dont't worry, i'm always stay with you."
            }     
          }
                return client.replyMessage(event.replyToken, [answer1,answer,menu]);
        }
      }
  
  
  
  
    if (event.type !== 'message' || event.message.type !== 'text') { // event -> array, type -> property pada object. sample object: {type: 'message'}
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
  

  //switch case handle pengganti kondisi if else
 
  switch(event.message.text.toLowerCase()) {
    
    case 'popular anime':
    const anime = {
      "type": "template",
      "altText": "anime menu",
      "template": {
          "type": "carousel",
          "columns": [
            {
            "thumbnailImageUrl": "https://i.imgur.com/A1xzRuo.png",
            "imageBackgroundColor": "#FFFFFF",
            "title": "Batch Anime",
            "text": "Latest Update Batch Anime",
            "defaultAction": {
                "type": "message",
                "label": "LATEST ANIME",
                "text": "latest anime today"
            },
            "actions": [
                {
                    "type": "message",
                    "label": "LATEST ANIME",
                    "text": "latest anime today"
                },
                {
                    "type": "message",
                    "label": "RECOMMENDED ANIME",
                    "text": "popular anime today"
                },
                {
                    "type": "message",
                    "label":"CATEGORY ANIME",
                    "text": "choose category anime"
                }
            ]
          }
          ],
          "imageAspectRatio": "rectangle",
          "imageSize": "cover"
      }
    }
    
        return client.replyMessage(event.replyToken, anime);
        
        break;

    case 'show menu':
        menu();
        break;
      
    case 'who am i':
      var id = event.source.userId;
      var push = client.getProfile(id).then((profil)=> {
        replyText(event.replyToken,`NAME: ${profil.displayName} \n USER ID: ${profil.userId} \n IMAGE: ${profil.pictureUrl} \n STATUS: ${profil.statusMessage}`);
      })
      break
      
    default: 
}
        
  ///
  
  
  if (event.message.text.toLowerCase() === 'who febrian'){
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
                "label": "CLICK HERE",
                "text": "what can you do ?"
              }
            ],
            "thumbnailImageUrl": "https://i.imgur.com/Mo2OOwm.png",
            "title": "Help Me, Captain!",
            "text": "you don't know how to use it?"
          }
        };
    
        return client.replyMessage(event.replyToken, answer);
    
    }else if (event.message.text.toLowerCase() === "what can you do ?"){
        const answer = {
          "type": "text",
          "text": "you can visit https://skills.susi.ai/, then you look example reference of my skill. look skill and let's try chat to me."
        };
        const answer1 = {
          "type": "sticker",
          "packageId": "1",
          "stickerId": "4"
        };
        return client.replyMessage(event.replyToken, [answer,answer1]);
    
 } else if (event.message.text.toLowerCase() === "") {

   try{
        request(options1, function(error1, response1, body1) {
          
            if (error1) throw new Error(error1);
          
            // answer fetched from susi
            var ans = (JSON.parse(body1)).answers[0].actions[0].expression;
            const sampleQ = [{
                    type: 'text',
                    text: ans
                }]
              return client.replyMessage(event.replyToken, sampleQ);
        });
     
    }catch(e){
         err();
    }
   
   
    } else {
        request(options1, async function(error1, response1, body1) {
            if (error1) throw new Error(error1);
          try {
            // answer fetched from susi
            var type = await (JSON.parse(body1)).answers[0].actions;
            var ans = await (JSON.parse(body1)).answers[0].actions[0].expression;
            
          
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
                                "label": "Ask hasana again",
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
            }}catch(e){ // handle error undefined callback
            err();
          }
        })
        
    }
}


// listen on port
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`listening on ${port}`);
});