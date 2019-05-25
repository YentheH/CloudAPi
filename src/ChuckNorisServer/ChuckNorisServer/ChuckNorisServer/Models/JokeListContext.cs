using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChuckNorisServer.Models
{
    public class JokeListContext : DbContext
    {
        public JokeListContext(DbContextOptions<JokeListContext> options)
                                    : base(options)
        {

        }
        public DbSet<Joke> Jokes { get; set; }

        public DbSet<Category> Categories { get; set; }
    }
}
