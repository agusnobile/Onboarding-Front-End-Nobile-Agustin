import { Skeleton } from "@mui/material";

import styles from "../Pedido/pedido.module.scss";
function createArray(numero: number): number[] {
  const arrayNumeros: number[] = [];

  for (let i = 0; i < numero; i++) {
    arrayNumeros.push(i);
  }

  return arrayNumeros;
}
export default function PedidoSkeleton() {
  const array = createArray(10);

  return (
    <>
      {array.map((i, index) => {
        return (
          <div key={index} className={styles.TarjetaPadre}>
            <Skeleton height={"100%"} />
          </div>
        );
      })}
    </>
  );
}
