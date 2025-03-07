import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaInstagram, FaTwitter, FaSpotify, FaSoundcloud, FaEnvelope } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // In a real application, you would send the form data to a server
    // For this demo, we'll just simulate a successful submission
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Thank you for your message! I\'ll get back to you soon.'
    })
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    })
  }

  const socialLinks = [
    { icon: FaInstagram, href: 'https://instagram.com/yourusername', label: 'Instagram' },
    { icon: FaTwitter, href: 'https://twitter.com/yourusername', label: 'Twitter' },
    { icon: FaSpotify, href: 'https://open.spotify.com/artist/yourid', label: 'Spotify' },
    { icon: FaSoundcloud, href: 'https://soundcloud.com/yourusername', label: 'SoundCloud' },
    { icon: FaEnvelope, href: 'mailto:your.email@example.com', label: 'Email' }
  ]

  return (
    <section id="contact" className="section bg-dark text-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            
            {formStatus.submitted && (
              <div className={`p-4 mb-6 rounded-lg ${formStatus.success ? 'bg-green-500/20 text-green-200' : 'bg-red-500/20 text-red-200'}`}>
                {formStatus.message}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="btn btn-primary w-full"
              >
                Send Message
              </button>
            </form>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
            
            <div className="mb-8">
              <p className="text-gray-400 mb-4">
                Feel free to reach out through social media or email. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              
              <p className="text-gray-400">
                Based in [Your Location]
              </p>
            </div>
            
            <div className="space-y-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-primary transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center mr-3">
                      <Icon className="text-xl" />
                    </div>
                    <span>{social.label}</span>
                  </a>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
