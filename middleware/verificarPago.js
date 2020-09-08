const verificarPago = (req, res, next) => {
  //veo si el pago esta bien
  const { efectivo, tarjeta } = req.body;
  //si efectivo es true entoces no se envia tarjeta
  if (efectivo) {
    //mando el estado del pago como exitoso
    req.estado = "exitoso";
    return next();
  } else {
    // se paga con tarjeta y tengo que enviar los datos a mecadopago para que me verifique
    //en este caso le daremos exitoso tambien
    // const estado = "exitoso";

    const estado = "rechazado";
    if (estado === "exitoso") {
      req.estado = estado;
      next();
      return;
    } else if (estado === "rechazado") {
      req.estado = estado;
      next();

      // req.json({message:"error en el metodo de pago"})

      return;
    }
  }
};
module.exports = verificarPago;
