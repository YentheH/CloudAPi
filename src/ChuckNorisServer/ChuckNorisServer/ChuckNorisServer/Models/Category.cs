using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChuckNorisServer.Models
{
    public class Category
    {
        public int Id { get; set; }

        public string Value { get; set; }

        [JsonIgnore]
        public ICollection<Joke> Books { get; set; }
    }
}
