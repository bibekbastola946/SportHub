using Microsoft.AspNetCore.Mvc;
using SportHub.Models;
using Swashbuckle.Swagger;

namespace SportHub.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        // Mock data for demonstration purposes
        private static readonly List<User> _users = new List<User>
        {
            new User { UserId = 1, FirstName = "John", LastName = "Doe", Email = "john@example.com" },
            new User { UserId = 2, FirstName = "Jane", LastName = "Smith", Email = "jane@example.com" },
            new User { UserId = 3, FirstName = "Bob", LastName = "Johnson", Email = "bob@example.com" }
        };

        private readonly ILogger<UserController> _logger;
        private readonly SportHubContext _context;

        public UserController(SportHubContext context, ILogger<UserController> logger)
        {
            _logger = logger;
            _context = context;
        }
    }
}