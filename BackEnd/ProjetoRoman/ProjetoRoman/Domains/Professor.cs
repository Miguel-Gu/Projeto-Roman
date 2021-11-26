using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace ProjetoRoman.Domains
{
    public partial class Professor
    {
        public Professor()
        {
            Projetos = new HashSet<Projeto>();
        }

        public int IdProfessor { get; set; }

        [Required(ErrorMessage = "Informe o id do usuário")]
        public int? IdUsuario { get; set; }

        [Required(ErrorMessage = "Informe o id da equipe")]
        public int? IdEquipe { get; set; }

        public virtual Equipe IdEquipeNavigation { get; set; }
        public virtual Usuario IdUsuarioNavigation { get; set; }
        public virtual ICollection<Projeto> Projetos { get; set; }
    }
}
