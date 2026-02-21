export default function ContactForm() {
  return (
    <form className="space-y-4">
      <input
        className="w-full border p-3 rounded"
        placeholder="Name"
      />
      <input
        className="w-full border p-3 rounded"
        placeholder="Email"
      />
      <textarea
        className="w-full border p-3 rounded"
        placeholder="Project Details"
        rows={5}
      />
      <button className="bg-green-900 text-white px-6 py-3 rounded">
        Submit
      </button>
    </form>
  );
}
