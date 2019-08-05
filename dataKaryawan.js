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
