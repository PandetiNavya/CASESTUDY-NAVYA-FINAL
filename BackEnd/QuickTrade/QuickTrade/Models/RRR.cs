using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace QuickTrade.Models
{
    public class RRR
    {
        [Key]
        public int RId { get; set; }
        [ForeignKey("UserId")]
        public int UserId {  get; set; }
        public User User { get; set; }
        public string Review {  get; set; }


    }
}
