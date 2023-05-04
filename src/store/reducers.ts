import { combineReducers } from "@reduxjs/toolkit";
import person from "store/features/person";
import alertReducer from "store/features/alert";

import pedido from "./features/pedido";

export const reducers = combineReducers({ person, alertReducer, pedido });
