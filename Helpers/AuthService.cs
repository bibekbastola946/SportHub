using SportHub.Dtos;
using SportHub.Models;
using System.Security.Cryptography;

namespace SportHub.Helpers
{
    public class AuthService
    {
        private readonly SportHubContext _context;
        public AuthService(SportHubContext context) { 
            _context = context;
        }
        public User RegisterUser(UserDto userDto)
        {
            CreatePasswordHash(userDto.Password, out byte[] passwordHash, out byte[] passwordSalt);
            User user = new()
            {
                Username = userDto.Username,
                Password = userDto.Password,
                Email = userDto.Email,
                FirstName = userDto.FirstName,
                LastName = userDto.LastName,
                RegistrationDate = DateTime.Now,
                UserProfileImagePath = "",
                LastLoginDate = null,
                PasswordHash = passwordHash,
                PasswordSalt = passwordSalt
            };
            _context.Users.Add(user);
            _context.SaveChanges();
            return user;
        }
        public void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using var hmac = new HMACSHA512();
            passwordSalt = hmac.Key;
            passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
        }
    }
}
