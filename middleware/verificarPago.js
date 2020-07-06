const mercadopago = require('mercadopago')


const verificarPago =async (req, res, next) => {
  console.log(req.body)
  const preferences = {
    // Esta parte de Items vas a tener que actualizarla con la info de tu carrito de verdad, aquí está hardcoded.
    items: [
      {
        id: 123,
        title: "Mi producto",
        unit_price: 100,
        quantity: 1,
      },
    ],
   payment_method:'credit_card',
    back_urls: {
      // Aquí poné las urls q crearon ustedes
      success: "http://localhost:3000/payment-success",
      failure: "http://localhost:3000/payment-failure",
      pending: "http://localhost:3000/payment-pending"
    },
    auto_return: "approved",
  };
 
    const payment = await mercadopago.preferences.create(preferences);
    return res.json({redirectUrl: payment.body.init_point});
 


















  // //veo si el pago esta bien
  // const { efectivo, tarjeta } = req.body;
  // //si efectivo es true entoces no se envia tarjeta
  // if (efectivo) {
  //   //mando el estado del pago como exitoso
  //   req.estado = "exitoso";
  //   return next();
  // } else {
  //   // se paga con tarjeta y tengo que enviar los datos a mecadopago para que me verifique
  //   //en este caso le daremos exitoso tambien
  //   // const estado = "exitoso";

  //   const estado = "rechazado";
  //   if (estado === "exitoso") {
  //     req.estado = estado;
  //     next();
  //     return;
  //   } else if (estado === "rechazado") {
  //     req.estado = estado;
  //     next();

  //     // req.json({message:"error en el metodo de pago"})

  //     return;
  //   }
  // }
};
module.exports = verificarPago;
