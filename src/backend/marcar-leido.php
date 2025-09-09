<?php
require_once __DIR__ . '/config.php';
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST' && $_SERVER['REQUEST_METHOD'] !== 'GET') {
    echo json_encode(['success' => false, 'message' => 'Método no permitido']);
    exit;
}

// Obtener ID desde POST o GET
$id = 0;
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = isset($_POST['id']) ? intval($_POST['id']) : 0;
} else {
    $id = isset($_GET['id']) ? intval($_GET['id']) : 0;
}

if (!$id) {
    echo json_encode(['success' => false, 'message' => 'ID inválido. Uso: ?id=1']);
    exit;
}

try {
    $conn = new PDO("mysql:host=$host;dbname=$db", $user, $pass);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $stmt = $conn->prepare("UPDATE contactos SET leido = 1 WHERE id = ?");
    $stmt->bindParam(1, $id, PDO::PARAM_INT);

    if ($stmt->execute()) {
        echo json_encode(['success' => true, 'message' => 'Marcado como leído']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Error al actualizar']);
    }
} catch (PDOException $e) {
    echo json_encode(['success' => false, 'message' => 'Error de conexión: ' . $e->getMessage()]);
}
