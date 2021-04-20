using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IdentiBacterIO.Model
{
    public class Test
    {
        public int Id { get; set; }
        public String Name { get; set; }
        public String Background { get; set; }
        public String Procedure { get; set; }
        public TestCategory TestCategory { get; set; }
        public List<TestOption> TestOptions{ get; set; }

        public List<Image> Images { get; set; }

    }
}
