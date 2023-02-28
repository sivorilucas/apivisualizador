
using AppiVisualizador.Data;
using AppiVisualizador.Models;
using Dapper;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppiVisualizador.repositorio
{
    public class formularioRepositorio : IformularioRepositorio
    {
        private readonly MysqlConfiguration _connectionString;

        public formularioRepositorio(MysqlConfiguration connectionString)
        {
            _connectionString = connectionString;
        }


        protected MySqlConnection dbConnection()
        {
            return new MySqlConnection(_connectionString.ConnectionString);
        }

        public Task<IEnumerable<Formulario>> GetAllFormularios()
        {

            var db = dbConnection();
            var sql = @"select id_visualiza,DIRARCEXT_CL,DIRARCEXT_BL,NOMFORMU,FORMULARIO FROM dbtrabajo.tab_visuaimg";

            return db.QueryAsync<Formulario>(sql, new { });
        }

        public Task<Formulario> GetFormularioDetails(int id)
        {
            var db = dbConnection();
            var sql = @"select id_visualiza,DIRARCEXT_CL,DIRARCEXT_BL,NOMFORMU,FORMULARIO FROM dbtrabajo.tab_visuaimg where FORMULARIO = @id";

            return db.QueryFirstOrDefaultAsync<Formulario>(sql, new { Id = id });
        }
    }
}
