using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChuckNorisServer.Models
{
    public class Creator
    {
        public int Id { get; set; }
        public string Name { get; set; }
        [JsonIgnore]
        public ICollection<Joke> Jokes { get; set; }
        [JsonIgnore]
        public ICollection<Category> categories { get; set; }

    }
}
