
using AppiVisualizador.repositorio;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis.CSharp;
using NuGet.Protocol.Core.Types;


namespace AppiVisualizador.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FormularioController : ControllerBase
    {
        private readonly IformularioRepositorio? _formularioRepository;


        public FormularioController(IformularioRepositorio? formularioRepository)
        {
            _formularioRepository = formularioRepository;
        }


        [HttpGet]
        public async  Task<IActionResult> GetAllFormularios() {
            return Ok(await _formularioRepository.GetAllFormularios());
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetFormularioDetails(int id)
        {
            return Ok(await _formularioRepository.GetFormularioDetails(id));
        }
    }

}
