using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace SkolApp_1._0.Models
{
    public class ChallengeModel
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Type { get; set; }

        public virtual int QuestionsCount {
            get {
                return Questions.Count();
            }
        }
        
        public virtual List<QuestionModel> Questions { get; set; }
        public List<UserScore> UserScores { get; set; }
    }
}