const turnoModel = require("../models/turno");
const UserModel = require("../models/user");

const turnoController = {

     //MOSTRAR TODOS TURNOS 
  mostrarTurnos: async (req, res) => {
    
    const turnos = await turnoModel.find();

    if (turnos[0] === undefined) {
      return res.json({ message: "No existen turnos" });
    } else {
      return res.json({ turnos });
    }
  },

  //MOSTART TURNOS DEL USUARIO
  mostrarTurnosId: async (req, res) => {
    const { _id } = req.params;

    const turnos = await turnoModel.find({ usuario: _id });

    if (turnos[0] === undefined) {
      return res.json({ message: "No tiene turnos" });
    } else {
      return res.json({ turnos });
    }
  },
  //CARGAR TURNOS
  cargarTurnos: async (req, res) => {
    const {
      usuario,
      hora,
      fecha,
      descripcion,
      marca,
      estado,
      dispositivo,
      precio,
    } = req.body;
    console.log(req.body);
    const existeTurno = await turnoModel.find({ fecha, hora });
    if (existeTurno[0] === undefined) {
      const newTurno = new turnoModel({ usuario, fecha, hora });
      newTurno.save();
      return res.json({ newTurno });
    } else {
      return res.json({ message: "No esta disponible esta hora o fecha" });
    }
  },

  editarCarrito: async (req, res) => {
    const {
      nombre,
      imagenNueva,
      descripcion,
      stock,
      _id,
      precio,
      tipo,
    } = req.body;

    const producto = await ProductoModel.findByIdAndUpdate(_id, {
      nombre,
      $push: { imagen: imagenNueva },
      descripcion,
      stock,
      precio,
      tipo,
    });

    console.log(producto);
    if (producto) {
      return res.json({ message: "producto actualizado" });
    } else {
      return res.json({ message: "producto no encontrado" });
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
