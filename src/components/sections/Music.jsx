import { useState } from 'react'
import { motion } from 'framer-motion'

const Music = () => {
  // This would typically come from an API or CMS
  const [tracks] = useState([
    {
      id: 1,
      title: 'Track Title 1',
      embedUrl: 'https://open.spotify.com/embed/track/4cOdK2wGLETKBW3PvgPWqT',
      type: 'spotify'
    },
    {
      id: 2,
      title: 'Track Title 2',
      embedUrl: 'https://open.spotify.com/embed/track/4cOdK2wGLETKBW3PvgPWqT',
      type: 'spotify'
    },
    {
      id: 3,
      title: 'Track Title 3',
      embedUrl: 'https://open.spotify.com/embed/track/4cOdK2wGLETKBW3PvgPWqT',
      type: 'spotify'
    }
  ])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="music" className="section bg-gray-100">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="mb-4">My Music</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Listen to my latest tracks and releases. Follow me on Spotify for more music.
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {tracks.map((track) => (
            <motion.div
              key={track.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              variants={itemVariants}
            >
              <div className="p-4 border-b border-gray-100">
                <h3 className="text-xl font-semibold">{track.title}</h3>
              </div>
              <div className="aspect-[16/3] w-full">
                {track.type === 'spotify' && (
                  <iframe
                    src={track.embedUrl}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allowtransparency="true"
                    allow="encrypted-media"
                    title={track.title}
                    className="w-full h-full"
                  ></iframe>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://open.spotify.com/artist/yourid"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary inline-flex items-center"
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
            </svg>
            Follow on Spotify
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Music
