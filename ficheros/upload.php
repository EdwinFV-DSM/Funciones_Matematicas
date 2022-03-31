<?php 

$valor_a = $_POST['a'];

if($valor_a === ''){
        echo json_encode('error');
}else{
    $resultado = $valor_a + 2;
    
    if($resultado > 0){
        echo json_encode('success');
        echo json_encode($resultado);
     }
}