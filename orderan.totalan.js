var e = selectedEntries();
var payload = ("https://api.whatsapp.com/send?text=");
var andro = intent("android.intent.action.VIEW");

var benar = true;
var eksp = arg("Ekspedisi");
var serv = arg("Service");
var hargaSekilo = arg("Biaya");
var deposit = arg("Deposit");
var namaCust = e[0].field("Penerima");
var alamatP = e[0].field("Alamat");
var nomorP = e[0].field("NomorP");
var namaD = e[0].field("Pengirim");
var nomorD = e[0].field("NomorD");

var listBrg = "";
var subTot = 0;
var beratPaket = 0;
var totBrg = 1;
var diskon = 0;
var ongkir = 0;
if (deposit=="") {deposit=0};

//validasi seleksi totalan
for (var x=1; x<e.length;x++) {
   totBrg++;
   if (e[x].field("Penerima")!=namaCust) benar = false;
}

if (totBrg>=6) {
  diskon = 5000;
  if (totBrg>=12) {
    diskon = 10000;
    if (totBrg>=24) {
      diskon = 15000;
    }
  }
}

if (benar) {
  for (var i in e) { //loop brg
    var namaBrg = e[i].field("Barang");
    var warnaBrg = e[i].field("Warna");
    var toko = e[i].field("Toko");
    var harga = e[i].field("Harga Jual");
    var berat = e[i].field("Berat");
    subTot += harga;
    beratPaket += berat;
    listBrg += toko+", *"+namaBrg+" "+warnaBrg+"* @"+harga/1000+"rb\n";
    e[i].set("Ekspedisi",eksp);
    e[i].set("Service",serv);
    e[i].set("Ongkir Perkilo",hargaSekilo);
    e[i].set("Diskon",diskon);
  } //loop brg
} else {
  message("Salah pilih barang totalan kak");
  exit();
}

function bulatkan(n) {
   var h = (Math.floor((n/1000))*1000);
   var x = n - h;
   if (x<=200) {
      return (h/1000);
   } else {
      return (h/1000)+1;
   }
}

var pecah = beratPaket/1000;
if (pecah<1) {
   beratPaket = 1;
} else {
   beratPaket = bulatkan(beratPaket);
};

if (eksp!="GOSEND") {
   ongkir = beratPaket*hargaSekilo;
} else {
   ongkir = hargaSekilo;
};

var totDiskon = totBrg*diskon;
var total = subTot+ongkir-totDiskon-deposit;

template = 
"*INVOICE PESANAN*\n\n"+
"Nama: *"+namaCust+"*\n"+
"Alamat: _"+alamatP+"_\n"+
"HP: "+nomorP+"\n\n"+
"Pengirim: \n*"+namaD+"*\n["+nomorD+"]\n\n"+
"*KEEP*\n"+listBrg+"\n"+
"Sub-Total: Rp."+subTot+"\n"+
"*"+eksp+"-"+serv+"* "+beratPaket+"kg: "+
ongkir+"\n"+
"Diskon: Rp."+totDiskon+"\n"+
"Deposit: Rp."+deposit+"\n"+
"*TOTAL: Rp."+total+"*\n\n"+
"⚠ *PRIORITAS DAPAT BARANG BAGI YG TRANSFER DULUAN YA KAK* 😊🙏🏻"
;

var templateURI = encodeURIComponent(template);
var totalan = payload+templateURI;

andro.data(totalan)
andro.send();

/*
clip = intent("android.intent.action.SEND");
clip.data("type:text/plain");
clip.extra("android.intent.extra.TEXT","testing text");
clip.send();
*/
