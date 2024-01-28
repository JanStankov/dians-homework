using MapMicroservice.Models;
using MapMicroservice.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace MapMicroservice.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ArtGalleryOrMuseumController : ControllerBase
    {
        private readonly IReadOSMService _service;

        public ArtGalleryOrMuseumController(IReadOSMService service)
        {
            _service = service;
        }

        [HttpGet]
        public ActionResult<List<ArtGalleryOrMuseum>> GetAll()
        {
            return _service.GetAll();
        }

        [HttpGet("{name}")]
        public ActionResult<ArtGalleryOrMuseum> GetByName(string name)
        {
            var item = _service.GetByName(name);
            if (item == null)
            {
                return NotFound();
            }
            return item;
        }
    }
}