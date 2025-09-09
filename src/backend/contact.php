<?php
// Zona horaria Argentina
date_default_timezone_set('America/Argentina/Buenos_Aires');

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require_once __DIR__ . '/config.php';
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'message' => 'Método no permitido']);
    exit;
}

// Recibir datos como JSON o POST
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// Si no hay datos JSON, intentar con POST clásico
if (!$data) {
    $data = $_POST;
}

$nombre   = isset($data['nombre'])   ? trim($data['nombre'])   : '';
$email    = isset($data['email'])    ? trim($data['email'])    : '';
$telefono = isset($data['telefono']) ? trim($data['telefono']) : '';
$consulta = isset($data['consulta']) ? trim($data['consulta']) : '';
$mensaje  = isset($data['mensaje'])  ? trim($data['mensaje'])  : '';
$honeypot = isset($data['hp'])       ? trim($data['hp'])       : '';

if (!empty($honeypot)) {
    echo json_encode(['success' => false, 'message' => 'Error de validación.']);
    exit;
}
if (!$nombre || !$email || !$mensaje) {
    echo json_encode(['success' => false, 'message' => 'Faltan campos obligatorios']);
    exit;
}

try {
    $conn = new PDO("mysql:host=$host;dbname=$db", $user, $pass);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $sql = "INSERT INTO contactos (nombre, email, telefono, consulta, mensaje, fecha, leido) VALUES (?, ?, ?, ?, ?, NOW(), 0)";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(1, $nombre);
    $stmt->bindParam(2, $email);
    $stmt->bindParam(3, $telefono);
    $stmt->bindParam(4, $consulta);
    $stmt->bindParam(5, $mensaje);

    if ($stmt->execute()) {
        // Enviar email de aviso (opcional)
        $to = 'ochodesignweb@gmail.com';
        $subject = 'Nuevo mensaje de contacto desde la web';
        $body = "Nombre: $nombre\nEmail: $email\nTeléfono: $telefono\nConsulta: $consulta\nMensaje: $mensaje";
        $headers = "From: noreply@" . $_SERVER['HTTP_HOST'] . "\r\n" .
                   "Reply-To: $email\r\n" .
                   "X-Mailer: PHP/" . phpversion() . "\r\n" .
                   "Content-Type: text/plain; charset=UTF-8";
        @mail($to, $subject, $body, $headers);

        echo json_encode(['success' => true, 'message' => '¡Mensaje enviado correctamente!']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Error al guardar en la base de datos']);
    }
} catch (PDOException $e) {
    echo json_encode(['success' => false, 'message' => 'Error de conexión a la base de datos: ' . $e->getMessage()]);
}
$conn = null;