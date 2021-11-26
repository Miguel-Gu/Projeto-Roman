using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace ProjetoRoman.Domains
{
    public partial class Equipe
    {
        public Equipe()
        {
            Professors = new HashSet<Professor>();
        }

        public int IdEquipe { get; set; }

        [Required(ErrorMessage = "Informe o nome da equipe")]
        public string NomeEquipe { get; set; }

        public virtual ICollection<Professor> Professors { get; set; }
    }
}
