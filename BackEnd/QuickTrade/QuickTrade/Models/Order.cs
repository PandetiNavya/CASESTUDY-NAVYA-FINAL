using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace QuickTrade.Models
{
    public class Order
    {
        [Key]
        public int OrderId { get; set; }

        [ForeignKey("ItemId")]
        public int ItemId { get; set; }
       // public Item Item { get; set; }
        [ForeignKey("UserId")]
        public int UserId {  get; set; }
      //  public User User { get; set; }
        public DateTime Date { get; set; }

        public string ShippingAddress { get; set; }
        public string PaymentMethod { get; set; }
        public string Status { get; set; }
    }
}
