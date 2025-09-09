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

require_once __DIR__ . '/config.php';

try {
    $conn = new PDO("mysql:host=$host;dbname=$db", $user, $pass);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // Crear tabla de visitas si no existe
    $createTable = "CREATE TABLE IF NOT EXISTS visitas (
        id INT AUTO_INCREMENT PRIMARY KEY,
        ip VARCHAR(45),
        user_agent TEXT,
        fecha_visita TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        pagina VARCHAR(255) DEFAULT '/',
        INDEX idx_fecha (fecha_visita),
        INDEX idx_ip (ip)
    )";
    
    $conn->exec($createTable);
    
    // Obtener datos del visitante
    $ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
    $user_agent = $_SERVER['HTTP_USER_AGENT'] ?? 'unknown';
    $pagina = $_POST['pagina'] ?? '/';
    
    // Verificar si ya registramos esta IP en los últimos 30 minutos (para evitar spam)
    $stmt = $conn->prepare("SELECT COUNT(*) as count FROM visitas WHERE ip = :ip AND fecha_visita > DATE_SUB(NOW(), INTERVAL 30 MINUTE)");
    $stmt->bindParam(':ip', $ip);
    $stmt->execute();
    $result = $stmt->fetch(PDO::FETCH_ASSOC);
    
    if ($result['count'] == 0) {
        // Registrar nueva visita
        $stmt = $conn->prepare("INSERT INTO visitas (ip, user_agent, pagina) VALUES (:ip, :user_agent, :pagina)");
        $stmt->bindParam(':ip', $ip);
        $stmt->bindParam(':user_agent', $user_agent);
        $stmt->bindParam(':pagina', $pagina);
        $stmt->execute();
        
        echo json_encode(['success' => true, 'message' => 'Visita registrada']);
    } else {
        echo json_encode(['success' => true, 'message' => 'Visita ya registrada recientemente']);
    }
    
} catch(PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Error de conexión: ' . $e->getMessage()]);
}

$conn = null;
?>
