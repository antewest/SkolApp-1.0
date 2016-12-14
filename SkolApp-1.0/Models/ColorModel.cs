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
            ColorDictionary.Add("Röd", GetColorCode(Color.Red.R, Color.Red.G, Color.Red.B));
            ColorDictionary.Add("Blå", GetColorCode(Color.Blue.R, Color.Blue.G, Color.Blue.B));
            ColorDictionary.Add("Grön", GetColorCode(Color.Green.R, Color.Green.G, Color.Green.B));
        }

        private string GetColorCode(int r, int g, int b)
        {
            return "rgb(" + r.ToString() + ", " + g.ToString() + ", " + b.ToString() + ")";
        }
    }
}