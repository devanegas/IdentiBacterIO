using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IdentiBacterIO.Model
{
    public class Bacteria
    {
        public int Id { get; set; }
        public String Name { get; set; }
        public String Description { get; set; }
        public String Type { get; set; }
        public List<Image> Images { get; set; }
    }
}
