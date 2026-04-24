import { useState } from 'react';
import { toast } from 'react-toastify';
import { submitContactForm } from '../services/contactService';

const initialState = {
  name: '',
  email: '',
  message: ''
};

function Contact() {
  const [formData, setFormData] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error('Please fill in all fields.');
      return;
    }

    try {
      setIsSubmitting(true);
      await submitContactForm(formData);
      toast.success('Message sent successfully. I will get back to you soon!');
      setFormData(initialState);
    } catch (error) {
      const apiMessage = error.response?.data?.message;
      toast.error(apiMessage || 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="mx-auto mt-14 w-[92%] max-w-6xl pb-14">
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">Contact</p>
        <h2 className="display-font mt-2 text-2xl font-bold sm:text-4xl">Get In Touch</h2>
      </div>

      <div className="glass p-6 sm:p-8">
        <p className="mb-6 max-w-3xl text-sm leading-7 text-slate-700 dark:text-slate-300 sm:text-base">
          Interested in working together? Feel free to reach out for freelance work, collaboration, or job opportunities.
        </p>
        <form onSubmit={handleSubmit} className="grid gap-4">
          <label className="grid gap-2 text-sm font-medium">
            Name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              className="rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-emerald-500 dark:border-slate-700 dark:bg-slate-900"
            />
          </label>

          <label className="grid gap-2 text-sm font-medium">
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-emerald-500 dark:border-slate-700 dark:bg-slate-900"
            />
          </label>

          <label className="grid gap-2 text-sm font-medium">
            Message
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Tell me about your project"
              className="rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-emerald-500 dark:border-slate-700 dark:bg-slate-900"
            />
          </label>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-75"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>

          <div className="mt-2 rounded-2xl bg-slate-100 px-4 py-4 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-300">
            <p>Email: <span className="font-semibold text-slate-900 dark:text-slate-100">habtamushewamene905@gmail.com</span></p>
            <p className="mt-1">Phone: <span className="font-semibold text-slate-900 dark:text-slate-100">+251987246404</span></p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
