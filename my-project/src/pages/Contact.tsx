import React, { useState } from "react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Message sent successfully");
    console.log("Form submitted:", formData);
    (e.target as HTMLFormElement).reset(); // Handle email sending via service like EmailJS
  };

  const phoneNumber = 250786015225;
  const linkedInUrl =
    "https://www.linkedin.com/in/habyarimana-caleb-517555285/";

  return (
    <section id="contact" className="py-20 bg-white text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <p className="text-lg text-gray-700 mb-6">
          Feel free to reach out to me for any inquiries, collaborations, or
          just a chat. Click below to message me In Any Way You Preffer!
        </p>
        <div className="flex justify-center">
          <a
            href="mailto:calebhabyarimana1@gmail.com"
            className="bg-blue-600  ml-4 text-white px-6 py-3 rounded hover:bg-blue-700"
          >
            Email Me
          </a>
          <a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 ml-4  text-white px-6 py-3 rounded hover:bg-blue-700"
          >
            Connect on LinkedIn
          </a>
          <a
            href={`https://wa.me/${phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 ml-4  text-white px-6 py-3 rounded hover:bg-blue-700"
          >
            Message me on WhatsApp
          </a>
        </div>
        <div>
          <p className="text-lg text-gray-700 mb-6 mt-6">OR</p>
          <h1 className="text-3xl font-bold mb-6">Send me a message</h1>
        </div>
        <div className="mt-10 contact-form">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg"
          >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold mb-2"
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

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2"
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

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 font-semibold mb-2"
              >
                Your Message
              </label>
              <textarea
                name="message"
                placeholder="Your Message"
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
