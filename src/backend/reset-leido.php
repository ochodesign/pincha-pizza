<?php
require_once __DIR__ . '/config.php';
header('Content-Type: application/json');

try {
    $conn = new PDO("mysql:host=$host;dbname=$db", $user, $pass);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo json_encode(['success' => false, 'message' => 'Error de conexión']);
    exit;
}

// Marcar algunos mensajes como NO leídos para probar la funcionalidad
$conn->query("UPDATE contactos SET leido = 0 WHERE id IN (1, 2)");

// Verificar el resultado
$result = $conn->query("SELECT COUNT(*) as total FROM contactos");
$total = $result->fetch(PDO::FETCH_ASSOC)['total'];

$result = $conn->query("SELECT COUNT(*) as nuevos FROM contactos WHERE leido = 0");
$nuevos = $result->fetch(PDO::FETCH_ASSOC)['nuevos'];

echo json_encode([
    'success' => true, 
    'message' => 'Mensajes marcados como NO leídos para prueba',
    'total' => $total,
    'nuevos' => $nuevos
]);

$conn = null;
?>
