/**


=========================  
  javascript cheetsheet
  
  
  
  
  4sep2018
  -----
  
  filter -> seleksi
  slice -> ngurangi karakter
  splice -> ngurangi jumlah array/object
  indexOf-> untuk tahu nomer berapa indexnya
  reduce-> untuk pengoprasian fungsi dalam array
  toString -> jadi string
  NaN
  undefined
  
  JSON.stringify -> var object di koding ke JSON api
  JSON.parse-> JSON api ke var object koding
  
  
  
  
  di php untuk mengambil tiap data
  
  anus = ['a' => 'ini a','b' => 'ini b']
  
  foreach($anus as $anu ){
  
  echo $anu->a;
  echo $anu->b
  
  }
  
  
  javascript
  
  var data=""
  var anus = [{anu: 'a'},{anu: 'b'}...n ];
  
  for(var isi in anus){
    var data =   data + anus[isi].anu // result nomer index tiap isi array/nama property tiap object
  
  }
  
  recomended pakai map ini
  
var array1 = [{nama:'satu',kelas:'dua'},{nama:'dua',kelas:'tiga'}];

array1.map((x)=> {
  console.log(`nama => ${x.nama} dan kelas ${x.kelas}`);
});



  passing value pada string dengan format `halo ${value}`
  
  --
  mnipulasi array
  .pop/push (dari belakan mengurangi array dan menambah array)vs .shift/unshift (dari depan mengurangi array dan menambah array)
  performa lebih bagus pop/push.
  
  
  3sep2018
  ----
  loop
  
  for in vs for of
  
  [hasil number_index] for in = result angka index pada tiap array, kalau berbentuk object maka hanya akan result property" index pada object tidak isinya.
  kalau pakai .map() maka akan magic dan otomatis ngeindex sendiri.
  contoh 
  
  var data=(JSON.parse(body));
   for(var number_index in json){
   console.log(`nama anime ${data[number_index].title}`);
   }
   
   SAAT MENGGUNAKAN FUNGSI BACA DULU ISI DARI PARAMETERNYA SEBELUM MENGGUNAKAN MISAL MAP(TEMPAT PARAMETER DATA,PARAMETER INDEX, DAN LAIN);
  
  [hasilnya value] for of = result isi dari tiap array, kalau ingin beresult angka pakai index = Math.floor(Math.random() * array.length trus array[index].
  
  https://alligator.io/js/for-of-for-in-loops/
  
  
  .forEach() vs .map
  hanya bisa diginakan untuk array atau array object. kalau hnya object saja tidak bisa {}
  semua yg bisa dilakukan forEach bisa di lakukan .map
  cocok digunakan untuk mengirim data
  peforma lebih bagus .map daripada .forEach
  
  cara kerja seperti for in  variable dalam init akan jadi perwakilan dalam pemilihan didalam proses
  
  ================================
  
  
  
  
  
  
  api json itu cuma resultnya jadi json
  
  komunikasinya pada respon dan request pada url. ibarat tombol"nya pada web
  
  endpoint api di bedakan pada endpoint controller/raouter lain
  
  hasil resultnya layer ada banyak tinggal pilih mau apa.
  
  xml,json,html,xhtml,csv, dll.
  
  
  state managent -> penyentralan perubahan, komunikasi antar komponen, penyimpanan perubahan.
  
  belajar redux
  ------
  
  dalam store ada beberapa
  
  action -> sama kayak controller
  reducer -> sama kayak model
  state -> handle kondisi
  props -> handle propertis
  component -> ya sama kayak view
  - dump component = berisi presentasi saja. tampilan tok
  - smart component /container = berisi logic dan penyatuan dump component. redux taruh sini
  
  
  belajar vuex MVVM
  ------------
  action 
  mutation - perubahan
  state - kondisi
  getter - presentasi/impelement
  
  
  
  for (anu in anus){}
  
  let,var,const = konsiten nilai gk bisa di ubah
  
  = equal
  == comparison bisa berubah nilai
  === comparison tidak bisa di ubah nilai. result true and false or type data
  
  referanceError,syataxError,TypeError
  
  
  ES 5 
  
  The "use strict" Directive
String.trim()
Array.isArray()
Array.forEach()
Array.map()
Array.filter()
Array.reduce()
Array.reduceRight()
Array.every()
Array.some()
Array.indexOf()
Array.lastIndexOf()
JSON.parse()
JSON.stringify()
Date.now()
Property Getters and Setters
New Object Property Methods

es 6

JavaScript let
JavaScript const
JavaScript default parameter values
Array.find()
Array.findIndex()


object property method keyword ====

Array	Date	eval	function
hasOwnProperty	Infinity	isFinite	isNaN
isPrototypeOf	length	Math	NaN
name	Number	Object	prototype
String	toString	undefined	valueOf

other keyword

alert	all	anchor	anchors
area	assign	blur	button
checkbox	clearInterval	clearTimeout	clientInformation
close	closed	confirm	constructor
crypto	decodeURI	decodeURIComponent	defaultStatus
document	element	elements	embed
embeds	encodeURI	encodeURIComponent	escape
event	fileUpload	focus	form
forms	frame	innerHeight	innerWidth
layer	layers	link	location
mimeTypes	navigate	navigator	frames
frameRate	hidden	history	image
images	offscreenBuffering	open	opener
option	outerHeight	outerWidth	packages
pageXOffset	pageYOffset	parent	parseFloat
parseInt	password	pkcs11	plugin
prompt	propertyIsEnum	radio	reset
screenX	screenY	scroll	secure
select	self	setInterval	setTimeout
status	submit	taint	text
textarea	top	unescape	untaint
window			

html heandel keyword
onblur	onclick	onerror	onfocus
onkeydown	onkeypress	onkeyup	onmouseover
onload	onmouseup	onmousedown	onsubmit


JSON.parse = object to string

JSON.stringify = string to object JSON

manipulasi array pakai method/funsi ==

toString() join() , Popping and Pushing, Shifting Elements, Changing Elements, Splicing an Array, Merging (Concatenating) Arrays, Automatic toString()
Finding Max and Min Values
==
    
  
  module.exports = {funsi a,b,c}
  
  import {a,b,c} from anu
  
  
  function (paramenter){
  var data= data*parameter
  
  return data
  } 
  
  try{} catch{} finally{} throw{}
  
  promise(function(resolve,reject){
  })then({}).catch({})
  
  instance of
  
  
  , ()=>{} , var anu = function(){} 
  
  data stuktur javascript about data
  
  ['febri','dono'] array , object {'nama':febri,'kelas':rpl} , variable let anu,const anu,var anu
  
  
  contoh async await
  
  async function cucimuka (muka) { // kata async harus taruh sebelum pada fungsi. kata await taruh pada payload proses.
  
  let cuci = '';
  
  var sabun = await sabun(()=>{
  
      get(muka)**
  
  }),'20 detik');
  
  
  
  contoh pakai promise
  
  Promise.all(map((sabun)=>{
  cuci * 3 + 3
  }))
  
  .catch((error)=>{
  console.log(error);
  })
  return cuci
  }
  
  
  
  for(i;i>0;i++){}
  
  while(i>0)){
  i++
  }
  
  do{
  i++
  }
  while(i>0
  

  fat arrow  
{
  one : (x) => x*2; 
  two : (x)=> {
  
  h=x*2;
  j %= 10*h;
  
  return j
  }
}
  
  
  super() untuk load fungsi di parent
  
  class child extends parent {}
  
  construct sama kayak __init__ python
  
  
  
  
  Map =looping kayak foreach, filter = filter object dan array, reduce = manupulasi object dan array
  
  forEach looping
  
   Immutable.js,lodash  = buat manipulasi object {'0':0} dan array ['0'])
  
  
  
  
  
  
  
  
  
  
  
  ==belajar object dan array
  ---------------------------------
  
  
  
  note penting penggunaan object didalam kode js harus di definikan agar tidak error pada penggunaan huruf pada value yang merupakan variable
  
  contoh [{'0':nama}] -> ini bakal error
  
  kalau angka misal [{'0':0}] tidak error karna udah terdifinisikan.
  
  cara memperbaikinya dengan.
  
  var nama = 'anu'
  
  [{'0':nama}] -> ini gk error karna sudah di daftarkan pada variable.
  
  
  [0,1,2,n..] ini array , punya satu slot, harus di isi
  
  
  {'0':0,'1':1,'2':2,n..} ini object, punya dua slot. harus 2 di isi propery dan valuenya
  
  nested
  
  [{
  anu:{},{} -> X salah
  },{
  },{
  }
  ]
  
  [{
  anu:[{},{}] -> X benar, karna perluh array agar object dapat menampung banyak property
  },{
  },{
  }
  ]
  
  
  
  var kue = ['tar','siput','bekecot']
  
  contoh pada format json api object pada array
  var roti = [{
  
            'nama': febri
            'kelas': 10
            },
            {
            'nama': susi
            'kelas': 7
            }]
  
  
  var mobil = {
              
              'merk' : zuzuki
              'type': sedan
              'jenis': [{
                        'orderdil': [{
                                    'new' : baru
                                    'second' : bekas
                                    }]
                        'speed' : 200
                        }]
              }
              

  cara select object -> var result = mobil.merk //hasil 'zuzuki'
  
                                    mobil.jenis[0].speed //hasil '200'
                                    
                                    mobil.jenis[0].onderdil[0].new //hasil 'baru'
                                    
                                    roti[0].nama //hasil 'febri' -> contoh pada format json api
                                    
                                    
                                    
cara select array -> var result = kue[0] -> hasil 'tar'
  
  
  
  ====

method pada array/variable=  car.mundur(),car.maju()


cara kerja object

var car = {'name': fiat,
'model':500,
'weight':850kg,
'color':white} 

-> jadi sama seperti begini dalam bentuk kode

car.name = Fiat
car.model = 500
car.weight = 850kg
car.color = white


=======

**/