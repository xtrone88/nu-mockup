<?php
$address = "info@nu-lxp.ch";
if (!defined("PHP_EOL")) define("PHP_EOL", "\r\n");
​
$error = false;
$fields = array( 'name', 'email', 'message', 'subject' );
​
foreach ( $fields as $field ) {
	if ( empty($_POST[$field]) || trim($_POST[$field]) == '' )
		$error = true;
}
​
if ( !$error ) {
​
	$name = stripslashes($_POST['name']);
	$email = trim($_POST['email']);
	$message = stripslashes($_POST['message']);
	$subject = trim($_POST['subject']);
​
	$e_subject = 'Nachricht von ' . $name . '.';
​
​
	// Configuration option.
	// You can change this if you feel that you need to.
	// Developers, you may wish to add more fields to the form, in which case you must be sure to add them here.
​
	$e_body = "Nachricht vcn: $name" . PHP_EOL . PHP_EOL;
	$e_reply = "E-mail: $email" . PHP_EOL . PHP_EOL;
	$e_content = "Nachricht:\r\n$message \r\n Betreff: $subject" . PHP_EOL;
​
​
	$msg = wordwrap( $e_body . $e_reply , 70 );
​  print_r($msg);
	$headers = "From: $email" . PHP_EOL;
	$headers .= "Reply-To: $email" . PHP_EOL;
	$headers .= "Content-type: text/plain; charset=utf-8" . PHP_EOL;
	$headers .= "Content-Transfer-Encoding: quoted-printable" . PHP_EOL;
​
	if(mail($address, $msg, $headers, $e_content  )) {
​
		// Email has sent successfully, echo a success page.
​
		echo 'Success';
​
	} else {
​
		echo 'ERROR!';
​
	}
​
}