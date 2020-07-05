const turnoModel = require("../models/turno");
const UserModel = require("../models/user");

const turnoController = {

     //MOSTRAR TODOS TURNOS 
  mostrarTurnos: async (req, res) => {
    
    const turnos = await turnoModel.find().populate("usuario");

    if (turnos[0] === undefined) {
      return res.json({ message: "No existen turnos" });
    } else {
      return res.json({ turnos });
    }
  },

  //MOSTART TURNOS DEL USUARIO
  mostrarTurnosId: async (req, res) => {
    const { _id } = req.params;

    const turnos = await turnoModel.find({ usuario: _id }).populate("usuario");

    if (turnos[0] === undefined) {
      return res.json({ message: "No tiene turnos" });
    } else {
      return res.json({ turnos });
    }
  },
  //CARGAR TURNOS
  cargarTurnos: async (req, res, next) => {
    const {
      usuario,
      hora,
      fecha,
      descripcion,
      marca,
      estado,
      dispositivo,
      precio,
      servicio
    } = req.body;
   
    const existeTurno = await turnoModel.find( { $and : [ {fecha:fecha} , {hora:hora} , {servicio:servicio}] });
    if (existeTurno[0] === undefined) {
      const newTurno = new turnoModel({ usuario, fecha, hora,servicio, descripcion ,marca , estado, dispositivo, precio});
      newTurno.save();
      //cargar en la persona 
      const user = await UserModel.findOneAndUpdate({_id:usuario}, {$push : {turno:newTurno._id }})
      res.json({ newTurno })
      req.turno=newTurno
      next()
      return ;
    } else {
      return res.json({ message: "No esta disponible esta hora o fecha" });
    }
  },
  
 

  //ELIMINAR TURNOS
  eliminarTurnos: async (req, res) => {
    const { _id } = req.params;
    const turno = await turnoModel.findByIdAndDelete(_id);
    if (turno) {
      return res.json({ message: "Turno elminado" });
    } else {
      return res.json({ message: "turno no encontrado" });
    }
  },
};

module.exports = turnoController;
