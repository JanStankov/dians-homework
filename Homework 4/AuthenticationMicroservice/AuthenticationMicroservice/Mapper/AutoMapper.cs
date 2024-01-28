using AutoMapper;
using AuthenticationMicroservice.Models;
using AuthenticationMicroservice.Models.Responses;

namespace AuthenticationMicroservice.Mapper
{
    public class AutoMapper : Profile
    {
        public AutoMapper()
        {
            CreateMap<User, RegisterResponse>();
        }
    }
}
