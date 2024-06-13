using System.ComponentModel.DataAnnotations;

namespace QuickTrade.Models
{
    public class Admin
    {
        [Key]
        public int AdminId {  get; set; }
        public string username {  get; set; }
        public string password { get; set; }

    }
}
