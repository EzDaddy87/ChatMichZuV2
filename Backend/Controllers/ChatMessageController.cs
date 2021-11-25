using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ChatMessageController : ControllerBase
    {
        private static List<ChatMessage> Messages = new();

        private readonly ILogger<ChatMessageController> _logger;

        public ChatMessageController(ILogger<ChatMessageController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public List<ChatMessage> GetAll()
        {
            return Messages;
        }
        [HttpPost]
        public void Post([FromBody]ChatMessage message)
        {
            Messages.Add(message);
        }
    }
}
