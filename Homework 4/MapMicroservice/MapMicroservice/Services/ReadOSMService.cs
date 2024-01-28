using MapMicroservice.Models;
using NetTopologySuite;
using NetTopologySuite.IO;
using System;
using System.Collections.Generic;
using System.Linq;
using OsmSharp;
using OsmSharp.Streams;
using MapMicroservice.Services.Interfaces;

namespace MapMicroservice.Services
{
    public class ReadOSMService : IReadOSMService
    {
        private List<ArtGalleryOrMuseum> _artGalleriesAndMuseums;

        public ReadOSMService()
        {
            _artGalleriesAndMuseums = new List<ArtGalleryOrMuseum>();

            using (var reader = new PBFOsmStreamSource(new FileInfo("osm file").OpenRead()))
            {
                var osmData = reader.ToArray();

                // Filter the data to get only the art galleries and museums
                _artGalleriesAndMuseums = osmData
                    .Where(e => e is Node node && e.Tags != null &&
                                (e.Tags.ContainsKey("amenity") &&
                                 (e.Tags["amenity"] == "art_gallery" || e.Tags["amenity"] == "museum")))
                    .Select(e => new ArtGalleryOrMuseum
                    {
                        Id = (long)((Node)e).Id,
                        Type = e.Type.ToString(),
                        Latitude = (double)((Node)e).Latitude,
                        Longitude = (double)((Node)e).Longitude,
                        Tags = e.Tags.ToDictionary(kv => kv.Key, kv => kv.Value),
                        Name = e.Tags.ContainsKey("name") ? e.Tags["name"] : null,
                        NameEn = e.Tags.ContainsKey("name:en") ? e.Tags["name:en"] : null,
                        Phone = e.Tags.ContainsKey("phone") ? e.Tags["phone"] : null,
                        Website = e.Tags.ContainsKey("website") ? e.Tags["website"] : null,
                        Address = e.Tags.ContainsKey("addr:full") ? e.Tags["addr:full"] : null,
                        Wikipedia = e.Tags.ContainsKey("wikipedia") ? e.Tags["wikipedia"] : null
                    })
                    .ToList();
            }
        }

        public List<ArtGalleryOrMuseum> GetAll()
        {
            return _artGalleriesAndMuseums;
        }

        public ArtGalleryOrMuseum GetByName(string name)
        {
            return _artGalleriesAndMuseums.FirstOrDefault(a => a.Name == name);
        }
    }
}
