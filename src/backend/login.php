<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Método no permitido']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);
if (!isset($input['usuario']) || !isset($input['password'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Faltan datos']);
    exit;
}

$usuarios = require __DIR__ . '/usuarios.php';
foreach ($usuarios as $u) {
    if ($u['usuario'] === $input['usuario'] && password_verify($input['password'], $u['password'])) {
        echo json_encode(['success' => true, 'rol' => $u['rol']]);
        exit;
    }
}
http_response_code(401);
echo json_encode(['error' => 'Usuario o contraseña incorrectos']);
