// file ini file sampah. gk kepakai...... wkkwkwk

//      } else if(event.message.text.toLowerCase() === "more latest anime"){





// berisi kata kunci atau menyimpan kata

var store_febri = ['siapa yang buat','siapa yang bikin',
                   'siapa febrian dwi putra','febri',
                   'febri dwi','febrian dwi putra','who febrian',
                   'who febrian dwi putra','who febrian','who febrian dwi putra ?','who febrian?'
                   ,'who febrian ?','febrian?','who your creator ?','who your creator?','who febrian dwi putra?',
                   'who febri?','who febri ?'];

var store_help = [];

var store_skill = [];

var elink = ['DotNETFrameworkBook','AlgorithmsBook','AndroidBook','Angular2Book','AngularJSBook','BashBook','CBook','CPlusPlusBook'
             ,'CSharpBook','CSSBook','EntityFrameworkBook','ExcelVBABook','GitBook','HaskellBook','HibernateBook','HTML5Book'
             ,'HTML5CanvasBook','iOSBook'
             ,'JavaBook','JavaScriptBook','jQueryBook','KotlinBook','LaTeXBook','LinuxBook','MATLABBook','MicrosoftSQLServerBook'
             ,'MongoDBBook','MySQLBook','NodeJSBook','ObjectiveCBook','OracleDatabaseBook','PerlBook','PHPBook','PostgreSQLBook','PowerShellBook'
             ,'PythonBook','RBook','ReactJSBook'
             ,'ReactNativeBook','RubyBook','RubyOnRailsBook','SpringFrameworkBook','SQLBook','SwiftBook','TypeScriptBook2','VBABook'
             ,'VisualBasic_NETBook','XamarinFormsBook'];



                //{
                //   "thumbnailImageUrl": "https://news.bitcoin.com/wp-content/uploads/2018/04/bitcoin-trading-bot.jpg",
                //   "imageBackgroundColor": "#FFFFFF",
                //   "title": "Hasana Menu",
                //   "text": "choose your favorite menu",
                //   "defaultAction": {
                //       "type": "message",
                //       "label": "About Developer",
                //       "text": "who febrian"
                //   },
                //   "actions": [
                //       {
                //           "type": "message",
                //           "label": "HELP!",
                //           "text": "help"
                //       },
                //       {
                //           "type": "uri",
                //           "label": "ABOUT BOT SKILL",
                //           "uri": "https://skills.susi.ai"
                //       },
                //       {
                //           "type": "message",
                //           "label":"ABOUT DEVELOPER",
                //           "text": "who febrian"
                //       }
                //   ]
                // },

module.exports = {store_febri,store_skill,store_help,elink}




// if else service
//var nime_latest  = require('./nime/nime_latest');
//var nime_recom  = require('./nime/nime_recom');
//var nime_catagory  = require('./nime/nime_catagory');
//
//var word = require('./keyword');





    
//     handle error function callback
//     var err = () => {
//        if (typeof(type) == 'undefined' || typeof(data) == 'undefined' || typeof(actions) == 'undefined'){
//           const answer = {
//             "type": "text",
//             "text": "ouh, i'm don't know what your say my lord. maybe, i will send menu to help you. keep calm :)"
//           };
//           const answer1 = {
//             "type": "sticker",
//             "packageId": "1",
//             "stickerId": "3"
//           };
               
//           const menu = { 
//             "type": "template",
//             "altText": "CHOOSE YOUR MENU",
//             "template": {
//               "type": "buttons",
//               "actions": [
//                 {
//                   "type": "message",
//                   "label": "CLICK HERE",
//                   "text": "show menu"
//                 }
//               ],
//                   "thumbnailImageUrl": "https://i.imgur.com/lGtnHm0.jpg",
//                   "title": "Want to go to the menu ?",
//                   "text": "dont't worry, i'm always stay with you."
//             }     
//           }
//                 return client.replyMessage(event.replyToken, [answer1,answer,menu]);
//         }
//       }
    
    
    
     var err = () => {
       if (typeof(type) == 'undefined' || typeof(data) == 'undefined' || typeof(actions) == 'undefined'){
          const answer = {
            "type": "text",
            "text": "ouh, i'm don't know what your say. "
          };
          const answer1 = 
                return client.replyMessage(event.replyToken, [answer1,answer,menu]);
        }
      }