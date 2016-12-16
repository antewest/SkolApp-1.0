using Newtonsoft.Json;
using SkolApp_1._0.Models;
using SkolApp_1._0.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SkolApp_1._0.Controllers
{
    public class HomeController : Controller
    {
        private SchoolRepo _repo;
        JsonSerializerSettings jss = new JsonSerializerSettings { ReferenceLoopHandling = ReferenceLoopHandling.Ignore };

        public HomeController()
        {
            this._repo = new SchoolRepo();
        }

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult WordAndImages()
        {
            return View();
        }

        public JsonResult GetWordAndImage()
        {
            List<QuestionModel> test = new List<QuestionModel>();
            test.Add(new QuestionModel { Question = "/Media/write.jpg", Answer = "skriver" });
            test.Add(new QuestionModel { Question = "/Media/paint.jpg", Answer = "målar" });
            test.Add(new QuestionModel { Question = "/Media/fargburkar.jpg", Answer = "färg" });

            return Json(test, JsonRequestBehavior.AllowGet);
        }

        public ActionResult GetChallenge(int TypeId, int? Id)
        {
            if (Id == null)
                return RedirectToAction("Index");

            ChallengeModel challenge = _repo.GetChallenge(Id);

            // using this to ignore the infinite reference between QuestionModel and ChallengeModel
            // because javascript objects can't handle infinite reference
            var result = JsonConvert.SerializeObject(challenge, Formatting.Indented, jss);

            return Json(result, JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetChallenges()
        {
            List<ChallengeModel> challenges = _repo.GetChallenges().ToList();
            var result = JsonConvert.SerializeObject(challenges, Formatting.Indented, jss);
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetFindTheWords()
        {
            List<QuestionModel> list = new List<QuestionModel>();

            list.Add(new QuestionModel { Question = "Tack, hör du! Sköldpaddorna var jättegoda!" });
            list.Add(new QuestionModel { Question = "Du klär i purpur!" });
            list.Add(new QuestionModel { Question = "Bilen är skitig. Du borde tvätta den." });
            list.Add(new QuestionModel { Question = "jordskalv hydda svåger pannå" });
            list.Add(new QuestionModel { Question = "själisk svag tydning slutrim" });

            return Json(list, JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetScores(int limit, int ChallengeId)
        {
            /*
            List<UserScore> scores = new List<UserScore>();
            scores.Add(new UserScore { NickName = "Test1", Points = 10});
            scores.Add(new UserScore { NickName = "Test2", Points = 5});
            scores.Add(new UserScore { NickName = "Test3", Points = 7});
            scores.Add(new UserScore { NickName = "Test4", Points = 9});
            scores = scores.OrderBy(s => s.Points).ToList();
            //scores.Sort((x, y) => x.Points.CompareTo(y.Points));*/
            var scores = _repo.GetTopScoresFromTask(limit, ChallengeId).ToList();
            var result = JsonConvert.SerializeObject(scores, Formatting.Indented, jss);
            
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        public JsonResult AddScore(UserScore score)
        {
            _repo.AddScore(score);
            return Json(score, JsonRequestBehavior.AllowGet);
        }

        public ActionResult FindTheWords()
        {
            return View();
        }

        public ActionResult Punctuation()
        {
            return View();
        }

        public ActionResult ColorAndText()
        {
            return View();
        }

        public ActionResult NotFound()
        {
            return RedirectToAction("Index");
        }
    }
}