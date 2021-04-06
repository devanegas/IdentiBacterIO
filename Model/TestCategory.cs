using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IdentiBacterIO.Model
{
    public class TestCategory
    {
        public int Id { get; set; }
        public int Name { get; set; }
        public List<Test> Tests { get; set; }
    }
}
