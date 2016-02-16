<?php
echo "YO";

if(isset($_POST['email'])) {
    $email_to = "tfahrenreich@gmail.com";
    $email_subject = "Glitterrings.com Contact Form";

    // validation expected data exists
    $name = $_POST['name']; // required
    $company_name = $_POST['company_name']; // required
    $email_from = $_POST['email']; // required
    //$telephone = $_POST['telephone']; // not required
    $comments = $_POST['comments']; // required
    $time = $_POST['time']; // required

    $email_message = "Form details below.\n\n";
    function clean_string($string) {
        $bad = array("content-type","bcc:","to:","cc:","href");
        return str_replace($bad,"",$string);
    }
    $email_message .= "First Name: ".clean_string($name)."\n";
    $email_message .= "Company Name: ".clean_string($company_name)."\n";
    $email_message .= "Email: ".clean_string($email_from)."\n";
    //$email_message .= "Telephone: ".clean_string($telephone)."\n";
    $email_message .= "Best Time: ".clean_string($time)."\n";
    $email_message .= "Comments: ".clean_string($comments)."\n";
    $headers = 'From: '.$email_from."\r\n".
        'Reply-To: '.$email_from."\r\n" .
        'X-Mailer: PHP/' . phpversion();
    @mail($email_to, $email_subject, $email_message, $headers);
    //header("Location: /contact/?submitted");
    die();
}