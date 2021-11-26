using ProjetoRoman.Contexts;
using ProjetoRoman.Domains;
using ProjetoRoman.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjetoRoman.Repositories
{
    public class ProfessorRepository : IProfessorRepository
    {
        RomanContext ctx = new RomanContext();

        public List<Professor> Listar()
        {
            return ctx.Professors
                .Select(p => new Professor()
                {
                    IdProfessor = p.IdProfessor,
                    IdUsuario = p.IdUsuario,
                    IdEquipe = p.IdEquipe,

                    IdUsuarioNavigation = new Usuario()
                    {
                        IdUsuario = p.IdUsuarioNavigation.IdUsuario,
                        UserName = p.IdUsuarioNavigation.UserName
                    }
                })
                .ToList();
        }
    }
}
