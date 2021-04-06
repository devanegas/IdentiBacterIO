using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using IdentiBacterIO.Data;
using IdentiBacterIO.Model;

namespace IdentiBacterIO.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BacteriaController : ControllerBase
    {
        private readonly IdentiBacterIOContext _context;

        public BacteriaController(IdentiBacterIOContext context)
        {
            _context = context;
        }

        // GET: api/Bacteria
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Bacteria>>> GetBacterias()
        {
            return await _context.Bacterias.ToListAsync();
        }

        // GET: api/Bacteria/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Bacteria>> GetBacteria(int id)
        {
            var bacteria = await _context.Bacterias.FindAsync(id);

            if (bacteria == null)
            {
                return NotFound();
            }

            return bacteria;
        }

        // PUT: api/Bacteria/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBacteria(int id, Bacteria bacteria)
        {
            if (id != bacteria.Id)
            {
                return BadRequest();
            }

            _context.Entry(bacteria).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BacteriaExists(id))
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

        // POST: api/Bacteria
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Bacteria>> PostBacteria(Bacteria bacteria)
        {
            _context.Bacterias.Add(bacteria);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBacteria", new { id = bacteria.Id }, bacteria);
        }

        // DELETE: api/Bacteria/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Bacteria>> DeleteBacteria(int id)
        {
            var bacteria = await _context.Bacterias.FindAsync(id);
            if (bacteria == null)
            {
                return NotFound();
            }

            _context.Bacterias.Remove(bacteria);
            await _context.SaveChangesAsync();

            return bacteria;
        }

        private bool BacteriaExists(int id)
        {
            return _context.Bacterias.Any(e => e.Id == id);
        }
    }
}
