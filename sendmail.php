<?php
$productnumber 	= $_POST['productnumber'];
$productname 	= $_POST['productname'];
$text1 			= $_POST['textfirst'];
$text2 			= $_POST['textsecond'];
$text3 			= $_POST['textthird'];
$position 		= $_POST['position'];
$schrift 		= $_POST['font'];
$farbe 			= $_POST['color'];
$hoehe 			= $_POST['fontsize'];
$firm 			= $_POST['firm'];
$name 			= $_POST['name'];
$telefon 		= $_POST['telefon'];
$email 			= $_POST['email'];

if($text2 == "undefined"){
    $text2 = "";
};

if($text3 == "undefined"){
    $text3 = "";
};

$customerservicemail = "";

// mail to service team
$serviceteammessage = '
	EINSTICKUNGSANFRAGE:\n\n

	Firma:        '.$firm.'\n
    Name:         '.$name.'\n
	Telefon:      '.$telefon.'\n
	EMail:        '.$email.'\n
    \n
	Produktname:  '.$productname.'\n
	SKU:          '.$productnumber.'\n
    \n
	Text Zeile 1: '.$text1.'\n
	Text Zeile 2: '.$text2.'\n
	Text Zeile 3: '.$text3.'\n
	Position:     '.$position.'\n
	Schriftart:   '.$schrift.'\n
	Schriftfarbe: '.$farbe.'\n
	Schriftgröße: '.$hoehe.'\n
';


// usermessage  

$usermessage = '

<html>

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>
</body>


