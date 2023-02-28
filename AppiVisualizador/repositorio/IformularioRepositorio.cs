
using AppiVisualizador.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppiVisualizador.repositorio
{
    public interface IformularioRepositorio
    {
        Task<IEnumerable<Formulario>> GetAllFormularios();

        Task<Formulario> GetFormularioDetails(int id);

    }
}
