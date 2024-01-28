namespace MapMicroservice.Models
{
    public class ArtGalleryOrMuseum
    {
        public long Id { get; set; }
        public string Type { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }
        public Dictionary<string, string> Tags { get; set; }
        public string Name { get; set; }
        public string NameEn { get; set; }
        public string Phone { get; set; }
        public string Website { get; set; }
        public string Address { get; set; }
        public string Wikipedia { get; set; }
    }
}
