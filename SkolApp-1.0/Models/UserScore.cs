using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
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
        public string Task { get; set; }
    }
}