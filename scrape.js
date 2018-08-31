const express = require('express');
var request = require('request');
var http = require('http');
var xray = require('x-ray');


const app = express();
var x = xray();

var getpage = async(cape,col) => {
  var url = await 'https://goalkicker.com/'+col+'/';
  const data = await x(url,'body',[{
    title: '#header h1',
    img: '#frontpage a img@src',
    download: '#frontpage a@href'
  }])
  .stream()
    
  return data.pipe(cape);
}
  

var book = async(cape) => {
  
  const data = await x('https://goalkicker.com/','.books .bookContainer.grow',[{
  
    title: 'a img@alt',
    img: 'a img@src',
    link:'a@href'
  }])
  .stream()
    
  return data.pipe(cape);
    
}

var recom = async (cape,num) => {
  
  const data = await x('https://drivenime.com/','.arpw-random-post ul.arpw-ul .arpw-li.arpw-clearfix',[{
  
    title: 'a.arpw-title',
    img: 'a img@data-lazy-src',
    link:'a@href'

  }]).paginate('.pagination a@href')
    .limit(num)
    .stream()
  
  
  return data.pipe(cape);
    
}


var nime = async (cape,num) => {
  
  const data = await x('https://drivenime.com/','#content_box .post.excerpt',[{
  
    title: 'a@title',
    img: '.featured-thumbnail img@data-lazy-src',
    desc: '.post-content.image-caption-format-1',
    link: 'a@href'
  }])
  .paginate('.pagination a@href')
  .limit(2)
  .stream()
  
  return data.pipe(cape);
  
  }


var free = async (cape,num) => {
   
  const data = await x('https://smartybro.com/','.post',[{ //select block elemen yg sama antar elemen pada parent target biar datanya ke grab semua.
  
    title: 'h2.grid-tit a', //select block target elemen yg mau diambil, @ lombang ini untuk menunjukan isi attribut target data misal src,href,onclick, dll/
    img: 'a img@data-lazy-src', // untuk beda block kasih space aja. misal <a><anu class ="y">mm</anu></a> jadi kodenya img : 'a anu.y'
    coupon:'h2.grid-tit a@href'

  }])
  .paginate('.pages a.next.page-numbers@href') //select block url tombol next untuk load halaman selanjutnya otomatis. 
  .limit(num)
  .stream()

  return data.pipe(cape);
    
};

var diskon = async (cape,num) => {
   
  const data = await x('https://udemycoupon.learnviral.com/','.coupon',[{
    title: 'h3.entry-title a', 
    img: 'a img@src', 
    coupon:'.link-holder a@href'

  }]).paginate('.pages a.next.page-numbers@href')
    .limit(num)
    .stream()
  
  return data.pipe(cape);
};

var diskon_katagori = async(cape,catagory,num) => {
  var url = await 'https://udemycoupon.learnviral.com/coupon-category/'+catagory;
  
  const data = await x(url,'.box-c .status-publish',[{ // dalam select blok perhatikan atribut yang beda / atribut key untuk filter blok mana yang ingin di ambil misal statusnya ini maka yang di ambil yang berstatus publish. karna ada 2 data yg sama.
    
    title: 'h3.entry-title a', 
    img: 'a img@src',
    coupon:'.link-holder a@href'
    
  }]).paginate('.pages a.next.page-numbers@href') // untuk membedakan blok parent dan child dengan dipisah spasi, misal <one><twi id='a'><twi></one>  jadi gini nulisnya : one twi#a
     .limit(num)   
     .stream()
    
  return data.pipe(cape);
}





module.exports = {nime,recom,free,diskon,book,getpage,diskon_katagori};
