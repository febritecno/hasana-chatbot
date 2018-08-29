const express = require('express');
var request = require('request');
var http = require('http');
var xray = require('x-ray');

const app = express();
var x = xray();


var recom = (cape,num) => {
  
  const data = x('https://drivenime.com/','.arpw-random-post ul.arpw-ul .arpw-li.arpw-clearfix',{
  
    title: 'a.arpw-title',
    img: 'a img@data-lazy-src',
    link:'a@href'

  }).paginate('.pagination a@href')
    .limit(num)
    .stream()
  
  
  return data.pipe(cape);
    
}


var nime = (cape,num) => {
  
  const data = x('https://drivenime.com/','#content_box .post.excerpt',{
  
    title: 'a@title',
    img: '.featured-thumbnail img@data-lazy-src',
    desc: '.post-content.image-caption-format-1',
    link: 'a@href'
  })
  .paginate('.pagination a@href')
  .limit(num)
  .stream()
  
  return data.pipe(cape);
  
  }



var free = (cape,num) => {
   
  const data = x('https://smartybro.com/','.post',{
  
    title: 'h2.grid-tit a',
    img: 'a img@data-lazy-src',
    coupon:'h2.grid-tit a@href'

  })
  .paginate('.pagination a@href')
  .limit(num)
  .stream()

  return data.pipe(cape);
    
};



var diskon = (cape,num) => {
   
  const data = x('https://udemycoupon.learnviral.com/','.coupon',{ 
  
    
    title: 'h3.entry-title a', 
    img: 'a img@src', 
    coupon:'.link-holder a@href'

  }).paginate('.paging a@href')
    .limit(num)
    .stream()
  
  return data.pipe(cape);
};



module.exports = {nime,recom,free,diskon};
