<?php

$pizze = array(
  array(
    "nazwa" => "Margharita",
    "skladniki" => array("ser", "sos pomidorowy"),
  ),
  array(
    "nazwa" => "Carbonara",
    "skladniki" => array("ser", "sos pomidorowy", "parmazan", "jajka", "bekon"),
  ),
  array(
    "nazwa" => "Funghi",
    "skladniki" => array("ser", "sos pomidorowy", "pieczarki", "oliwki"),
  ),
  array(
    "nazwa" => "Caprese",
    "skladniki" => array("ser", "plastry pomidora"),
  ),
  array(
    "nazwa" => "Capriciosa",
    "skladniki" => array("ser", "sos pomidorowy", "pieczarki", "szynka"),
  )
);

// Wyświetlanie nazw pizz
echo "Nazwy pizz:";
echo "<br>";
for ($i = 0; $i < count($pizze); $i++) {
  echo $pizze[$i]["nazwa"] . "<br>";
}

// Dodawanie składnika do pizzy Margharita
$margharitaIndex = array_search("Margharita", array_column($pizze, "nazwa"));
if ($margharitaIndex !== false) {
  array_push($pizze[$margharitaIndex]["skladniki"], "oregano");
}

// Usuwanie składnika z pizzy Funghi
$funghiIndex = array_search("Funghi", array_column($pizze, "nazwa"));
if ($funghiIndex !== false) {
  $skladniki = $pizze[$funghiIndex]["skladniki"];
  $oliwkiIndex = array_search("oliwki", $skladniki);
  if ($oliwkiIndex !== false) {
    array_splice($skladniki, $oliwkiIndex, 1);
    $pizze[$funghiIndex]["skladniki"] = $skladniki;
  }
}

// Dodawanie nowej pizzy
$nowaPizza = array(
  "nazwa" => "Hawajska",
  "skladniki" => array("ser", "sos pomidorowy", "szynka", "ananas"),
);
array_push($pizze, $nowaPizza);

// Edytowanie składników pizzy Carbonara
$carbonaraIndex = array_search("Carbonara", array_column($pizze, "nazwa"));
if ($carbonaraIndex !== false) {
  $pizze[$carbonaraIndex]["skladniki"] = array_merge($pizze[$carbonaraIndex]["skladniki"], array("cebula", "pieczarki"));
}

// Wyświetlanie wszystkich składników
echo "Składniki wszystkich pizz:";
echo "<br>";
for ($i = 0; $i < count($pizze); $i++) {
  echo implode(", ", $pizze[$i]["skladniki"]) . "<br>";
}
// Usuwanie pizzy Caprese
$capreseIndex = -1;
foreach ($pizze as $index => $pizza) {
  if ($pizza['nazwa'] === "Caprese") {
    $capreseIndex = $index;
    break;
  }
}
if ($capreseIndex !== -1) {
  array_splice($pizze, $capreseIndex, 1);
}

// Wyświetlanie nazw pizz po usunięciu pizzy Caprese
echo "Nazwy pizz po usunięciu pizzy Caprese:";
echo "<br>";
foreach ($pizze as $pizza) {
  echo $pizza['nazwa'] . "<br>";
}

// Zmiana nazwy pizzy Carbonara na Carbonara Deluxe
$carbonaraIndex2 = -1;
foreach ($pizze as $index => $pizza) {
  if ($pizza['nazwa'] === "Carbonara") {
    $carbonaraIndex2 = $index;
    break;
  }
}
if ($carbonaraIndex2 !== -1) {
  $pizze[$carbonaraIndex2]['nazwa'] = "Carbonara Deluxe";
}

// Wyświetlanie wszystkich składników w jednym ciągu
echo "Składniki wszystkich pizz w jednym ciągu:";
echo "<br>";
foreach ($pizze as $pizza) {
  echo implode(", ", $pizza['skladniki']) . "<br>";
}

// Sprawdzenie czy pizza Hawajska zawiera składnik ananas
$hawajskaIndex = -1;
foreach ($pizze as $index => $pizza) {
  if ($pizza['nazwa'] === "Hawajska") {
    $hawajskaIndex = $index;
    break;
  }
}
if ($hawajskaIndex !== -1) {
  $hawajskaSkladniki = $pizze[$hawajskaIndex]['skladniki'];
  $czyZawieraAnanas = in_array("ananas", $hawajskaSkladniki);
  echo "Czy pizza Hawajska zawiera składnik ananas? " . ($czyZawieraAnanas ? "Tak" : "Nie") . "<br>";
}

// Sprawdzenie ilości składników w pizzy Capriciosa
$capriciosaIndex = -1;
foreach ($pizze as $index => $pizza) {
  if ($pizza['nazwa'] === "Capriciosa") {
    $capriciosaIndex = $index;
    break;
  }
}
if ($capriciosaIndex !== -1) {
  $capriciosaSkladniki = $pizze[$capriciosaIndex]['skladniki'];
  $iloscSkladnikow = count($capriciosaSkladniki);
  echo "Ilość składników w pizzy Capriciosa: " . $iloscSkladnikow . "<br>";
}
?>