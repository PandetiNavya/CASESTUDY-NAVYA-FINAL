using Microsoft.EntityFrameworkCore;
using QuickTrade.Models;


namespace QuickTrade.Models
{
    public class AppDbContext : DbContext {
 
    
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Order> Orders { get; set; }
        public DbSet<Item> Items { get; set; }
        public DbSet<Seller> Sellers { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<RRR> RRRs { get; set; }
        public DbSet<QuickTrade.Models.Admin> Admin { get; set; } = default!;
    }

    
}
