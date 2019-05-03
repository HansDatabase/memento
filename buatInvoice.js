//FUNGSI POTONG TEKS BARANG
// contoh tek = "alma , alina,red,a115,1 "
function potong(tek,batas) {
  var tmp = tek.toUpperCase().split(batas);
  if (tmp.length==3) {
    for (var i in tmp) {
      tmp[i] = tmp[i].trim()};
  } else {
    message("Format keep barang salah gaess");
    exit();
  }
  return tmp;
}

function toDuit(value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function buatInvoice(data) {
  var invoicePrint = '';

 for (var z in data) {
  var id = data[z][0];
  var penerima = data[z][1];
  var kodeCS = data[z][2];
  var waktu = data[z][3];
  var alamat = data[z][4];
  var nomorP = data[z][5];
  var pengirim = data[z][6];
  var nomorD = data[z][7];
  var listO = data[z][8];
  var eksp = data[z][9];
  var serv = data[z][10];
  var beratPkt = data[z][11];
  var ongkir = toDuit(data[z][12]);
  var listB = data[z][13];
  var diskon = toDuit(data[z][14]);
  var subtot = data[z][15];
  var total = toDuit(data[z][16]);
  var statusz = data[z][17].toUpperCase();
  
  var barang = listB.split("\n");
  var barangs = [];
  for (var j in barang) {
    barangs[j] = potong(barang[j],",");
  }
	/*
	cara akses array barangs[a][b]
	a = index barang yg ke-a, dimulai dari 0
	b = index dari:
		0 = barcode
		1 = nama & warna barang
		2 = harga
	*/
  var listLabel = '';
  var listInvoice = '';
  for (var i in barang) {
    var hrg = toDuit(barangs[i][2]);
    listLabel += '<li><span class="left">'+barangs[i][1]+'</span></li>\n';
	listInvoice +=
	'<tr style="line-height: 1.25em;font-size: 12px; vertical-align: middle;">'+'\n'+
	'	<td colspan="2">'+barangs[i][1]+'</td><td>1</td><td></td><td>Rp. '+hrg+'</td><td>Rp. '+hrg+'</td>'+'\n'+
	'</tr>'+'\n';
  }
	 
  var invoicePrint +=
'<table width="100%" border="0" cellspacing="0" class="print-data printLabel" id='+z+1+'>'+'\n'+
'	<tr><td width="20%" rowspan="3" style="display: none" class="text-center shop-logo">'+'\n'+
'			<img class="img-logo" src="https://image.flaticon.com/icons/svg/33/33658.svg" width="120">'+'\n'+
'			<div class="shop-info"><h4 style="margin:10px 0 5px;">NABIILAHSTORE</h4><p>Distributor baju muslim </p></div>'+'\n'+
'		</td>'+'\n'+
'		<td class="plabel" valign="bottom">'+'\n'+
'			<h4 class="po-number" style="display:block;font-size: 1.15rem; margin-bottom: 7px;">PO#'+'\n'+id+'</h4>'+'\n'+
'			Kepada:'+'\n'+
'		</td>'+'\n'+
'		<td class="plabel orderdetail" valign="bottom">'+'\n'+
'			Order <span class="tgl_order" style="display:none;">['+waktu+']'+'\n'+
'		</td>'+'\n'+
'		<td class="fragile" width="30%" rowspan="4">'+'\n'+
'			<img class="img-fragile" src="https://app.ngorder.id/assets/img/fragile.png " alt="">'+'\n'+
'			<h2>FRAGILE</h2>'+'\n'+
'			<p>JANGAN DIBANTING!!!</p>'+'\n'+
'		</td>'+'\n'+
'	</tr>'+'\n'+
'	<tr><td width="40%" valign="top">'+'\n'+
'			<p class="receiver-name ls-1"> '+penerima+'</p>'+'\n'+
'			<p class="address">'+alamat+'<br>Telp: '+nomorP+'</p>'+'\n'+
'		</td>'+'\n'+
'		<td style="font-size: 12px;" width="30%" valign="top" class="orderdetail">'+'\n'+
'			<ul class="product-list">'+'\n'+listLabel.trim()+'</ul>'+'\n'+
'		</td>'+'\n'+
'	</tr>'+'\n'+
'	<tr><td>'+'\n'+
'			<p class="plabel">Pengirim: </p>'+'\n'+
'			<p class="sender" >'+pengirim+'<br>'+nomorD+'</p>'+'\n'+
'		</td>'+'\n'+
'		<td>'+'\n'+
'			<p><strong>KODE CS:&nbsp&nbsp</strong>'+kodeCS+'</p>'+'\n'+
'		 	<div class="expedisi">'+eksp+'-'+serv+'</div>'+'\n'+
'		 	<div class="expedisi awb"></div>'+'\n'+
'		</td>'+'\n'+
'	</tr>'+'\n'+
'</table>'+'\n'+
'<table width="100%" border="0" cellspacing="0" class="print-data printInvoice" font-size="12px;" style="display: none;" id='+z+1+'>'+'\n'+
'	<tr style="margin: 0;padding: 20px;">'+'\n'+
'		<td style="margin: 0;" width="10%"><img class="img-logo" src="https://image.flaticon.com/icons/svg/33/33658.svg" style="width: 64px;"></td>'+'\n'+
'		<td colspan="3" style="margin: 0;vertical-align: top;">'+'\n'+
'			<h3 style="padding:0; margin: 0.5em 0 0;">NABIILAHSTORE</h3><p>Distributor baju muslim </p>'+'\n'+
'		</td>'+'\n'+
'		<td colspan="2" style="margin: 0;vertical-align: top;">'+'\n'+
'			<h5 style="padding:0; margin:0.5em 0;">'+'\n'+
'				<strong>Tanggal:</strong><span style="clear:both;display:block;font-weight: normal;">'+waktu+'</span>'+'\n'+
'			</h5>'+'\n'+
'			<h5 style="padding:0; margin:0.5em 0;">'+'\n'+
'				<strong>Nomor Invoice:</strong><span style="clear:both;display:block;font-weight: normal;">INV.'+id+'</span>'+'\n'+
'			</h5>'+'\n'+
'		</td>'+'\n'+
'	</tr>'+'\n'+
'	<tr style="margin: 0; padding: 20px;">'+'\n'+
'		<td colspan="4">'+'\n'+
'			<p style="line-height: 1em;margin: 0;padding: 20px 0 0;"><strong>Kepada <span style="text-transform: capitalize;">'+penerima+'</span></strong></p>'+'\n'+
'			<p style="font-size: 12px;line-height: 2em;">Terima kasih telah berbelanja di NabiilahStore. Berikut adalah rincian orderan Anda:</p>'+'\n'+
'		</td>'+'\n'+
'		<td colspan="2" style="font-size: 0.85rem;">'+'\n'+
'			<strong><span style="color: #00C853;">'+statusz+'</span> ['+waktu+']</strong>'+'\n'+
'		</td>'+'\n'+
'	</tr>'+'\n'+
'	<tr>'+'\n'+
'		<td colspan="2" style="padding: 10px 20px; width: 45%;">Nama Produk</td>'+'\n'+
'		<td style="padding: 10px 20px; width: 10%;">Jumlah</td>'+'\n'+
'		<td style="padding: 10px 20px; width: 15%;">Berat</td>'+'\n'+
'		<td style="padding: 10px 20px; width: 15%;">Harga</td>'+'\n'+
'		<td style="padding: 10px 20px; width: 15%;">Subtotal</td>'+'\n'+
'	</tr>'+'\n'+
'	'+listInvoice+
'	<tr style="line-height: 1.25em;font-size: 12px;">'+'\n'+
'		<td colspan="2"><strong>'+eksp+'-'+serv+'</strong></td>'+'\n'+
'		<td></td>'+'\n'+
'		<td>'+beratPkt/1000+' Kg</td>'+'\n'+
'		<td></td>'+'\n'+
'		<td>Rp. '+ongkir+'</td>'+'\n'+
'	</tr>'+'\n'+
'	<tr style="line-height: 1.25em;font-size: 12px;">'+'\n'+
'		<td colspan="5">Diskon</td><td>Rp. '+diskon+'</td>'+'\n'+
'	</tr>'+'\n'+
'	<tr style="line-height: 1.25em;font-size: 12px;">'+'\n'+
'		<td colspan="5">Deposit</td><td>Rp. 0</td>'+'\n'+
'	</tr>'+'\n'+
'	<tr style="line-height: 1.25em;font-size: 12px;">'+'\n'+
'		<td colspan="5">Biaya Tambahan </td><td>Rp. 0</td>'+'\n'+
'	</tr>'+'\n'+
'	<tr style="line-height: 2em;font-size: 12px;">'+'\n'+
'		<td colspan="5"><span style="font-weight: 700; font-size: 1rem;">TOTAL</span></td>'+'\n'+
'		<td><span style="font-weight: 700; font-size: 1rem;">Rp. '+total+'</span></td>'+'\n'+
'	</tr>'+'\n'+
'	<tr>'+'\n'+
'		<td colspan="6"><hr style="border-color: #ddd; border-style: dotted;"></td>'+'\n'+
'	</tr>'+'\n'+
'	<tr>'+'\n'+
'		<td style="vertical-align: top;margin: 0;padding: 10px 0;">'+'\n'+
'			<p style="line-height: 1em;margin: 0;padding: 0 0 0 20px;font-size:12px;">KODE CS:&nbsp&nbsp'+kodeCS+'</p>'+'\n'+
'		</td>'+'\n'+
'		<td colspan="4">'+'\n'+
'			<p  class="note-inv" style="font-size: 12px;line-height: 1.25em;margin:0;padding: 10px 0;"></p>'+'\n'+
'		</td>'+'\n'+
'	</tr>'+'\n'+
'	<tr class="no_rekening">'+'\n'+
'		<td style="vertical-align: top;margin: 0;padding: 10px 0;">'+'\n'+
'			<p style="line-height: 1em;margin: 0;padding: 0 0 0 20px;font-size:12px;">Rekening Pembayaran</p>'+'\n'+
'		</td>'+'\n'+
'		<td colspan="5">'+'\n'+
'			<div class="row">'+'\n'+
'				<div class="col-md-4">'+'\n'+
'									<p style="font-size: 12px;line-height: 1.25em;margin:0;padding: 10px 0;">'+'\n'+
'					<span style="font-weight: bold; font-size:16px; text-transform: capitalize;">BCA</span><br>'+'\n'+
'					No Rekening 123456789<br>'+'\n'+
'					A.n. riza					'+'\n'+
'					</p>'+'\n'+
'									<p style="font-size: 12px;line-height: 1.25em;margin:0;padding: 10px 0;">'+'\n'+
'					<span style="font-weight: bold; font-size:16px; text-transform: capitalize;">BNI</span><br>'+'\n'+
'					No Rekening 0455117331<br>'+'\n'+
'					A.n. riza luqmanul hakim					'+'\n'+
'					</p>'+'\n'+
'									<p style="font-size: 12px;line-height: 1.25em;margin:0;padding: 10px 0;">'+'\n'+
'					<span style="font-weight: bold; font-size:16px; text-transform: capitalize;">BRI</span><br>'+'\n'+
'					No Rekening 685901008862530<br>'+'\n'+
'					A.n. riza luqmanul hakim					'+'\n'+
'					</p>'+'\n'+
'									<p style="font-size: 12px;line-height: 1.25em;margin:0;padding: 10px 0;">'+'\n'+
'					<span style="font-weight: bold; font-size:16px; text-transform: capitalize;">Mandiri</span><br>'+'\n'+
'					No Rekening 9000019069310<br>'+'\n'+
'					A.n. riza luqmanul hakim					'+'\n'+
'					</p>'+'\n'+
'								</div>'+'\n'+
'			</div>'+'\n'+
'		</td>'+'\n'+
'		'+'\n'+
'	</tr>'+'\n'+
'	<tr>'+'\n'+
'		<td style="vertical-align: top;margin: 0;padding: 10px 0;">'+'\n'+
'			<p style="line-height: 1em;margin: 0;padding: 0 0 0 20px;font-size:12px;">Alamat Pengiriman:</p>'+'\n'+
'		</td>'+'\n'+
'		<td colspan="5">'+'\n'+
'			<p style="font-size: 12px;line-height: 1.25em;margin:0;padding: 10px 0;">'+'\n'+
'				<span style="font-weight: bold; font-size:16px; text-transform: capitalize;">'+penerima+'</span><br>'+'\n'+
'				'+alamat+'<br>'+'\n'+
'				Telp: '+nomorP+'</p>'+'\n'+
'		</td>'+'\n'+
'	</tr>'+'\n'+
'</table>'+'\n'+
'<table width="100%" border="0" cellspacing="0" class="print-data printLabelV2" style="display: none; font-size: .775rem;" id='+z+1+'>'+'\n'+
'	<tr>'+'\n'+
'		<td class="py bb-1 to">'+'\n'+
'			<strong>FROM:</strong>'+'\n'+
'		</td>'+'\n'+
''+'\n'+
'		<td class="py bb-1" style="vertical-align: top;">'+'\n'+
'			'+pengirim+' ('+nomorD+')		</td>'+'\n'+
''+'\n'+
'		<td class="bb-1 exp">'+'\n'+
'					 		<strong>'+eksp+'-'+serv+'</strong>		 	 <br>'+'\n'+
'		 	'+'\n'+
'		</td>'+'\n'+
''+'\n'+
'			</tr>'+'\n'+
'	<tr>'+'\n'+
'		<td class="py bb-1 to">'+'\n'+
'			<p class="lead pb-025">TO:</p>'+'\n'+
'		</td>'+'\n'+
'		<td class="py bb-1" colspan="2">'+'\n'+
'			<span class="ttu ls-1"><strong>'+penerima+'</strong></span> <br>'+'\n'+
'			'+alamat+'<br>'+'\n'+
'			Telp: '+nomorP+'		</td>'+'\n'+
'	</tr>'+'\n'+
'	<tr class="orderdetail_v2">'+'\n'+
'		<td class="py" colspan="3">'+'\n'+
'			<p class="pb-025"><strong>ORDER <span class="po-number-v2" style="display:block;">PO#'+id+'</span> <span class="tgl_order_v2" style="display:none;">(Senin, 1 Apr 2019)</strong></p>'+'\n'+
'			<ul class="product-list" style="margin-bottom: 26px;">'+'\n'+
'								<li>'+'\n'+
'					<span class="left">'+'\n'+
'					'+listLabel+'</span>'+'\n'+
'					<span class="right"></span>'+'\n'+
'				</li>'+'\n'+
'							</ul>'+'\n'+
'		</td>'+'\n'+
'	</tr>'+'\n'+
'	<tr class="note_v2">'+'\n'+
'		<td class="py" colspan="3"><p class="p-0"><strong>KODE CS:&nbsp&nbsp</strong>'+kodeCS+'</p></td>'+'\n'+
'	</tr>'+'\n'+
'</table>'+'\n'+
'<table cellspacing="0" class="print-data printInvoice-v2" font-size="12px;" style="display: none;" id='+z+1+'>'+'\n'+
'	<tr>'+'\n'+
'					<td colspan="6" class="text-center">'+'\n'+
'				<h3 class="text-logo nama_toko">NABIILAHSTORE</h3>'+'\n'+
'				<p class="keterangan">Distributor baju muslim </p>'+'\n'+
'				<p class="alamat_toko mb-0"> </p>'+'\n'+
'			</td>'+'\n'+
'			</tr>'+'\n'+
'	<tr class="alamat_toko">'+'\n'+
'		<td colspan="6">'+'\n'+
'			<hr>'+'\n'+
'		</td>'+'\n'+
'	</tr>'+'\n'+
'	<tr class="mb-3">'+'\n'+
'		<td class="text-left" colspan="3">'+'\n'+
'			<span class="status_paid">'+statusz+' <br>['+waktu+']</span>	'+'\n'+
'			 '+'\n'+
'			<span class="input_time">01 Apr 2019 12:43:27</span>'+'\n'+
'		</td>'+'\n'+
'		<td class="text-right" colspan="3">'+'\n'+
'			<p class="pb-0">'+'\n'+
'				To:<span>'+penerima+'</span>'+'\n'+
'			</p>'+'\n'+
'		</td>'+'\n'+
'	</tr>'+'\n'+
'	<tr>'+'\n'+
'		<td colspan="6">'+'\n'+
'			<hr>'+'\n'+
'		</td>'+'\n'+
'	</tr>'+'\n'+
'	<tr class="invoice_detail">'+'\n'+
'		<td colspan="3">'+'\n'+
'			<span>'+waktu+'</span>'+'\n'+
'		</td>'+'\n'+
'		<td class="text-right" colspan="3">'+'\n'+
'			<span>INV.'+id+'</span>'+'\n'+
'		</td>'+'\n'+
'	</tr>'+'\n'+
'	<tr class="invoice_detail">'+'\n'+
'		<td colspan="6">'+'\n'+
'			<hr>'+'\n'+
'		</td>'+'\n'+
'	</tr>'+'\n'+
'	<tr>'+'\n'+
'		<td colspan="2">Nama Produk</td>'+'\n'+
'		<td class="text-center" style="width: 5mm">Qty</td>'+'\n'+
'		<td style="width: 10mm">Berat</td>'+'\n'+
'		<td>Harga</td>'+'\n'+
'		<td class="text-right">Subtotal</td>'+'\n'+
'	</tr>'+'\n'+
'	<tr>'+'\n'+
'		<td colspan="6">'+'\n'+
'			<hr>'+'\n'+
'		</td>'+'\n'+
'	</tr>'+'\n'+
'	<tr class="item-detail">'+'\n'+
'		<td colspan="2">'+'\n'+
'		<span>RESTA OVERALL  </span><span class="sku-inv" style="display: none;"> P154451V01</span>			</td>'+'\n'+
'		<td class="text-center">'+'\n'+
'		1			</td>'+'\n'+
'		<td>'+'\n'+
'		0.35 Kg			</td>'+'\n'+
'		<td class="text-right">'+'\n'+
'		100,000			</td>'+'\n'+
'		<td class="text-right" colspan="3">'+'\n'+
'		100,000			</td>'+'\n'+
'	</tr>'+'\n'+
'	<tr class="item-detail">'+'\n'+
'	<td colspan="2">'+'\n'+
'				 <span>CALYSTA MAXY  MAROON</span><span class="sku-inv" style="display: none;"> P154774V01</span>			</td>'+'\n'+
'			<td class="text-center">'+'\n'+
'				1			</td>'+'\n'+
'			<td>'+'\n'+
'				0.4 Kg			</td>'+'\n'+
'			<td class="text-right">'+'\n'+
'				130,000			</td>'+'\n'+
'			<td class="text-right" colspan="3">'+'\n'+
'				130,000			</td>'+'\n'+
'		</tr>'+'\n'+
'	<tr class="item-detail">'+'\n'+
'		<td colspan="2">'+'\n'+
'			'+eksp+'-'+serv+'		</td>'+'\n'+
'		<td class="text-center">1</td>'+'\n'+
'		<td>0.75 Kg</td>'+'\n'+
'		<td class="text-right">10,000</td>'+'\n'+
'		<td class="text-right" colspan="3">10,000</td>'+'\n'+
'	</tr>'+'\n'+
'	<tr>'+'\n'+
'		<td colspan="6">'+'\n'+
'			<hr>'+'\n'+
'		</td>'+'\n'+
'	</tr>'+'\n'+
'	<tr>'+'\n'+
'		<td colspan="5">Diskon</td>'+'\n'+
'		<td class="text-right">0</td>'+'\n'+
'	</tr>'+'\n'+
'	<tr>'+'\n'+
'		<td colspan="5">Asuransi</td>'+'\n'+
'		<td class="text-right">0</td>'+'\n'+
'	</tr>'+'\n'+
'	<tr>'+'\n'+
'		<td colspan="5">Biaya Tambahan </td>'+'\n'+
'		<td class="text-right">0</td>'+'\n'+
'	</tr>'+'\n'+
'	<tr>'+'\n'+
'		<td colspan="6">'+'\n'+
'			<hr>'+'\n'+
'		</td>'+'\n'+
'	</tr>'+'\n'+
'	<tr>'+'\n'+
'		<td colspan="5">'+'\n'+
'			<span>TOTAL</span>'+'\n'+
'		</td>'+'\n'+
'		<td class="text-right">'+'\n'+
'			<span>240,000</span>'+'\n'+
'		</td>'+'\n'+
'	</tr>'+'\n'+
'	<tr class="note-inv">'+'\n'+
'		<td colspan="6"><hr></td>'+'\n'+
'	</tr>'+'\n'+
'	<tr class="note-inv">'+'\n'+
'		<td colspan="6"><p>KODE CS: '+kodeCS+'</p></td>'+'\n'+
'	</tr>'+'\n'+
'	<tr class="note-inv"><td colspan="6"><p></p></td>'+'\n'+
'	</tr>'+'\n'+
'	<tr class="no_rekening">'+'\n'+
'		<td colspan="6">'+'\n'+
'			<hr>'+'\n'+
'		</td>'+'\n'+
'	</tr>'+'\n'+
'	<tr class="no_rekening">'+'\n'+
'		<td colspan="6">'+'\n'+
'			<p>Rekening Pembayaran</p>'+'\n'+
'		</td>'+'\n'+
'	</tr>'+'\n'+
'	<tr class="no_rekening">'+'\n'+
'		<td colspan="6">'+'\n'+
'			<div class="row">'+'\n'+
'				<div class="col-md-4">'+'\n'+
'									<p>'+'\n'+
'					<span>BCA</span><br>'+'\n'+
'					No Rekening 123456789<br>'+'\n'+
'					A.n. riza					'+'\n'+
'					</p>'+'\n'+
'									<p>'+'\n'+
'					<span>BNI</span><br>'+'\n'+
'					No Rekening 0455117331<br>'+'\n'+
'					A.n. riza luqmanul hakim					'+'\n'+
'					</p>'+'\n'+
'									<p>'+'\n'+
'					<span>BRI</span><br>'+'\n'+
'					No Rekening 685901008862530<br>'+'\n'+
'					A.n. riza luqmanul hakim					'+'\n'+
'					</p>'+'\n'+
'									<p>'+'\n'+
'					<span>Mandiri</span><br>'+'\n'+
'					No Rekening 9000019069310<br>'+'\n'+
'					A.n. riza luqmanul hakim					'+'\n'+
'					</p>'+'\n'+
'								</div>'+'\n'+
'			</div>'+'\n'+
'		</td>'+'\n'+
'	</tr>'+'\n'+
'	<tr class="alamat_pengiriman">'+'\n'+
'		<td colspan="6">'+'\n'+
'			<hr>'+'\n'+
'		</td>'+'\n'+
'	</tr>'+'\n'+
'	<tr class="alamat_pengiriman">'+'\n'+
'		<td colspan="6" class="mt-2">'+'\n'+
'			<span>Alamat Pengiriman:</span>'+'\n'+
'		</td>'+'\n'+
'	</tr>'+'\n'+
'	<tr class="alamat_pengiriman">'+'\n'+
'		<td colspan="6">'+'\n'+
'			<p>'+'\n'+
'				'+alamat+'<br>'+'\n'+
'				Telp: '+nomorP+'				<br>'+'\n'+
'				<span class="kurir">Kurir: '+eksp+'-'+serv+'</span>'+'\n'+
'			</p>'+'\n'+
''+'\n'+
'		</td>'+'\n'+
'	</tr>'+'\n'+
'	<tr>'+'\n'+
'		<td class="text-center" colspan="6">'+'\n'+
'			<span class="text-center" style="display: block; padding-top: 1.5rem;">Terima kasih</span>'+'\n'+
'			<br>'+'\n'+
'			<span>'+'\n'+
'				telah berbelanja di '+'\n'+
'				NabiilahStore			</span>'+'\n'+
'		</td>'+'\n'+
'	</tr>'+'\n'+
'</table>\n';

 };

var template =
'<link rel="stylesheet" href="https://app.ngorder.id/assets/css/style-print.css ">'+'\n'+
'<link href="https://fonts.googleapis.com/css?family=Inconsolata" rel="stylesheet">'+'\n'+
'<div id="non-printable">'+'\n'+
'	<div class="block-left">'+'\n'+
'		<button class="btn btn-blank" onClick="history.back()">← Back</button>'+'\n'+
'	</div>'+'\n'+
'	<div class="block-print">'+'\n'+
'		<div class="radio-outer">'+'\n'+
'			<p style="padding: 0 0 5px; margin: 0; font-weight: bold; letter-spacing: 2px;">CETAK:</p>'+'\n'+
'			<input type="radio" name="print" id="print-label" value="print-label" checked="checked">'+'\n'+
'			<label for="print-label">Shipping Label</label>'+'\n'+
'			<br>'+'\n'+
'			<input type="radio" name="print" id="print-label-v2" value="print-label-v2">'+'\n'+
'			<label for="print-label-v2">Shipping Label (v2)</label>'+'\n'+
'			<br>'+'\n'+
'			<input type="radio" name="print" id="print-invoice" value="print-invoice">'+'\n'+
'			<label for="print-invoice">Invoice</label>'+'\n'+
'			<br>'+'\n'+
'			<input type="radio" name="print" id="print-invoice-v2" value="print-invoice-v2">'+'\n'+
'			<label for="print-invoice-v2">Invoice (Thermal 80mm)</label>'+'\n'+
'		</div>'+'\n'+
'	</div>'+'\n'+
'	<div class="block-options">'+'\n'+
'		<div class="checkbox-outer-label">'+'\n'+
'			<p style="padding: 0 0 5px; margin: 0; font-weight: bold; letter-spacing: 2px;">PENGATURAN:</p>'+'\n'+
''+'\n'+
'			<div class="checkbox">'+'\n'+
'				<label>'+'\n'+
'					<input type="checkbox" id="toggle_order" checked> Detail Order'+'\n'+
'				</label>'+'\n'+
'			</div>'+'\n'+
'			<div class="checkbox">'+'\n'+
'				<label>'+'\n'+
'					<input type="checkbox" id="toggle_fragile"> Fragile Sign'+'\n'+
'				</label>'+'\n'+
'			</div>'+'\n'+
'			<div class="checkbox">'+'\n'+
'				<label>'+'\n'+
'					<input type="checkbox" id="toggle_logo"> Shop Logo'+'\n'+
'				</label>'+'\n'+
'			</div>'+'\n'+
'			<div class="checkbox">'+'\n'+
'				<label>'+'\n'+
'					<input type="checkbox" id="toggle_shop_info"> Shop Info'+'\n'+
'				</label>'+'\n'+
'			</div>'+'\n'+
'			<div class="checkbox">'+'\n'+
'				<label>'+'\n'+
'					<input type="checkbox" id="toggle_expedisi" checked> Expedisi'+'\n'+
'				</label>'+'\n'+
'			</div>'+'\n'+
'			<div class="checkbox" style="display:none">'+'\n'+
'				<label>'+'\n'+
'					<input type="checkbox" id="toggle_qrcode"> QR Code'+'\n'+
'				</label>'+'\n'+
'			</div>'+'\n'+
'			<div class="checkbox">'+'\n'+
'				<label>'+'\n'+
'					<input type="checkbox" id="toggle_po" checked> No. PO'+'\n'+
'				</label>'+'\n'+
'			</div>'+'\n'+
'			<div class="checkbox">'+'\n'+
'				<label>'+'\n'+
'					<input type="checkbox" id="toggle_tgl_order"> Tanggal Order'+'\n'+
'				</label>'+'\n'+
'			</div>'+'\n'+
'			<div class="checkbox">'+'\n'+
'				<label>'+'\n'+
'					<input type="checkbox" id="toggle_no_resi"> No Resi'+'\n'+
'				</label>'+'\n'+
'			</div>'+'\n'+
'		</div>'+'\n'+
''+'\n'+
'		<div class="checkbox-outer-label-v2">'+'\n'+
'			<p style="padding: 0 0 5px; margin: 0; font-weight: bold; letter-spacing: 2px;">PENGATURAN:</p>'+'\n'+
'			<div class="checkbox">'+'\n'+
'				<label>'+'\n'+
'					<input type="checkbox" id="toggle_order_v2" checked> Detail Order'+'\n'+
'				</label>'+'\n'+
'			</div>'+'\n'+
'			<div class="checkbox">'+'\n'+
'				<label>'+'\n'+
'					<input type="checkbox" id="toggle_po_v2"> No. PO'+'\n'+
'				</label>'+'\n'+
'			</div>'+'\n'+
'			<div class="checkbox">'+'\n'+
'				<label>'+'\n'+
'					<input type="checkbox" id="toggle_tgl_order_v2"> Tanggal Order'+'\n'+
'				</label>'+'\n'+
'			</div>'+'\n'+
'		</div>'+'\n'+
''+'\n'+
'		<div class="checkbox-outer-invoice">'+'\n'+
'			<p style="padding: 0 0 5px; margin: 0; font-weight: bold; letter-spacing: 2px;">PENGATURAN:</p>'+'\n'+
'			<div class="checkbox">'+'\n'+
'				<label>'+'\n'+
'					<input type="checkbox" id="toggle_note_inv" checked> Invoice Note'+'\n'+
'				</label>'+'\n'+
'			</div>'+'\n'+
'			<div class="checkbox">'+'\n'+
'				<label>'+'\n'+
'					<input type="checkbox" id="toggle_sku_inv"> SKU'+'\n'+
'				</label>'+'\n'+
'			</div>'+'\n'+
''+'\n'+
'			<div class="checkbox">'+'\n'+
'				<label>'+'\n'+
'					<input type="checkbox" id="toggle_no_rekening"> No Rekening'+'\n'+
'				</label>'+'\n'+
'			</div>'+'\n'+
'		</div>'+'\n'+
''+'\n'+
'		<div class="checkbox-outer-invoice-v2">'+'\n'+
'			<p style="padding: 0 0 5px; margin: 0; font-weight: bold; letter-spacing: 2px;">PENGATURAN:</p>'+'\n'+
'			<div class="checkbox">'+'\n'+
'				<label>'+'\n'+
'					<input type="checkbox" id="toggle_note_inv" checked> Invoice Note'+'\n'+
'				</label>'+'\n'+
'			</div>'+'\n'+
'			<div class="checkbox">'+'\n'+
'				<label>'+'\n'+
'					<input type="checkbox" id="toggle_nama_toko" checked> Nama toko'+'\n'+
'				</label>'+'\n'+
'			</div>'+'\n'+
'			<div class="checkbox">'+'\n'+
'				<label>'+'\n'+
'					<input type="checkbox" id="toggle_keterangan" checked> Keterangan toko'+'\n'+
'				</label>'+'\n'+
'			</div>'+'\n'+
'			<div class="checkbox">'+'\n'+
'				<label>'+'\n'+
'					<input type="checkbox" id="toggle_alamat_toko"> Alamat toko'+'\n'+
'				</label>'+'\n'+
'			</div>'+'\n'+
'			<div class="checkbox">'+'\n'+
'				<label>'+'\n'+
'					<input type="checkbox" id="toggle_sku_inv"> SKU'+'\n'+
'				</label>'+'\n'+
'			</div>'+'\n'+
'			<div class="checkbox">'+'\n'+
'				<label>'+'\n'+
'					<input type="checkbox" id="toggle_no_rekening"> No Rekening'+'\n'+
'				</label>'+'\n'+
'			</div>'+'\n'+
'			<div class="checkbox">'+'\n'+
'				<label>'+'\n'+
'					<input type="checkbox" id="toggle_invoice_detail"> Detail invoice'+'\n'+
'				</label>'+'\n'+
'			</div>'+'\n'+
'			<div class="checkbox">'+'\n'+
'				<label>'+'\n'+
'					<input type="checkbox" id="toggle_alamat_pengiriman"> Alamat pengiriman'+'\n'+
'				</label>'+'\n'+
'			</div>'+'\n'+
'			<div class="checkbox">'+'\n'+
'				<label>'+'\n'+
'					<input type="checkbox" id="toggle_kurir"> Kurir'+'\n'+
'				</label>'+'\n'+
'			</div>'+'\n'+
''+'\n'+
'			<div class="checkbox">'+'\n'+
'				<label>'+'\n'+
'					<input type="checkbox" id="toggle_input_time"> Input Time'+'\n'+
'				</label>'+'\n'+
'			</div>'+'\n'+
'		</div>'+'\n'+
''+'\n'+
'	</div>'+'\n'+
'	<div class="block-right">'+'\n'+
'		<button class="btn btn-blue btn-print"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#fff" viewBox="0 0 485.212 485.212"><path d="M151.636 363.906h151.618v30.33H151.636zm-30.324-333.58h242.595v60.65h30.32v-60.65C394.23 13.596 380.667 0 363.907 0H121.313c-16.748 0-30.327 13.595-30.327 30.327v60.65h30.327v-60.65zm30.324 272.93h181.94v30.328h-181.94z"/><path d="M454.882 121.304H30.334c-16.748 0-30.327 13.59-30.327 30.324v181.956c0 16.76 13.58 30.32 30.327 30.32h60.65v90.98c0 16.765 13.58 30.327 30.328 30.327h242.595c16.76 0 30.32-13.56 30.32-30.323v-90.98h60.654c16.76 0 30.325-13.562 30.325-30.32v-181.96c0-16.732-13.56-30.323-30.32-30.323zm-90.975 333.582H121.312V272.93h242.595v181.956zm60.644-242.604c-16.76 0-30.32-13.564-30.32-30.327 0-16.73 13.56-30.327 30.32-30.327 16.768 0 30.334 13.595 30.334 30.327 0 16.762-13.567 30.327-30.33 30.327z"/></svg> Print</button>'+'\n'+
'	</div>'+'\n'+
'</div>'+'\n'+
'<div id="printable" class=\'print-theme\'>'+'\n'+
invoicePrint+
'</div>'+'\n'+

'<script type="text/javascript" src="https://app.ngorder.id/assets/js/jquery-1.11.3.min.js"></script>'+'\n'+
'     '+'\n'+
'<script>'+'\n'+
'	$(function () {'+'\n'+
'		'+'\n'+
'		// $(\'input:radio[name="print"]\').click(function(){'+'\n'+
'		//     if($(this).val() == \'print-invoice-v2\'){'+'\n'+
'		//        $(\'.print-theme\').attr(\'id\', \'printable-thermal\');'+'\n'+
'		//     } else {'+'\n'+
'		//     	 $(\'.print-theme\').attr(\'id\', \'printable\');'+'\n'+
'		//     }'+'\n'+
'		// });'+'\n'+
''+'\n'+
'		$(\'.btn-print\').on(\'click\', function(){'+'\n'+
'			printPage();'+'\n'+
'		});'+'\n'+
''+'\n'+
'		// p = print, co = checkbox-outer='+'\n'+
'		var pLabel      = $(\'.printLabel\');'+'\n'+
'		var coLabel     = $(\'.checkbox-outer-label\');'+'\n'+
'		var pLabelV2    = $(\'.printLabelV2\');'+'\n'+
'		var coLabelV2   = $(\'.checkbox-outer-label-v2\');'+'\n'+
'		var pInvoice    = $(\'.printInvoice\');'+'\n'+
'		var coInvoice   = $(\'.checkbox-outer-invoice\');'+'\n'+
'		var pInvoiceV2  = $(\'.printInvoice-v2\');'+'\n'+
'		var coInvoiceV2 = $(\'.checkbox-outer-invoice-v2\');'+'\n'+
''+'\n'+
'		var printable = $(\'#printable\');'+'\n'+
''+'\n'+
'		coLabelV2.add(coInvoice).add(coInvoiceV2).hide();'+'\n'+
'		$(\'.awb, .no_rekening, .invoice_detail, .alamat_pengiriman, .kurir, .alamat_toko, .input_time\').hide();'+'\n'+
''+'\n'+
'		$(\'input:radio[name=print]\').change(function() {'+'\n'+
'			if (this.value == \'print-label\') {'+'\n'+
'				hidePrintable();'+'\n'+
'				pLabel.add(coLabel).show();'+'\n'+
'				printable.removeClass(\'column\').removeClass(\'d-flex\');'+'\n'+
'			}'+'\n'+
'			else if(this.value == \'print-label-v2\'){'+'\n'+
'				hidePrintable();'+'\n'+
'				pLabelV2.add(coLabelV2).show();'+'\n'+
'				printable.addClass(\'column\').removeClass(\'d-flex\');'+'\n'+
'			}'+'\n'+
'			else if (this.value == \'print-invoice\') {'+'\n'+
'				hidePrintable();'+'\n'+
'				pInvoice.add(coInvoice).show();'+'\n'+
'				printable.removeClass(\'column\').removeClass(\'d-flex\');'+'\n'+
'			}'+'\n'+
'			else if (this.value == \'print-invoice-v2\') {'+'\n'+
'				hidePrintable();'+'\n'+
'				pInvoiceV2.add(coInvoiceV2).show();'+'\n'+
'				printable.addClass(\'d-flex\').removeClass(\'column\');'+'\n'+
'			}'+'\n'+
'		});'+'\n'+
''+'\n'+
'		function hidePrintable(){'+'\n'+
'			pLabel.add(coLabel).hide();'+'\n'+
'			pLabelV2.add(coLabelV2).hide();'+'\n'+
'			pInvoice.add(coInvoice).hide();'+'\n'+
'			pInvoiceV2.add(coInvoiceV2).hide();'+'\n'+
'		}'+'\n'+
'		var showHide = {'+'\n'+
'			\'input#toggle_fragile\' 				: \'.fragile\','+'\n'+
'			\'input#toggle_order\' 				: \'.orderdetail\','+'\n'+
'			\'input#toggle_expedisi\' 			: \'.expedisi\','+'\n'+
'			\'input#toggle_qrcode\' 				: \'.qrcode\','+'\n'+
'			\'input#toggle_shop_info\' 			: \'.shop-info\','+'\n'+
'			\'input#toggle_po\' 					: \'.po-number\','+'\n'+
'			\'input#toggle_no_resi\' 				: \'.awb\','+'\n'+
'			\'input#toggle_tgl_order\' 			: \'.tgl_order\','+'\n'+
'			\'input#toggle_note_inv\' 			: \'.note-inv\','+'\n'+
'			\'input#toggle_sku_inv\' 				: \'.sku-inv\','+'\n'+
'			\'input#toggle_no_rekening\' 			: \'.no_rekening\','+'\n'+
'			\'input#toggle_po_v2\' 				: \'.po-number-v2\','+'\n'+
'			\'input#toggle_tgl_order_v2\' 		: \'.tgl_order_v2\','+'\n'+
'			\'input#toggle_order_v2\' 			: \'.orderdetail_v2\','+'\n'+
'			\'input#toggle_invoice_detail\' 		: \'.invoice_detail\','+'\n'+
'			\'input#toggle_alamat_pengiriman\' 	: \'.alamat_pengiriman\','+'\n'+
'			\'input#toggle_nama_toko\' 			: \'.nama_toko\','+'\n'+
'			\'input#toggle_alamat_toko\' 			: \'.alamat_toko\','+'\n'+
'			\'input#toggle_keterangan\' 			: \'.keterangan\','+'\n'+
'			\'input#toggle_kurir\' 				: \'.kurir\','+'\n'+
'			\'input#toggle_input_time\' 			: \'.input_time\','+'\n'+
'		};'+'\n'+
''+'\n'+
'		$.each(showHide, function(index, val) {'+'\n'+
'			$(index).change(function() {'+'\n'+
'				var dom = $(val);'+'\n'+
'				if ($(this).is(\':checked\')) dom.show();'+'\n'+
'				else dom.hide();'+'\n'+
''+'\n'+
'				// spesial case for input time in invoice thermal'+'\n'+
'				if($(\'input#toggle_input_time\').is(\':checked\')) $(\'.status_paid\').hide(); '+'\n'+
'				else $(\'.status_paid\').show();'+'\n'+
'			});'+'\n'+
'		});'+'\n'+
''+'\n'+
'	});'+'\n'+
''+'\n'+
'	function printPage()'+'\n'+
'	{'+'\n'+
'		var SITE = window.location.protocol + \'//\' + location.hostname + \':\' + window.location.port+\'/\' ;'+'\n'+
'		console.log(SITE);'+'\n'+
'		var data = "21293716";'+'\n'+
'		var data_fix = data.replace(/,/g,"p");'+'\n'+
'		// //function to call if you want to print'+'\n'+
'		var onPrintFinished=function(printed){'+'\n'+
'			$.post(SITE + \'index.php/order/printed/\' + data_fix,{},function(obj){'+'\n'+
'				console.log(\'succes\');'+'\n'+
'			 });'+'\n'+
'			console.log("print ..." + data_fix);'+'\n'+
'		}'+'\n'+
'		// //print command'+'\n'+
'		onPrintFinished(window.print());'+'\n'+
'	}'+'\n'+
'</script>';

return template;
}
