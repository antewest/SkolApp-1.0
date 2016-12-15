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

        public JsonResult GetPunctuations()
        {
            List<QuestionModel> list = new List<QuestionModel>();

            list.Add(new QuestionModel { Question = "I have a hamster, a dog, and a cat." });
            list.Add(new QuestionModel { Question = "Spain is a beautiful country; the beaches are warm, sandy and spotlessly clean." });
            list.Add(new QuestionModel { Question = "The children's books were all left in the following places: Mrs Smith's room, Mr Powell's office and the caretaker's cupboard." });
            list.Add(new QuestionModel { Question = "She always enjoyed sweets, chocolate, marshmallows and toffee apples." });
            list.Add(new QuestionModel { Question = "Sarah's uncle's car was found without its wheels in that old, derelict warehouse." });

            return Json(list, JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetColors()
        {
            List<QuestionModel> colors = new List<QuestionModel>();
            foreach (var item in new ColorModel().ColorDictionary)
                colors.Add(new QuestionModel { Question = item.Key, Answer = item.Value });

            return Json(colors, JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetScores(int limit, string task)
        {
            /*
            List<UserScore> scores = new List<UserScore>();
            scores.Add(new UserScore { NickName = "Test1", Points = 10});
            scores.Add(new UserScore { NickName = "Test2", Points = 5});
            scores.Add(new UserScore { NickName = "Test3", Points = 7});
            scores.Add(new UserScore { NickName = "Test4", Points = 9});
            scores = scores.OrderBy(s => s.Points).ToList();
            //scores.Sort((x, y) => x.Points.CompareTo(y.Points));*/
            return Json(_repo.GetTopScoresFromTask(limit, task), JsonRequestBehavior.AllowGet);
        }

        public JsonResult AddScore(UserScore score)
        {
            _repo.AddScore(score);
            return Json(score, JsonRequestBehavior.AllowGet);
        }

        public ActionResult Punctuation()
        {
            return View();
        }

        public ActionResult ColorAndText()
        {
            return View();
        }
    }
}