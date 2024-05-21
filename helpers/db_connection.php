<?php

  $server   = 'localhost';
  $username = 'root';
  $password = 'medivent';
  $db       = 'medivent';
  $conn     = new mysqli( $server, $username, $password, $db );
  

  if ( $conn -> connect_error )  { die( "connection_error" ); }

?>
