<?php 		

  $fechaInicio = new DateTime("Oct. 2022");
  $fechaFin = new DateTime("M. Y");
  $intervalo = $fechaInicio->diff($fechaFin);
  $html = $fechaInicio->format("M. Y"	) . " - " . $fechaFin->format("M. Y") . " · " . ($intervalo->y == 0 ?  $intervalo->m." meses" : $intervalo->y ." año " . $intervalo->m." meses");
  echo $html;

?>