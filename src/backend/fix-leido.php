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

// Asegurar que la columna 'leido' existe y tiene valores correctos
$result = $conn->query("SHOW COLUMNS FROM contactos LIKE 'leido'");
if ($result->rowCount() == 0) {
    // Agregar columna 'leido' si no existe
    $conn->query("ALTER TABLE contactos ADD COLUMN leido TINYINT(1) DEFAULT 0");
}

// Actualizar mensajes que no tienen valor en 'leido'
$conn->query("UPDATE contactos SET leido = 0 WHERE leido IS NULL");

// Verificar el resultado
$result = $conn->query("SELECT COUNT(*) as total FROM contactos");
$total = $result->fetch(PDO::FETCH_ASSOC)['total'];

$result = $conn->query("SELECT COUNT(*) as nuevos FROM contactos WHERE leido = 0");
$nuevos = $result->fetch(PDO::FETCH_ASSOC)['nuevos'];

echo json_encode([
    'success' => true, 
    'message' => 'Base de datos actualizada',
    'total' => $total,
    'nuevos' => $nuevos
]);

$conn = null;
?>
