using ProjetoRoman.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjetoRoman.Interfaces
{
    /// <summary>
    /// Interface responsável pelo ProfessorRepository
    /// </summary>
    interface IProfessorRepository
    {
        /// <summary>
        /// Lista todos os professores
        /// </summary>
        /// <returns>Uma lista de professores</returns>
        List<Professor> Listar();
    }
}
