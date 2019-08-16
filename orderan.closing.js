// MEMENTO SCRIPT NAME: Closing Web
// TYPE: Action Script
// TEMPAT ACTION: Bulk Actions Menu
// REQUARED: moment.min.js

var e = selectedEntries();
var jum = 0, seleksiBenar = true;
var now = moment().toDate().getTime();
var http = http();

//FUNGSI MEMBUAT UNIQUE ID
function uid(x)  {
   var a = [1,2,3,4,5,6,7,8,9];
   var n; var r=[];
   for (n=1; n<=x; ++n) {
      var i = Math.floor((Math.random()*(9-n))+1);
      r.push(a[i]);
      a[i] = a[9-n];
   }
   var uid = "";
   for (i = 0; i < x; i++) {
      uid += r[i] + "";
   }
   return uid;
}

var penerima = e[0].field("Penerima");
var id = now+"-"+uid(2);
var bank = arg("Transfer Ke Bank?");
if (bank=="") {message("Horok!"); exit();}

//Validasi seleksi entry
for (var x in e) {
   if (e[x].field("Penerima")!=penerima) {seleksiBenar = false};
};
if (!seleksiBenar) {
   message("Salah pilih barang closingan kak");
   exit();
};

var kodeCS = e[0].field("Kode CS");
var alamat = e[0].field("Alamat");
var hpP = e[0].field("NomorP");
var pengirim = e[0].field("Pengirim");
var hpD = e[0].field("NomorD");
var eksp = e[0].field("Ekspedisi");
var serv = e[0].field("Service");
var ongkir = e[0].field("Ongkir Perkilo");
var diskon = 0;
var berat = 0;
var subtotal = 0;
var deposit = e[0].field("Deposit");

//disini

function bulatkan(n) {
  if (n>1000) {
   var h = (Math.floor((n/1000))*1000);
   var x = n - h;
   if (x<=200) {
      return (h/1000);
   } else {
      return (h/1000)+1;
   }
  } else { return 1 }
}

var host = "https://firestore.googleapis.com/v1beta1/projects/nabiilah-duit/databases/(default)/documents/closing?documentId="+id+"&key=AIzaSyAaC_P9vm-hnCA0TqejEgYeySKLMawYOnY";

http.headers({"content-type": "application/json"});

var listBarang = "";

for (var i in e) { //loop
  if (e[i].field("Ekspedisi")!="") {
    var barang = e[i].field("Nama Barang");
    var warna = e[i].field("Warna");
    var bcd = e[i].field("Barcode");
    var toko = e[i].field("Toko");
    beratBrg = e[i].field("Berat");
    berat += beratBrg;
    var harga = e[i].field("Harga Jual");
    subtotal += harga;
    diskon += e[i].field("Diskon");

    var db = "https://firestore.googleapis.com/v1beta1/projects/nabiilah-duit/databases/(default)/documents/closing/"+id+"/barang?documentId="+bcd+"&key=AIzaSyAaC_P9vm-hnCA0TqejEgYeySKLMawYOnY";

    var tmp = "{\"mapValue\": {\"fields\": {\"barcode\": {\"integerValue\": \""+bcd+"\"}, \"toko\": {\"stringValue\": \""+toko+"\"}, \"nama\": {\"stringValue\": \""+barang+"\"}, \"warna\": {\"stringValue\": \""+warna+"\"}, \"berat\": {\"integerValue\": \""+beratBrg+"\"}, \"harga\": {\"integerValue\": \""+harga+"\"}}}}";

if (jum==0) {
  listBarang += tmp;
} else {
  listBarang += ", "+tmp;
}

    //http.headers({"content-type": "application/json"});
    //var res = http.post(db, dataBrg);
    //message(dataBrg);

    e[i].set("Status","Closing");
    e[i].set("Waktu Closing",now);
    e[i].set("IID",id);
    e[i].set("Status Keep","Closing");
    jum++;
  } else {message(e[i].title+" belum totalan kak!"); exit();}
} //loop

var beratBulat = bulatkan(berat);
var ongkirPaket = ongkir*beratBulat;

var data = "{\"fields\": {\"service\": {\"stringValue\": \""+serv+"\"}, \"cs\": {\"stringValue\": \""+kodeCS+"\"}, \"nPenerima\": {\"stringValue\": \""+hpP+"\"}, \"nPengirim\": {\"stringValue\": \""+hpD+"\"}, \"ekspedisi\": {\"stringValue\": \""+eksp+"\"}, \"alamat\": {\"stringValue\": \""+alamat+"\"}, \"berat\": {\"integerValue\": \""+beratBulat+"\"}, \"bank\": {\"stringValue\": \""+bank+"\"}, \"status\": {\"stringValue\": \"Cek Mutasi\"}, \"ongkir\": {\"integerValue\": \""+ongkir+"\"}, \"pengirim\": {\"stringValue\": \""+pengirim+"\"}, \"diskon\": {\"integerValue\": \""+diskon+"\"}, \"penerima\": {\"stringValue\": \""+penerima+"\"},\"deposit\": {\"integerValue\": \""+deposit+"\"}, \"listBarang\": {\"arrayValue\": {\"values\": ["+listBarang+"]}}}}";

result = http.post(host, data);
  var cek = result.body;
  var error = cek.search(new RegExp("error","i"));
  if(error==-1) {
    message(cek);
    message("Closing Berhasil");
  } else {
    message("FORMAT ERROR:\n"+data);
  }

//}

//message(jum+" barang sudah masuk Closingan");
