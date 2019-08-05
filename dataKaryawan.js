var dataKaryawan = [
"AFIFAH",
"LALA",  
"VIVI", 
"ASNA", 
"WATI", 
"ERPIN", 
"APRIL", 
"AZIZ", 
"YAYAK", 
"HABIB", 
"HAFIDZ", 
"EKO", 
"NOFAL", 
];

var skrg = moment().toDate().getTime();
var hariIni = moment(skrg).format("DD/MM/YY");

//Fungsi Validasi karyawan apakah terdaftar? 
function validasi(cs) {
var ada = false;
var dataCS = dataKaryawan;

  for (var x in dataCS) {
    if (dataCS[x]==cs) {ada=true}
  }
  if (ada) {return ada}
  else {message("Maaf CS tidak ditemukan");exit()}
}

//Apa sudah absen hari ini?
function sudahAbsen(cs) {
var belum = true;
  for (var x in absensi) {
    if (moment(absensi[x].field("Waktu Masuk")).format("DD/MM/YY")==hariIni&&absensi[x].field("Nama")==cs) {
     absensi[x].set("Waktu Pulang",skrg);
     absensi[x].set("Jam Pulang",skrg);
     belum = false;
    }
  }
  if (belum) {message(cs+" belum absen masuk")}
}

//Cek telat apa gak ya
function cekTelat(data) {
  var nama = decrypt(data.split(":")[1]);
  var waktu = moment.unix(data.split(":")[0]/1000).toDate().getTime();

  validasi(nama);

  var batas = [9,5];//jam 9 lebih 5 menit
  var terlambat = (batas[0]*60)+batas[1];
  var masuk = (moment(waktu).format("HH")*60)+(moment(waktu).format("mm")*1);
  var stat="",msg="";

  if (masuk>terlambat) {
    stat="Terlambat";
    msg="Wah telat nih";
  } else {
    stat="Tepat Waktu";
    msg="Joss joss semangat!! :D";
  }

  var absen = new Object();
  absen["Nama"] = nama;
  absen["Waktu Masuk"] = waktu;
  absen["Jam Masuk"] = waktu;
  absen["Status"] = stat;
  lib().create(absen);

  message(msg);
}
