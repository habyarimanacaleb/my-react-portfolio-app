import React, { useState } from "react";
import { FaEnvelope, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // clear error as user types
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all fields.");
      return;
    }

    setSubmitted(true);
    console.log("Form submitted:", formData);
    (e.target as HTMLFormElement).reset();
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000); // Reset message
  };

  const phoneNumber = 250786015225;
  const linkedInUrl =
    "https://www.linkedin.com/in/habyarimana-caleb-517555285/";

  return (
    <section id="contact" className="py-20 bg-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
          Feel free to reach out to me for any inquiries, collaborations, or
          just a chat. Click below to message me in any way you prefer!
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <a
            href="mailto:calebhabyarimana1@gmail.com"
            className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-full hover:bg-blue-700 transition-all shadow-md"
          >
            <FaEnvelope /> Email Me
          </a>
          <a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-full hover:bg-blue-700 transition-all shadow-md"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href={`https://wa.me/${phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-full hover:bg-blue-700 transition-all shadow-md"
          >
            <FaWhatsapp /> WhatsApp
          </a>
        </div>

        <p className="text-lg text-gray-700 mb-3">OR</p>
        <h1 className="text-3xl font-bold mb-6">Send me a message</h1>

        <div className="mt-6 max-w-xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            {error && (
              <p className="mb-4 text-red-600 font-semibold">{error}</p>
            )}
            {submitted && (
              <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                ✅ Your message was sent successfully!
              </div>
            )}

            <div className="mb-4 text-left">
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold mb-1"
              >
                Your Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4 text-left">
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-1"
              >
                Your Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4 text-left">
              <label
                htmlFor="message"
                className="block text-gray-700 font-semibold mb-1"
              >
                Your Message
              </label>
              <textarea
                name="message"
                maxLength={500}
                placeholder="Your Message"
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
              ></textarea>
              <div className="text-right text-sm text-gray-500 mt-1">
                {formData.message.length}/500
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
