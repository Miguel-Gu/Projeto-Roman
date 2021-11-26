using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProjetoRoman.Domains;
using ProjetoRoman.Interfaces;
using ProjetoRoman.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjetoRoman.Controllers
{
    /// <summary>
    /// Controller responsável pelos endpoints (URLs) referente aos projetos
    /// </summary>

    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class ProjetosController : ControllerBase
    {
        private IProjetoRepository _projetoRepository { get; set; }

        public ProjetosController()
        {
            _projetoRepository = new ProjetoRepository();
        }

        /// <summary>
        /// Lista todos os projetos
        /// </summary>
        /// <returns>Uma lista de projetos</returns>
        [Authorize(Roles = "1,2")]
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_projetoRepository.Listar());
            }
            catch (Exception erro)
            {
                return BadRequest(erro);
            }
        }

        /// <summary>
        /// Cadastra um novo projeto
        /// </summary>
        /// <param name="novoProjeto">Objeto novoProjeto que será cadastrado</param>
        [Authorize(Roles = "1,2")]
        [HttpPost]
        public IActionResult Post(Projeto novoProjeto)
        {
            try
            {
                _projetoRepository.Cadastrar(novoProjeto);

                return StatusCode(201);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }
    }
}
