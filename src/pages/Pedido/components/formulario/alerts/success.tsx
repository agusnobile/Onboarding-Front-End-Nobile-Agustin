import { Snackbar, Alert, Typography } from "@mui/material";

import { InterfaceALert } from "./alertprops";

function Alerta({ setAlerta, alerta }: InterfaceALert) {
  const vertical = "top";

  const horizontal = "center";

  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      autoHideDuration={5000}
      open={alerta}
      onClose={() => setAlerta(false)}
    >
      <Alert
        severity="success"
        sx={{ width: "100%", alignItems: "center" }}
        onClose={() => setAlerta(false)}
      >
        <Typography variant="body2">
          Su <strong>Pedido </strong> fue creado!
        </Typography>
      </Alert>
    </Snackbar>
  );
}
export default Alerta;
