using AuthenticationMicroservice.Models;
using AuthenticationMicroservice.Models.Commands;

namespace AuthenticationMicroservice.Database.Repositories.Interfaces
{
    public interface IUserRepository
    {
        public Task<User> CreateUser(CreateUserCommand createUserCommand);

        public Task<User> GetUserByEmail(string email);
    }
}
