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
        }

        private string GetColorCode(int r, int g, int b)
        {
            return "rgb(" + r.ToString() + ", " + g.ToString() + ", " + b.ToString() + ")";
        }
        //public List<KeyValuePair<string, string>> Colors { get; set; }

        //public ColorModel()
        //{
        //    Colors = new List<KeyValuePair<string, string>>();

        //    Colors.Add(new KeyValuePair<string, string>("Röd", Color.Red.ToString()));
        //    Colors.Add(new KeyValuePair<string, string>("Grön", Color.Green.ToString()));
        //    Colors.Add(new KeyValuePair<string, string>("Gul", Color.Yellow.ToString()));
        //    Colors.Add(new KeyValuePair<string, string>("Blå", Color.Blue.ToString()));
        //    Colors.Add(new KeyValuePair<string, string>("Rosa", Color.Pink.ToString()));
        //    Colors.Add(new KeyValuePair<string, string>("Vit", Color.White.ToString()));
        //    Colors.Add(new KeyValuePair<string, string>("Svart", Color.Black.ToString()));
        //}
    }
}