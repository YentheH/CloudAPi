using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ChuckNorisServer.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ChuckNorisServer.Controllers
{
    [Produces("application/json")]
    [Route("api/Joke")]
    public class JokeController : Controller
    {
        private readonly JokeContext ctxt;

        public JokeController(JokeContext ctxt)
        {
            this.ctxt = ctxt;
        }

        [Route("{id}")]
        public Joke GetById(int id)
        {
            return this.ctxt.Jokes.Find(id);
        }

        public Joke GetByCategory(string category)
        {
            var J = this.ctxt.Jokes.FirstOrDefault(d => d.Category == category);
            return J;
        }
    }
}