'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Play, Monitor, Smartphone, Tablet, X } from 'lucide-react';
import { useState, useEffect } from 'react';

// Función para extraer el ID del video de YouTube desde diferentes formatos de URL
function getYouTubeVideoId(url: string): string | null {
  if (!url) return null;
  
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /youtube\.com\/watch\?.*v=([^&\n?#]+)/
  ];
  
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }
  
  return null;
}

// Función para obtener la thumbnail de YouTube
function getYouTubeThumbnail(videoId: string | null): string {
  if (!videoId) return 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=500&fit=crop';
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
}

interface Video {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  youtubeUrl?: string; // URL de YouTube (opcional)
  thumbnail?: string; // Thumbnail personalizado (opcional, si no hay youtubeUrl)
  duration?: string;
}

const videos: Video[] = [
  {
    title: 'Gestión de Mesas en Salón',
    description: 'Administra todas tus mesas en tiempo real con un sistema intuitivo',
    icon: Monitor,
    // Reemplaza con tu propio enlace de YouTube:
    youtubeUrl: 'https://youtu.be/krv1T58rccI', // Ejemplo - reemplaza con tu video
    thumbnail: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=500&fit=crop',
    duration: '0:56'
  },
  {
    title: 'Sistema de gestión de mesas y productos',
    description: 'Rastrea a tus repartidores en tiempo real y optimiza las entregas',
    icon: Smartphone,
    // Reemplaza con tu propio enlace de YouTube:
    youtubeUrl: 'https://youtu.be/Cp_xHV8g7jk', // Ejemplo - reemplaza con tu video
    thumbnail: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&h=500&fit=crop',
    duration: '1:01'
  },
  {
    title: 'Pantalla de Cocina Digital',
    description: 'Comandas digitales que eliminan errores y mejoran la eficiencia',
    icon: Tablet,
    // Reemplaza con tu propio enlace de YouTube:
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Ejemplo - reemplaza con tu video
    thumbnail: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=500&fit=crop',
    duration: '2:45'
  }
];

export function VideoDemo() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const handleVideoClick = (video: Video) => {
    if (video.youtubeUrl) {
      setSelectedVideo(video);
    } else {
      // Si no hay URL de YouTube, puedes mostrar un mensaje o hacer otra acción
      console.log('Este video no tiene URL de YouTube configurada');
      // Opcional: mostrar un alert o toast
      alert('Este video aún no tiene una URL de YouTube configurada. Por favor, agrega una URL de YouTube en el código.');
    }
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  // Cerrar modal con la tecla Escape y prevenir scroll
  useEffect(() => {
    if (!selectedVideo) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedVideo(null);
      }
    };

    document.addEventListener('keydown', handleEscape);
    // Prevenir scroll del body cuando el modal está abierto
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedVideo]);

  return (
    <section id="demo" className="py-24 relative overflow-hidden bg-slate-900/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-4 text-white">
            Mira QuickSolution en acción
          </h2>
          <p className="text-xl text-slate-400">
            Descubre cómo nuestro sistema puede transformar tu restaurante
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((video, index) => {
            const videoId = video.youtubeUrl ? getYouTubeVideoId(video.youtubeUrl) : null;
            const thumbnail = videoId ? getYouTubeThumbnail(videoId) : (video.thumbnail || '');

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
                onClick={() => handleVideoClick(video)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-green-500/50 transition-all">
                  {/* Video Thumbnail */}
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={thumbnail} 
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      onError={(e) => {
                        // Fallback si la thumbnail de YouTube falla
                        if (video.thumbnail) {
                          (e.target as HTMLImageElement).src = video.thumbnail;
                        }
                      }}
                    />
                    
                    {/* Play Button Overlay - siempre visible para mejor UX */}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                        <Play className="w-8 h-8 text-white ml-1" fill="white" />
                      </div>
                    </div>
                    
                    {/* Duration Badge */}
                    {video.duration && (
                      <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm px-2 py-1 rounded text-sm text-white">
                        {video.duration}
                      </div>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500/20 to-green-600/20 flex items-center justify-center">
                        <video.icon className="w-5 h-5 text-green-400" />
                      </div>
                      <h3 className="text-xl text-white">{video.title}</h3>
                    </div>
                    <p className="text-slate-400">{video.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Full Demo CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-green-800 to-green-900 text-white rounded-lg hover:shadow-lg  transition-shadow"
          >
            Solicitar Demo Completa
          </motion.button>
        </motion.div>
      </div>

      {/* Modal de Video */}
      <AnimatePresence>
        {selectedVideo && selectedVideo.youtubeUrl && (() => {
          const videoId = getYouTubeVideoId(selectedVideo.youtubeUrl);
          if (!videoId) return null;

          return (
            <motion.div
              key="video-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative w-full max-w-4xl bg-slate-900 rounded-2xl overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Botón de cerrar */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/70 hover:bg-black/90 flex items-center justify-center text-white transition-colors"
                  aria-label="Cerrar video"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Video Embed */}
                <div className="relative w-full aspect-video bg-black">
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                    title={selectedVideo.title}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                {/* Información del video */}
                <div className="p-6">
                  <h3 className="text-2xl text-white mb-2">{selectedVideo.title}</h3>
                  <p className="text-slate-400">{selectedVideo.description}</p>
                </div>
              </motion.div>
            </motion.div>
          );
        })()}
      </AnimatePresence>
    </section>
  );
}
