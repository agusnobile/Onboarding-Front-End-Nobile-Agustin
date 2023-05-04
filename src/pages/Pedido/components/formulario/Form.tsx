import axios from "axios";
import { useState } from "react";
import { Button, Input } from "@architecture-it/stylesystem";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues, useForm } from "react-hook-form";

import styles from "../formulario/form.module.scss";

import Alerta from "./alerts/success";

export default function FormularioNuevo() {
  const [alerta, setAlerta] = useState(false);

  const validationSchema = yup.object({
    cuentaCorriente: yup
      .number()
      .typeError("Ingrese caracteres numericos")
      .required("Campo requerido"),
    codigoDeContratoInterno: yup
      .number()
      .typeError("Ingrese caracteres numericos")
      .required("Campo requerido"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  ("http://localhost:5000/api/v1/Pedido");
  const handSub = async (data: FieldValues) => {
    const response = await axios({
      method: "post",

      url: "http://localhost:5000/api/v1/Pedido",
      data: {
        cuentaCorriente: data.cuentaCorriente.toString(),

        codigoDeContratoInterno: data.codigoDeContratoInterno.toString(),
      },
    });

    setAlerta(true);
    // eslint-disable-next-line no-console
    console.log(data.cuentaCorriente.toString());

    // eslint-disable-next-line no-console
    console.log(response);
  };

  return (
    <>
      {alerta && <Alerta alerta={alerta} setAlerta={setAlerta} />}
      <div className={styles.App}>
        <form
          className={styles.containerForm}
          onSubmit={handleSubmit((data) => {
            handSub(data);
          })}
        >
          <div className={styles.formControl}>
            <Input
              label="Cuenta Corriente"
              placeholder="Cuenta Corriente"
              type="text"
              {...register("cuentaCorriente", { required: true })}
              error={Boolean(errors.cuentaCorriente)}
              helperText={errors.cuentaCorriente ? (errors.cuentaCorriente.message as string) : ""}
            />
          </div>
          <div className={styles.formControl}>
            <Input
              label="Codigo De ContratoInterno"
              placeholder="Codigo De Contrato Interno"
              type="text"
              {...register("codigoDeContratoInterno", { required: true })}
              error={Boolean(errors.codigoDeContratoInterno)}
              helperText={
                errors.codigoDeContratoInterno
                  ? (errors.codigoDeContratoInterno.message as string)
                  : ""
              }
            />
          </div>
          <div className={styles.formControl}>
            <Button
              color="primary"
              style={{ display: "block" }}
              text="Crear"
              type="submit"
              variant="contained"
            />
          </div>
        </form>
      </div>
    </>
  );
}
