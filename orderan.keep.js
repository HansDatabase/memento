// BULK ACTION MENU (NO ARGS)
// KEEP CS

var e = selectedEntries();
var jum = 0;
var now = moment().toDate().getTime();

for (var i in e) { //loop
var statusKeep = e[i].field("Status Keep");

if (statusKeep=="Belum") { //stat
     e[i].set("Status Keep","Keep");
     e[i].set("Waktu Keep",now);
     jum++;
  } //stat
} //loop

message(jum+" barang sudah masuk list ambilan ndoro");
