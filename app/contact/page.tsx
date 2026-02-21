export default function ContactPage() {
  return (
    <div className="pt-24 max-w-4xl mx-auto px-6">
      <h1 className="text-4xl font-bold mb-8">
        Request a Consultation
      </h1>

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
    </div>
  );
}
