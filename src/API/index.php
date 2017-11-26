<?php

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

//require_once 'vendor/autoload.php';
require 'vendor/autoload.php';

// Using Medoo namespace
use Medoo\Medoo;

// Initialize
$database = new Medoo([
    'database_type' => 'mysql',
    'database_name' => 'pixel_seed_db',
    'server' => 'localhost',
    'username' => 'root',
    'password' => ''
]);

//$database = new mysqli("localhost", "root", "", "pixel_seed_db");

$app = new \Slim\App;

$app->post('/productos', function(Request $request, Response $response){
    global $database;
    $json = $app->request->post('json');
    $data = json_decode($json, true);
    
    $database->insert('productos', [
        'nombre' => $data['nombre'],
        'precio' => $data['precio']
    ]);
    echo 'Correcto';
});

$app->get('/get_productos', function(Request $request, Response $response){
    global $database;
    $data = $database->select('productos', '*');
    echo json_encode($data);
});

$app->get('/get_producto/{id_producto}', function(Request $request, Response $response){
    global $database;
    $id_producto = $request->getAttribute('id_producto');
    $data = $database->select('productos', '*', [ 'id' => $id_producto ]);
    echo json_encode($data);
});

$app->post('/upload', function(Request $request, Response $response){
    global $database;

    $result = array(
        'status' => 'error',
        'code' => 404,
        'message' => 'No se puede subir'
    );

    if(isset($_FILES['uploads'])){
        $piramide = new PiramideUploader();
        $upload = $piramide->upload('image', 'uploads', 'uploads', array('image/jpeg', 'image/png', 'image/gif'));
        $file = $piramide->getInfoFile();
        $file_name = $file['complete_name'];

        if(isset($upload) && $upload['uploaded'] == false){
            $result = array(
                'status' => 'error',
                'code' => 404,
                'message' => 'No se puede subir'
            );
        } else {
            $result = array(
                'status' => 'success',
                'code' => 200,
                'message' => 'Se subio el archivo',
                'filename' => $file_name
            );
        }
    }

    echo json_encode($result);
});

$app->run();
