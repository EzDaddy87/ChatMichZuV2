using System;

namespace Backend
{
    public class ChatMessage
    {
        public DateTime Date { get; set; }

        public string Text { get; set; }

        public string Sender { get; set; }
    }
}
