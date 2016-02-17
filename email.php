<?php
if(isset($_POST['email'])) {
    $email_to = "hi@timf.xyz";
    $email_subject = "TIMF.XYZ CONTACT FORM";

    // validation expected data exists
    $name = $_POST['name']; // required
    $email_from = $_POST['email']; // required
    $comments = $_POST['comments']; // required

    $email_message = "Form details below.\n\n";
    function clean_string($string) {
        $bad = array("content-type","bcc:","to:","cc:","href");
        return str_replace($bad,"",$string);
    }
    $email_message .= "First Name: ".clean_string($name)."\n";
    $email_message .= "Email: ".clean_string($email_from)."\n";
    $email_message .= "Comments: ".clean_string($comments)."\n";

    $headers = 'From: Tim <hi@timf.xyz>' . "\r\n" ;
    $headers .='Reply-To: '. $email_from . "\r\n" ;
    $headers .='X-Mailer: PHP/' . phpversion();
    $headers .= "MIME-Version: 1.0\r\n";

    @mail($email_to, $email_subject, $email_message, $headers);
    echo "success";
    die();
}