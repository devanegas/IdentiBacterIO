using IdentiBacterIO.Data;
using IdentiBacterIO.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IdentiBacterIO.Services.Interfaces
{
    public class TestService : ITestService
    {
        private readonly IdentiBacterIOContext _context;

        public TestService(IdentiBacterIOContext context)
        {
            _context = context;
        }
        public async Task<List<Test>> GetAllTestsAsync()
        {
            List<Test> tests = await _context.Tests.Include(t=>t.TestCategory).ToListAsync();
            foreach(Test test in tests)
            {
                test.TestCategory.Tests = null;
            }
            return tests;
        }
    }
}
