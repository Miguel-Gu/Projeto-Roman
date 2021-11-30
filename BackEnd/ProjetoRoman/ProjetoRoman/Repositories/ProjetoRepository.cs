using ProjetoRoman.Contexts;
using ProjetoRoman.Domains;
using ProjetoRoman.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjetoRoman.Repositories
{
    public class ProjetoRepository : IProjetoRepository
    {
        RomanContext ctx = new RomanContext();

        public void Cadastrar(Projeto novoProjeto)
        {
            ctx.Projetos.Add(novoProjeto);
            ctx.SaveChanges();
        }

        public List<Projeto> Listar()
        {
            return ctx.Projetos
                .Select(p => new Projeto()
                {
                    IdProjeto = p.IdProjeto,
                    IdTema = p.IdTema,
                    IdProfessor = p.IdProfessor,
                    NomeProjeto = p.NomeProjeto,

                    IdProfessorNavigation = new Professor()
                    {
                        IdProfessor = p.IdProfessorNavigation.IdProfessor,
                        IdUsuario = p.IdProfessorNavigation.IdUsuario,

                        IdEquipeNavigation = new Equipe()
                        {
                            IdEquipe = p.IdProfessorNavigation.IdEquipeNavigation.IdEquipe,
                            NomeEquipe = p.IdProfessorNavigation.IdEquipeNavigation.NomeEquipe
                        },

                        IdUsuarioNavigation = new Usuario()
                        {
                            IdUsuario = p.IdProfessorNavigation.IdUsuarioNavigation.IdUsuario,
                            UserName = p.IdProfessorNavigation.IdUsuarioNavigation.UserName
                        }
                    },
                    IdTemaNavigation = new Tema()
                    {
                        IdTema = p.IdTemaNavigation.IdTema,
                        NomeTema = p.IdTemaNavigation.NomeTema

                    }
                })
                .ToList();
        }
    }
}
