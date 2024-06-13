using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using QuickTrade.Models;

namespace QuickTrade.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RRRsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public RRRsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/RRRs
        [HttpGet]
        public async Task<ActionResult<IEnumerable<RRR>>> GetRRRs()
        {
            return await _context.RRRs.ToListAsync();
        }

        // GET: api/RRRs/5
        [HttpGet("{id}")]
        public async Task<ActionResult<RRR>> GetRRR(int id)
        {
            var rRR = await _context.RRRs.FindAsync(id);

            if (rRR == null)
            {
                return NotFound();
            }

            return rRR;
        }

        // PUT: api/RRRs/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRRR(int id, RRR rRR)
        {
            if (id != rRR.RId)
            {
                return BadRequest();
            }

            _context.Entry(rRR).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RRRExists(id))
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

        // POST: api/RRRs
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<RRR>> PostRRR(RRR rRR)
        {
            _context.RRRs.Add(rRR);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRRR", new { id = rRR.RId }, rRR);
        }

        // DELETE: api/RRRs/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRRR(int id)
        {
            var rRR = await _context.RRRs.FindAsync(id);
            if (rRR == null)
            {
                return NotFound();
            }

            _context.RRRs.Remove(rRR);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool RRRExists(int id)
        {
            return _context.RRRs.Any(e => e.RId == id);
        }
    }
}
