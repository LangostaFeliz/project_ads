<?php
//header('Content-Type: application/json');
include('dato.php');

$username=$_POST['correo'];
$enlace = mysqli_connect($host, $usuario, $password, $bd);
if(!empty($username)){
    $query="select *FROM correo ";
    $resultado=mysqli_query($enlace, $query);

    if(!$resultado){
        die('QUERY ERROR'.mysqli_error($enlace));
    }
    $json=array();
    while($row=mysqli_fetch_array($resultado)){
        $json[]=array(
            'matricula'=>$row['matricula'],
            'correo'=>$row['correo'],
            'password'=>$row['password'],
            'nombre'=>$row['nombre']
        );
    }
    //$jsonstring=json_encode($json);
    echo json_encode($json);

}



// if(isset($_POST)) {
//   //  $data="array";
//    // $json=json_encode(array('success'=>1,'username'=>$_POST[username],'password'=>$_POST[password]));
//    $data=array('user'=>"feng",'password'=>"FENG");
//     echo json_encode($data);
// }   else
// {   $data="array";
//     $json=json_encode($data);
//     echo $json;
// }

?>