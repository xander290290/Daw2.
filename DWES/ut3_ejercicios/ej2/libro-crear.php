<?php

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    header('Allow: POST');
    exit('Usa el formulario de prueba para enviar los datos.');
}

$titulo = $_POST['titulo'] ?? '';
$autor = $_POST['autor'] ?? '';
$paginas = $_POST['paginas'] ?? '';

function escapar(string $valor): string
{
    return htmlspecialchars($valor, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

function valorFormulario(mixed $valor): string
{
    return is_string($valor) ? $valor : '';
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Prueba del formulario</title>
</head>
<body>
    <h1>Datos recibidos</h1>
    <p>El formulario se ha enviado correctamente mediante POST.</p>
    <dl>
        <dt>Título</dt>
        <dd><?= escapar(valorFormulario($titulo)) ?></dd>
        <dt>Autor</dt>
        <dd><?= escapar(valorFormulario($autor)) ?></dd>
        <dt>Páginas</dt>
        <dd><?= escapar(valorFormulario($paginas)) ?></dd>
    </dl>
    <p><a href="index.php">Volver al formulario</a></p>
</body>
</html>
