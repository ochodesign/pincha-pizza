<?php
// Zona horaria Argentina
date_default_timezone_set('America/Argentina/Buenos_Aires');

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
if (!$input) {
    http_response_code(400);
    echo json_encode(['error' => 'No se recibió JSON válido']);
    exit;
}

// Validar que el id existe y es un número entero positivo
if (!isset($input['id']) || !is_numeric($input['id']) || intval($input['id']) <= 0) {
    http_response_code(400);
    echo json_encode(['error' => 'ID del contacto inválido']);
    exit;
}
$id = intval($input['id']);

// Validar campos requeridos
if (!isset($input['nombre']) || !isset($input['email']) || !isset($input['consulta']) || !isset($input['mensaje'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Faltan datos requeridos']);
    exit;
}

require_once __DIR__ . '/config.php';

try {
    $conn = new PDO("mysql:host=$host;dbname=$db", $user, $pass);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    $stmt = $conn->prepare("UPDATE contactos SET nombre = :nombre, email = :email, telefono = :telefono, consulta = :consulta, mensaje = :mensaje WHERE id = :id");
    $stmt->bindParam(':id', $id, PDO::PARAM_INT);
    $stmt->bindParam(':nombre', $input['nombre']);
    $stmt->bindParam(':email', $input['email']);
    $stmt->bindParam(':telefono', $input['telefono']);
    $stmt->bindParam(':consulta', $input['consulta']);
    $stmt->bindParam(':mensaje', $input['mensaje']);
    
    if ($stmt->execute()) {
        echo json_encode(['success' => true, 'message' => 'Contacto actualizado correctamente']);
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'Error al actualizar el contacto']);
    }
    
} catch(PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Error de conexión: ' . $e->getMessage()]);
}

$conn = null;
?>
