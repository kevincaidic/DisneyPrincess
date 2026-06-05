import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import IconRenderer from "./IconRenderer";

interface VideoItem {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  category: string;
  duration?: string;
}

const VIDEOS: VideoItem[] = [
  {
    id: "vid-1",
    title: "EcoSpray App Demo",
    description: "Interactive demonstration of the EcoSpray IoT-based sprinkler and monitoring system mobile application. Showcasing real-time controls, sensor data visualization, and automated irrigation management features.",
    videoUrl: "https://youtube.com/shorts/LzIKeaEgGEk",
    category: "Mobile App Demo",
    duration: "0:60"
  },
  {
    id: "vid-2",
    title: "Project Showcase Video",
    description: "Comprehensive showcase of design projects, creative process, and portfolio highlights. Features brand identities, web designs, and visual communication work.",
    videoUrl: "https://youtube.com/shorts/gNZy9SS7hwc",
    category: "Portfolio Showcase",
    duration: "0:60"
  },
  {
    id: "vid-3",
    title: "Creative Works Presentation",
    description: "Dynamic presentation of creative design works including digital art, branding projects, and visual design solutions. Highlighting design thinking and execution.",
    videoUrl: "https://youtube.com/shorts/NF46pCj03Ms",
    category: "Creative Showcase",
    duration: "0:60"
  },
  {
    id: "vid-4",
    title: "PRVV3 Project Demo",
    description: "Professional demonstration of the PRVV3 project showcasing features, functionality, and user experience design. In-depth look at project implementation and results.",
    videoUrl: "https://youtu.be/2pNpmBA54KY",
    category: "Project Demo",
    duration: "4:00"
  }
];

export default function VideoShowcaseSection() {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const handleVideoClick = (video: VideoItem) => {
    setSelectedVideo(video);
  };

  const closeModal = () => {
    setSelectedVideo(null);
    setPlayingVideo(null);
  };

  const getYouTubeThumbnail = (url: string) => {
    // Get YouTube video ID and return thumbnail URL
    if (url.includes('youtube.com/shorts/')) {
      const videoId = url.split('shorts/')[1].split('?')[0];
      return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    } else if (url.includes('youtu.be/')) {
      const videoId = url.split('youtu.be/')[1].split('?')[0];
      return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    }
    return '';
  };

  const getYouTubeEmbedUrl = (url: string) => {
    // Convert YouTube URLs to embed format
    if (url.includes('youtube.com/shorts/')) {
      const videoId = url.split('shorts/')[1].split('?')[0];
      return `https://www.youtube.com/embed/${videoId}`;
    } else if (url.includes('youtu.be/')) {
      const videoId = url.split('youtu.be/')[1].split('?')[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url;
  };

  return (
    <section
      id="videos"
      className="relative py-28 bg-[#050505] overflow-hidden border-t border-white/5"
    >
      {/* Background Effects */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] glow-purple rounded-full pointer-events-none opacity-30" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] glow-cyan rounded-full pointer-events-none opacity-30" />
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 text-left">
          <span className="font-mono text-xs uppercase tracking-widest text-[#06B6D4] font-semibold mb-3 block">
            07 • Video Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-white mb-6">
            Projects in Motion
          </h2>
          <p className="text-white/60 text-base sm:text-lg max-w-2xl">
            Watch interactive demos, project walkthroughs, and creative process videos showcasing work in action.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-cyan-400 rounded-full mt-6" />
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {VIDEOS.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => handleVideoClick(video)}
              className="group relative rounded-2xl overflow-hidden glass border border-white/10 hover:border-cyan-400/30 transition-all duration-300 cursor-pointer"
            >
              {/* Video Preview with Overlay */}
              <div className="relative aspect-video bg-neutral-900">
                <img
                  src={getYouTubeThumbnail(video.videoUrl)}
                  alt={video.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-20 h-20 rounded-full bg-red-600/90 backdrop-blur-md border-4 border-white/30 flex items-center justify-center group-hover:bg-red-500 transition-all duration-300 shadow-2xl"
                  >
                    <IconRenderer name="Play" size={32} className="text-white ml-1.5" />
                  </motion.div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/10">
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                    {video.category}
                  </span>
                </div>

                {/* Duration Badge */}
                {video.duration && (
                  <div className="absolute top-4 right-4 px-2 py-1 rounded bg-black/60 backdrop-blur-sm border border-white/10">
                    <span className="text-xs font-mono text-white">
                      {video.duration}
                    </span>
                  </div>
                )}
              </div>

              {/* Video Info */}
              <div className="p-6">
                <h3 className="text-lg sm:text-xl font-display font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {video.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed line-clamp-2">
                  {video.description}
                </p>

                {/* Watch Button */}
                <div className="mt-4 flex items-center gap-2 text-cyan-400 text-sm font-semibold group-hover:gap-3 transition-all">
                  <span>Watch Full Video</span>
                  <IconRenderer name="ArrowRight" size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Footer */}
        <div className="mt-16 flex flex-wrap gap-8 items-center justify-center text-sm text-white/40">
          <div className="flex items-center gap-2">
            <IconRenderer name="Video" size={16} className="text-cyan-400" />
            <span>{VIDEOS.length} Project Videos</span>
          </div>
          <span className="text-white/20">•</span>
          <div className="flex items-center gap-2">
            <IconRenderer name="Eye" size={16} className="text-cyan-400" />
            <span>Interactive Previews</span>
          </div>
          <span className="text-white/20">•</span>
          <div className="flex items-center gap-2">
            <IconRenderer name="Play" size={16} className="text-cyan-400" />
            <span>HD Quality</span>
          </div>
        </div>

      </div>

      {/* Full Screen Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl bg-neutral-950 rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/10 bg-neutral-900/50 backdrop-blur-md">
                <div>
                  <h3 className="text-lg font-bold text-white">{selectedVideo.title}</h3>
                  <p className="text-xs text-white/60">{selectedVideo.category}</p>
                </div>
                <button
                  onClick={closeModal}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all"
                >
                  <IconRenderer name="X" size={18} />
                </button>
              </div>

              {/* Video Player */}
              <div className="relative aspect-video bg-black">
                <iframe
                  src={`${getYouTubeEmbedUrl(selectedVideo.videoUrl)}?autoplay=1`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={selectedVideo.title}
                />
              </div>

              {/* Video Description */}
              <div className="p-6 bg-neutral-900/30">
                <p className="text-sm text-white/80 leading-relaxed">
                  {selectedVideo.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
