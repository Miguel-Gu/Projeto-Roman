using ProjetoRoman.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjetoRoman.Interfaces
{
    /// <summary>
    /// Interface responsável pelo ProjetoRepository
    /// </summary>
    interface IProjetoRepository
    {
        /// <summary>
        /// Lista todos os projetos
        /// </summary>
        /// <returns>Uma lista de projetos</returns>
        List<Projeto> Listar();

        /// <summary>
        /// Cadastra um novo projeto
        /// </summary>
        /// <param name="novoProjeto">Objeto novoProjeto que será cadastrado</param>
        void Cadastrar(Projeto novoProjeto);
    }
}
