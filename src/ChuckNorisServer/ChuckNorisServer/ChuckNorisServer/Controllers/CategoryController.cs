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
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        public JokeListContext _context { get; set; }
        public CategoryController(JokeListContext ctxt)
        {
            _context = ctxt;
        }

        [HttpGet]
        public List<Category> GetAuthors()
        {
            return _context.Categories.ToList();
        }

        [Route("{id}")]
        [HttpGet]
        public ActionResult<Category> GetCategory(int id)
        {
            var theCategory = _context.Categories.Find(id);
            if (theCategory == null)
                return NotFound();

            return theCategory;
        }

        [Route("{id}")]
        [HttpDelete]
        public IActionResult DeleteCategory(int id)
        {
            var theCategory = _context.Categories.Find(id);
            if (theCategory == null)
                return NotFound();

            _context.Categories.Remove(theCategory);
            _context.SaveChanges();            
            return NoContent();
        }

        [HttpPost]
        public ActionResult<Category> AddCategory([FromBody]Category category)
        {
            _context.Categories.Add(category);
            _context.SaveChanges();
            //return boek met ID
            return Created("", category);
        }

        [HttpPut]
        public ActionResult<Category> UpdateCategory([FromBody]Category category)
        {
            //Boek updaten
            _context.Categories.Update(category);
            _context.SaveChanges();
            //return boek met ID
            return Created("", category);
        }
    }
}