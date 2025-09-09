<?php
// Zona horaria Argentina
date_default_timezone_set('America/Argentina/Buenos_Aires');

require_once __DIR__ . '/config.php';
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    echo json_encode(['success' => false, 'message' => 'Método no permitido']);
    exit;
}

try {
    $conn = new PDO("mysql:host=$host;dbname=$db", $user, $pass);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo json_encode(['success' => false, 'message' => 'Error de conexión']);
    exit;
}

$stmt = $conn->prepare("SELECT * FROM contactos ORDER BY fecha DESC");
$stmt->execute();
$contactos = $stmt->fetchAll(PDO::FETCH_ASSOC);

foreach ($contactos as &$contacto) {
    // Convertir 'leido' a entero para que JavaScript lo interprete correctamente
    $contacto['leido'] = intval($contacto['leido']);
}

echo json_encode(['success' => true, 'contactos' => $contactos]);
$conn = null;
