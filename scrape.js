const express = require('express');
var request = require('request');
var http = require('http');
var xray = require('x-ray');

const app = express();
var x = xray();

var recom = (cape) => {
  
  const data = x('https://drivenime.com/','.arpw-random-post ul.arpw-ul .arpw-li.arpw-clearfix',[{
  
    title: 'a.arpw-title',
    img: 'a img@data-lazy-src',
    link:'a@href'

  }]).stream()
  
  return data.pipe(cape);
    
}


var nime = (cape) => {

  const data = x('https://drivenime.com/','#content_box .post.excerpt',[{
  
    title: 'a@title',
    img: '.featured-thumbnail img@data-lazy-src',
    desc: '.post-content.image-caption-format-1',
    link:'a@href'

  }]).paginate('.pagination a@href').limit(2).stream()
  
  return data.pipe(cape);
  
  }

module.exports = {nime,recom};