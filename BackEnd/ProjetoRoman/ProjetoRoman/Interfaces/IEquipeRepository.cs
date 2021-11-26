using ProjetoRoman.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjetoRoman.Interfaces
{
    /// <summary>
    /// Interface responsável pelo EquipeRepository
    /// </summary>
    interface IEquipeRepository
    {
        /// <summary>
        /// Lista todas as equipes
        /// </summary>
        /// <returns>Uma lista de equipes</returns>
        List<Equipe> Listar();
    }
}