<!--@styles
body,td { color:#2f2f2f; font:11px/1.35em Verdana, Arial, Helvetica, sans-serif; }
@-->


<div width="100%" align="center">
	<table width="610" cellspacing="0" cellpadding="0">
		<tbody>
			<tr>
				<td style="border:1px solid #B52555">
					<table width="610" cellspacing="0" cellpadding="0" border="0" bgcolor="#fff" style="border-collapse:collapse;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:18px">
						<tbody>
							<tr>
								<td style="    background: rgba(247, 247, 247, 0.36);">
									<table>
										<tbody>
											<tr>
												<td>
													<a href="http://www.hotelwaesche.de">
														<img style="margin: 20px;height: 90px;" src="http://static.jobeline.de/skin/frontend/emmos/jobelinede/images/logo-jlde.png"
															alt="Hotelwäsche Erwin Müller" border="0">
													</a>
												</td>

												<td style="font-size: 27px;padding-left: 57px;">Ihre Einstickungsanfrage</td>


											</tr>


										</tbody>

									</table>
								</td>
							</tr>
							<tr>
								<td>
									<center>
										<table width="560" style="margin-top: 35px;">
											<tbody>
												<tr>
													<td style="font-family:Arial,Helvetica;font-size:14px;line-height:20px;padding-bottom:10px">
														Sehr geehrte/geehrter JOBELINE Kundin/Kunde,
														<span style="font-family:Arial;line-height:20px;font-size:20px;color:#cacaca"></span>
													</td>
												</tr>

												<tr>
													<td style="font-family:Arial,Helvetica;font-size:14px;line-height:20px;width:100%">
														vielen Dank	für Ihre Anfrage und Ihr Interesse an unserem Personalisierungsservice.
														<span style="font-family:Arial;line-height:20px;font-size:20px;color:#cacaca"></span>
													</td>
												</tr>

												<tr>
													<td style="font-family:Arial,Helvetica;font-size:14px;line-height:16px">

														<br><br> Folgende Daten wurden an uns übermittelt:
														<br><br>
														<table style="margin-left:20px">
															<tbody>
																<tr style="line-height: 25px;">
																	<td style="padding-right: 50px;">Produktname:</td>
																	<td>'.$productname.'</td>
																</tr>
																<tr style="line-height: 25px;">
																	<td>SKU:</td>
																	<td>'.$productnumber.'</td>
																</tr>
																<tr style="line-height: 25px;">
																	<td>Text Zeile 1:</td>
																	<td>'.$text1.'</td>
																</tr>
																<tr style="line-height: 25px;">
																	<td>Text Zeile 2:</td>
																	<td>'.$text2.'</td>
																</tr>
																<tr style="line-height: 25px;">
																	<td>Text Zeile 3:</td>
																	<td>'.$text3.'</td>
																</tr>
																<tr style="line-height: 25px;">
																	<td>Position:</td>
																	<td>'.$position.'</td>
																</tr>
																<tr style="line-height: 25px;">
																	<td>Schriftart:</td>
																	<td>'.$schrift.'</td>
																</tr>
																<tr style="line-height: 25px;">
																	<td>Schriftfarbe:</td>
																	<td>'.$farbe.'</td>
																</tr>
																<tr>
																	<td>Schrifthöhe:</td>
																	<td>'.$hoehe.'</td>
																</tr>
															</tbody>

														</table>

														<span style="font-family:Arial;line-height:16px;font-size:20px;color:#cacaca"></span>
													</td>
												</tr>
												<tr>
													<td style="font-family:Arial,Helvetica;font-size:14px;line-height:20px">
														<br/>
														Unser Service-Team wird sich so schnell wie möglich um Ihr
														Anliegen kümmern und sich zeitnah per Telefon oder E-Mail bei Ihnen
														melden.<br/><br/> Sollten Sie dennoch Fragen haben, können Sie uns unter
														unserer kostenlosen Service-Hotline erreichen: 0800/628 84 50*<br/>
														(* Kostenfrei aus dem dt. Fest- und Mobilfunknetz)
													</td>
												</tr>
												<tr>
													<td height="30" colspan="3">
														&nbsp;
													</td>
												</tr>
												<tr>
													<td style="font-family:Arial,Helvetica;font-size:14px;line-height:16px">

														<span style="font-family:Arial;line-height:16px;font-size:20px;color:#cacaca"></span>
													</td>
												</tr>
												<tr>


												<tr>
													<td style="font-size:12px;font-family:Arial,Helvetica;color:#474747;font-weight:normal" colspan="3">
														Herzliche Grüße,<br/> Ihr Jobeline Team<br/><br/>
													</td>
												</tr>

												<tr>
													<td style="font-size:12px;font-family:Arial,Helvetica;color:grey;font-weight:normal" colspan="3">
														Alle Preise zuzüglich der gesetzlichen Mehrwertsteuer und der Versandkosten. Dieses Angebot ist nur für gewerbliche Abnehmer
														gültig!<br/>
														Kein Verkauf an privat!
													</td>
												</tr>

												<tr>
													<td height="20" colspan="3">
														&nbsp;
													</td>
												</tr>
											</tbody>
										</table>
									</center>
								</td>
							</tr>
							<tr>
								<td></td>
							</tr>
							<tr>
								<td>
									<img style="margin-bottom:20px;" src="http://www.jobeline.de/media/all_img/jleinstickung-footer.jpg" alt="Jobeline" border="0">
								</td>
							</tr>
							<tr>
								<td style="font-size:12px;font-family:Arial,Helvetica;color:#474747;font-weight:normal" colspan="3">
									<div style="padding:10px; float:right;">
										<a style="text-decoration:none; color: #000000;" href="http://www.jobeline.de/hilfe+service/index.php?id=420">Impressum</a>                                        |
										<a style="text-decoration:none; color: #000000;" href="http://www.jobeline.de/hilfe+service/index.php?id=419">AGB</a>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</td>
			</tr>
		</tbody>
	</table>
</div>


</body>

</html>


';




$headers .= "From: Prämienshop Hotelwäsche <praemie@hotelwaesche.de>\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n";




// Falls eine Zeile der usermessage mehr als 70 Zeichen enthälten könnte,
// sollte wordwrap() benutzt werden
$usermessage 		= wordwrap($usermessage);
$serviceteammessage = wordwrap($serviceteammessage);

// Send
$user_mail_success 			= mail($email, 'Jobeline - Einstickungsanfrage', $usermessage, $headers);
$serviceteam_mail_success 	= mail($email, 'Jobeline - Einstickungsanfrage', $serviceteammessage, $headers);



if(!$user_mail_success){
	echo "user message send";
}else{
	echo "user message send fail";
};

?>






