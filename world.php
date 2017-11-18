<?php
$host = getenv('IP');
$username = getenv('C9_USER');
$password = '';
$dbname = 'world';
try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        }
        
catch(PDOException $e)
    {
    echo "Connection failed: " . $e->getMessage();
    }
    
    $country=$_GET['country'];
    
    
    if ($country=='all=true') {
        
    $stmt = $conn->prepare("SELECT * FROM countries ;");
     
     $stmt->execute();
      
     $results=$stmt->fetchAll(PDO::FETCH_ASSOC);
    echo '<ul>';
   foreach ($results as $row) {
    echo '<li>' . $row['name'] . ' is ruled by ' . $row['head_of_state'] . '</li>';
   }
   echo '</ul>';
        
    } else {
        
        
      $stmt = $conn->prepare("SELECT * FROM countries WHERE name='$country';");
     
      $stmt->execute();
      
      $results=$stmt->fetchAll(PDO::FETCH_ASSOC);
    echo '<ul>';
    foreach ($results as $row) {
    echo '<li>' . $row['name'] . ' is ruled by ' . $row['head_of_state'] . '</li>';
    }
    echo '</ul>';
    }