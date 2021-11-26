using ProjetoRoman.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjetoRoman.Interfaces
{
    /// <summary>
    /// Interface responsável pelo TemaRepository
    /// </summary>
    interface ITemaRepository
    {
        /// <summary>
        /// Lista todos os temas
        /// </summary>
        /// <returns>Uma lista de temas</returns>
        List<Tema> Listar();
    }
}
