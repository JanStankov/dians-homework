using MapMicroservice.Models;

namespace MapMicroservice.Services.Interfaces
{
    public interface IReadOSMService
    {
        public List<ArtGalleryOrMuseum> GetAll();
        public ArtGalleryOrMuseum GetByName(string name);
    }
}
