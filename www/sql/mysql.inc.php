<?php

//for xampp windows...
//DEFINE ('DB_HOST', 'localhost');
//DEFINE ('DB_USER', 'root');
//DEFINE ('DB_PASSWORD', 'strathclyde1');
//DEFINE ('DB_NAME', 'infinity2');

//for devweb ubuntu...
DEFINE ('DB_HOST', 'devweb2014.cis.strath.ac.uk');
DEFINE ('DB_USER', 'rqb12155');
DEFINE ('DB_PASSWORD', 'oradambr');
DEFINE ('DB_NAME', 'rqb12155');

// Make the connection:
$link = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD);
mysqli_select_db($link, DB_NAME) or die(mysqli_connect_error());

// Omit the closing PHP tag to avoid 'headers already sent' errors!
