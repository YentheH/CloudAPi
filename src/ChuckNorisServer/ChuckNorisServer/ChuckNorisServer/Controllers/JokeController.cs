using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ChuckNorisServer.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Route("api/joke")]
    [ApiController]
    public class JokeController : ControllerBase
    {
        public JokeListContext _context { get; set; }
        public JokeController(JokeListContext ctxt)
        {
            _context = ctxt;
        }

        [HttpGet]
        public List<Joke> GetJokes()
        {
            return _context.Jokes.ToList();
        }

        [Route("{id}")]
        [HttpGet]
        public ActionResult<Joke> GetJoke(int id)
        {
            var theJoke = _context.Jokes
                                        .SingleOrDefault(b => b.Id == id);
            if (theJoke == null)
                return NotFound();

            return theJoke;
        }

        [Route("{id}")]
        [HttpDelete]
        public IActionResult DeleteJoke(int id)
        {
            var theJoke = _context.Jokes.Find(id);
            if (theJoke == null)
                return NotFound();

            _context.Jokes.Remove(theJoke);
            _context.SaveChanges();             
            return NoContent();
        }

        [HttpPost]
        public ActionResult<Joke> AddJoke([FromBody]Joke joke)
        {
            _context.Jokes.Add(joke);
            _context.SaveChanges();
            
            return Created("", joke);
        }

        [HttpPut]
        public ActionResult<Joke> UpdateJoke([FromBody]Joke joke)
        {
            
            _context.Jokes.Update(joke);
            _context.SaveChanges();
            
            return Created("", joke);
        }
    }
}
