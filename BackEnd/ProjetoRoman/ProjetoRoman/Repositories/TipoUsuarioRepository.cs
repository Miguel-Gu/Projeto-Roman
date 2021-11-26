using ProjetoRoman.Contexts;
using ProjetoRoman.Domains;
using ProjetoRoman.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjetoRoman.Repositories
{
    public class TipoUsuarioRepository : ITipoUsuarioRepository
    {
        RomanContext ctx = new RomanContext();

        public List<TipoUsuario> Listar()
        {
            return ctx.TipoUsuarios
                .ToList();
        }
    }
}
