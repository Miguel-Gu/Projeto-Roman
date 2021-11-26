using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProjetoRoman.Interfaces;
using ProjetoRoman.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjetoRoman.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class TemasController : ControllerBase
    {
        private ITemaRepository _temaRepository { get; set; }

        public TemasController()
        {
            _temaRepository = new TemaRepository();
        }

        /// <summary>
        /// Lista todos os temas
        /// </summary>
        /// <returns>Uma lista de temas</returns>
        [Authorize(Roles = "1,2")]
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_temaRepository.Listar());
            }
            catch (Exception erro)
            {
                return BadRequest(erro);
            }
        }
    }
}
