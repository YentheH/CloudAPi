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

        public string CategoryName { get; set; }

        [JsonIgnore]
        public ICollection<Joke> categories { get; set; }
    }
}
