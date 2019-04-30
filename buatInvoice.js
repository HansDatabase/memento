function buatInvoice(id) {
var template =
'<link rel="stylesheet" href="https://app.ngorder.id/assets/css/style-print.css ">'+
'<link href="https://fonts.googleapis.com/css?family=Inconsolata" rel="stylesheet">'+
'<div id="non-printable">'+
'	<div class="block-left">'+
'		<button class="btn btn-blank" onClick="history.back()">← Back</button>'+
'	</div>'+
'	<div class="block-print">'+
'		<div class="radio-outer">'+
'			<p style="padding: 0 0 5px; margin: 0; font-weight: bold; letter-spacing: 2px;">CETAK:</p>'+
'			<input type="radio" name="print" id="print-label" value="print-label" checked="checked">'+
'			<label for="print-label">Shipping Label</label>'+
'			<br>'+
'			<input type="radio" name="print" id="print-label-v2" value="print-label-v2">'+
'			<label for="print-label-v2">Shipping Label (v2)</label>'+
'			<br>'+
'			<input type="radio" name="print" id="print-invoice" value="print-invoice">'+
'			<label for="print-invoice">Invoice</label>'+
'			<br>'+
'			<input type="radio" name="print" id="print-invoice-v2" value="print-invoice-v2">'+
'			<label for="print-invoice-v2">Invoice (Thermal 80mm)</label>'+
'		</div>'+
'	</div>'+
'	<div class="block-options">'+
'		<div class="checkbox-outer-label">'+
'			<p style="padding: 0 0 5px; margin: 0; font-weight: bold; letter-spacing: 2px;">PENGATURAN:</p>'+
''+
'			<div class="checkbox">'+
'				<label>'+
'					<input type="checkbox" id="toggle_order" checked> Detail Order'+
'				</label>'+
'			</div>'+
'			<div class="checkbox">'+
'				<label>'+
'					<input type="checkbox" id="toggle_fragile"> Fragile Sign'+
'				</label>'+
'			</div>'+
'			<div class="checkbox">'+
'				<label>'+
'					<input type="checkbox" id="toggle_logo" checked> Shop Logo'+
'				</label>'+
'			</div>'+
'			<div class="checkbox">'+
'				<label>'+
'					<input type="checkbox" id="toggle_shop_info" checked> Shop Info'+
'				</label>'+
'			</div>'+
'			<div class="checkbox">'+
'				<label>'+
'					<input type="checkbox" id="toggle_expedisi" checked> Expedisi'+
'				</label>'+
'			</div>'+
'			<div class="checkbox" style="display:none">'+
'				<label>'+
'					<input type="checkbox" id="toggle_qrcode"> QR Code'+
'				</label>'+
'			</div>'+
'			<div class="checkbox">'+
'				<label>'+
'					<input type="checkbox" id="toggle_po"> No. PO'+
'				</label>'+
'			</div>'+
'			<div class="checkbox">'+
'				<label>'+
'					<input type="checkbox" id="toggle_tgl_order"> Tanggal Order'+
'				</label>'+
'			</div>'+
'			<div class="checkbox">'+
'				<label>'+
'					<input type="checkbox" id="toggle_no_resi"> No Resi'+
'				</label>'+
'			</div>'+
'		</div>'+
''+
'		<div class="checkbox-outer-label-v2">'+
'			<p style="padding: 0 0 5px; margin: 0; font-weight: bold; letter-spacing: 2px;">PENGATURAN:</p>'+
'			<div class="checkbox">'+
'				<label>'+
'					<input type="checkbox" id="toggle_order_v2" checked> Detail Order'+
'				</label>'+
'			</div>'+
'			<div class="checkbox">'+
'				<label>'+
'					<input type="checkbox" id="toggle_po_v2"> No. PO'+
'				</label>'+
'			</div>'+
'			<div class="checkbox">'+
'				<label>'+
'					<input type="checkbox" id="toggle_tgl_order_v2"> Tanggal Order'+
'				</label>'+
'			</div>'+
'		</div>'+
''+
'		<div class="checkbox-outer-invoice">'+
'			<p style="padding: 0 0 5px; margin: 0; font-weight: bold; letter-spacing: 2px;">PENGATURAN:</p>'+
'			<div class="checkbox">'+
'				<label>'+
'					<input type="checkbox" id="toggle_note_inv" checked> Invoice Note'+
'				</label>'+
'			</div>'+
'			<div class="checkbox">'+
'				<label>'+
'					<input type="checkbox" id="toggle_sku_inv"> SKU'+
'				</label>'+
'			</div>'+
''+
'			<div class="checkbox">'+
'				<label>'+
'					<input type="checkbox" id="toggle_no_rekening"> No Rekening'+
'				</label>'+
'			</div>'+
'		</div>'+
''+
'		<div class="checkbox-outer-invoice-v2">'+
'			<p style="padding: 0 0 5px; margin: 0; font-weight: bold; letter-spacing: 2px;">PENGATURAN:</p>'+
'			<div class="checkbox">'+
'				<label>'+
'					<input type="checkbox" id="toggle_note_inv" checked> Invoice Note'+
'				</label>'+
'			</div>'+
'			<div class="checkbox">'+
'				<label>'+
'					<input type="checkbox" id="toggle_nama_toko" checked> Nama toko'+
'				</label>'+
'			</div>'+
'			<div class="checkbox">'+
'				<label>'+
'					<input type="checkbox" id="toggle_keterangan" checked> Keterangan toko'+
'				</label>'+
'			</div>'+
'			<div class="checkbox">'+
'				<label>'+
'					<input type="checkbox" id="toggle_alamat_toko"> Alamat toko'+
'				</label>'+
'			</div>'+
'			<div class="checkbox">'+
'				<label>'+
'					<input type="checkbox" id="toggle_sku_inv"> SKU'+
'				</label>'+
'			</div>'+
'			<div class="checkbox">'+
'				<label>'+
'					<input type="checkbox" id="toggle_no_rekening"> No Rekening'+
'				</label>'+
'			</div>'+
'			<div class="checkbox">'+
'				<label>'+
'					<input type="checkbox" id="toggle_invoice_detail"> Detail invoice'+
'				</label>'+
'			</div>'+
'			<div class="checkbox">'+
'				<label>'+
'					<input type="checkbox" id="toggle_alamat_pengiriman"> Alamat pengiriman'+
'				</label>'+
'			</div>'+
'			<div class="checkbox">'+
'				<label>'+
'					<input type="checkbox" id="toggle_kurir"> Kurir'+
'				</label>'+
'			</div>'+
''+
'			<div class="checkbox">'+
'				<label>'+
'					<input type="checkbox" id="toggle_input_time"> Input Time'+
'				</label>'+
'			</div>'+
'		</div>'+
''+
'	</div>'+
'	<div class="block-right">'+
'		<button class="btn btn-blue btn-print"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#fff" viewBox="0 0 485.212 485.212"><path d="M151.636 363.906h151.618v30.33H151.636zm-30.324-333.58h242.595v60.65h30.32v-60.65C394.23 13.596 380.667 0 363.907 0H121.313c-16.748 0-30.327 13.595-30.327 30.327v60.65h30.327v-60.65zm30.324 272.93h181.94v30.328h-181.94z"/><path d="M454.882 121.304H30.334c-16.748 0-30.327 13.59-30.327 30.324v181.956c0 16.76 13.58 30.32 30.327 30.32h60.65v90.98c0 16.765 13.58 30.327 30.328 30.327h242.595c16.76 0 30.32-13.56 30.32-30.323v-90.98h60.654c16.76 0 30.325-13.562 30.325-30.32v-181.96c0-16.732-13.56-30.323-30.32-30.323zm-90.975 333.582H121.312V272.93h242.595v181.956zm60.644-242.604c-16.76 0-30.32-13.564-30.32-30.327 0-16.73 13.56-30.327 30.32-30.327 16.768 0 30.334 13.595 30.334 30.327 0 16.762-13.567 30.327-30.33 30.327z"/></svg> Print</button>'+
'	</div>'+
'</div>'+
''+
'<div id="printable" class=\'print-theme\'>'+
'	<table width="100%" border="0" cellspacing="0" class="print-data printLabel" id="1">'+
'	<tr>'+
'				<td width="20%" rowspan="3" style="" class="text-center shop-logo">'+
'			<img class="img-logo" src="" width="120">'+
'			<div class="shop-info">'+
'				<h4 style="margin:10px 0 5px;">NABIILAHSTORE</h4>'+
'				<p>Distributor baju muslim </p>'+
'			</div>'+
'			'+
'		</td>'+
'		'+
'		<td class="plabel" valign="bottom">'+
'			<h4 class="po-number" style="display:none;font-size: 1.15rem; margin-bottom: 7px;">PO#'+id+'</h4>'+
'			Kepada:'+
'		</td>'+
'		<td class="plabel orderdetail" valign="bottom">'+
'			Order <span class="tgl_order" style="display:none;">(1 April 2019)'+
'		</td>'+
'		<td class="fragile" width="30%" rowspan="4">'+
'			<img class="img-fragile" src="https://app.ngorder.id/assets/img/fragile.png " alt="">'+
'			<h2>FRAGILE</h2>'+
'			<p>JANGAN DIBANTING!!!</p>'+
'		</td>'+
'	</tr>'+
''+
'	<tr>'+
'		<td width="40%" valign="top">'+
'			<p class="receiver-name ls-1"> Titin Wuryanti</p>'+
'			<p class="address">Perum Taman Lembusura permai blok VII no 1, Br Poh Gading, Ubung kaja, Denpasar Bali<br>'+
'				Kec. Denpasar Timur,  Kota Denpasar,  <br>'+
'				Provinsi Bali <br>'+
'				Telp: 0818558385</p>'+
'		</td>'+
'		<td style="font-size: 12px;" width="30%" valign="top" class="orderdetail">'+
''+
'			<ul class="product-list">'+
'									'+
'					<li>	'+
'					'+
'						<span class="left">'+
'						RESTA OVERALL  </span>'+
'						<span class="right">x 1</span>'+
'					</li>'+
''+
'									'+
'					<li>	'+
'					'+
'						<span class="left">'+
'						CALYSTA MAXY  MAROON</span>'+
'						<span class="right">x 1</span>'+
'					</li>'+
''+
'							</ul>'+
'		</td>'+
''+
'	</tr>'+
''+
'	<tr>'+
'		<td>'+
'			<p class="plabel">Pengirim: </p>'+
'			<p class="sender" >'+
'				NabiilahStore<br>082242783494			</p>'+
'		</td>'+
'		<td>'+
'			<p><strong>NOTE: </strong>A</p>'+
'		 				 	<div class="expedisi">'+
'			 		WAHANA-Normal Service			 		(0.75 Kg)'+
''+
'			 					 	</div>'+
''+
'			 	<div class="expedisi awb">'+
'			 		NO RESI : 			 	</div>'+
'		 	'+
'		 		 	</td>'+
''+
'	</tr>'+
'</table>'+
'<table width="100%" border="0" cellspacing="0" class="print-data printInvoice" font-size="12px;" style="display: none;" id="1">'+
'	<tr style="margin: 0;padding: 20px;">'+
'			<td style="margin: 0;" width="10%">'+
'			<img class="img-logo" src="" style="width: 64px;">'+
'		</td>'+
'		<td colspan="3" style="margin: 0;vertical-align: top;">'+
'			<h3 style="padding:0; margin: 0.5em 0 0;">NABIILAHSTORE</h3>'+
'			<p>Distributor baju muslim </p>'+
''+
'		</td>'+
'				<td colspan="2" style="margin: 0;vertical-align: top;">'+
'			<h5 style="padding:0; margin:0.5em 0;">'+
'				<strong>Tanggal:</strong>'+
'				<span style="clear:both;display:block;font-weight: normal;">1 April 2019</span>'+
'			</h5>'+
'			<h5 style="padding:0; margin:0.5em 0;">'+
'				<strong>Nomor Invoice:</strong>'+
'				<span style="clear:both;display:block;font-weight: normal;">INV.2019.04.01.13354</span>'+
'			</h5>'+
''+
'		</td>'+
'	</tr>'+
''+
'	<tr style="margin: 0; padding: 20px;">'+
'		<td colspan="4">'+
'			<p style="line-height: 1em;margin: 0;padding: 20px 0 0;"><strong>Kepada <span style="text-transform: capitalize;">Titin Wuryanti</span></strong></p>'+
'			<p style="font-size: 12px;line-height: 2em;">Terima kasih telah berbelanja di '+
'			NabiilahStore. Berikut adalah rincian orderan Anda:</p>'+
'		</td>'+
'		'+
'		<td colspan="2" style="font-size: 0.85rem;">'+
'							<strong><span style="color: #00C853;">PAID</span> (1 April 2019)</strong>'+
'						'+
'		</td>'+
'	'+
'	</tr>'+
'	<tr>'+
'		<td colspan="2" style="padding: 10px 20px; width: 45%;">Nama Produk</td>'+
'		<td style="padding: 10px 20px; width: 10%;">Jumlah</td>'+
'		<td style="padding: 10px 20px; width: 15%;">Berat</td>'+
'		<td style="padding: 10px 20px; width: 15%;">Harga</td>'+
'		<td style="padding: 10px 20px; width: 15%;">Subtotal</td>'+
'	</tr>'+
''+
''+
'			<tr style="line-height: 1.25em;font-size: 12px; vertical-align: middle;">'+
'			<td colspan="2">'+
'				 RESTA OVERALL  <span class="sku-inv" style="float:right; display: none;">P154451V01</span>			</td>'+
'			<td>'+
'				1			</td>'+
'			<td>'+
'				0.35 Kg			</td>'+
'			<td>Rp100.000</td>'+
'			<td>'+
'				Rp100.000			</td>'+
'		</tr>'+
'			<tr style="line-height: 1.25em;font-size: 12px; vertical-align: middle;">'+
'			<td colspan="2">'+
'				 CALYSTA MAXY  MAROON<span class="sku-inv" style="float:right; display: none;">P154774V01</span>			</td>'+
'			<td>'+
'				1			</td>'+
'			<td>'+
'				0.4 Kg			</td>'+
'			<td>Rp130.000</td>'+
'			<td>'+
'				Rp130.000			</td>'+
'		</tr>'+
'	'+
'	<tr style="line-height: 1.25em;font-size: 12px;">'+
'		<td colspan="2">'+
'			<strong>'+
''+
'				WAHANA-Normal Service			</strong>'+
'		</td>'+
'		<td></td>'+
'		<td>0.75 Kg</td>'+
'		<td>Rp10.000</td>'+
'		<td>Rp10.000</td>'+
'	</tr>'+
''+
'	<tr style="line-height: 1.25em;font-size: 12px;">'+
'		<td colspan="5">Diskon</td>'+
'		<td>Rp0</td>'+
'	</tr>'+
''+
'	<tr style="line-height: 1.25em;font-size: 12px;">'+
'		<td colspan="5">Asuransi</td>'+
'		<td>Rp0</td>'+
'	</tr>'+
''+
'	<tr style="line-height: 1.25em;font-size: 12px;">'+
'		<td colspan="5">Biaya Tambahan </td>'+
'		<td>Rp0</td>'+
'	</tr>'+
''+
'	<tr style="line-height: 2em;font-size: 12px;">'+
'		<td colspan="5"><span style="font-weight: 700; font-size: 1rem;">TOTAL</span></td>'+
'		<td><span style="font-weight: 700; font-size: 1rem;">Rp240.000</span></td>'+
'	</tr>'+
''+
'	<tr>'+
'		<td colspan="6">'+
'			<hr style="border-color: #ddd; border-style: dotted;">'+
'		</td>'+
'	</tr>'+
'				'+
'			<tr>'+
'			<td style="vertical-align: top;margin: 0;padding: 10px 0;">'+
'				<p style="line-height: 1em;margin: 0;padding: 0 0 0 20px;font-size:12px;">Note:</p>'+
'			</td>'+
'			<td colspan="4">'+
'				<p  class="note-inv" style="font-size: 12px;line-height: 1.25em;margin:0;padding: 10px 0;">'+
'					A				</p>'+
'			</td>'+
'		</tr>'+
'		'+
'	<tr class="no_rekening">'+
'		<td style="vertical-align: top;margin: 0;padding: 10px 0;">'+
'			<p style="line-height: 1em;margin: 0;padding: 0 0 0 20px;font-size:12px;">Rekening Pembayaran</p>'+
'		</td>'+
'		<td colspan="5">'+
'			<div class="row">'+
'				<div class="col-md-4">'+
'									<p style="font-size: 12px;line-height: 1.25em;margin:0;padding: 10px 0;">'+
'					<span style="font-weight: bold; font-size:16px; text-transform: capitalize;">BCA</span><br>'+
'					No Rekening 123456789<br>'+
'					A.n. riza					'+
'					</p>'+
'									<p style="font-size: 12px;line-height: 1.25em;margin:0;padding: 10px 0;">'+
'					<span style="font-weight: bold; font-size:16px; text-transform: capitalize;">BNI</span><br>'+
'					No Rekening 0455117331<br>'+
'					A.n. riza luqmanul hakim					'+
'					</p>'+
'									<p style="font-size: 12px;line-height: 1.25em;margin:0;padding: 10px 0;">'+
'					<span style="font-weight: bold; font-size:16px; text-transform: capitalize;">BRI</span><br>'+
'					No Rekening 685901008862530<br>'+
'					A.n. riza luqmanul hakim					'+
'					</p>'+
'									<p style="font-size: 12px;line-height: 1.25em;margin:0;padding: 10px 0;">'+
'					<span style="font-weight: bold; font-size:16px; text-transform: capitalize;">Mandiri</span><br>'+
'					No Rekening 9000019069310<br>'+
'					A.n. riza luqmanul hakim					'+
'					</p>'+
'								</div>'+
'			</div>'+
'		</td>'+
'		'+
'	</tr>'+
''+
'	<tr>'+
'		<td style="vertical-align: top;margin: 0;padding: 10px 0;">'+
'			<p style="line-height: 1em;margin: 0;padding: 0 0 0 20px;font-size:12px;">Alamat Pengiriman:</p>'+
'		</td>'+
'		<td colspan="5">'+
'			<p style="font-size: 12px;line-height: 1.25em;margin:0;padding: 10px 0;">'+
'				<span style="font-weight: bold; font-size:16px; text-transform: capitalize;">Titin Wuryanti</span><br>'+
'				Perum Taman Lembusura permai blok VII no 1, Br Poh Gading, Ubung kaja, Denpasar Bali '+
'				Kec. Denpasar Timur,  Kota Denpasar,  '+
'				Prov. Bali <br>'+
'				Telp: 0818558385			</p>'+
''+
'		</td>'+
'		'+
'	</tr>'+
'</table><table width="100%" border="0" cellspacing="0" class="print-data printLabelV2" style="display: none; font-size: .775rem;" id="1">'+
'	<tr>'+
'		<td class="py bb-1 to">'+
'			<strong>FROM:</strong>'+
'		</td>'+
''+
'		<td class="py bb-1" style="vertical-align: top;">'+
'			NabiilahStore (082242783494)		</td>'+
''+
'		<td class="bb-1 exp">'+
'					 		<strong>WAHANA-Normal Service</strong>		 	 <br>'+
'		 	(0.75 kg)'+
'		</td>'+
''+
'			</tr>'+
'	<tr>'+
'		<td class="py bb-1 to">'+
'			<p class="lead pb-025">TO:</p>'+
'		</td>'+
'		<td class="py bb-1" colspan="2">'+
'			<span class="ttu ls-1"><strong>Titin Wuryanti</strong></span> <br>'+
'			Perum Taman Lembusura permai blok VII no 1, Br Poh Gading, Ubung kaja, Denpasar Bali<br>'+
'			Kec. Denpasar Timur,  Kota Denpasar,  <br>'+
'			Provinsi Bali <br>'+
'			Telp: 0818558385		</td>'+
'	</tr>'+
'	<tr class="orderdetail_v2">'+
'		<td class="py" colspan="3">'+
'			<p class="pb-025"><strong>ORDER <span class="po-number-v2" style="display:none;">PO#13354</span> <span class="tgl_order_v2" style="display:none;">(Senin, 1 Apr 2019)</strong></p>'+
'			<ul class="product-list" style="margin-bottom: 26px;">'+
'								<li>'+
'					<span class="left">'+
'					RESTA OVERALL  </span>'+
'					<span class="right">1 Item</span>'+
'				</li>'+
'								<li>'+
'					<span class="left">'+
'					CALYSTA MAXY  MAROON</span>'+
'					<span class="right">1 Item</span>'+
'				</li>'+
'							</ul>'+
'		</td>'+
'	</tr>'+
'			<tr class="note_v2">'+
'			<td class="py" colspan="3">'+
'				<p class="p-0"><strong>NOTE: </strong>A</p>			</td>'+
'		</tr>'+
'	</table>'+
''+
'<table cellspacing="0" class="print-data printInvoice-v2" font-size="12px;" style="display: none;" id="1">'+
'	<tr>'+
'					<td colspan="6" class="text-center">'+
'				<h3 class="text-logo nama_toko">NABIILAHSTORE</h3>'+
'				<p class="keterangan">Distributor baju muslim </p>'+
'				<p class="alamat_toko mb-0"> </p>'+
'			</td>'+
'			</tr>'+
''+
'	<tr class="alamat_toko">'+
'		<td colspan="6">'+
'			<hr>'+
'		</td>'+
'	</tr>'+
'	'+
'	<tr class="mb-3">'+
'		<td class="text-left" colspan="3">'+
'			<span class="status_paid">Status: PAID <br>(01 April 2019)</span>	'+
'			 '+
'			<span class="input_time">01 Apr 2019 12:43:27</span>'+
'		</td>'+
'		<td class="text-right" colspan="3">'+
'			<p class="pb-0">'+
'				To:<span>Titin Wuryanti</span>'+
'			</p>'+
'		</td>'+
'	</tr>'+
''+
'	<tr>'+
'		<td colspan="6">'+
'			<hr>'+
'		</td>'+
'	</tr>'+
''+
'	<tr class="invoice_detail">'+
'		<td colspan="3">'+
'			<span>1 April 2019</span>'+
'		</td>'+
'		<td class="text-right" colspan="3">'+
'			<span>INV.2019.04.01.13354</span>'+
'		</td>'+
'	</tr>'+
''+
'	<tr class="invoice_detail">'+
'		<td colspan="6">'+
'			<hr>'+
'		</td>'+
'	</tr>'+
''+
'	<tr>'+
'		<td colspan="2">Nama Produk</td>'+
'		<td class="text-center" style="width: 5mm">Qty</td>'+
'		<td style="width: 10mm">Berat</td>'+
'		<td>Harga</td>'+
'		<td class="text-right">Subtotal</td>'+
'	</tr>'+
''+
'	<tr>'+
'		<td colspan="6">'+
'			<hr>'+
'		</td>'+
'	</tr>'+
''+
'			<tr class="item-detail">'+
'			<td colspan="2">'+
'				 <span>RESTA OVERALL  </span><span class="sku-inv" style="display: none;"> P154451V01</span>			</td>'+
'			<td class="text-center">'+
'				1			</td>'+
'			<td>'+
'				0.35 Kg			</td>'+
'			<td class="text-right">'+
'				100,000			</td>'+
'			<td class="text-right" colspan="3">'+
'				100,000			</td>'+
'		</tr>'+
'			<tr class="item-detail">'+
'			<td colspan="2">'+
'				 <span>CALYSTA MAXY  MAROON</span><span class="sku-inv" style="display: none;"> P154774V01</span>			</td>'+
'			<td class="text-center">'+
'				1			</td>'+
'			<td>'+
'				0.4 Kg			</td>'+
'			<td class="text-right">'+
'				130,000			</td>'+
'			<td class="text-right" colspan="3">'+
'				130,000			</td>'+
'		</tr>'+
'	'+
'	<tr class="item-detail">'+
'		<td colspan="2">'+
'			WAHANA-Normal Service		</td>'+
'		<td class="text-center">1</td>'+
'		<td>0.75 Kg</td>'+
'		<td class="text-right">10,000</td>'+
'		<td class="text-right" colspan="3">10,000</td>'+
'	</tr>'+
''+
'	<tr>'+
'		<td colspan="6">'+
'			<hr>'+
'		</td>'+
'	</tr>'+
''+
'	<tr>'+
'		<td colspan="5">Diskon</td>'+
'		<td class="text-right">0</td>'+
'	</tr>'+
''+
'	<tr>'+
'		<td colspan="5">Asuransi</td>'+
'		<td class="text-right">0</td>'+
'	</tr>'+
''+
'	<tr>'+
'		<td colspan="5">Biaya Tambahan </td>'+
'		<td class="text-right">0</td>'+
'	</tr>'+
'	'+
'	<tr>'+
'		<td colspan="6">'+
'			<hr>'+
'		</td>'+
'	</tr>'+
''+
'	<tr>'+
'		<td colspan="5">'+
'			<span>TOTAL</span>'+
'		</td>'+
'		<td class="text-right">'+
'			<span>240,000</span>'+
'		</td>'+
'	</tr>'+
'				'+
'			<tr class="note-inv">'+
'			<td colspan="6">'+
'				<hr>'+
'			</td>'+
'		</tr>'+
'		<tr class="note-inv">'+
'			<td colspan="6">'+
'				<p>Note:</p>'+
'			</td>'+
'		</tr>'+
'		<tr class="note-inv">'+
'			<td colspan="6">'+
'				<p>'+
'					A				</p>'+
'			</td>'+
'		</tr>'+
'		'+
'	<tr class="no_rekening">'+
'		<td colspan="6">'+
'			<hr>'+
'		</td>'+
'	</tr>'+
'	<tr class="no_rekening">'+
'		<td colspan="6">'+
'			<p>Rekening Pembayaran</p>'+
'		</td>'+
'	</tr>'+
'	<tr class="no_rekening">'+
'		<td colspan="6">'+
'			<div class="row">'+
'				<div class="col-md-4">'+
'									<p>'+
'					<span>BCA</span><br>'+
'					No Rekening 123456789<br>'+
'					A.n. riza					'+
'					</p>'+
'									<p>'+
'					<span>BNI</span><br>'+
'					No Rekening 0455117331<br>'+
'					A.n. riza luqmanul hakim					'+
'					</p>'+
'									<p>'+
'					<span>BRI</span><br>'+
'					No Rekening 685901008862530<br>'+
'					A.n. riza luqmanul hakim					'+
'					</p>'+
'									<p>'+
'					<span>Mandiri</span><br>'+
'					No Rekening 9000019069310<br>'+
'					A.n. riza luqmanul hakim					'+
'					</p>'+
'								</div>'+
'			</div>'+
'		</td>'+
'	</tr>'+
''+
'	<tr class="alamat_pengiriman">'+
'		<td colspan="6">'+
'			<hr>'+
'		</td>'+
'	</tr>'+
'	<tr class="alamat_pengiriman">'+
'		<td colspan="6" class="mt-2">'+
'			<span>Alamat Pengiriman:</span>'+
'		</td>'+
'	</tr>'+
'	<tr class="alamat_pengiriman">'+
'		<td colspan="6">'+
'			<p>'+
'				Perum Taman Lembusura permai blok VII no 1, Br Poh Gading, Ubung kaja, Denpasar Bali '+
'				Kec. Denpasar Timur,  Kota Denpasar,  '+
'				Prov. Bali				<br>'+
'				Telp: 0818558385				<br>'+
'				<span class="kurir">Kurir: WAHANA-Normal Service</span>'+
'			</p>'+
''+
'		</td>'+
'	</tr>'+
'	<tr>'+
'		<td class="text-center" colspan="6">'+
'			<span class="text-center" style="display: block; padding-top: 1.5rem;">Terima kasih</span>'+
'			<br>'+
'			<span>'+
'				telah berbelanja di '+
'				NabiilahStore			</span>'+
'		</td>'+
'	</tr>'+
'</table></div>'+
''+
'<script type="text/javascript" src="https://app.ngorder.id/assets/js/jquery-1.11.3.min.js"></script>'+
'     '+
'<script>'+
'	$(function () {'+
'		'+
'		// $(\'input:radio[name="print"]\').click(function(){'+
'		//     if($(this).val() == \'print-invoice-v2\'){'+
'		//        $(\'.print-theme\').attr(\'id\', \'printable-thermal\');'+
'		//     } else {'+
'		//     	 $(\'.print-theme\').attr(\'id\', \'printable\');'+
'		//     }'+
'		// });'+
''+
'		$(\'.btn-print\').on(\'click\', function(){'+
'			printPage();'+
'		});'+
''+
'		// p = print, co = checkbox-outer='+
'		var pLabel      = $(\'.printLabel\');'+
'		var coLabel     = $(\'.checkbox-outer-label\');'+
'		var pLabelV2    = $(\'.printLabelV2\');'+
'		var coLabelV2   = $(\'.checkbox-outer-label-v2\');'+
'		var pInvoice    = $(\'.printInvoice\');'+
'		var coInvoice   = $(\'.checkbox-outer-invoice\');'+
'		var pInvoiceV2  = $(\'.printInvoice-v2\');'+
'		var coInvoiceV2 = $(\'.checkbox-outer-invoice-v2\');'+
''+
'		var printable = $(\'#printable\');'+
''+
'		coLabelV2.add(coInvoice).add(coInvoiceV2).hide();'+
'		$(\'.awb, .no_rekening, .invoice_detail, .alamat_pengiriman, .kurir, .alamat_toko, .input_time\').hide();'+
''+
'		$(\'input:radio[name=print]\').change(function() {'+
'			if (this.value == \'print-label\') {'+
'				hidePrintable();'+
'				pLabel.add(coLabel).show();'+
'				printable.removeClass(\'column\').removeClass(\'d-flex\');'+
'			}'+
'			else if(this.value == \'print-label-v2\'){'+
'				hidePrintable();'+
'				pLabelV2.add(coLabelV2).show();'+
'				printable.addClass(\'column\').removeClass(\'d-flex\');'+
'			}'+
'			else if (this.value == \'print-invoice\') {'+
'				hidePrintable();'+
'				pInvoice.add(coInvoice).show();'+
'				printable.removeClass(\'column\').removeClass(\'d-flex\');'+
'			}'+
'			else if (this.value == \'print-invoice-v2\') {'+
'				hidePrintable();'+
'				pInvoiceV2.add(coInvoiceV2).show();'+
'				printable.addClass(\'d-flex\').removeClass(\'column\');'+
'			}'+
'		});'+
''+
'		function hidePrintable(){'+
'			pLabel.add(coLabel).hide();'+
'			pLabelV2.add(coLabelV2).hide();'+
'			pInvoice.add(coInvoice).hide();'+
'			pInvoiceV2.add(coInvoiceV2).hide();'+
'		}'+
'		var showHide = {'+
'			\'input#toggle_fragile\' 				: \'.fragile\','+
'			\'input#toggle_order\' 				: \'.orderdetail\','+
'			\'input#toggle_logo\' 				: \'.shop-logo\','+
'			\'input#toggle_expedisi\' 			: \'.expedisi\','+
'			\'input#toggle_qrcode\' 				: \'.qrcode\','+
'			\'input#toggle_shop_info\' 			: \'.shop-info\','+
'			\'input#toggle_po\' 					: \'.po-number\','+
'			\'input#toggle_no_resi\' 				: \'.awb\','+
'			\'input#toggle_tgl_order\' 			: \'.tgl_order\','+
'			\'input#toggle_note_inv\' 			: \'.note-inv\','+
'			\'input#toggle_sku_inv\' 				: \'.sku-inv\','+
'			\'input#toggle_no_rekening\' 			: \'.no_rekening\','+
'			\'input#toggle_po_v2\' 				: \'.po-number-v2\','+
'			\'input#toggle_tgl_order_v2\' 		: \'.tgl_order_v2\','+
'			\'input#toggle_order_v2\' 			: \'.orderdetail_v2\','+
'			\'input#toggle_invoice_detail\' 		: \'.invoice_detail\','+
'			\'input#toggle_alamat_pengiriman\' 	: \'.alamat_pengiriman\','+
'			\'input#toggle_nama_toko\' 			: \'.nama_toko\','+
'			\'input#toggle_alamat_toko\' 			: \'.alamat_toko\','+
'			\'input#toggle_keterangan\' 			: \'.keterangan\','+
'			\'input#toggle_kurir\' 				: \'.kurir\','+
'			\'input#toggle_input_time\' 			: \'.input_time\','+
'		};'+
''+
'		$.each(showHide, function(index, val) {'+
'			$(index).change(function() {'+
'				var dom = $(val);'+
'				if ($(this).is(\':checked\')) dom.show();'+
'				else dom.hide();'+
''+
'				// spesial case for input time in invoice thermal'+
'				if($(\'input#toggle_input_time\').is(\':checked\')) $(\'.status_paid\').hide(); '+
'				else $(\'.status_paid\').show();'+
'			});'+
'		});'+
''+
'	});'+
''+
'	function printPage()'+
'	{'+
'		var SITE = window.location.protocol + \'//\' + location.hostname + \':\' + window.location.port+\'/\' ;'+
'		console.log(SITE);'+
'		var data = "21293716";'+
'		var data_fix = data.replace(/,/g,"p");'+
'		// //function to call if you want to print'+
'		var onPrintFinished=function(printed){'+
'			$.post(SITE + \'index.php/order/printed/\' + data_fix,{},function(obj){'+
'				console.log(\'succes\');'+
'			 });'+
'			console.log("print ..." + data_fix);'+
'		}'+
'		// //print command'+
'		onPrintFinished(window.print());'+
'	}'+
'</script>';

return template;
}
