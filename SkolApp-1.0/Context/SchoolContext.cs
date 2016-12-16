using SkolApp_1._0.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace SkolApp_1._0.Context
{
    public class SchoolContext : DbContext
    {
        public DbSet<UserScore> UserScores { get; set; }
        public DbSet<ChallengeModel> Challenges { get; set; }
        public DbSet<QuestionModel> Questions { get; set; }
        public DbSet<QuestionTypeModel> QuestionTypes { get; set; }

        public SchoolContext() : base("DefaultConnection")
        {

        }
    }
}