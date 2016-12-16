namespace SkolApp_1._0.Migrations
{
    using Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Drawing;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<SkolApp_1._0.Context.SchoolContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(SkolApp_1._0.Context.SchoolContext context)
        {
            //context.QuestionTypes.AddOrUpdate(t => t.Id,
            //    new QuestionTypeModel { Id = 1, Name = "Punctuation" },
            //    new QuestionTypeModel { Id = 2, Name = "FindTheWords" },
            //    new QuestionTypeModel { Id = 3, Name = "ColorAndText" },
            //    new QuestionTypeModel { Id = 4, Name = "WordAndImage" },
            //    new QuestionTypeModel { Id = 5, Name = "Custom" }
            //    );

            
            
            //context.Challenges.AddOrUpdate(c => c.Id,
            //    new ChallengeModel { Id = 1, Type = "Punctuation" },
            //    new ChallengeModel { Id = 2, Type = "FindTheWords" },
            //    new ChallengeModel { Id = 3, Type = "ColorAndText" },
            //    new ChallengeModel { Id = 4, Type = "WordAndImage" },
            //    new ChallengeModel { Id = 5, Type = "Custom" }
            //    );
            
            //context.UserScores.AddOrUpdate(s => s.Id,
            //    new UserScore { Id = 1, NickName = "Moaz", Points = 10, ChallengeId = 1 },
            //    new UserScore { Id = 2, NickName = "Moa1z", Points = 5, ChallengeId = 1 },
            //    new UserScore { Id = 3, NickName = "Moaz2", Points = 7, ChallengeId = 2 },
            //    new UserScore { Id = 4, NickName = "Mo4az", Points = 8, ChallengeId = 2 },
            //    new UserScore { Id = 5, NickName = "Mo5az", Points = 9, ChallengeId = 2 }
            //    );
           
            //context.Questions.AddOrUpdate(q => q.Id,
            //    new QuestionModel { Id = 1, ChallengeId = 1, Question = "I have a hamster, a dog, and a cat.", TypeId = 1 },
            //    new QuestionModel { Id = 2, ChallengeId = 1, Question = "Spain is a beautiful country; the beaches are warm, sandy and spotlessly clean.", TypeId = 1 },
            //    new QuestionModel { Id = 3, ChallengeId = 1, Question = "The children's books were all left in the following places: Mrs Smith's room, Mr Powell's office and the caretaker's cupboard.", TypeId = 1 },
            //    new QuestionModel { Id = 4, ChallengeId = 1, Question = "She always enjoyed sweets, chocolate, marshmallows and toffee apples.", TypeId = 1 },
            //    new QuestionModel { Id = 5, ChallengeId = 1, Question = "Sarah's uncle's car was found without its wheels in that old, derelict warehouse.", TypeId = 1 },

            //    new QuestionModel { Id = 6, ChallengeId = 2, Question = "Tack, hör du! Sköldpaddorna var jättegoda!", TypeId = 2 },
            //    new QuestionModel { Id = 7, ChallengeId = 2, Question = "Du klär i purpur!", TypeId = 2 },
            //    new QuestionModel { Id = 8, ChallengeId = 2, Question = "Bilen är skitig. Du borde tvätta den.", TypeId = 2 },
            //    new QuestionModel { Id = 9, ChallengeId = 2, Question = "jordskalv hydda svåger pannå", TypeId = 2 },
            //    new QuestionModel { Id = 10, ChallengeId = 2, Question = "själisk svag tydning slutrim", TypeId = 2 },

            //    new QuestionModel { Id = 11, ChallengeId = 3, Question = "Röd", Answer = ColorTranslator.ToHtml(Color.Red), TypeId = 3 },
            //    new QuestionModel { Id = 12, ChallengeId = 3, Question = "Blå", Answer = ColorTranslator.ToHtml(Color.Blue), TypeId = 3 },
            //    new QuestionModel { Id = 13, ChallengeId = 3, Question = "Grön", Answer = ColorTranslator.ToHtml(Color.Green), TypeId = 3 },
            //    new QuestionModel { Id = 14, ChallengeId = 3, Question = "Gul", Answer = ColorTranslator.ToHtml(Color.Yellow), TypeId = 3 },
            //    new QuestionModel { Id = 15, ChallengeId = 3, Question = "Rosa", Answer = ColorTranslator.ToHtml(Color.Pink), TypeId = 3 },
            //    new QuestionModel { Id = 16, ChallengeId = 3, Question = "Grå", Answer = ColorTranslator.ToHtml(Color.Gray), TypeId = 3 },
            //    new QuestionModel { Id = 17, ChallengeId = 3, Question = "Lila", Answer = ColorTranslator.ToHtml(Color.Purple), TypeId = 3 },
            //    new QuestionModel { Id = 18, ChallengeId = 3, Question = "Orange", Answer = ColorTranslator.ToHtml(Color.Orange), TypeId = 3 },
            //    new QuestionModel { Id = 19, ChallengeId = 3, Question = "Svart", Answer = ColorTranslator.ToHtml(Color.Black), TypeId = 3 },
            //    new QuestionModel { Id = 20, ChallengeId = 3, Question = "Vit", Answer = ColorTranslator.ToHtml(Color.White), TypeId = 3 },

            //    new QuestionModel { Id = 21, ChallengeId = 4, Question = "/Media/write.jpg", Answer = "skriver", TypeId = 4 },
            //    new QuestionModel { Id = 22, ChallengeId = 4, Question = "/Media/paint.jpg", Answer = "målar", TypeId = 4 },
            //    new QuestionModel { Id = 23, ChallengeId = 4, Question = "/Media/fargburkar.jpg", Answer = "färg", TypeId = 4 }

            //    );

            //context.Questions.AddOrUpdate(q => q.Id,
            //    new QuestionModel { Id = 24, ChallengeId = 5, Question = "I have a hamster, a dog, and a cat.", Answer = "Spain is a beautiful country; the beaches are warm, sandy and spotlessly clean.", TypeId = 1 },
            //    new QuestionModel { Id = 25, ChallengeId = 5, Question = "Du klär i purpur!", TypeId = 2 },
            //    new QuestionModel { Id = 26, ChallengeId = 5, Question = "Spain is a beautiful country; the beaches are warm, sandy and spotlessly clean.", Answer = "Spain is a beautiful country; the beaches are warm, sandy and spotlessly clean.", TypeId = 1 },
            //    new QuestionModel { Id = 27, ChallengeId = 5, Question = "Röd", Answer = ColorTranslator.ToHtml(Color.Red), TypeId = 3 },
            //    new QuestionModel { Id = 28, ChallengeId = 5, Question = "/Media/write.jpg", Answer = "skriver", TypeId = 4 },
            //    new QuestionModel { Id = 29, ChallengeId = 5, Question = "/Media/paint.jpg", Answer = "målar", TypeId = 4 },
            //    new QuestionModel { Id = 30, ChallengeId = 5, Question = "Gul", Answer = ColorTranslator.ToHtml(Color.Yellow), TypeId = 3 }
            //    );
            //context.SaveChanges();
        }
    }
}
