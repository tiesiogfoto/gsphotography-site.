export default function Contact() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-8">
      <h1 className="text-4xl font-bold text-gray-800">Contact</h1>

      <p className="text-gray-700">
        Have a project in mind or want to book a photoshoot? 
        Feel free to reach out by phone or email – I’ll get back to you as soon as possible.
      </p>

      <div className="bg-white p-6 rounded-xl shadow space-y-2">
        <p className="text-gray-700"><strong>GSphotography</strong></p>
        <p className="text-gray-700">
          📱 <a href="tel:+4746262381" className="text-blue-600 hover:underline">
            46 26 23 81
          </a>
        </p>
        <p className="text-gray-700">
          ✉️ <a href="mailto:hello@gsphotography.no" className="text-blue-600 hover:underline">
            hello@gsphotography.no
          </a>
        </p>
      </div>

      <form className="bg-white p-6 rounded-xl shadow space-y-4">
        <div>
          <label className="block text-gray-700">Name</label>
          <input type="text" className="w-full border rounded px-4 py-2" placeholder="Your name" />
        </div>
        <div>
          <label className="block text-gray-700">Email</label>
          <input type="email" className="w-full border rounded px-4 py-2" placeholder="your@email.com" />
        </div>
        <div>
          <label className="block text-gray-700">Message</label>
          <textarea className="w-full border rounded px-4 py-2" rows={4} placeholder="Write your message..." />
        </div>
        <button
          type="submit"
          className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
        >
          Send
        </button>
      </form>
    </div>
  );
}
