using Microsoft.AspNetCore.Mvc;
using SportHub.Dtos;
using SportHub.Helpers;
using SportHub.Models;
using Swashbuckle.Swagger;

namespace SportHub.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {

        private readonly ILogger<UserController> _logger;
        private UserService _userService;
        private readonly SportHubContext _context;

        public UserController(SportHubContext context, ILogger<UserController> logger, UserService userService)
        {
            _logger = logger;
            _userService = userService;
            _context = context;
        }
    }
}