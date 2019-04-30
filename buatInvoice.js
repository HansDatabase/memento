function buatInvoice(id) {
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
'					<input type="checkbox" id="toggle_logo" checked> Shop Logo'+'\n'+
'				</label>'+'\n'+
'			</div>'+'\n'+
'			<div class="checkbox">'+'\n'+
'				<label>'+'\n'+
'					<input type="checkbox" id="toggle_shop_info" checked> Shop Info'+'\n'+
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
'					<input type="checkbox" id="toggle_po"> No. PO'+'\n'+
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
''+'\n'+
'<div id="printable" class=\'print-theme\'>'+'\n'+
'	<table width="100%" border="0" cellspacing="0" class="print-data printLabel" id="1">'+'\n'+
'	<tr>'+'\n'+
'				<td width="20%" rowspan="3" style="" class="text-center shop-logo">'+'\n'+
'			<img class="img-logo" src="" width="120">'+'\n'+
'			<div class="shop-info">'+'\n'+
'				<h4 style="margin:10px 0 5px;">NABIILAHSTORE</h4>'+'\n'+
'				<p>Distributor baju muslim </p>'+'\n'+
'			</div>'+'\n'+
'			'+'\n'+
'		</td>'+'\n'+
'		'+'\n'+
'		<td class="plabel" valign="bottom">'+'\n'+
'			<h4 class="po-number" style="display:none;font-size: 1.15rem; margin-bottom: 7px;">PO#'+'\n'+id+'</h4>'+'\n'+
'			Kepada:'+'\n'+
'		</td>'+'\n'+
'		<td class="plabel orderdetail" valign="bottom">'+'\n'+
'			Order <span class="tgl_order" style="display:none;">(1 April 2019)'+'\n'+
'		</td>'+'\n'+
'		<td class="fragile" width="30%" rowspan="4">'+'\n'+
'			<img class="img-fragile" src="https://app.ngorder.id/assets/img/fragile.png " alt="">'+'\n'+
'			<h2>FRAGILE</h2>'+'\n'+
'			<p>JANGAN DIBANTING!!!</p>'+'\n'+
'		</td>'+'\n'+
'	</tr>'+'\n'+
''+'\n'+
'	<tr>'+'\n'+
'		<td width="40%" valign="top">'+'\n'+
'			<p class="receiver-name ls-1"> Titin Wuryanti</p>'+'\n'+
'			<p class="address">Perum Taman Lembusura permai blok VII no 1, Br Poh Gading, Ubung kaja, Denpasar Bali<br>'+'\n'+
'				Kec. Denpasar Timur,  Kota Denpasar,  <br>'+'\n'+
'				Provinsi Bali <br>'+'\n'+
'				Telp: 0818558385</p>'+'\n'+
'		</td>'+'\n'+
'		<td style="font-size: 12px;" width="30%" valign="top" class="orderdetail">'+'\n'+
''+'\n'+
'			<ul class="product-list">'+'\n'+
'									'+'\n'+
'					<li>	'+'\n'+
'					'+'\n'+
'						<span class="left">'+'\n'+
'						RESTA OVERALL  </span>'+'\n'+
'						<span class="right">x 1</span>'+'\n'+
'					</li>'+'\n'+
''+'\n'+
'									'+'\n'+
'					<li>	'+'\n'+
'					'+'\n'+
'						<span class="left">'+'\n'+
'						CALYSTA MAXY  MAROON</span>'+'\n'+
'						<span class="right">x 1</span>'+'\n'+
'					</li>'+'\n'+
''+'\n'+
'							</ul>'+'\n'+
'		</td>'+'\n'+
''+'\n'+
'	</tr>'+'\n'+
''+'\n'+
'	<tr>'+'\n'+
'		<td>'+'\n'+
'			<p class="plabel">Pengirim: </p>'+'\n'+
'			<p class="sender" >'+'\n'+
'				NabiilahStore<br>082242783494			</p>'+'\n'+
'		</td>'+'\n'+
'		<td>'+'\n'+
'			<p><strong>NOTE: </strong>A</p>'+'\n'+
'		 				 	<div class="expedisi">'+'\n'+
'			 		WAHANA-Normal Service			 		(0.75 Kg)'+'\n'+
''+'\n'+
'			 					 	</div>'+'\n'+
''+'\n'+
'			 	<div class="expedisi awb">'+'\n'+
'			 		NO RESI : 			 	</div>'+'\n'+
'		 	'+'\n'+
'		 		 	</td>'+'\n'+
''+'\n'+
'	</tr>'+'\n'+
'</table>'+'\n'+
'<table width="100%" border="0" cellspacing="0" class="print-data printInvoice" font-size="12px;" style="display: none;" id="1">'+'\n'+
'	<tr style="margin: 0;padding: 20px;">'+'\n'+
'			<td style="margin: 0;" width="10%">'+'\n'+
'			<img class="img-logo" src="" style="width: 64px;">'+'\n'+
'		</td>'+'\n'+
'		<td colspan="3" style="margin: 0;vertical-align: top;">'+'\n'+
'			<h3 style="padding:0; margin: 0.5em 0 0;">NABIILAHSTORE</h3>'+'\n'+
'			<p>Distributor baju muslim </p>'+'\n'+
''+'\n'+
'		</td>'+'\n'+
'				<td colspan="2" style="margin: 0;vertical-align: top;">'+'\n'+
'			<h5 style="padding:0; margin:0.5em 0;">'+'\n'+
'				<strong>Tanggal:</strong>'+'\n'+
'				<span style="clear:both;display:block;font-weight: normal;">1 April 2019</span>'+'\n'+
'			</h5>'+'\n'+
'			<h5 style="padding:0; margin:0.5em 0;">'+'\n'+
'				<strong>Nomor Invoice:</strong>'+'\n'+
'				<span style="clear:both;display:block;font-weight: normal;">INV.2019.04.01.13354</span>'+'\n'+
'			</h5>'+'\n'+
''+'\n'+
'		</td>'+'\n'+
'	</tr>'+'\n'+
''+'\n'+
'	<tr style="margin: 0; padding: 20px;">'+'\n'+
'		<td colspan="4">'+'\n'+
'			<p style="line-height: 1em;margin: 0;padding: 20px 0 0;"><strong>Kepada <span style="text-transform: capitalize;">Titin Wuryanti</span></strong></p>'+'\n'+
'			<p style="font-size: 12px;line-height: 2em;">Terima kasih telah berbelanja di '+'\n'+
'			NabiilahStore. Berikut adalah rincian orderan Anda:</p>'+'\n'+
'		</td>'+'\n'+
'		'+'\n'+
'		<td colspan="2" style="font-size: 0.85rem;">'+'\n'+
'							<strong><span style="color: #00C853;">PAID</span> (1 April 2019)</strong>'+'\n'+
'						'+'\n'+
'		</td>'+'\n'+
'	'+'\n'+
'	</tr>'+'\n'+
'	<tr>'+'\n'+
'		<td colspan="2" style="padding: 10px 20px; width: 45%;">Nama Produk</td>'+'\n'+
'		<td style="padding: 10px 20px; width: 10%;">Jumlah</td>'+'\n'+
'		<td style="padding: 10px 20px; width: 15%;">Berat</td>'+'\n'+
'		<td style="padding: 10px 20px; width: 15%;">Harga</td>'+'\n'+
'		<td style="padding: 10px 20px; width: 15%;">Subtotal</td>'+'\n'+
'	</tr>'+'\n'+
''+'\n'+
''+'\n'+
'			<tr style="line-height: 1.25em;font-size: 12px; vertical-align: middle;">'+'\n'+
'			<td colspan="2">'+'\n'+
'				 RESTA OVERALL  <span class="sku-inv" style="float:right; display: none;">P154451V01</span>			</td>'+'\n'+
'			<td>'+'\n'+
'				1			</td>'+'\n'+
'			<td>'+'\n'+
'				0.35 Kg			</td>'+'\n'+
'			<td>Rp100.000</td>'+'\n'+
'			<td>'+'\n'+
'				Rp100.000			</td>'+'\n'+
'		</tr>'+'\n'+
'			<tr style="line-height: 1.25em;font-size: 12px; vertical-align: middle;">'+'\n'+
'			<td colspan="2">'+'\n'+
'				 CALYSTA MAXY  MAROON<span class="sku-inv" style="float:right; display: none;">P154774V01</span>			</td>'+'\n'+
'			<td>'+'\n'+
'				1			</td>'+'\n'+
'			<td>'+'\n'+
'				0.4 Kg			</td>'+'\n'+
'			<td>Rp130.000</td>'+'\n'+
'			<td>'+'\n'+
'				Rp130.000			</td>'+'\n'+
'		</tr>'+'\n'+
'	'+'\n'+
'	<tr style="line-height: 1.25em;font-size: 12px;">'+'\n'+
'		<td colspan="2">'+'\n'+
'			<strong>'+'\n'+
''+'\n'+
'				WAHANA-Normal Service			</strong>'+'\n'+
'		</td>'+'\n'+
'		<td></td>'+'\n'+
'		<td>0.75 Kg</td>'+'\n'+
'		<td>Rp10.000</td>'+'\n'+
'		<td>Rp10.000</td>'+'\n'+
'	</tr>'+'\n'+
''+'\n'+
'	<tr style="line-height: 1.25em;font-size: 12px;">'+'\n'+
'		<td colspan="5">Diskon</td>'+'\n'+
'		<td>Rp0</td>'+'\n'+
'	</tr>'+'\n'+
''+'\n'+
'	<tr style="line-height: 1.25em;font-size: 12px;">'+'\n'+
'		<td colspan="5">Asuransi</td>'+'\n'+
'		<td>Rp0</td>'+'\n'+
'	</tr>'+'\n'+
''+'\n'+
'	<tr style="line-height: 1.25em;font-size: 12px;">'+'\n'+
'		<td colspan="5">Biaya Tambahan </td>'+'\n'+
'		<td>Rp0</td>'+'\n'+
'	</tr>'+'\n'+
''+'\n'+
'	<tr style="line-height: 2em;font-size: 12px;">'+'\n'+
'		<td colspan="5"><span style="font-weight: 700; font-size: 1rem;">TOTAL</span></td>'+'\n'+
'		<td><span style="font-weight: 700; font-size: 1rem;">Rp240.000</span></td>'+'\n'+
'	</tr>'+'\n'+
''+'\n'+
'	<tr>'+'\n'+
'		<td colspan="6">'+'\n'+
'			<hr style="border-color: #ddd; border-style: dotted;">'+'\n'+
'		</td>'+'\n'+
'	</tr>'+'\n'+
'				'+'\n'+
'			<tr>'+'\n'+
'			<td style="vertical-align: top;margin: 0;padding: 10px 0;">'+'\n'+
'				<p style="line-height: 1em;margin: 0;padding: 0 0 0 20px;font-size:12px;">Note:</p>'+'\n'+
'			</td>'+'\n'+
'			<td colspan="4">'+'\n'+
'				<p  class="note-inv" style="font-size: 12px;line-height: 1.25em;margin:0;padding: 10px 0;">'+'\n'+
'					A				</p>'+'\n'+
'			</td>'+'\n'+
'		</tr>'+'\n'+
'		'+'\n'+
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
''+'\n'+
'	<tr>'+'\n'+
'		<td style="vertical-align: top;margin: 0;padding: 10px 0;">'+'\n'+
'			<p style="line-height: 1em;margin: 0;padding: 0 0 0 20px;font-size:12px;">Alamat Pengiriman:</p>'+'\n'+
'		</td>'+'\n'+
'		<td colspan="5">'+'\n'+
'			<p style="font-size: 12px;line-height: 1.25em;margin:0;padding: 10px 0;">'+'\n'+
'				<span style="font-weight: bold; font-size:16px; text-transform: capitalize;">Titin Wuryanti</span><br>'+'\n'+
'				Perum Taman Lembusura permai blok VII no 1, Br Poh Gading, Ubung kaja, Denpasar Bali '+'\n'+
'				Kec. Denpasar Timur,  Kota Denpasar,  '+'\n'+
'				Prov. Bali <br>'+'\n'+
'				Telp: 0818558385			</p>'+'\n'+
''+'\n'+
'		</td>'+'\n'+
'		'+'\n'+
'	</tr>'+'\n'+
'</table><table width="100%" border="0" cellspacing="0" class="print-data printLabelV2" style="display: none; font-size: .775rem;" id="1">'+'\n'+
'	<tr>'+'\n'+
'		<td class="py bb-1 to">'+'\n'+
'			<strong>FROM:</strong>'+'\n'+
'		</td>'+'\n'+
''+'\n'+
'		<td class="py bb-1" style="vertical-align: top;">'+'\n'+
'			NabiilahStore (082242783494)		</td>'+'\n'+
''+'\n'+
'		<td class="bb-1 exp">'+'\n'+
'					 		<strong>WAHANA-Normal Service</strong>		 	 <br>'+'\n'+
'		 	(0.75 kg)'+'\n'+
'		</td>'+'\n'+
''+'\n'+
'			</tr>'+'\n'+
'	<tr>'+'\n'+
'		<td class="py bb-1 to">'+'\n'+
'			<p class="lead pb-025">TO:</p>'+'\n'+
'		</td>'+'\n'+
'		<td class="py bb-1" colspan="2">'+'\n'+
'			<span class="ttu ls-1"><strong>Titin Wuryanti</strong></span> <br>'+'\n'+
'			Perum Taman Lembusura permai blok VII no 1, Br Poh Gading, Ubung kaja, Denpasar Bali<br>'+'\n'+
'			Kec. Denpasar Timur,  Kota Denpasar,  <br>'+'\n'+
'			Provinsi Bali <br>'+'\n'+
'			Telp: 0818558385		</td>'+'\n'+
'	</tr>'+'\n'+
'	<tr class="orderdetail_v2">'+'\n'+
'		<td class="py" colspan="3">'+'\n'+
'			<p class="pb-025"><strong>ORDER <span class="po-number-v2" style="display:none;">PO#13354</span> <span class="tgl_order_v2" style="display:none;">(Senin, 1 Apr 2019)</strong></p>'+'\n'+
'			<ul class="product-list" style="margin-bottom: 26px;">'+'\n'+
'								<li>'+'\n'+
'					<span class="left">'+'\n'+
'					RESTA OVERALL  </span>'+'\n'+
'					<span class="right">1 Item</span>'+'\n'+
'				</li>'+'\n'+
'								<li>'+'\n'+
'					<span class="left">'+'\n'+
'					CALYSTA MAXY  MAROON</span>'+'\n'+
'					<span class="right">1 Item</span>'+'\n'+
'				</li>'+'\n'+
'							</ul>'+'\n'+
'		</td>'+'\n'+
'	</tr>'+'\n'+
'			<tr class="note_v2">'+'\n'+
'			<td class="py" colspan="3">'+'\n'+
'				<p class="p-0"><strong>NOTE: </strong>A</p>			</td>'+'\n'+
'		</tr>'+'\n'+
'	</table>'+'\n'+
''+'\n'+
'<table cellspacing="0" class="print-data printInvoice-v2" font-size="12px;" style="display: none;" id="1">'+'\n'+
'	<tr>'+'\n'+
'					<td colspan="6" class="text-center">'+'\n'+
'				<h3 class="text-logo nama_toko">NABIILAHSTORE</h3>'+'\n'+
'				<p class="keterangan">Distributor baju muslim </p>'+'\n'+
'				<p class="alamat_toko mb-0"> </p>'+'\n'+
'			</td>'+'\n'+
'			</tr>'+'\n'+
''+'\n'+
'	<tr class="alamat_toko">'+'\n'+
'		<td colspan="6">'+'\n'+
'			<hr>'+'\n'+
'		</td>'+'\n'+
'	</tr>'+'\n'+
'	'+'\n'+
'	<tr class="mb-3">'+'\n'+
'		<td class="text-left" colspan="3">'+'\n'+
'			<span class="status_paid">Status: PAID <br>(01 April 2019)</span>	'+'\n'+
'			 '+'\n'+
'			<span class="input_time">01 Apr 2019 12:43:27</span>'+'\n'+
'		</td>'+'\n'+
'		<td class="text-right" colspan="3">'+'\n'+
'			<p class="pb-0">'+'\n'+
'				To:<span>Titin Wuryanti</span>'+'\n'+
'			</p>'+'\n'+
'		</td>'+'\n'+
'	</tr>'+'\n'+
''+'\n'+
'	<tr>'+'\n'+
'		<td colspan="6">'+'\n'+
'			<hr>'+'\n'+
'		</td>'+'\n'+
'	</tr>'+'\n'+
''+'\n'+
'	<tr class="invoice_detail">'+'\n'+
'		<td colspan="3">'+'\n'+
'			<span>1 April 2019</span>'+'\n'+
'		</td>'+'\n'+
'		<td class="text-right" colspan="3">'+'\n'+
'			<span>INV.2019.04.01.13354</span>'+'\n'+
'		</td>'+'\n'+
'	</tr>'+'\n'+
''+'\n'+
'	<tr class="invoice_detail">'+'\n'+
'		<td colspan="6">'+'\n'+
'			<hr>'+'\n'+
'		</td>'+'\n'+
'	</tr>'+'\n'+
''+'\n'+
'	<tr>'+'\n'+
'		<td colspan="2">Nama Produk</td>'+'\n'+
'		<td class="text-center" style="width: 5mm">Qty</td>'+'\n'+
'		<td style="width: 10mm">Berat</td>'+'\n'+
'		<td>Harga</td>'+'\n'+
'		<td class="text-right">Subtotal</td>'+'\n'+
'	</tr>'+'\n'+
''+'\n'+
'	<tr>'+'\n'+
'		<td colspan="6">'+'\n'+
'			<hr>'+'\n'+
'		</td>'+'\n'+
'	</tr>'+'\n'+
''+'\n'+
'			<tr class="item-detail">'+'\n'+
'			<td colspan="2">'+'\n'+
'				 <span>RESTA OVERALL  </span><span class="sku-inv" style="display: none;"> P154451V01</span>			</td>'+'\n'+
'			<td class="text-center">'+'\n'+
'				1			</td>'+'\n'+
'			<td>'+'\n'+
'				0.35 Kg			</td>'+'\n'+
'			<td class="text-right">'+'\n'+
'				100,000			</td>'+'\n'+
'			<td class="text-right" colspan="3">'+'\n'+
'				100,000			</td>'+'\n'+
'		</tr>'+'\n'+
'			<tr class="item-detail">'+'\n'+
'			<td colspan="2">'+'\n'+
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
'	'+'\n'+
'	<tr class="item-detail">'+'\n'+
'		<td colspan="2">'+'\n'+
'			WAHANA-Normal Service		</td>'+'\n'+
'		<td class="text-center">1</td>'+'\n'+
'		<td>0.75 Kg</td>'+'\n'+
'		<td class="text-right">10,000</td>'+'\n'+
'		<td class="text-right" colspan="3">10,000</td>'+'\n'+
'	</tr>'+'\n'+
''+'\n'+
'	<tr>'+'\n'+
'		<td colspan="6">'+'\n'+
'			<hr>'+'\n'+
'		</td>'+'\n'+
'	</tr>'+'\n'+
''+'\n'+
'	<tr>'+'\n'+
'		<td colspan="5">Diskon</td>'+'\n'+
'		<td class="text-right">0</td>'+'\n'+
'	</tr>'+'\n'+
''+'\n'+
'	<tr>'+'\n'+
'		<td colspan="5">Asuransi</td>'+'\n'+
'		<td class="text-right">0</td>'+'\n'+
'	</tr>'+'\n'+
''+'\n'+
'	<tr>'+'\n'+
'		<td colspan="5">Biaya Tambahan </td>'+'\n'+
'		<td class="text-right">0</td>'+'\n'+
'	</tr>'+'\n'+
'	'+'\n'+
'	<tr>'+'\n'+
'		<td colspan="6">'+'\n'+
'			<hr>'+'\n'+
'		</td>'+'\n'+
'	</tr>'+'\n'+
''+'\n'+
'	<tr>'+'\n'+
'		<td colspan="5">'+'\n'+
'			<span>TOTAL</span>'+'\n'+
'		</td>'+'\n'+
'		<td class="text-right">'+'\n'+
'			<span>240,000</span>'+'\n'+
'		</td>'+'\n'+
'	</tr>'+'\n'+
'				'+'\n'+
'			<tr class="note-inv">'+'\n'+
'			<td colspan="6">'+'\n'+
'				<hr>'+'\n'+
'			</td>'+'\n'+
'		</tr>'+'\n'+
'		<tr class="note-inv">'+'\n'+
'			<td colspan="6">'+'\n'+
'				<p>Note:</p>'+'\n'+
'			</td>'+'\n'+
'		</tr>'+'\n'+
'		<tr class="note-inv">'+'\n'+
'			<td colspan="6">'+'\n'+
'				<p>'+'\n'+
'					A				</p>'+'\n'+
'			</td>'+'\n'+
'		</tr>'+'\n'+
'		'+'\n'+
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
''+'\n'+
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
'				Perum Taman Lembusura permai blok VII no 1, Br Poh Gading, Ubung kaja, Denpasar Bali '+'\n'+
'				Kec. Denpasar Timur,  Kota Denpasar,  '+'\n'+
'				Prov. Bali				<br>'+'\n'+
'				Telp: 0818558385				<br>'+'\n'+
'				<span class="kurir">Kurir: WAHANA-Normal Service</span>'+'\n'+
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
'</table></div>'+'\n'+
''+'\n'+
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
'			\'input#toggle_logo\' 				: \'.shop-logo\','+'\n'+
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
