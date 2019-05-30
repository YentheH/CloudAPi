using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChuckNorisServer.Models
{
    public class DBInitializer
    {
        public static void Initialize(JokeListContext context)
        {
            context.Database.EnsureCreated();

            if (!context.Jokes.Any())
            {
                var category = new Category()
                {
                   CategoryName = "OwnJoke"
                };
                

                var joke1 = new Joke()
                {
                    Value = "test mop",
                    Category = category
                };

                var joke2 = new Joke()
                {
                    Value = "2de test mop",
                    Category = category
                };
                context.Jokes.Add(joke1);
                context.Jokes.Add(joke2);
                context.SaveChanges();
            }
        }
    }
}
