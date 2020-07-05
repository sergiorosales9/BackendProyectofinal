const UserModel = require("../models/user");
const nodemailer = require("nodemailer");

const enviarEmail = {
  emailVenta: async (req, res, next) => {
    const { usuario } = req.body;
    const venta = req.venta;
    // sirve para enviar el email con la venta realizada al correo del usuario
    //buscando el email del usuario
    const user = await UserModel.findOne({ _id: usuario });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "zerotechnologiessa@gmail.com",
        pass: "123456789zero",
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: " <zerotechnologiessa@gmail.com>", // sender address
      to: user.email, // list of receivers
      subject: "Zerotechnologies", // Subject line
      text: "Compra", // plain text body
      html: `<table style="max-width: 600px; padding: 10px; margin:0 auto; border-collapse: collapse;">

                                    <td style="background-color: #ecf0f1; text-align: left; padding: 0">
                                        <a href="">
                                            <img width="20%" style="display:block; margin: 1.5% 3%" src="https://s16.postimg.org/arsbkbzlh/poketrainers.png">
                                        </a>
                                    </td>
                                </tr>
                            
                                <tr>
                                    <td style="padding: 0">
                                        <img style="padding: 0; display: block" src="https://s19.postimg.org/y5abc5ryr/alola_region.jpg" width="100%">
                                    </td>
                                </tr>
                                
                                <tr>
                                    <td style="background-color: #ecf0f1">
                                        <div style="color: #34495e; margin: 4% 10% 2%; text-align: justify;font-family: sans-serif">
                                            <h2 style="color: #e67e22; margin: 0 0 7px">Hola ${user.username}!</h2>
                                            <p style="margin: 2px; font-size: 15px">
                                               Zerotecnologies te agradece por tu compra .<br>
                                                Los productos se van a estar enviando .
                                                Elegiste ${venta.tipoEnvio}<br>
                                                <br>La compra se realizo a nombre de ${venta.nombre} ${venta.apellido}<br>
                                                <br>
                                                El medio de pago elegido fue  ${venta.efectivo}<br>
                                                
                                               Este es el resumen de su compra:</p>
                                            <ul style="font-size: 15px;  margin: 10px 0">
                                                <li>Direccion de envio: 
                                                ${venta.direccion_1}</li>
                                                <li>Pais : ${venta.pais}</li>
                                                <li>Provincia : ${venta.prov}</li>
                                                <li>El numero de contacto es : ${venta.telefono}</li>
                                                <li>El subtotal de la venta es : ${venta.subtotal}</li>
                                                <li>El total de la venta es : ${venta.total}</li>
                                            </ul>
                                          
                                            <div style="width: 100%; text-align: center">
                                                <a style="text-decoration: none; border-radius: 5px; padding: 11px 23px; color: white; background-color: #3498db" href="">Ir a la página</a>	
                                            </div>
                                            <p style="color: #b3b3b3; font-size: 12px; text-align: center;margin: 30px 0 0">Zerotecnolgias</p>
                                        </div>
                                    </td>
                                </tr>
                            </table>">
                            </a>
                        </td>
                    </tr>
                
                    <tr>
                        <td style="padding: 0">
                            <img style="padding: 0; display: block" src="https://s19.postimg.org/y5abc5ryr/alola_region.jpg" width="100%">
                        </td>
                    </tr>
                    
                    <tr>
                        <td style="background-color: #ecf0f1">
                            <div style="color: #34495e; margin: 4% 10% 2%; text-align: justify;font-family: sans-serif">
                                <h2 style="color: #e67e22; margin: 0 0 7px">Hola Poketrainer!</h2>
                                <p style="margin: 2px; font-size: 15px">
                                    Somos la comunidad Poketrainers Trujillo, una comunidad de Pokémon VGC que se encuentra en la ciudad de Trujillo Perú.<br>
                                    Estando próxima la salida de Pokémon Sol y Luna en la comunidad estamos realizando una serie de actividades que nos preparara para su llegada, así que los invitamos a formar parte de la comunidad y a acompañarnos en esta nueva aventura en la región de Alola, donde muchos pokemon y aventuras nos esperan!<br>
                                    Entre las actividades tenemos:</p>
                                <ul style="font-size: 15px;  margin: 10px 0">
                                    <li>Batallas amistosas.</li>
                                    <li>Torneos Oficiales.</li>
                                    <li>Intercambios de Pokémon.</li>
                                    <li>Actividades de integración.</li>
                                    <li>Muchas sorpresas más.</li>
                                </ul>
                                <div style="width: 100%;margin:20px 0; display: inline-block;text-align: center">
                                    <img style="padding: 0; width: 200px; margin: 5px" src="https://s19.postimg.org/np3e1b7pv/premier.jpg">
                                    <img style="padding: 0; width: 200px; margin: 5px" src="https://s19.postimg.org/ejzml6toz/banner_hoenn.png">
                                </div>
                                <div style="width: 100%; text-align: center">
                                    <a style="text-decoration: none; border-radius: 5px; padding: 11px 23px; color: white; background-color: #3498db" href="https://www.facebook.com/PokemonTrujillo/">Ir a la página</a>	
                                </div>
                                <p style="color: #b3b3b3; font-size: 12px; text-align: center;margin: 30px 0 0">Poketrainers Trujillo 2016</p>
                            </div>
                        </td>
                    </tr>
                </table>`, // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

    return res.json({ message: "compra enviada a su email" });
  },
  emailUser: async (req, res, next) => {
    // envia la confirmacion de que se creo el usuario
    const { username, email } = req.body;

    // sirve para enviar el email con la venta realizada al correo del usuario
    //buscando el email del usuario

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "zerotechnologiessa@gmail.com",
        pass: "123456789zero",
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: " <zerotechnologiessa@gmail.com>", // sender address
      to: email, // list of receivers
      subject: "Zerotechnologies", // Subject line
      text: "Bienvenida", // plain text body
      html: `<table style="max-width: 600px; padding: 10px; margin:0 auto; border-collapse: collapse;">

                                    <td style="background-color: #ecf0f1; text-align: left; padding: 0">
                                        <a href="">
                                            <img width="20%" style="display:block; margin: 1.5% 3%" src="https://s16.postimg.org/arsbkbzlh/poketrainers.png">
                                        </a>
                                    </td>
                                </tr>
                            
                                <tr>
                                    <td style="padding: 0">
                                        <img style="padding: 0; display: block" src="https://s19.postimg.org/y5abc5ryr/alola_region.jpg" width="100%">
                                    </td>
                                </tr>
                                
                                <tr>
                                    <td style="background-color: #ecf0f1">
                                        <div style="color: #34495e; margin: 4% 10% 2%; text-align: justify;font-family: sans-serif">
                                            <h2 style="color: #e67e22; margin: 0 0 7px">Bienvenido ${username}!</h2>
                                            <p style="margin: 2px; font-size: 15px">
                                               Zerotecnologies te agradece unirte a nuestra pagina .<br>
                                                Tenemos las mejores marcas del mercado.
                                               
                                                
                                               Estamos ubicados en </p>
                                            <ul style="font-size: 15px;  margin: 10px 0">
                                                <li>Direccion : 
                                                <a href="https://g.page/RollingCodeSchool?share"><span>Gral. Paz 576, T4000 San Miguel de Tucumán, Tucumán</span><a></li>
                                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.1022202999156!2d-65.20939048495666!3d-26.83670088316041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d3ad7f30f1d%3A0xf8606cd659b8e3e4!2sRollingCode%20School!5e0!3m2!1ses-419!2sar!4v1593940528858!5m2!1ses-419!2sar" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                                                <li>Nuestro email es : zerotecnoligas@gmail.com</li>
                                               
                                            </ul>
                                          
                                            <div style="width: 100%; text-align: center">
                                                <a style="text-decoration: none; border-radius: 5px; padding: 11px 23px; color: white; background-color: #3498db" href="">Ir a la página</a>	
                                            </div>
                                            <p style="color: #b3b3b3; font-size: 12px; text-align: center;margin: 30px 0 0">Zerotecnolgias</p>
                                        </div>
                                    </td>
                                </tr>
                            </table>">
                            </a>
                        </td>
                    </tr>
                
                    <tr>
                        <td style="padding: 0">
                            <img style="padding: 0; display: block" src="https://s19.postimg.org/y5abc5ryr/alola_region.jpg" width="100%">
                        </td>
                    </tr>
                    
                    <tr>
                        <td style="background-color: #ecf0f1">
                            <div style="color: #34495e; margin: 4% 10% 2%; text-align: justify;font-family: sans-serif">
                                <h2 style="color: #e67e22; margin: 0 0 7px">Hola Poketrainer!</h2>
                                <p style="margin: 2px; font-size: 15px">
                                    Somos la comunidad Poketrainers Trujillo, una comunidad de Pokémon VGC que se encuentra en la ciudad de Trujillo Perú.<br>
                                    Estando próxima la salida de Pokémon Sol y Luna en la comunidad estamos realizando una serie de actividades que nos preparara para su llegada, así que los invitamos a formar parte de la comunidad y a acompañarnos en esta nueva aventura en la región de Alola, donde muchos pokemon y aventuras nos esperan!<br>
                                    Entre las actividades tenemos:</p>
                                <ul style="font-size: 15px;  margin: 10px 0">
                                    <li>Batallas amistosas.</li>
                                    <li>Torneos Oficiales.</li>
                                    <li>Intercambios de Pokémon.</li>
                                    <li>Actividades de integración.</li>
                                    <li>Muchas sorpresas más.</li>
                                </ul>
                                <div style="width: 100%;margin:20px 0; display: inline-block;text-align: center">
                                    <img style="padding: 0; width: 200px; margin: 5px" src="https://s19.postimg.org/np3e1b7pv/premier.jpg">
                                    <img style="padding: 0; width: 200px; margin: 5px" src="https://s19.postimg.org/ejzml6toz/banner_hoenn.png">
                                </div>
                                <div style="width: 100%; text-align: center">
                                    <a style="text-decoration: none; border-radius: 5px; padding: 11px 23px; color: white; background-color: #3498db" href="https://www.facebook.com/PokemonTrujillo/">Ir a la página</a>	
                                </div>
                                <p style="color: #b3b3b3; font-size: 12px; text-align: center;margin: 30px 0 0">Poketrainers Trujillo 2016</p>
                            </div>
                        </td>
                    </tr>
                </table>`, // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

    return res.json({ message: "compra enviada a su email" });
  },
  emailPassword: (req, res, next) => {
    // envia una contraseña nueva al correo del usuario
  },
  emailTurno: async (req, res, next) => {
    const turno = req.turno;
    // sirve para enviar el email con la venta realizada al correo del usuario
    const {
      fecha,
      descripcion,
      servicio,
      hora,
      precio,
      marca,
      usuario,
    } = turno;
    const user = await UserModel.findOne({ _id: usuario });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "zerotechnologiessa@gmail.com",
        pass: "123456789zero",
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: " <zerotechnologiessa@gmail.com>", // sender address
      to: user.email, // list of receivers
      subject: "Zerotechnologies", // Subject line
      text: "Turno solicitado ", // plain text body
      html: `<table style="max-width: 600px; padding: 10px; margin:0 auto; border-collapse: collapse;">

                                    <td style="background-color: #ecf0f1; text-align: left; padding: 0">
                                        <a href="">
                                            <img width="20%" style="display:block; margin: 1.5% 3%" src="https://s16.postimg.org/arsbkbzlh/poketrainers.png">
                                        </a>
                                    </td>
                                </tr>
                            
                                <tr>
                                    <td style="padding: 0">
                                        <img style="padding: 0; display: block" src="https://s19.postimg.org/y5abc5ryr/alola_region.jpg" width="100%">
                                    </td>
                                </tr>
                                
                                <tr>
                                    <td style="background-color: #ecf0f1">
                                        <div style="color: #34495e; margin: 4% 10% 2%; text-align: justify;font-family: sans-serif">
                                            <h2 style="color: #e67e22; margin: 0 0 7px">Solicitaste un turno zerotecnologias!</h2>
                                            <p style="margin: 2px; font-size: 15px">
                                               Zerotecnologies te avisa que tienes un turno para ${servicio}<br>
                                               <br>
                                                Para nosotros nuestros clientes son los primeros <br>
                                               Este es nuestro contacto y direccion:</p>
                                            <ul style="font-size: 15px;  margin: 10px 0">
                                                <li>Direccion : 
                                                <a href="https://g.page/RollingCodeSchool?share"><span>Gral. Paz 576, T4000 San Miguel de Tucumán, Tucumán</span><a></li>
                                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.1022202999156!2d-65.20939048495666!3d-26.83670088316041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d3ad7f30f1d%3A0xf8606cd659b8e3e4!2sRollingCode%20School!5e0!3m2!1ses-419!2sar!4v1593940528858!5m2!1ses-419!2sar" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                                                <li>Nuestro email es : zerotecnoligas@gmail.com</li>
                                                
                                            </ul>
                                            <br>
                                           Lo esperamos la fecha ${fecha} a horas ${hora} <br>
                                           <br>
                                           Para nosotros nuestros clientes son los primeros <br>
                                            <div style="width: 100%; text-align: center">
                                                <a style="text-decoration: none; border-radius: 5px; padding: 11px 23px; color: white; background-color: #3498db" href="">Ir a la página</a>	
                                            </div>
                                            <p style="color: #b3b3b3; font-size: 12px; text-align: center;margin: 30px 0 0">Zerotecnolgias</p>
                                        </div>
                                    </td>
                                </tr>
                            </table>">
                            </a>
                        </td>
                    </tr>
                
                    <tr>
                        <td style="padding: 0">
                            <img style="padding: 0; display: block" src="https://s19.postimg.org/y5abc5ryr/alola_region.jpg" width="100%">
                        </td>
                    </tr>
                    
                    <tr>
                        <td style="background-color: #ecf0f1">
                            <div style="color: #34495e; margin: 4% 10% 2%; text-align: justify;font-family: sans-serif">
                                <h2 style="color: #e67e22; margin: 0 0 7px">Gracias!</h2>
                                <p style="margin: 2px; font-size: 15px">
                               
                                <div style="width: 100%;margin:20px 0; display: inline-block;text-align: center">
                                    <img style="padding: 0; width: 200px; margin: 5px" src="https://s19.postimg.org/np3e1b7pv/premier.jpg">
                                    <img style="padding: 0; width: 200px; margin: 5px" src="https://s19.postimg.org/ejzml6toz/banner_hoenn.png">
                                </div>
                                <div style="width: 100%; text-align: center">
                                    <a style="text-decoration: none; border-radius: 5px; padding: 11px 23px; color: white; background-color: #3498db" href="">Ir a la página</a>	
                                </div>
                                <p style="color: #b3b3b3; font-size: 12px; text-align: center;margin: 30px 0 0">Zerotecnologias 2020</p>
                            </div>
                        </td>
                    </tr>
                </table>`, // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

    return res.json({ message: "compra fue enviada  a su email" });
  },
  emailRecordatorio: (res, req, next) => {
    // envia recordatorio del turno un dia antes
  },
};

module.exports = enviarEmail;
