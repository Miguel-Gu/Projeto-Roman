using ProjetoRoman.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjetoRoman.Interfaces
{
    /// <summary>
    /// Interface responsável pelo TipoUsuarioRepository
    /// </summary>
    interface ITipoUsuarioRepository
    {
        /// <summary>
        /// Lista todos os tipos de usuários
        /// </summary>
        /// <returns>Uma lista de tipos de usuários</returns>
        List<TipoUsuario> Listar();
    }
}
