import { FaInstagram, FaTwitter, FaSpotify, FaSoundcloud } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    { icon: FaInstagram, href: 'https://instagram.com/yourusername', label: 'Instagram' },
    { icon: FaTwitter, href: 'https://twitter.com/yourusername', label: 'Twitter' },
    { icon: FaSpotify, href: 'https://open.spotify.com/artist/yourid', label: 'Spotify' },
    { icon: FaSoundcloud, href: 'https://soundcloud.com/yourusername', label: 'SoundCloud' }
  ]

  return (
    <footer className="bg-dark text-white py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            className="mb-8 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-2">Your Name</h3>
            <p className="text-gray-400">Musician • Producer • Artist</p>
          </motion.div>
          
          <motion.div 
            className="flex space-x-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <a 
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label={social.label}
                >
                  <Icon />
                </a>
              )
            })}
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p>&copy; {currentYear} Your Name. All rights reserved.</p>
          <p className="mt-2">
            <a href="mailto:your.email@example.com" className="hover:text-primary transition-colors">
              your.email@example.com
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
