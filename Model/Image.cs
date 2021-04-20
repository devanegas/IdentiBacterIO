using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IdentiBacterIO.Model
{
    public class Image
    {
        public int Id { get; set; }
        public int BacteriaId { get; set; }
        public int TestId { get; set; }
        public int CorrectTestOptionId { get; set; }
        public String Url { get; set; }
        public String Name { get; set; }

        public Bacteria Bacteria { get; set; }
        public Test Test { get; set; }
        public TestOption TestOption { get; set; }
    }
}
