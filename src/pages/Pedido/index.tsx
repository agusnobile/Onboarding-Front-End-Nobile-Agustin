import usePedido from "app/pedido/use-pedido";

import PedidoTable from "./components/Pedido";
import FormularioNuevo from "./components/formulario/Form";

export default function Pedido() {
  const pedido = usePedido();

  console.log(pedido);

  return (
    <div>
      <h1>Crear Pedido</h1>
      <FormularioNuevo />
      <h2>Lista de Pedidos</h2>
      <PedidoTable data={pedido} />
    </div>
  );
}
