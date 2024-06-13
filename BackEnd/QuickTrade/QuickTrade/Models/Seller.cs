using System.ComponentModel.DataAnnotations;

namespace QuickTrade.Models
{
    public class Seller
    {
        [Key]
        public int SellerId { get; set; }
        [Required]
        [StringLength(50)]
        public string SellerName { get; set; }

        [Required]
        public string SellerPwd { get; set; }
        [Required]
        [EmailAddress]
        public string SellerEmail { get; set; }
        public string SellerAddress { get; set; }

        public long SellerPhone { get; set; }
    }
}
