using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IdentiBacterIO.Model
{
    public class Test
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Background { get; set; }
        public string Procedure { get; set; }
        public int CorrectTestOptionId { get; set; }
        public List<TestOption> TestOptions{ get; set; }

        public List<Image> Images { get; set; }

    }
}
