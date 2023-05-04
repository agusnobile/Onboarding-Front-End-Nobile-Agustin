import { ServiceBase, type ICommonOptions } from "@architecture-it/core";
import env from "@architecture-it/react-env";
import { msalInstance } from "msalInstance";
import axios from "axios";
import { addResponseInterceptorRefreshToken } from "@architecture-it/azure-b2c";

const BASE_URL = env("API") + "v1/pedido";

class _PedidoService extends ServiceBase {
  constructor() {
    super(BASE_URL);

    //util for refresh token
    addResponseInterceptorRefreshToken(this.client, msalInstance, axios);
  }
  // implementar getPersons
  getAll({ signal }: ICommonOptions) {
    console.log(BASE_URL);

    return axios.get(BASE_URL);
  }
}

const PedidoService = new _PedidoService();

export default PedidoService;
