using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChuckNorisServer.Models
{
    public class DBInitializer
    {
        public static void Initialize(JokeContext context)
        {
            //Create the db if not yet exists
            context.Database.EnsureCreated();

           
            if (!context.Jokes.Any())
            {
                var joke1 = new Joke()
                {
                    Id = 1,
                    Category = "OwnJoke",
                    Value= "Dit is een voorbeeld van 1 van de eigen moppen die je kan maken"
                    
                };

                var joke2 = new Joke()
                {
                    Id = 2,
                    Category = "OwnJoke",
                    Value = "Dit is een voorbeeld van 1 van de eigen moppen die je kan maken"
                };

                context.Jokes.Add(joke1);
                context.Jokes.Add(joke2);
                context.SaveChanges();
            }
        }
    }
}
