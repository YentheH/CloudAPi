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
                    Name = "Own Joke"
                };
                //context.Authors.Add(author);

                var joke1 = new Joke()
                {
                    //Id = 4,
                    Value = "test mop",
                    Category = category
                };

                var joke2 = new Joke()
                {
                    //Id = 5,
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
