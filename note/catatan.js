
  
  /** 
  
  NOTE
  
  kekuatan ku sebenarnya adalah belajar dari source code orang lain. + belajar referance keyword di dokumentasi bahasa pemprograman.
  
  baru skip  skip video, ebook.
  
  
  
  belajar algoritma itu penting, bukan belajar algoritma ya. maksudnya belajar algoritma itu belajar algoritma
  yang sudah ada. untuk mempercepat bikin algoritma yang baru atau menyelesaikan masalah. sebagai referensi untuk buat alur program.
  
  
  
  
  cara menselector selector pertama/seluruh selector elemen yang punya identisas sama bukan paling atas pada target ya !! 
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
  
  promise menggantikan if else utnuk callback yg banyak bisa antrian juga then,catch, async await sama seperti promise lebih simple dan enak digunakan.
  

//implements Async/Await way - enak ini
const getUserAsync = async (name) => {
  const user = await getUserByName(name);
  if (user.role == 'guest') {
    return user;
  } else {
    return false;
  }
}}
  
  
  
  //implements Promise way
const getUserPromise = (name) => {
  return getUserByName('andrew')
    .then(function (user) {
    if (user.role == 'guest') {
      return user;
    } else {
      return false;
    }
  })
}

untuk looping tidak disarankan untuk await pada forEach , pakai promise.all dan map untuk loopnya terus baru await target loadnya.

permasalahan pada promise saat menggunakan try catch kita tidak bisa menggunakan catch pada promise :'(
  
  **/
  


    /** catatan cara scrape object dengan xray adalah dengan menselect selector yang diatasnya target 
    
    misal 
    <div class='anu'>
    <a href="dwd.html">contoh</a>
    </div>  , 
    
    pilih .anu a@href . 
    
    @ digunakan untuk selector atribut pada elemen**/



/**
  ======= reference belajar javascript:
  
  tiga ini penting --
  https://medium.com/skyshidigital/promise-lets-async-await-76122d134eb
  https://wecodetheweb.com/2016/05/11/writing-better-functional-javascript-with-map-filter-and-reduce/
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types
  --
  
  https://addyosmani.com/resources/essentialjsdesignpatterns/book/
  https://eloquentjavascript.net/
  
  
  
  https://hackernoon.com/asynchronous-python-45df84b82434
  
  
  https://javascript.info/
  
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/
  
  

   https://www.udemy.com/user/bina-nusantara-university/?key=taught_courses&taught_courses=4
  
  https://devhints.io/
  http://overapi.com/express
  https://github.com/azat-co/cheatsheets/tree/master/express4
  https://medium.freecodecamp.org/modern-frontend-hacking-cheatsheets-df9c2566c72a
  https://github.com/uanders/react-redux-cheatsheet
  
**/