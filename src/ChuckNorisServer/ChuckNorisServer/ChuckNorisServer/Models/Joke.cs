using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChuckNorisServer.Models
{
    public class Joke
    {
        public int Id { get; set; }
        public string Value { get; set; }
        public string Category { get; set; }
        //public Category Category { get; set; } Dit werkt niet hij geeft telkens een null terug
    }
}
