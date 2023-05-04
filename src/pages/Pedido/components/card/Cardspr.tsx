import { IPedido } from "domain/Pedido";

import styles from "./styles.module.scss";
import getPedidoIconAndStyle from "./IconoEstado";

interface ICard {
  pedido: IPedido;
}

export default function Cardpadre({ pedido }: ICard) {
  const { icon, style } = getPedidoIconAndStyle(pedido.estadoDelPedido.descripcion);

  return (
    <div className={styles.TarjetaPadre}>
      <div className={styles.clase1}>
        <p>Pedido</p>
        <p>#{pedido.numeroDePedido}</p>
      </div>
      <div className={`${styles.clase2} ${style}`}>
        <img className={styles.estadoimagen} src={icon} />
        <p className={styles.estado}>{pedido.estadoDelPedido.descripcion}</p>
      </div>
      <div className={styles.clase1}>
        <p>Cuenta Corriente {pedido.cuentaCorriente}</p>
        <p>{pedido.cuando}</p>
      </div>
    </div>
  );
}
