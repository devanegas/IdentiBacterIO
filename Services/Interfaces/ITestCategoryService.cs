using IdentiBacterIO.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IdentiBacterIO.Services.Interfaces
{
    public interface ITestCategoryService
    {
        Task<IEnumerable<TestCategory>> GetAllTestCategoriesAsync();
    }
}
