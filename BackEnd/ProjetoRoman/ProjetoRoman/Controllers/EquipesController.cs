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
    /// <summary>
    /// Controller responsável pelos endpoints (URLs) referentes as equipes
    /// </summary>

    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class EquipesController : ControllerBase
    {
        private IEquipeRepository _equipeRepository { get; set; }

        public EquipesController()
        {
            _equipeRepository = new EquipeRepository();
        }


        /// <summary>
        /// Lista todas as equipes
        /// </summary>
        /// <returns>Uma lista de equipes</returns>
        [Authorize(Roles = "1,2")]
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_equipeRepository.Listar());
            }
            catch (Exception erro)
            {
                return BadRequest(erro);
            }
        }
    }
}
