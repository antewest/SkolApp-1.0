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

        public ActionResult Punctuation()
        {
            return View();
        }


        public JsonResult GetColors()
        {
            var model = new ColorModel();

            return Json(model.ColorDictionary, JsonRequestBehavior.AllowGet);
        }
    }
}