﻿using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace SkolApp_1._0.Models
{
    public class UserScore
    {
        [Key]
        public int Id { get; set; }

        public string NickName { get; set; }
        public int Points { get; set; }

        [Required]
        [ForeignKey("Challenge")]
        public int ChallengeId { get; set; }


        [JsonIgnore]
        public virtual ChallengeModel Challenge { get; set; }
        
    }
}