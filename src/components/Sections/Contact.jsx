import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '../UI/Card';
import Button from '../UI/Button';
import { Mail, Linkedin, Github, Send, MessageSquare, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      console.log('Form Submitted:', formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-warm-cream">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-warm-taupe block mb-2">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-warm-charcoal">Contact Me</h2>
          <div className="w-12 h-1 bg-accent-gold mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Details Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col justify-between gap-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-serif font-semibold text-warm-charcoal">
                Let's talk about your next project or study idea.
              </h3>
              <p className="text-sm text-warm-taupe leading-relaxed">
                Whether you have a question about coding, want to discuss software systems, artificial intelligence frameworks, or just want to connect, feel free to drop a message!
              </p>
            </div>

            {/* Quick Contact Cards */}
            <div className="space-y-4 my-6">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-warm-light border border-warm-beige/50 warm-shadow-sm">
                <div className="p-3 rounded-xl bg-accent-gold/15 text-warm-charcoal">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-warm-taupe font-medium">Email Me</p>
                  <a href="mailto:rajnish.kumar@example.com" className="text-sm font-semibold text-warm-charcoal hover:text-accent-gold transition-colors">
                    kumarrajnishmail@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-warm-light border border-warm-beige/50 warm-shadow-sm">
                <div className="p-3 rounded-xl bg-accent-gold/15 text-warm-charcoal">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-warm-taupe font-medium">Location</p>
                  <p className="text-sm font-semibold text-warm-charcoal">
                    India
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://github.com/rajnish12-git"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-2xl bg-warm-light border border-warm-beige/60 text-warm-charcoal hover:bg-accent-gold transition-all duration-300 warm-shadow"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/rajnish-kumar-100558249"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-2xl bg-warm-light border border-warm-beige/60 text-warm-charcoal hover:bg-accent-gold transition-all duration-300 warm-shadow"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>

          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <Card className="p-8 border-warm-beige/60 bg-warm-light rounded-[2rem] warm-shadow-lg">
              <h3 className="text-xl font-serif font-bold text-warm-charcoal mb-6 flex items-center gap-2">
                <MessageSquare size={20} className="text-accent-gold" /> Send a Message
              </h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 text-green-800 rounded-2xl p-6 text-center"
                >
                  <h4 className="font-serif font-bold text-lg mb-1">Message Sent Successfully!</h4>
                  <p className="text-sm text-green-700">Thank you for reaching out, Rajnish will get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-semibold text-warm-taupe uppercase tracking-wider">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-warm-beige bg-warm-cream/30 text-warm-charcoal placeholder-warm-taupe/50 focus:outline-none focus:ring-2 focus:ring-accent-gold/30 focus:border-accent-gold transition-all text-sm"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-semibold text-warm-taupe uppercase tracking-wider">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-warm-beige bg-warm-cream/30 text-warm-charcoal placeholder-warm-taupe/50 focus:outline-none focus:ring-2 focus:ring-accent-gold/30 focus:border-accent-gold transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-semibold text-warm-taupe uppercase tracking-wider">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Hi Rajnish, I would love to connect and talk about..."
                      className="w-full px-4 py-3 rounded-xl border border-warm-beige bg-warm-cream/30 text-warm-charcoal placeholder-warm-taupe/50 focus:outline-none focus:ring-2 focus:ring-accent-gold/30 focus:border-accent-gold transition-all text-sm resize-none"
                    ></textarea>
                  </div>

                  <Button type="submit" variant="primary" className="w-full py-3.5 gap-2 text-sm rounded-xl">
                    Send Message <Send size={16} />
                  </Button>
                </form>
              )}
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
