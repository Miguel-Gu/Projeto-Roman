using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace ProjetoRoman.Domains
{
    public partial class Projeto
    {
        public int IdProjeto { get; set; }

        [Required(ErrorMessage = "Informe o id do tema")]
        public int? IdTema { get; set; }

        [Required(ErrorMessage = "Informe o id do professor")]
        public int? IdProfessor { get; set; }

        [Required(ErrorMessage = "Informe o nome do projeto")]
        public string NomeProjeto { get; set; }

        public virtual Professor IdProfessorNavigation { get; set; }
        public virtual Tema IdTemaNavigation { get; set; }
    }
}
