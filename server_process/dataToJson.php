<?php
$txt = file_get_contents('movie.txt');
$rows = explode("\n", $txt);

$data = [];

foreach ($rows as $row) {
    $title = explode('[', $row);
    $data[] = $title[0];
}

$fp = fopen('movie.json', 'w');
fwrite($fp, json_encode($data));
fclose($fp);
