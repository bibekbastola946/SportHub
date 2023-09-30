using System;
using System.Collections.Generic;

namespace SportHub.Models
{
    public partial class User
    {
        public int UserId { get; set; }
        public string FirstName { get; set; } = null!;
        public string LastName { get; set; } = null!;
        public string Email { get; set; } = null!;
        public string? PhoneNumber { get; set; }
        public string? ProfileImagePath { get; set; }
        public string? ProfileImageName { get; set; }
    }
}
