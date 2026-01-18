import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight,
  Wallpaper,
  Sparkles,
  Filter,
  Grid3X3,
  LayoutGrid,
  Heart,
  Share2,
  ZoomIn,
} from "lucide-react";
import luxry_1 from "../assets/images/luxry_!.png";
interface WallpaperItem {
  id: number;
  title: string;
  image: string;
  style: string;
  room: string;
  description: string;
}

const kidsNurseryWallpapers: WallpaperItem[] = [
  {
    id: 1,
    title: "Jungle Safari Mural",
    image:
      "https://images.unsplash.com/photo-1541123603104-512919d6a96c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    style: "Safari",
    room: "Nursery",
    description:
      "Monochrome jungle scene with tropical palms and safari animals - perfect for a gender-neutral nursery",
  },
  {
    id: 2,
    title: "Space Explorer",
    image:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    style: "Space",
    room: "Bedroom",
    description:
      "Vibrant space adventure with planets, rockets, and astronauts exploring the galaxy",
  },
  {
    id: 3,
    title: "Woodland Animals",
    image:
      "https://images.unsplash.com/photo-1518012312832-96uj89c9c7dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    style: "Animals",
    room: "Nursery",
    description:
      "Charming woodland creatures including foxes, bears, and deer in a forest setting",
  },
  {
    id: 4,
    title: "Safari Giraffe",
    image:
      "https://images.unsplash.com/photo-1547721064-da6cfb341d50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    style: "Safari",
    room: "Playroom",
    description:
      "Stunning African savanna mural featuring giraffes and acacia trees",
  },
  {
    id: 5,
    title: "Princess Dreams",
    image:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    style: "Princess",
    room: "Girls Room",
    description:
      "Dreamy pink room design with fairy tale magic for little princesses",
  },
  {
    id: 6,
    title: "World Map Adventure",
    image:
      "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    style: "Educational",
    room: "Playroom",
    description:
      "Vintage-style world map with hot air balloons and airplanes - educational and beautiful",
  },
  {
    id: 7,
    title: "Sweet Dreams Moon",
    image:
      "https://images.unsplash.com/photo-1532978379173-523e16f371f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    style: "Dreamy",
    room: "Nursery",
    description:
      "Soft gray moon and stars design creating a calm, peaceful sleeping environment",
  },
  {
    id: 8,
    title: "Hot Air Balloons",
    image:
      "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    style: "Adventure",
    room: "Bedroom",
    description:
      "Whimsical hot air balloons floating over pastel mountain peaks",
  },
  {
    id: 9,
    title: "Dinosaur World",
    image:
      "https://images.unsplash.com/photo-1606567595334-d39972c85dfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    style: "Dinosaurs",
    room: "Boys Room",
    description:
      "Friendly dinosaurs in a prehistoric jungle setting - perfect for dino lovers",
  },
  {
    id: 10,
    title: "Botanical Ferns",
    image:
      "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    style: "Botanical",
    room: "Nursery",
    description: "Delicate botanical ferns and leaves in soft, calming tones",
  },
  {
    id: 11,
    title: "Under The Sea",
    image:
      "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    style: "Ocean",
    room: "Bathroom",
    description:
      "Magical underwater world with friendly fish, whales, and coral reefs",
  },
  {
    id: 12,
    title: "Mountain Peaks",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    style: "Mountains",
    room: "Nursery",
    description: "Layered mountain silhouettes in soft pastel rainbow colors",
  },
];

const luxuryWallpapers: WallpaperItem[] = [
  {
    id: 1,
    title: "Venetian Damask",
    image: luxry_1,
    style: "Classic",
    room: "Living Room",
    description:
      "Timeless damask pattern with rich gold and deep navy accents in an elegant living space",
  },
  {
    id: 2,
    title: "Marble Elegance",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    style: "Modern",
    room: "Bathroom",
    description:
      "Sophisticated marble texture wallpaper with subtle gold veining",
  },
  {
    id: 3,
    title: "Art Deco Gold",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    style: "Art Deco",
    room: "Dining Room",
    description:
      "Geometric art deco patterns in luxurious metallic gold finishes",
  },
  {
    id: 4,
    title: "Tropical Paradise",
    image:
      "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    style: "Botanical",
    room: "Bedroom",
    description:
      "Lush tropical palm leaves and botanical prints for a resort-style bedroom",
  },
  {
    id: 5,
    title: "Abstract Waves",
    image:
      "https://images.unsplash.com/photo-1557682250-33bd709cbe85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    style: "Abstract",
    room: "Living Room",
    description: "Flowing abstract waves in sophisticated neutral tones",
  },
  {
    id: 6,
    title: "Chinoiserie Garden",
    image:
      "https://images.unsplash.com/photo-1545083036-b175dd155a1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    style: "Oriental",
    room: "Study",
    description:
      "Exquisite hand-painted style chinoiserie with birds and florals",
  },
  {
    id: 7,
    title: "Dark Floral Drama",
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    style: "Floral",
    room: "Dining Room",
    description: "Dramatic dark floral pattern on moody charcoal background",
  },
  {
    id: 8,
    title: "Geometric Luxe",
    image:
      "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    style: "Modern",
    room: "Office",
    description:
      "Contemporary geometric pattern in champagne and metallic tones",
  },
  {
    id: 9,
    title: "Velvet Texture",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    style: "Textured",
    room: "Bedroom",
    description: "Rich velvet-effect textured wallpaper in deep jewel tones",
  },
  {
    id: 10,
    title: "Mural Scenic",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    style: "Mural",
    room: "Living Room",
    description: "Stunning scenic mural depicting classical landscape imagery",
  },
  {
    id: 11,
    title: "Emerald Statement",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    style: "Bold",
    room: "Powder Room",
    description: "Rich emerald green statement wall for maximum impact",
  },
  {
    id: 12,
    title: "Minimalist Lines",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    style: "Minimalist",
    room: "Bedroom",
    description:
      "Clean minimalist lines and subtle textures for modern sophistication",
  },
];

