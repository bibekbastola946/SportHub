using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using SportHub.Models;
using System.Reflection;

namespace SportHub
{

    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<SportHubContext>(options =>
            {
                options.UseSqlServer(Configuration.GetConnectionString("SportHubDatabase"));
            });

            services.AddControllers();
            services.AddEndpointsApiExplorer();
            services.AddSwaggerGen();

        }
        public void Configure(WebApplication app, IWebHostEnvironment env)
        {
            app.UseRouting();
            app.UseSwagger();
            app.UseSwaggerUI();

            app.UseHttpsRedirection();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
            app.Run();
        }
    }
}
