using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChuckNorisServer.Models
{

    public class JokeContext : DbContext
    {
        public JokeContext(DbContextOptions<JokeContext> options) : base(options)
        {

        }
        public virtual DbSet<Joke> Jokes { get; set; }
    }

}
    