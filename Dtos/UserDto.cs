namespace SportHub.Dtos
{
    public class UserDto
    {
        public string? Username { get; set; }
        public string? PasswordHash { get; set; }
        public string? PasswordSalt { get; set; }
        public string? Password { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? Email { get; set; }
        public DateTime? RegistrationDate { get; set; }
        public DateTime? LastLoginDate { get; set; }
        public string? UserProfileImagePath { get; set; }
    }
}
