using SportHub.Models;

namespace SportHub.Helpers
{
    public class UserService
    {
        private readonly SportHubContext _context;
        public UserService(SportHubContext context) { 
            _context = context;
        }
    }
}
