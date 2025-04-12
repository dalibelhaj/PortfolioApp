import React, { useRef, useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Database, Globe, X, ChevronRight, ChevronLeft } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Project {
  id: number;
  title: string;
  description: string;
  images: string[];
  tags: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "3DMS",
    description: "A full-stack clinical case management application  built with Angular, Node.js, and MySql.",
    images: [
      "/images/dm2.PNG",
      "/images/dm1.PNG",
      "/images/dm3.PNG",
      "/images/dm4.PNG",
      "/images/dms5.PNG",
      "/images/dms6.PNG",
      "/images/dms7.PNG"

    ],
    tags: ["Angular", "Node.js"]
  },
  {
    id: 2,
    title: "Management system for civil engineering projects",
    description: "A management system for civil engineering projects with large-scale data handling.",
    images: [
      "/images/Tender1.PNG",
      "/images/tender2.PNG",
      "/images/tend3.PNG",
      "/images/tend4.PNG",
      "/images/ten5.PNG"

    ],
    tags: ["Angular", "Node.js"]
  },
  {
    id: 3,
    title: "A logistics application",
    description: "Logistics management application – currently in development, focused on improving delivery tracking.",
    images: [
      "/images/transpo.PNG",
      "/images/transpor2.PNG",
      "/images/transport3.PNG",
      "/images/transpr4.PNG",
      "/images/transporta5.PNG",
      "/images/tanspor6.PNG",
      "/images/transpo7.PNG",
      "/images/transpor8.PNG"

    ],
    tags: ["Angular", ".Net"]
  },
];

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const swiperRef = useRef<any>(null);
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative text-center text-white px-4">
<div className="w-48 h-48 md:w-56 md:h-56 mx-auto mb-8 rounded-full overflow-hidden border-4 border-white shadow-xl">            <img
              src="\images\profile.JPG"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Mohamed Ali Belhaj</h1>
          <p className="text-xl md:text-2xl mb-8">Full Stack Web Developer</p>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/dalibelhaj" className="text-white hover:text-gray-300 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/belhaj-mohamed-ali/" className="text-white hover:text-gray-300 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:belhajmohamedali07@gmail.com" className="text-white hover:text-gray-300 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          {/* Replacing Work Experience and Education with a single paragraph */}
          <p className="text-gray-700 text-lg leading-relaxed">
            I am a passionate Full Stack Web Developer with a strong background in creating robust, high-performance web applications. I thrive on transforming complex problems into innovative solutions by leveraging modern technologies such as React, Node.js, and .NET. With a commitment to clean code and user-centered design, I continuously strive to deliver outstanding digital experiences that bridge functionality and aesthetic appeal.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code2 className="text-indigo-600" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Frontend</h3>
              <p className="text-gray-600">Angular, React, TypeScript, Bootstrap</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="text-purple-600" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Backend</h3>
              <p className="text-gray-600">.NET, Node.js, MySQL, C#</p>
            </div>
            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="text-pink-600" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Tools & Others</h3>
              <p className="text-gray-600">Git, REST APIs, ORMs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="relative">
            <Swiper
              onSwiper={(swiper) => { swiperRef.current = swiper; }}
              modules={[Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              className="pb-12 project-swiper"
            >
              {projects.map((project) => (
                <SwiperSlide key={project.id}>
                  <div 
                    className="bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform hover:-translate-y-1"
                    onClick={() => setSelectedProject(project)}
                  >
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <div className="flex justify-between items-center">
                        <div className="flex gap-2">
                          {project.tags.map((tag, index) => (
                            <span key={index} className="px-2 py-1 bg-gray-100 text-sm rounded">{tag}</span>
                          ))}
                        </div>
                        <ExternalLink size={20} className="text-indigo-600" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Custom Navigation Arrows */}
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-lg"
            >
              <ChevronLeft size={24} className="text-indigo-600" />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-lg"
            >
              <ChevronRight size={24} className="text-indigo-600" />
            </button>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-4">
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                navigation
                pagination={{ clickable: true }}
                className="mb-4"
              >
                {selectedProject.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image}
                      alt={`${selectedProject.title} - Image ${index + 1}`}
                      className="w-full h-[400px] object-cover rounded"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <p className="text-gray-600 mb-4">{selectedProject.description}</p>
              <div className="flex gap-2">
                {selectedProject.tags.map((tag, index) => (
                  <span key={index} className="px-2 py-1 bg-gray-100 text-sm rounded">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Get In Touch</h2>
          <p className="text-gray-600 mb-8">
            I'm currently open for full-time positions or freelance projects.
            Let's work together to bring your ideas to life!
          </p>
          <a
            href="mailto:belhajmohamedali07@gmail.com"
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Send Message
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>© 2025 Mohamed Ali Belhaj. All rights reserved.</p>
        </div>
      </footer>

      {/* Custom CSS to adjust Swiper arrow positions */}
      <style>{`
        .project-swiper .swiper-button-next,
        .project-swiper .swiper-button-prev {
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
        }
        .project-swiper .swiper-button-prev {
          left: -35px;
        }
        .project-swiper .swiper-button-next {
          right: -35px;
        }
      `}</style>
    </div>
  );
}

export default App;
