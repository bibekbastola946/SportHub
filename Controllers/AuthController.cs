using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SportHub.Dtos;
using SportHub.Helpers;
using SportHub.Models;

namespace SportHub.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly ILogger<AuthController> _logger;
        private AuthService? _authService;
        private readonly SportHubContext _context;
        public static User user = new();

        public AuthController(SportHubContext context, ILogger<AuthController> logger) {
            _logger = logger;
            _context = context;
        }
        [HttpPost("register")]
        public IActionResult Register(UserDto request)
        {
            _authService = new(_context);
            user = _authService.RegisterUser(request);
            return Ok(user);

        }
    }
}
