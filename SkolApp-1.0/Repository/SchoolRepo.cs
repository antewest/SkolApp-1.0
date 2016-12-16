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

        public IEnumerable<UserScore> GetTopScoresFromTask(int limit, int challengeId)
        {
            IEnumerable<UserScore> scores = db.UserScores.Where(s => s.ChallengeId == challengeId).Take(limit).OrderByDescending(s => s.Points);

            return scores;
        }

        public IEnumerable<ChallengeModel> GetChallenges()
        {
            return db.Challenges;
        }

        public ChallengeModel GetChallenge(int? id)
        {
            if (id == null)
                id = 1;

            return db.Challenges.Include("Questions").First(c => c.Id == id);
        }

        public void AddScore(UserScore score)
        {
            db.UserScores.Add(score);
            db.SaveChanges();
        }
    }
}