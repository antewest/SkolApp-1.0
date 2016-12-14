using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Drawing;

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
            ColorDictionary.Add("Gul", GetColorCode(Color.Yellow.R, Color.Yellow.G, Color.Yellow.B));
            ColorDictionary.Add("Vit", GetColorCode(Color.White.R, Color.White.G, Color.White.B));
            ColorDictionary.Add("Svart", GetColorCode(Color.Black.R, Color.Black.G, Color.Black.B));
            ColorDictionary.Add("Orange", GetColorCode(Color.Orange.R, Color.Orange.G, Color.Orange.B));
        }

        private string GetColorCode(int r, int g, int b)
        {
            return "rgb(" + r.ToString() + ", " + g.ToString() + ", " + b.ToString() + ")";
        }
    }
}