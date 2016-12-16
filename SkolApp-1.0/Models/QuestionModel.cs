using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;
using Newtonsoft.Json;

namespace SkolApp_1._0.Models
{
    public class QuestionModel
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [ForeignKey("Challenge")]
        public int ChallengeId { get; set; }

        [Required]
        [ForeignKey("Type")]
        public int TypeId { get; set; }

        public string Question { get; set; }
        public string Answer { get; set; }

        [JsonIgnore]
        public virtual ChallengeModel Challenge { get; set; }

        public virtual QuestionTypeModel Type { get; set; }
    }
}