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
            Dictionary<string, string> test = new Dictionary<string, string>();
            test.Add("/Media/write.jpg", "write");

            return Json(test, JsonRequestBehavior.AllowGet);
        }
    }
}