export function WallpaperGallery() {
  const { category } = useParams<{ category: string }>();
  const isKidsNursery = category === "kids-nursery";

  const wallpapers = isKidsNursery ? kidsNurseryWallpapers : luxuryWallpapers;
  const styles = [...new Set(wallpapers.map((w) => w.style))];
  const rooms = [...new Set(wallpapers.map((w) => w.room))];

  const [selectedStyle, setSelectedStyle] = useState<string>("All");
  const [selectedRoom, setSelectedRoom] = useState<string>("All");
  const [viewMode, setViewMode] = useState<"grid" | "masonry">("masonry");
  const [selectedImage, setSelectedImage] = useState<WallpaperItem | null>(
    null
  );
  const [favorites, setFavorites] = useState<number[]>([]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  const filteredWallpapers = wallpapers.filter((w) => {
    const styleMatch = selectedStyle === "All" || w.style === selectedStyle;
    const roomMatch = selectedRoom === "All" || w.room === selectedRoom;
    return styleMatch && roomMatch;
  });

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (!selectedImage) return;
    const currentIndex = filteredWallpapers.findIndex(
      (w) => w.id === selectedImage.id
    );
    let newIndex;
    if (direction === "prev") {
      newIndex =
        currentIndex === 0 ? filteredWallpapers.length - 1 : currentIndex - 1;
    } else {
      newIndex =
        currentIndex === filteredWallpapers.length - 1 ? 0 : currentIndex + 1;
    }
    setSelectedImage(filteredWallpapers[newIndex]);
  };

  const categoryConfig = isKidsNursery
    ? {
        title: "Kids & Nursery",
        subtitle: "Magical Designs for Little Dreamers",
        description:
          "Create enchanting spaces that inspire imagination and wonder. Our kids and nursery collection features playful patterns, soothing colors, and whimsical designs perfect for your little ones.",
        heroImage:
          "https://images.unsplash.com/photo-1541123603104-512919d6a96c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920&q=80",
      }
    : {
        title: "Luxury Collection",
        subtitle: "Refined Elegance for Sophisticated Spaces",
        description:
          "Discover our curated collection of premium wallpapers featuring timeless patterns, rich textures, and exquisite craftsmanship for the most discerning interiors.",
        heroImage:
          "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920&q=80",
      };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] sm:h-[70vh] min-h-[500px] sm:min-h-[600px] overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img
            src={categoryConfig.heroImage}
            alt={categoryConfig.title}
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#23282d]/70 via-[#23282d]/50 to-[#23282d]/90" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Breadcrumb */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-300 uppercase tracking-widest mb-4 sm:mb-8"
              >
                <Link to="/" className="hover:text-[#ffb601] transition-colors">
                  Home
                </Link>
                <span className="text-[#ffb601]">/</span>
                <Link
                  to="/services"
                  className="hover:text-[#ffb601] transition-colors"
                >
                  Services
                </Link>
                <span className="text-[#ffb601]">/</span>
                <span className="text-[#ffb601]">{categoryConfig.title}</span>
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-3xl sm:text-5xl lg:text-7xl font-bold text-white mb-2 sm:mb-4 uppercase tracking-wider"
              >
                <span className="text-[#ffb601]">{categoryConfig.title}</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-base sm:text-xl lg:text-2xl text-white/90 mb-3 sm:mb-6"
              >
                {categoryConfig.subtitle}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-10 px-2"
              >
                {categoryConfig.description}
              </motion.p>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex items-center justify-center gap-4 sm:gap-8 lg:gap-12"
              >
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#ffb601]">
                    {wallpapers.length}+
                  </p>
                  <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">
                    Designs
                  </p>
                </div>
                <div className="w-px h-8 sm:h-12 bg-white/20" />
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#ffb601]">
                    {styles.length}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">
                    Styles
                  </p>
                </div>
                <div className="w-px h-8 sm:h-12 bg-white/20" />
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#ffb601]">Premium</p>
                  <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">
                    Quality
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-3 bg-[#ffb601] rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Filter Section */}
      <section className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Filters */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 text-[#23282d]">
                <Filter className="w-5 h-5" />
                <span className="font-medium">Filters:</span>
              </div>

              {/* Style Filter */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Style:</span>
                <select
                  value={selectedStyle}
                  onChange={(e) => setSelectedStyle(e.target.value)}
                  className="px-4 py-2 bg-gray-100 border-0 rounded-lg text-sm font-medium text-[#23282d] focus:ring-2 focus:ring-[#ffb601] cursor-pointer"
                >
                  <option value="All">All Styles</option>
                  {styles.map((style) => (
                    <option key={style} value={style}>
                      {style}
                    </option>
                  ))}
                </select>
              </div>

              {/* Room Filter */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Room:</span>
                <select
                  value={selectedRoom}
                  onChange={(e) => setSelectedRoom(e.target.value)}
                  className="px-4 py-2 bg-gray-100 border-0 rounded-lg text-sm font-medium text-[#23282d] focus:ring-2 focus:ring-[#ffb601] cursor-pointer"
                >
                  <option value="All">All Rooms</option>
                  {rooms.map((room) => (
                    <option key={room} value={room}>
                      {room}
                    </option>
                  ))}
                </select>
              </div>

              {/* Results Count */}
              <div className="px-4 py-2 bg-[#ffb601]/10 rounded-lg">
                <span className="text-sm font-medium text-[#23282d]">
                  {filteredWallpapers.length} designs found
                </span>
              </div>
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setViewMode("masonry")}
                className={`p-2 rounded-md transition-all ${
                  viewMode === "masonry"
                    ? "bg-[#ffb601] text-[#23282d]"
                    : "text-gray-500 hover:text-[#23282d]"
                }`}
              >
                <LayoutGrid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-md transition-all ${
                  viewMode === "grid"
                    ? "bg-[#ffb601] text-[#23282d]"
                    : "text-gray-500 hover:text-[#23282d]"
                }`}
              >
                <Grid3X3 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className={`grid gap-6 ${
              viewMode === "masonry"
                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                : "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            }`}
          >
            <AnimatePresence mode="popLayout">
              {filteredWallpapers.map((wallpaper, index) => (
                <motion.div
                  key={wallpaper.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer bg-white ${
                    viewMode === "masonry" && index % 3 === 0
                      ? "row-span-2"
                      : ""
                  }`}
                  onClick={() => setSelectedImage(wallpaper)}
                >
                  <div
                    className={`overflow-hidden ${
                      viewMode === "masonry"
                        ? index % 3 === 0
                          ? "aspect-[3/5]"
                          : "aspect-[4/5]"
                        : "aspect-square"
                    }`}
                  >
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      src={wallpaper.image}
                      alt={wallpaper.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#23282d] via-[#23282d]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                  {/* Quick Actions */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(wallpaper.id);
                      }}
                      className={`w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md transition-colors ${
                        favorites.includes(wallpaper.id)
                          ? "bg-red-500 text-white"
                          : "bg-white/90 text-[#23282d] hover:bg-[#ffb601]"
                      }`}
                    >
                      <Heart
                        className={`w-5 h-5 ${
                          favorites.includes(wallpaper.id) ? "fill-current" : ""
                        }`}
                      />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => e.stopPropagation()}
                      className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-[#23282d] hover:bg-[#ffb601] backdrop-blur-md transition-colors"
                    >
                      <ZoomIn className="w-5 h-5" />
                    </motion.button>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1 bg-[#ffb601] text-[#23282d] text-xs font-bold uppercase tracking-wider rounded-full">
                        {wallpaper.style}
                      </span>
                      <span className="px-3 py-1 bg-white/20 text-white text-xs font-medium rounded-full backdrop-blur-md">
                        {wallpaper.room}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">
                      {wallpaper.title}
                    </h3>
                    <p className="text-sm text-gray-300 line-clamp-2">
                      {wallpaper.description}
                    </p>
                  </div>

                  {/* Default Label */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#23282d]/80 to-transparent group-hover:opacity-0 transition-opacity duration-500">
                    <p className="text-white font-semibold">
                      {wallpaper.title}
                    </p>
                    <p className="text-sm text-gray-300">{wallpaper.style}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* No Results */}
          {filteredWallpapers.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <Wallpaper className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-2xl text-[#23282d] mb-2">No designs found</h3>
              <p className="text-gray-500 mb-6">
                Try adjusting your filters to see more results
              </p>
              <button
                onClick={() => {
                  setSelectedStyle("All");
                  setSelectedRoom("All");
                }}
                className="px-6 py-3 bg-[#ffb601] text-[#23282d] font-bold rounded-lg hover:bg-[#ffa500] transition-colors"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#23282d] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#23282d] via-[#2d3339] to-[#23282d]" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Sparkles className="w-16 h-16 text-[#ffb601] mx-auto mb-6" />
            <h2 className="text-4xl sm:text-5xl text-white mb-6 uppercase tracking-wide">
              Love What You See?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Let us bring your dream walls to life. Book a free consultation
              and get expert advice on the perfect wallpaper for your space.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-10 py-5 bg-[#ffb601] text-[#23282d] text-lg font-bold uppercase tracking-wider rounded-lg hover:bg-[#ffa500] transition-all shadow-2xl hover:scale-105"
              >
                Book Consultation
                <ArrowRight className="ml-3 w-6 h-6" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-10 py-5 border-2 border-white text-white text-lg font-bold uppercase tracking-wider rounded-lg hover:bg-white hover:text-[#23282d] transition-all"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start lg:items-center justify-center p-4 overflow-y-auto"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
              onClick={() => setSelectedImage(null)}
              className="fixed top-4 right-4 lg:absolute lg:top-6 lg:right-6 w-10 h-10 lg:w-12 lg:h-12 bg-[#23282d]/80 lg:bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-[#ffb601] hover:text-[#23282d] transition-colors z-20"
            >
              <X className="w-5 h-5 lg:w-6 lg:h-6" />
            </motion.button>

            {/* Navigation Buttons - Hidden on mobile */}
            <motion.button
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ delay: 0.15, type: "spring", stiffness: 200 }}
              onClick={(e) => {
                e.stopPropagation();
                navigateImage("prev");
              }}
              className="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/20 rounded-full items-center justify-center text-white hover:bg-[#ffb601] hover:text-[#23282d] transition-colors z-10"
            >
              <ChevronLeft className="w-8 h-8" />
            </motion.button>
            <motion.button
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ delay: 0.15, type: "spring", stiffness: 200 }}
              onClick={(e) => {
                e.stopPropagation();
                navigateImage("next");
              }}
              className="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/20 rounded-full items-center justify-center text-white hover:bg-[#ffb601] hover:text-[#23282d] transition-colors z-10"
            >
              <ChevronRight className="w-8 h-8" />
            </motion.button>

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="max-w-5xl w-full my-8 lg:my-0 flex flex-col lg:flex-row bg-white rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              <div className="lg:w-2/3 relative h-64 sm:h-80 lg:h-auto flex-shrink-0">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info Panel */}
              <div className="lg:w-1/3 p-6 sm:p-8 flex flex-col flex-shrink-0">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-[#ffb601] text-[#23282d] text-xs font-bold uppercase tracking-wider rounded-full">
                    {selectedImage.style}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-[#23282d] text-xs font-medium rounded-full">
                    {selectedImage.room}
                  </span>
                </div>

                <h2 className="text-3xl font-bold text-[#23282d] mb-4">
                  {selectedImage.title}
                </h2>

                <p className="text-gray-600 mb-6 flex-grow">
                  {selectedImage.description}
                </p>

                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-t border-gray-100">
                    <span className="text-gray-500">Quality</span>
                    <span className="font-semibold text-[#23282d]">
                      Premium
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-t border-gray-100">
                    <span className="text-gray-500">Material</span>
                    <span className="font-semibold text-[#23282d]">
                      Non-Woven
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-t border-gray-100">
                    <span className="text-gray-500">Installation</span>
                    <span className="font-semibold text-[#23282d]">
                      Professional
                    </span>
                  </div>
                </div>

                <div className="flex gap-3 mt-8">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => toggleFavorite(selectedImage.id)}
                    className={`flex-1 py-3 rounded-lg font-bold transition-colors flex items-center justify-center gap-2 ${
                      favorites.includes(selectedImage.id)
                        ? "bg-red-500 text-white"
                        : "bg-gray-100 text-[#23282d] hover:bg-gray-200"
                    }`}
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        favorites.includes(selectedImage.id)
                          ? "fill-current"
                          : ""
                      }`}
                    />
                    {favorites.includes(selectedImage.id) ? "Saved" : "Save"}
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 py-3 bg-gray-100 text-[#23282d] rounded-lg font-bold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                  >
                    <Share2 className="w-5 h-5" />
                    Share
                  </motion.button>
                </div>

                <Link
                  to="/contact"
                  className="mt-4 w-full py-4 bg-[#ffb601] text-[#23282d] rounded-lg font-bold text-center hover:bg-[#ffa500] transition-colors flex items-center justify-center gap-2"
                >
                  Request This Design
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
