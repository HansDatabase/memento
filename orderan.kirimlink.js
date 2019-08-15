var e = selectedEntries();
var payload = ("https://api.whatsapp.com/send?text=");
var andro = intent("android.intent.action.VIEW");

var brg = "";
for (var x in e) {
  brg += "- *"+e[x].field("Nama Barang")+"* "+e[x].field("Warna")+"\n";
}
var id = e[0].field("IID");
var penerima = e[0].field("Penerima");
var eksp = e[0].field("Ekspedisi");
var alamat = e[0].field("Alamat").toUpperCase();

var template = "🧾 ID#*"+id+"* 🧾\n\nPenerima: *"+penerima+"*\n*"+alamat+"*\n\nBarang:\n"+brg.toUpperCase()+"\nEkspedisi: *"+eksp+"*\n\nPengen tau *sampai mana proses pesanan* kakak? *Cek Resi*? dll?\n\n*GAMPANG BANGET!* 😍\nKlik link pesanan kakak dibawah ini:\n\nhttps://nabiilah-duit.web.app/id/"+id;

var templateURI = encodeURIComponent(template);

andro.data(payload+templateURI);
andro.send();

/*
clip = intent("android.intent.action.SEND");
clip.data("type:text/plain");
clip.extra("android.intent.extra.TEXT","testing text");
clip.send();
*/
