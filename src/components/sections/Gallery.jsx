import { useState } from 'react'
import { motion } from 'framer-motion'

const Gallery = () => {
  // This would typically come from an API or CMS
  const [images] = useState([
    {
      id: 1,
      src: '/img/gallery1.jpg',
      alt: 'Gallery Image 1',
      placeholder: 'https://via.placeholder.com/600x400?text=Gallery+Image+1'
    },
    {
      id: 2,
      src: '/img/gallery2.jpg',
      alt: 'Gallery Image 2',
      placeholder: 'https://via.placeholder.com/600x400?text=Gallery+Image+2'
    },
    {
      id: 3,
      src: '/img/gallery3.jpg',
      alt: 'Gallery Image 3',
      placeholder: 'https://via.placeholder.com/600x400?text=Gallery+Image+3'
    },
    {
      id: 4,
      src: '/img/gallery4.jpg',
      alt: 'Gallery Image 4',
      placeholder: 'https://via.placeholder.com/600x400?text=Gallery+Image+4'
    },
    {
      id: 5,
      src: '/img/gallery5.jpg',
      alt: 'Gallery Image 5',
      placeholder: 'https://via.placeholder.com/600x400?text=Gallery+Image+5'
    },
    {
      id: 6,
      src: '/img/gallery6.jpg',
      alt: 'Gallery Image 6',
      placeholder: 'https://via.placeholder.com/600x400?text=Gallery+Image+6'
    }
  ])

  const [selectedImage, setSelectedImage] = useState(null)

  const openLightbox = (image) => {
    setSelectedImage(image)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'auto'
  }

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
    <section id="gallery" className="section bg-light">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="mb-4">Gallery</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A collection of moments captured throughout my musical journey.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {images.map((image) => (
            <motion.div
              key={image.id}
              className="overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-transform hover:scale-[1.02]"
              variants={itemVariants}
              onClick={() => openLightbox(image)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  onError={(e) => {
                    e.target.src = image.placeholder
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={closeLightbox}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-4xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[90vh] object-contain"
              onError={(e) => {
                e.target.src = selectedImage.placeholder
              }}
            />
            <button
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/80 transition-colors"
              onClick={closeLightbox}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

export default Gallery
