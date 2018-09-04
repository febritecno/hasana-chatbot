'use strict';

const line = require('@line/bot-sdk');
const express = require('express');
var xray = require('x-ray');
var request = require('request');
var http = require('http');



const recom = {
    method: 'GET',
    url: 'https://hasana.glitch.me/recom/more/2'
}

const nime = {
   method: 'GET',
    url: 'https://hasana.glitch.me/nime'
}

const nime_katagori = {
    method: 'GET',
    url: 'https://hasana.glitch.me/nime'
}



module.exports = {recom,nime,nime_katagori}