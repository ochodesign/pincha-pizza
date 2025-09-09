<?php
// Zona horaria Argentina
date_default_timezone_set('America/Argentina/Buenos_Aires');

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

require_once __DIR__ . '/config.php';

try {
    $conn = new PDO("mysql:host=$host;dbname=$db", $user, $pass);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // Visitas de hoy
    $stmt = $conn->prepare("SELECT COUNT(DISTINCT ip) as visitantes_hoy FROM visitas WHERE DATE(fecha_visita) = CURDATE()");
    $stmt->execute();
    $visitantesHoy = $stmt->fetch(PDO::FETCH_ASSOC)['visitantes_hoy'];
    
    // Total de visitas únicas
    $stmt = $conn->prepare("SELECT COUNT(DISTINCT ip) as total_visitantes FROM visitas");
    $stmt->execute();
    $totalVisitantes = $stmt->fetch(PDO::FETCH_ASSOC)['total_visitantes'];
    
    // Total de visitas (incluye repetidas)
    $stmt = $conn->prepare("SELECT COUNT(*) as total_visitas FROM visitas");
    $stmt->execute();
    $totalVisitas = $stmt->fetch(PDO::FETCH_ASSOC)['total_visitas'];
    
    // Visitas de la última semana
    $stmt = $conn->prepare("SELECT COUNT(DISTINCT ip) as visitantes_semana FROM visitas WHERE fecha_visita >= DATE_SUB(CURDATE(), INTERVAL 7 DAY)");
    $stmt->execute();
    $visitantesSemana = $stmt->fetch(PDO::FETCH_ASSOC)['visitantes_semana'];
    
    // Visitas del último mes
    $stmt = $conn->prepare("SELECT COUNT(DISTINCT ip) as visitantes_mes FROM visitas WHERE fecha_visita >= DATE_SUB(CURDATE(), INTERVAL 30 DAY)");
    $stmt->execute();
    $visitantesMes = $stmt->fetch(PDO::FETCH_ASSOC)['visitantes_mes'];
    
    // Estadísticas por día de los últimos 7 días
    $stmt = $conn->prepare("
        SELECT 
            DATE(fecha_visita) as fecha,
            COUNT(DISTINCT ip) as visitantes
        FROM visitas 
        WHERE fecha_visita >= DATE_SUB(CURDATE(), INTERVAL 7 DAY)
        GROUP BY DATE(fecha_visita)
        ORDER BY fecha DESC
    ");
    $stmt->execute();
    $visitasPorDia = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    echo json_encode([
        'success' => true,
        'estadisticas' => [
            'visitantes_hoy' => intval($visitantesHoy),
            'total_visitantes' => intval($totalVisitantes),
            'total_visitas' => intval($totalVisitas),
            'visitantes_semana' => intval($visitantesSemana),
            'visitantes_mes' => intval($visitantesMes),
            'visitas_por_dia' => $visitasPorDia
        ]
    ]);
    
} catch(PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Error de conexión: ' . $e->getMessage()]);
}

$conn = null;
?>
