
export interface LibroDTO {
    id: number;
    titulo: string;
    autorId: number;
    Autordto :AutorDTO;  
/*     nombreAutor : string;
    nombre : string;
    apellidos: string; */
    editorialId:number;
/*     nombreEditorial: string;
    urlEditorial: string; */
    Editorialdto:EditorialDTO;
    temaId: number;
/*     nombreTema: string; */
    Temadto:TemaDTO;
    calificacion: number;
    paginas: number;
    comentario: string;
    fecha: string;
}

export interface AutorDTO {
    id: number;
    nombreAutor: string;
    nombre: string;
    apellidos: string;
}


export interface EditorialDTO{
    id: number;
    nombreEditorial: string;
    urlEditorial: string;

}


export interface TemaDTO{
    id: number;
    nombreTema: string;
}
