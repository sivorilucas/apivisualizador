

using System.Data.SqlClient;

string cons_usuario = "root";
string cons_contra = "qazqwe123A*";
string cons_base_datos = "trazatest";
string cons_equipo = "localhost";

string cadenaConexion = "Data Source=" + cons_equipo + ";Initial Catalog=" + cons_base_datos + ";User ID=" + cons_usuario + ";Password=" + cons_contra;

SqlConnection conexion = new SqlConnection(cadenaConexion);
conexion.Open();

//Aquí puedes realizar las consultas a la base de datos.

conexion.Close();