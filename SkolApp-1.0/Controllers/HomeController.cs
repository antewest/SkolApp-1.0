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

        public ActionResult GetChallenge(int? Id)
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

        public JsonResult GetScores(int limit, int ChallengeId)
        {
            var scores = _repo.GetTopScoresFromTask(limit, ChallengeId).ToList();
            var result = JsonConvert.SerializeObject(scores, Formatting.Indented, jss);
            
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        public JsonResult AddScore(UserScore score)
        {
            _repo.AddScore(score);
            return Json(score, JsonRequestBehavior.AllowGet);
        }

        public ActionResult NotFound()
        {
            return RedirectToAction("Index");
        }
    }
}