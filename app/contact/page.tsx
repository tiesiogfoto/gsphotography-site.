<form
  action="https://formspree.io/f/mblaenkb"
  method="POST"
  className="space-y-4"
>
  <input
    type="text"
    name="name"
    placeholder="Name"
    required
    className="w-full rounded-md border border-gray-300 p-2 text-black"
  />
  <input
    type="email"
    name="email"
    placeholder="Email"
    required
    className="w-full rounded-md border border-gray-300 p-2 text-black"
  />
  <textarea
    name="message"
    placeholder="Message"
    required
    className="w-full rounded-md border border-gray-300 p-2 text-black"
  />
  <button
    type="submit"
    className="rounded-md bg-black px-4 py-2 text-white hover:bg-gray-800"
  >
    Send
  </button>
</form>
