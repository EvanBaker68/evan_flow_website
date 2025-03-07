import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="section pt-32 bg-gradient-to-b from-dark to-gray-900 text-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <div className="aspect-square rounded-full overflow-hidden border-4 border-primary/20 max-w-md mx-auto">
              <img 
                src="/img/profile.jpg" 
                alt="Artist Profile" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/500x500?text=Your+Photo+Here'
                }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center md:text-left">
              Hello, I'm <span className="text-primary">Your Name</span>
            </h3>
            
            <div className="space-y-4 text-gray-300">
              <p>
                I'm a passionate musical artist based in [Your Location]. I create [genre] music that blends [influences or style description]. My sound is characterized by [unique elements of your music].
              </p>
              
              <p>
                I've been creating music for [number] years, drawing inspiration from [inspirations]. My goal is to [your artistic mission or what you hope to achieve with your music].
              </p>
              
              <p>
                When I'm not in the studio, I [other interests or activities].
              </p>
            </div>
            
            <div className="mt-8 flex justify-center md:justify-start">
              <a 
                href="#music" 
                className="btn btn-primary mr-4"
              >
                Listen to My Music
              </a>
              <a 
                href="#contact" 
                className="btn border border-white/20 text-white hover:bg-white/10"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
