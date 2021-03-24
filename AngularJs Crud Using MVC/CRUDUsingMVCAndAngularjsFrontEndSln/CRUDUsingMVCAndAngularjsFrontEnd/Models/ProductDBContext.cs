using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace CRUDUsingMVCAndAngularjsFrontEnd.Models
{
    public class ProductDBContext:DbContext
    {
        public ProductDBContext() : base("ProductDBContext") { }
        public DbSet<Product> Products { get; set; }
    }
}