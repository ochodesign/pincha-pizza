<?php
// Zona horaria Argentina
date_default_timezone_set('America/Argentina/Buenos_Aires');

// Mostrar errores para depuración
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Logging de método recibido
file_put_contents('eliminar-contacto.log', date('Y-m-d H:i:s') . " - Método: " . $_SERVER['REQUEST_METHOD'] . "\n", FILE_APPEND);

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Método no permitido', 'metodo' => $_SERVER['REQUEST_METHOD']]);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);
file_put_contents('eliminar-contacto.log', date('Y-m-d H:i:s') . " - Input: " . json_encode($input) . "\n", FILE_APPEND);
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

require_once __DIR__ . '/config.php';

try {
    $conn = new PDO("mysql:host=$host;dbname=$db", $user, $pass);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $stmt = $conn->prepare("DELETE FROM contactos WHERE id = :id");
    $stmt->bindParam(':id', $id, PDO::PARAM_INT);

    if ($stmt->execute()) {
        if ($stmt->rowCount() > 0) {
            echo json_encode(['success' => true, 'message' => 'Contacto eliminado correctamente']);
        } else {
            http_response_code(404);
            echo json_encode(['error' => 'Contacto no encontrado']);
        }
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'Error al eliminar el contacto']);
    }

} catch(PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Error de conexión: ' . $e->getMessage()]);
}

$conn = null;
?>
