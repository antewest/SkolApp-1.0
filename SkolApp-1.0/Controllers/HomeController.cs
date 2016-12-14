using SkolApp_1._0.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SkolApp_1._0.Controllers
{
    public class HomeController : Controller
    {
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

        public JsonResult GetScores(int limit, string task)
        {
            List<UserScores> scores = new List<UserScores>();
            scores.Add(new UserScores { NickName = "Test1", Points = 10, MaxPoints = 20 });
            scores.Add(new UserScores { NickName = "Test2", Points = 5, MaxPoints = 20 });
            scores.Add(new UserScores { NickName = "Test3", Points = 7, MaxPoints = 20 });
            scores.Add(new UserScores { NickName = "Test4", Points = 9, MaxPoints = 20 });
            return Json(scores, JsonRequestBehavior.AllowGet);
        }

        public ActionResult Punctuation()
        {
            return View();
        }


        public JsonResult GetColors()
        {
            var model = new ColorModel();

            return Json(model.ColorDictionary.ToArray(), JsonRequestBehavior.AllowGet);
        }

        public ActionResult ColorAndText()
        {
            return View();
        }
    }
}