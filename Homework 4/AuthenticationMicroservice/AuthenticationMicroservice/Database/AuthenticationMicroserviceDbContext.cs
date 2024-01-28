using Microsoft.EntityFrameworkCore;
using AuthenticationMicroservice.Models;

namespace AuthenticationMicroservice.Database
{
    public class AuthenticationMicroserviceDbContext: DbContext
    {
        public DbSet<User> Users { get; set; }

        public AuthenticationMicroserviceDbContext(DbContextOptions options) : base(options)
        {

        }
    }
}
