using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IdentiBacterIO.Model
{
    public class TestOption
    {
        public int Id { get; set; }
        public int TestId { get; set; }
        public String Description { get; set; }
        public List<Image> Images { get; set; }
    }
}
