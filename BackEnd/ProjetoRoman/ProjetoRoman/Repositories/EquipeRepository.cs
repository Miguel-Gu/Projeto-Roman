using ProjetoRoman.Contexts;
using ProjetoRoman.Domains;
using ProjetoRoman.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjetoRoman.Repositories
{
    public class EquipeRepository : IEquipeRepository
    {
        RomanContext ctx = new RomanContext();

        public List<Equipe> Listar()
        {
            return ctx.Equipes
                .ToList();
        }
    }
}
