import IconoCreado from "../../../../assets/CreadoIcon.svg";
import IconoAsignado from "../../../../assets/AsignadoIcon.svg";
import IconoCerrado from "../../../../assets/Vector-Cerrado.svg";
import IconoRechazado from "../../../../assets/Vector.svg";

import styles from "./styles.module.scss";

export default function getPedidoIconAndStyle(estadoDelPedido: any) {
  let icon = "";
  let style = "";

  switch (estadoDelPedido) {
    case "CREADO":
      icon = IconoCreado;
      style = styles.Creado; // Aquí se usa la variable styles definida en el import
      break;
    case "ASIGNADO":
      icon = IconoAsignado;
      style = styles.Asignado;
      break;
    case "CERRADO":
      icon = IconoCerrado;
      style = styles.Cerrado;
      break;
    case "RECHAZADO":
      icon = IconoRechazado;
      style = styles.Rechazado;
      break;
    default:
      icon = IconoRechazado;
      style = styles.Rechazado;
      break;
  }

  return { icon, style };
}
