using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Web;

namespace SkolApp_1._0.Models
{
    public class ColorModel
    {
        public Dictionary<string, string> ColorDictionary { get; set; }

        public ColorModel()
        {
            ColorDictionary = new Dictionary<string, string>();

            ColorDictionary.Add("Röd", ColorTranslator.ToHtml(Color.Red));
            ColorDictionary.Add("Blå", ColorTranslator.ToHtml(Color.Blue));
            ColorDictionary.Add("Grön", ColorTranslator.ToHtml(Color.Green));
            ColorDictionary.Add("Gul", ColorTranslator.ToHtml(Color.Yellow));
            ColorDictionary.Add("Rosa", ColorTranslator.ToHtml(Color.Pink));
            ColorDictionary.Add("Grå", ColorTranslator.ToHtml(Color.Gray));
            ColorDictionary.Add("Lila", ColorTranslator.ToHtml(Color.Purple));
            ColorDictionary.Add("Orange", ColorTranslator.ToHtml(Color.Orange));
            ColorDictionary.Add("Svart", ColorTranslator.ToHtml(Color.Black));
            ColorDictionary.Add("Vit", ColorTranslator.ToHtml(Color.White));
        }
    }
}