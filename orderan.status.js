var e = selectedEntries();
var stat = arg("Status Keep");
var now = moment().toDate().getTime()

for (var x in e) {
  e[x].set("Status Keep",stat);
  if(stat=="Diambil") {e[x].set("Waktu Diambil",now);}
}
