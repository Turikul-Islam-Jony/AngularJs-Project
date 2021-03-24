using CRUDUsingMVCAndAngularjsFrontEnd.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CRUDUsingMVCAndAngularjsFrontEnd.Controllers
{
    public class ProductController : Controller
    {
        // GET: Product
        public ActionResult Index()
        {
            return View();
        }
        public JsonResult GetAllProducts()
        {
            using(ProductDBContext db = new ProductDBContext())
            {
                var list = db.Products.ToList();
                return Json(list, JsonRequestBehavior.AllowGet);
            }
        }
        public string AddProducts(Product obj)
        {
            using (ProductDBContext db = new ProductDBContext())
            {
                db.Products.Add(obj);
                db.SaveChanges();
                var products = db.Products.ToList();
                //return Json(products, new Newtonsoft.Json.JsonSerializerSettings());
                return "Product added successfully";
            }
        }
        public string UpdateProduct(Product obj)
        {
            using (ProductDBContext db = new ProductDBContext())
            {
                var updateProduct = db.Products.Where(p => p.ProductId == obj.ProductId).SingleOrDefault();
                updateProduct.ProductName = obj.ProductName;
                updateProduct.Price = obj.Price;
                db.SaveChanges();
                return "Product Updated Successfully";
            }
        }
        public string DeleteProduct(int ProductId)
        {
            using (ProductDBContext db = new ProductDBContext())
            {
                var delProduct = db.Products.Where(p => p.ProductId == ProductId).SingleOrDefault();
                db.Products.Remove(delProduct);
                db.SaveChanges();
                return "Product deleted Successfully";
            }
        }
    }
}