import type { IPedido } from "domain/Pedido";

import PedidoSkeleton from "skeletons/Pedido/Index";

import Cardpadre from "../card/Cardspr";

import styles from "./styles.module.scss";

interface IPedidoTableProps {
  data: IPedido[];
}

export default function PedidoTable({ data }: IPedidoTableProps) {
  return (
    <section className={styles.actions}>
      {data.length == 0 && <PedidoSkeleton />}
      {data.map((pedido, i) => {
        return <Cardpadre key={i} pedido={pedido} />;
      })}
    </section>
  );
}
