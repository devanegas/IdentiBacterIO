using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using IdentiBacterIO.Data;
using IdentiBacterIO.Model;
using IdentiBacterIO.Services.Interfaces;

namespace IdentiBacterIO.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestCategoriesController : ControllerBase
    {
        private readonly IdentiBacterIOContext _context;
        private readonly ITestCategoryService _testCategoryService;

        public TestCategoriesController(IdentiBacterIOContext context, ITestCategoryService testCategoryService)
        {
            _context = context;
            _testCategoryService = testCategoryService;
        }

        // GET: api/TestCategories
        [HttpGet]
        public async Task<IEnumerable<TestCategory>> GetCategories()
        {
            return await _testCategoryService.GetAllTestCategoriesAsync();
        }

        // GET: api/TestCategories/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TestCategory>> GetTestCategory(int id)
        {
            var testCategory = await _context.Categories.FindAsync(id);

            if (testCategory == null)
            {
                return NotFound();
            }

            return testCategory;
        }

        // PUT: api/TestCategories/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTestCategory(int id, TestCategory testCategory)
        {
            if (id != testCategory.Id)
            {
                return BadRequest();
            }

            _context.Entry(testCategory).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TestCategoryExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/TestCategories
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<TestCategory>> PostTestCategory(TestCategory testCategory)
        {
            _context.Categories.Add(testCategory);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTestCategory", new { id = testCategory.Id }, testCategory);
        }

        // DELETE: api/TestCategories/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<TestCategory>> DeleteTestCategory(int id)
        {
            var testCategory = await _context.Categories.FindAsync(id);
            if (testCategory == null)
            {
                return NotFound();
            }

            _context.Categories.Remove(testCategory);
            await _context.SaveChangesAsync();

            return testCategory;
        }

        private bool TestCategoryExists(int id)
        {
            return _context.Categories.Any(e => e.Id == id);
        }
    }
}
