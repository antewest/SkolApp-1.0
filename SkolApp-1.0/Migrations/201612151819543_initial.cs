namespace SkolApp_1._0.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class initial : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.ChallengeModels",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Type = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.QuestionModels",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        ChallengeId = c.Int(nullable: false),
                        TypeId = c.Int(nullable: false),
                        Question = c.String(),
                        Answer = c.String(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.ChallengeModels", t => t.ChallengeId, cascadeDelete: true)
                .ForeignKey("dbo.QuestionTypeModels", t => t.TypeId, cascadeDelete: true)
                .Index(t => t.ChallengeId)
                .Index(t => t.TypeId);
            
            CreateTable(
                "dbo.QuestionTypeModels",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.UserScores",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        NickName = c.String(),
                        Points = c.Int(nullable: false),
                        ChallengeId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.ChallengeModels", t => t.ChallengeId, cascadeDelete: true)
                .Index(t => t.ChallengeId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.UserScores", "ChallengeId", "dbo.ChallengeModels");
            DropForeignKey("dbo.QuestionModels", "TypeId", "dbo.QuestionTypeModels");
            DropForeignKey("dbo.QuestionModels", "ChallengeId", "dbo.ChallengeModels");
            DropIndex("dbo.UserScores", new[] { "ChallengeId" });
            DropIndex("dbo.QuestionModels", new[] { "TypeId" });
            DropIndex("dbo.QuestionModels", new[] { "ChallengeId" });
            DropTable("dbo.UserScores");
            DropTable("dbo.QuestionTypeModels");
            DropTable("dbo.QuestionModels");
            DropTable("dbo.ChallengeModels");
        }
    }
}
