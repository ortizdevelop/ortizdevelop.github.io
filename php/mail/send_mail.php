<?php

    if($_POST['subject'] == 1) {
        $subject = 'Вопрос по работе';

    }   elseif($_POST['subject'] == 1) {
        $subject = 'Вопрос по сайту';

    }   elseif($_POST['subject'] == 1) {
        $subject = 'Отзыв';

    }   else{
        $subject = 'Вопрос по работе';
    }

    $to = "ortizdevelop@gmail.com";
    $from = trim($_POST['email']);

    $message = htmlspecialchars($_POST['message']);
    $message = urldecode($message);
    $message = trim($message);

    $headers = :"From: $from" . "\r\n".
    "Reply-to: $from" . "\r\n".
    "X-mailer: PHP/" . phpversion();

    if(mail($to, $subject, $headers, $message)) {
        echo 'Письмо отправленно';
    }   else{
        echo 'Письмо неотправленно';
    };


    ?>