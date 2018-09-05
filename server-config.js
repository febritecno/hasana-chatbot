// file ini di gunakan untuk penyimpanan global url target request


'use strict';

const line = require('@line/bot-sdk');
const express = require('express');
var xray = require('x-ray');
var request = require('request');
var http = require('http');


//anime
const recom = {
    method: 'GET',
    url: 'https://hasana.glitch.me/recom/more/4'
}
const nime = {
   method: 'GET',
    url: 'https://hasana.glitch.me/nime'
}
const nime_katagori = {
    method: 'GET',
    url: 'https://hasana.glitch.me/nime'
}


//coupon ilearning
const diskon = {
    method: 'GET',
    url: 'https://hasana.glitch.me/diskon/more/2'
}

const diskon_catagory = {
   method: 'GET',
    url: 'https://hasana.glitch.me/diskon'
}




//coupon smartybro
const free = {
    method: 'GET',
    url: 'https://hasana.glitch.me/free'
}

const free_catagory = {
   method: 'GET',
    url: 'https://hasana.glitch.me/free'
}


// eboo goalkicker
var ebook = {
   method: 'GET',
   url: 'https://hasana.glitch.me/ebook'
   }

var ebook_name = {
   method: 'GET',
   url: 'https://hasana.glitch.me/ebook/json/'
   } 


module.exports = {recom,nime,nime_katagori,diskon,diskon_catagory,free,free_catagory,ebook,ebook_name}