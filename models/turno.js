

const TurnoShema = mongoose.Schema({
    usuario: {
      
      type:mongoose.Schema.Types.ObjectId,
      required: true,
      ref:'User'
      },
      hora: {
        type: String,
        trim: true,
      },
      fecha: {
        type: String,
        trim: true,
      },
        descripcion: {
        type: String,
        
        trim: true
      },
        marca: {
        type: String,
       
        trim: true
      },
       estado: {
        type: String,
        
        trim: true
      },
      dispositivo: {
        type: String,
        
        trim: true
      },
      precio: {
        type: String,
        
        trim: true
      }
});

const Turno = mongoose.model("Turno", TurnoShema);
module.exports= Turno;