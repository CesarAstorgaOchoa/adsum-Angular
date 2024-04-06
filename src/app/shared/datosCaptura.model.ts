export class datosCapturaModel{

    idContacto: String
    NombreCompleto: String  | null | undefined
    NombreEmpresa: String  | null | undefined
    CorreoElectronico: String  | null | undefined
    Telefono: String  | null | undefined
    Categoria: String  | null | undefined
    Mensaje: String  | null | undefined
    
    constructor(
       idContacto: String,
       NombreCompleto: String  | null | undefined, 
       NombreEmpresa: String  | null | undefined, 
       CorreoElectronico: String  | null | undefined, 
       Telefono: String  | null | undefined, 
       Categoria: String  | null | undefined, 
       Mensaje: String  | null | undefined){

        this.idContacto = idContacto
        this.NombreCompleto = NombreCompleto
        this.NombreEmpresa = NombreEmpresa
        this.CorreoElectronico = CorreoElectronico
        this.Telefono = Telefono
        this.Categoria = Categoria
        this.Mensaje = Mensaje
    }


    
}