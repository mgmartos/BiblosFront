import { LibroDTO } from "../Libros/LibroDTO";

export function formatearFecha(date: Date) {
    date = new Date(date);
    const formato = new Intl.DateTimeFormat('en', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
    
    const [
        {value: month},,
        {value: day},,
        {value: year}
    ] = formato.formatToParts(date);
  
    return `${year}-${month}-${day}`;
  }

  export function MapLibros(resultadoLibros:LibroDTO[]) : LibroDTO[]
  {
    for (var _i = 0; _i < resultadoLibros.length; _i++) 
    {
      let Clibro = JSON.stringify(resultadoLibros[_i]);
      let libro = JSON.parse(Clibro);          
      resultadoLibros[_i].Autordto = libro.autor;
      resultadoLibros[_i].Editorialdto = libro.editorial;
      resultadoLibros[_i].Temadto = libro.tema;
    }
    return resultadoLibros;
  }

  export function MapLibro(Libro:LibroDTO) : LibroDTO
  {
   
      let Clibro = JSON.stringify(Libro);
      let libro = JSON.parse(Clibro);          
      Libro.Autordto = libro.autor;
      Libro.Editorialdto = libro.editorial;
      Libro.Temadto = libro.tema;
 
    return Libro;
  }