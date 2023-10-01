using System;
using System.Collections.Generic;

namespace SportHub.Models
{
    public partial class User
    {
        public int UserId { get; set; }
        public string? Username { get; set; }
        public byte[]? PasswordHash { get; set; }
        public byte[]? PasswordSalt { get; set; }
        public string? Password { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? Email { get; set; }
        public DateTime? RegistrationDate { get; set; }
        public DateTime? LastLoginDate { get; set; }
        public string? UserProfileImagePath { get; set; }
    }
}
