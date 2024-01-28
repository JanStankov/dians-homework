using AuthenticationMicroservice.Models;
using AuthenticationMicroservice.Models.Commands;
using AuthenticationMicroservice.Models.Responses;

namespace AuthenticationMicroservice.Services.Interfaces
{
    public interface IAuthenticationService
    {
        public Task<(bool success, LoginResponse content)> Login(string email, string password);
        public Task<RegisterResponse> Register(CreateUserCommand user);
    }
}
