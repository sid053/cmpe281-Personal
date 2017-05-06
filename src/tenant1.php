<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <style>
    /* Set height of the grid so .sidenav can be 100% (adjust if needed) */
    .row.content {height: 1500px}
    
    /* Set gray background color and 100% height */
    .sidenav {
      background-color: #f1f1f1;
      height: 100%;
    }

    hr {
        width: 300px;
        margin-left: auto;
        margin-right: auto;
        }
    
    /* Set black background color, white text and some padding */
    footer {
      background-color: #555;
      color: white;
      padding: 15px;
    }
    
    /* On small screens, set height to 'auto' for sidenav and grid */
    @media screen and (max-width: 767px) {
      .sidenav {
        height: auto;
        padding: 15px;
      }
      .row.content {height: auto;} 
    }
  </style>
</head>
<body>



<div class="row content">
    <div class="col-sm-3 sidenav">
     <div> <center> <h2>Tenent 1</h2>
     <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Grade</button>
     </center>
   </div>



   <div>
   <center>
    <h4><small>Other Tenents</small></h4>
   </center>
   </div>
      <hr>
   
   <div>
   <center>
        <button type="button" class="btn btn-info btn-lg"  onclick=" window.location='http://www.google.com';" >Tenent2 </button>
   </center>     
   </div>.
     
   <div>
   <center>
       <button type="button" class="btn btn-info btn-lg" onclick=" window.location='http://www.facebook.com';"  >Tenent3</button>
   </center>
   </div>.


</div>

     
 <div class="col-sm-9">  <!-- Dispplay the image in this section -->
       <center>
      <h4><small>Image Section</small></h4>     

<form method="post" enctype="multipart/form-data">

    <h3>Select image to upload:</h3>

  <div> <input type="file" name="fileToUpload" id="fileToUpload"> </div>

    <div> <input class="btn btn-info btn-md" type="submit" value="Upload" name="submit"></div>
</form>
   </center>
 </div>


    <!--before this closing div display the image -->


<!-- Modal -->
<div id="myModal" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button> 
        <h4 class="modal-title">Grade</h4>
      </div>
      <div class="modal-body">
        
        <p>Some text in the modal.</p>
      
     <!-- put the code here for gradinng dropdowns and etc etc -->
    


      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div>





</body>
</html>



<?php 
if(isset($_POST['submit'])){
$target_dir = "/Users/sid/Desktop/test/";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
$uploadOk = 1;
$imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);

if($imageFileType != "zip" && $imageFileType !="ZIP" ) {
    echo "Sorry, only ZIP files are allowed.";
    $uploadOk = 0;
}
if ($uploadOk == 0) {
    echo "Sorry, your file was not uploaded.";

} else {
    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {

        $path_parts = pathinfo($target_file);

$f = $path_parts['filename'];


$zip = new ZipArchive;
if ($zip->open($target_file) === TRUE) {
    mkdir($target_dir.$f);
    $zip->extractTo($target_dir.$f);
    $zip->close();
    $current=getcwd();
    //unlink('output2.jpg');
    unlink($target_file); 

    $SourceFile ='/Users/sid/Desktop/test/Amita-Kamat-CMPE-202/UMLParser/src';
    chdir($SourceFile);
    $script = 'java -jar UmlParser.jar /Users/sid/Desktop/test/'.$f.' output2.jpg' ;
    shell_exec($script);
    chdir($current);
    //echo "<h1>The image is generated</h1>";
    echo "<h2>The generated image is </h2>" ;
  // the image tag will come here
    
    $final = '/Users/sid/Desktop/test/Amita-Kamat-CMPE-202/Output-Diagrams/output2.jpg';
    //echo $final ;
    //chdir($final);
    echo "<br>";
    //echo getcwd();
    $script1 = 'mv '.$final.' .';

    //echo $script1;
    shell_exec($script1);
    echo '<img src="output2.jpg"/>';

    //unlink($ImageFile);


} 
       
    } else {
        echo "Sorry, there was an error uploading your file.";
    }
}
}
?>



