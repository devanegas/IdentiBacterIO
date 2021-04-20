using IdentiBacterIO.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IdentiBacterIO.Data
{
    public class IdentiBacterIOContext : DbContext
    {
        public IdentiBacterIOContext(DbContextOptions<IdentiBacterIOContext> options) : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //Category has many tests
            modelBuilder.Entity<TestCategory>()
                       .HasMany(tc => tc.Tests)
                       .WithOne(c=>c.TestCategory);

            modelBuilder.Entity<Image>()
                        .HasOne(image => image.Bacteria)
                        .WithMany(bac => bac.Images)
                        .HasForeignKey(image => image.BacteriaId);

            modelBuilder.Entity<Image>()
                       .HasOne(image => image.Test)
                       .WithMany(test => test.Images)
                       .HasForeignKey(image => image.TestId);

            modelBuilder.Entity<Image>()
                       .HasOne(image => image.TestOption)
                       .WithMany(option => option.Images)
                       .HasForeignKey(image => image.CorrectTestOptionId);
        }
        public DbSet<Bacteria> Bacterias { get; set; }
        public DbSet<Test> Tests { get; set; }
        public DbSet<TestOption> Options { get; set; }
        public DbSet<TestCategory> Categories { get; set; }

    }
}