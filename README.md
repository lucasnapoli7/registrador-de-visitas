
# Registrador De Visitas

<a href="https://registrador-de-visitas.vercel.app/" target="_blank">Demo</a> del proyecto

#### Puntos a tener en cuenta a la hora de hacer el proyecto:
- DNI del visitante. Con este dato se consulta el servicio de RENAPER. Debe ser un servicio de angular que devuelva los datos hardcodeados (ver mock “Renaper” en la sección de recursos) y si lo encuentra se obtiene el Nombre y Apellido. 
- Nro. de tarjeta de ingreso (numérico)
- Fecha de ingreso (toma la actual)
- Hora de ingreso (toma la actual)
- Visita a: (estos datos deben ser dependientes, según el sector que se elige se deben mostrar las personas que pertenezcan al mismo - ver grilla de personas en sección de recursos): 
    > Sector 
    > Nombre y Apellido
- Debe tener un listado con el historial de ingresos. Hadcodear un listado inicial.
- Botón ingresar. Debe agregar la nueva visita al historial. Agregando todas las validaciones del formulario que crea necesarias.
- En el listado se debe poder eliminar un ingreso, mostrando previamente un mensaje de confirmación.

## Recursos
#### Json renaper:
  {
    "apellido":"string",
    "nombres":"string",
    "fechaNacimiento":"string",
    "dni":"string"
  }

#### Personas:
{ nombre:"Daniel de Almeida", sector: "RRHH"},
{ nombre:"Dario Riva", sector: "QA"},
{ nombre:"Diego Pellegrini", sector: "COMERCIAL"},
{ nombre:"Federico Musso", sector: "RRHH"},
{ nombre:"Laura Rodriguez", sector: "QA"},
{ nombre:"Lautaro Ariel Basanta", sector: "COMERCIAL"},
{ nombre:"Manuel Castello", sector: "RRHH"},
{ nombre:"Paula Barrios", sector: "QA"},
{ nombre:"Rocio Diaz", sector: "COMERCIAL"},
{ nombre:"Sebastian Parasis", sector: "RRHH"},
{ nombre:"Walter Marcote", sector: "QA"},
{ nombre:"Guillermo Balcarcel", sector: "COMERCIAL"},
{ nombre:"Esteban Gawron", sector: "RRHH"},
{ nombre:"Enzo Peddini", sector: "QA"},
{ nombre:"Andrea Russo", sector: "COMERCIAL"},
{ nombre:"Adrian Zarate", sector: "RRHH"},
{ nombre:"Melisa Yune", sector: "QA"},
{ nombre:"Nicolas Russmann", sector: "COMERCIAL"},
{ nombre:"Galo Trillo", sector: "RRHH"},
{ nombre:"Diego Pellegrini", sector: "QA"}
