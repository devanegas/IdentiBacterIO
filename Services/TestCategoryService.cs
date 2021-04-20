using IdentiBacterIO.Data;
using IdentiBacterIO.Model;
using IdentiBacterIO.Services.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IdentiBacterIO.Services
{
    public class TestCategoryService : ITestCategoryService
    {
        private readonly IdentiBacterIOContext _context;

        public TestCategoryService(IdentiBacterIOContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<TestCategory>> GetAllTestCategoriesAsync()
        {
            List<TestCategory> categories = await _context.Categories.ToListAsync();
            return categories;
        }
    }
}
