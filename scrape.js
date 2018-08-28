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
    link: 'a@href'
  }])
  //.paginate('.pagination a@href')
  //.limit(1)
  .stream()
  
  return data.pipe(cape);
  
  }


var free = (cape) => {
   
  const data = x('https://smartybro.com/','.post',[{
  
    title: 'h2.grid-tit a',
    img: 'a img@data-lazy-src',
    coupon:'h2.grid-tit a@href'

  }])
  //.paginate('.pagination a@href')
  
  //.limit(1)
  
  .stream()

  return data.pipe(cape);
    
};





var diskon = (cape) => {
  
  /** cara menselector selector pertama/seluruh selector elemen yang punya identisas sama bukan paling atas pada target ya !! 
  contoh disini adalah class .coupon yaitu identitas yg sama pada seluruh komponen yang mau kita ambil. misal
   
  mau ambil data link html ketiga ini
  
  <div class='satu post'>
      <a href= 'satu.html'></a>
  <div>
  <div class='dua post'>
      <a href= 'dua.html'></a>
  <div>
  <div class='tiga post'>
      <a href= 'tiga.html'></a>
  <div>
  
  select saja .post jadi xray('url', '.post', [{}]) karna sama
  
  tapi yang sama tiap konten pada area target. sama classnya atau id nya 
  oh ya gk usah di urutkan langsung aja pada target. gk usah di urutkan komponen1 2 3 4 dll saat select. langsung saja.
  
  oh iya, javascript itu all is object , all is array. banyak manipulasi object dan array. 1variable '',2array ['',''],3object {satu:'',dua:''}
  
  promise menggantikan if else yg banyak bisa antrian juga, async await untuk task schedule pada kondisi
  
  **/
  
   
  const data = x('https://udemycoupon.learnviral.com/','.coupon',[{ 
  
    /** catatan cara scrape object dengan xray adalah dengan menselect selector yang diatasnya target 
    
    misal <div class='anu'><a href="dwd.html">contoh</a></div>  , 
    
    pilih .anu a@href . 
    
    @ digunakan untuk selector atribut pada elemen**/
    
    title: 'h3.entry-title a', 
    img: 'a img@src', 
    coupon:'.link-holder a@href'

  }])
  .paginate('.paging a@href')
  
  .limit(5)
  
  .stream()

  return data.pipe(cape);
    
};



  
module.exports = {nime,recom,free,diskon};





/**
  ======= reference belajar javascript:
  
  
  https://www.udemy.com/user/bina-nusantara-university/?key=taught_courses&taught_courses=4
  
  https://javascript.info/
  
  https://addyosmani.com/resources/essentialjsdesignpatterns/book/
  
  https://eloquentjavascript.net/
  
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types
  
  
  https://devhints.io/
  http://overapi.com/express
  https://github.com/azat-co/cheatsheets/tree/master/express4
  https://medium.freecodecamp.org/modern-frontend-hacking-cheatsheets-df9c2566c72a
  https://github.com/uanders/react-redux-cheatsheet
  
**/