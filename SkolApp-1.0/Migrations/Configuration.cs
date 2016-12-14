namespace SkolApp_1._0.Migrations
{
    using SkolApp_1._0.Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<SkolApp_1._0.Context.SchoolContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(SkolApp_1._0.Context.SchoolContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //
            context.UserScores.AddOrUpdate(s => s.Id,
                new UserScore { NickName = "Moaz", Points = 10, Task = "GetPunctuations" },
                new UserScore { NickName = "Moa1z", Points = 5, Task = "GetPunctuations" },
                new UserScore { NickName = "Moaz2", Points = 7, Task = "GetPunctuations" },
                new UserScore { NickName = "Mo4az", Points = 8, Task = "GetPunctuations" },
                new UserScore { NickName = "Mo5az", Points = 9, Task = "GetPunctuations" }
                );
        }
    }
}
