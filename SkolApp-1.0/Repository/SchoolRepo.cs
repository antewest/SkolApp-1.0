using SkolApp_1._0.Context;
using SkolApp_1._0.Models;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SkolApp_1._0.Repository
{
    public class SchoolRepo
    {
        public SchoolContext db;

        public SchoolRepo()
        {
            this.db = new SchoolContext();
        }

        public IEnumerable<UserScore> GetTopScoresFromTask(int limit, string task)
        {
            IEnumerable<UserScore> scores = db.UserScores.Where(s => s.Task.ToLower() == task.ToLower()).Take(limit).OrderByDescending(s => s.Points);

            return scores;
        }

        public void AddScore(UserScore score)
        {
            db.UserScores.Add(score);
            db.SaveChanges();
        }
    }
}