// Aqui adentro vamos a declarar constantes, variables, lo que sea de forma GLOBAL 
/* lo hacemos con el objeto global PROCESS  que esta corriendo a lo largo de toda la app de node y 
 tambien es actualizado dependiendo del enviroment donde esta corriedo */


// ===================================
// Puerto
// ===================================
process.env.PORT = process.env.PORT || 3000;

// quiero modificar el process.env.port diciendo que va a ser igual ya que esa variable del puerto existe pero localmente no la tenemos por eso la igualamos a 3000
// esto va a a ser requerido en el server.js