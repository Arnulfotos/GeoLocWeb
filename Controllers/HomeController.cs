using GeoLocWeb.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace GeoLocWeb.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private HttpClient _httpClient;
        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
            _httpClient = new HttpClient();
        }

        public IActionResult Index()
        {
            return View();
        }



        public async Task<IActionResult> GetIP(string? ip)
        {



            string url = $"http://ip-api.com/json/{ip ?? ""}";

            var result = await _httpClient.GetAsync(url);
            var body = await result.Content.ReadAsStringAsync();

            return Json(body);



        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
