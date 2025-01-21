
import React, { useState, useEffect } from "react";
import video from "./pixel-10sec-2.mp4";
import logo from "./logo.svg";
import p1 from "./Skip-the-Queue.svg";
import p2 from "./Big-Discounts.svg";
import p3 from "./Treats-on-us.svg";
import p4 from "./movie-night-poster-for-website-768x512.jpg";
import p5 from "./storytelling-session-02-1200-x-800-px-768x512.png";
import p6 from "./colorful-pennants-at-a-festival.webp";
import p7 from "./audience-at-the-conference-hall.webp";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  GraduationCap,
  CalendarDays,
  Gift,
  Building2,
  Heart,
  Utensils,
  UtensilsCrossed,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  MapPin,
  Phone,
  Mail,
  ChevronDown,
} from "lucide-react";

const playCategories = [
  {
    title: "Prime",
    description: "An arena for the best parties and events.",
    activities: 7,
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
    bgColor: "bg-rose-50",
  },
  {
    title: "Studio",
    description: "A creative space for art, dance, and music.",
    activities: 8,
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618",
    bgColor: "bg-blue-50",
  },
  {
    title: "Union",
    description: "A hub for sports enthusiasts.",
    activities: 10,
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211",
    bgColor: "bg-green-50",
  },
  {
    title: "Junior",
    description: "Exciting activities designed for kids.",
    activities: 5,
    image: "https://images.unsplash.com/photo-1472162072942-cd5147eb3902",
    bgColor: "bg-yellow-50",
  },
  {
    title: "Pixel",
    description: "Dive into the world of virtual reality and gaming.",
    activities: 15,
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f",
    bgColor: "bg-purple-50",
  },
];

const participateSection = [
  {
    title: "Learn & Master",
    icon: <GraduationCap className="w-6 h-6" />,
    staticdec:
      " Whether it's skateboarding or beach volleyball, workshops, bootcamps and one-on-one coaching with our instructors will help you stay on top of your game. Explore our list of available programmes with some of the best coaching academies worldwide.",
    description: "Join our academies to master various sports",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211",
    bgColor: "bg-indigo-50",
  },
  {
    title: "Events at PLaY",
    icon: <CalendarDays className="w-6 h-6" />,
    description: "Community events and special celebrations",
    staticdec:
      "Put your game-face on! Paintball shootouts, laser tag battles, football tournaments and more — join our championships or give us a call to organise one just for your gang of friends. Choose your side and fight it out in a range of events organised by Play.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
    bgColor: "bg-violet-50",
  },
];

const specialEvents = [
  {
    title: "Summer Music Festival",
    description: "A weekend of live performances under the stars",
    date: "July 15-17",
    category: "Music",
    image: p6,
  },
  {
    title: "Movie-Nights : Interstellar",
    description:
      "Come for the movie, stay for the memories-Starflix Nights is your ticket to a magical night under the stars",
    date: "January 18th",
    category: "Movies",
    image: p4,
  },
  {
    title: "Tech Conference",
    description: "Join industry leaders in innovation",
    date: "September 10",
    category: "Tech",
    image: p7,
  },
  {
    title: "Storytelling Session - The New Year's Wish",
    description:
      "Spark your child's imagination with our enchanting Storytelling Session! Magical tales, fun activities, and endless adventures await. Join the fun today!",
    date: "March 10th",
    category: "Story Telling",
    image: p5,
  },
];

const hostingOptions = [
  {
    title: "Birthday Celebrations",
    icon: <Gift className="w-6 h-6" />,
    description: "Make your special day unforgettable",
    image: "https://images.unsplash.com/photo-1464347744102-11db6282f854",
    bgColor: "bg-pink-50",
  },
  {
    title: "Corporate Events",
    icon: <Building2 className="w-6 h-6" />,
    description: "Team building and corporate experiences",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b",
    bgColor: "bg-sky-50",
  },
  {
    title: "Perfect Dates",
    icon: <Heart className="w-6 h-6" />,
    description: "Create memorable moments together",
    image: "https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg",
    bgColor: "bg-rose-50",
  },
];

const foodSection = [
  {
    title: "Food Court",
    icon: <Utensils className="w-6 h-6" />,
    description: "Variety of continental bites and refreshing beverages",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9",
    bgColor: "bg-amber-50",
  },
  {
    title: "Restaurant",
    icon: <UtensilsCrossed className="w-6 h-6" />,
    description: "Fun-filled flavor fest for diverse culinary cravings",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    bgColor: "bg-emerald-50",
  },
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [activeDropdown, setActiveDropdown] = React.useState<number | null>(
    null
  );
  const [scrolled, setScrolled] = React.useState(false);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev + 1) % specialEvents.length);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev - 1 + specialEvents.length) % specialEvents.length);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    {
      title: "Activities",
      items: ["Prime", "Studio", "Union", "Junior", "Pixel"],
    },
    {
      title: "Host",
      items: ["Birthday Celebrations", "Corporate Events", "Perfect Dates"],
    },
    {
      title: "F&B",
      items: ["Food Court", "Restaurant"],
    },
    {
      title: "About",
      items: ["Our Story", "Membership", "Contact Us"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 right-0 transition-all duration-300 z-50 ${
          scrolled
            ? "bg-gray-900/95 backdrop-blur-md shadow-xl shadow-black/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <a href="#" className="group">
                <img
                  src={logo}
                  alt="PLaY Logo"
                  className="h-10 w-auto transform transition-transform duration-300 group-hover:scale-105"
                />
              </a>
            </div>

            {/* Navigation Items */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item, index) => (
                <div
                  key={item.title}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(index)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center space-x-1 text-gray-300 hover:text-red-400 transition-colors py-2">
                    <span className="font-medium">{item.title}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Dropdown Menu */}
                  <div
                    className={`absolute top-full left-0 w-48 py-2 mt-1 transition-all duration-300 ${
                      activeDropdown === index
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
                  >
                    <div className="bg-gray-800/95 backdrop-blur-md shadow-xl rounded-xl border border-gray-700">
                      {item.items.map((subItem) => (
                        <a
                          key={subItem}
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-300 hover:bg-gradient-to-r hover:from-red-500/10 hover:to-rose-500/10 hover:text-red-400 transition-colors"
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <button
                onClick={() => setActiveDropdown((prev) => (prev === null ? 0 : null))}
                className="text-white"
              >
                ☰
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-screen">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={video}
          autoPlay
          loop
          muted
        ></video>

        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-transparent" />
        <div className="relative max-w-7xl mx-auto h-full flex items-center px-4 sm:px-6 lg:px-8">
          <div className="text-center w-full space-y-8">
            <h1 className="text-5xl sm:text-7xl font-bold text-transparent bg-gradient-to-r from-red-400 via-white to-rose-400 bg-clip-text mb-8 drop-shadow-2xl">
              Your Ultimate Entertainment Destination
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8">
              Experience the thrill of multiple attractions under one roof
            </p>
            <button className="bg-gradient-to-r from-red-600 to-rose-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-500 hover:shadow-xl hover:shadow-red-500/30 transform hover:-translate-y-1 hover:scale-105">
              Book Your Adventure Today
            </button>
          </div>
        </div>
      </div>

      {/* Play Categories Section */}
      <section
        className="py-20 bg-white relative"
        style={{
          backgroundColor: "#F5E6FF", // Replace this with the color you prefer
          backgroundSize: "150px 150px",
          backgroundRepeat: "repeat",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Play Categories
            </h2>
            <p className="text-lg text-gray-600">
              Discover our world of entertainment
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {playCategories.map((category, index) => (
              <div
                key={category.title}
                className={`group ${category.bgColor} rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2`}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-500">
                      {category.activities} Activities
                    </span>
                    <button className="group/btn bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-gray-800">
                      Explore
                      <span className="inline-block ml-1 transition-transform duration-300 group-hover/btn:translate-x-1">
                        →
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Participate Section */}
      <section
  className="py-20 bg-white relative"
  style={{
    backgroundColor: "#E8F5E9", // Replace this with the color you prefer
    backgroundSize: "150px 150px", 
    backgroundRepeat: "repeat",
  }}
>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Participate</h2>
            <p className="text-lg text-gray-600">Get involved in our community</p>
          </div>
          <div className="flex space-x-8 overflow-x-auto pb-8 snap-x snap-mandatory">
            {participateSection.map((item) => (
              <div
                key={item.title}
                className={`flex-none w-[36rem] h-[30rem] snap-center group ${
                  item.bgColor
                } rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-xl`}
              >
                <div className="relative h-56">
                  <img
                    src={`${item.image}?w=800&h=600&fit=crop`}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="text-white">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="inline-block p-3 rounded-full mb-4 bg-white shadow-md">
                    {item.icon}
                  </div>
                  <div className="text-gray-700">
        <p className="text-sm">{item.staticdec}</p>
      </div>
                  <button className="w-full bg-gray-900 text-white py-2 rounded-lg mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    Join Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* Host Section */}
<section
  className="py-20 bg-white relative"
  style={{
    backgroundColor: "#FFEBD5", // Peach background color
    backgroundSize: "150px 150px", // Customize the size of the icons
    backgroundRepeat: "repeat",
  }}
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-4 text-gray-900">Host</h2>
      <p className="text-lg text-gray-600">Create unforgettable experiences</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 perspective-1000">
      {hostingOptions.map((option) => (
        <div
          key={option.title}
          className="group transform-gpu transition-all duration-500 hover:rotate-y-12 hover:scale-105"
        >
          <div className={`${option.bgColor} rounded-2xl overflow-hidden shadow-lg`}>
            <div className="relative h-48">
              <img
                src={`${option.image}?w=800&h=600&fit=crop`}
                alt={option.title}
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-medium transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  Learn More
                </button>
              </div>
            </div>
            <div className="p-6">
              {/* Removed Bubble */}
              <div className="mb-4">{option.icon}</div>
              {/* Updated Font Sizes */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{option.title}</h3>
              <p className="text-lg text-gray-600">{option.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    {/* Clickable Section */}
    <div className="mt-12 flex items-center justify-between bg-gray-100 py-4 px-6 rounded-lg shadow-md">
      <a
        href="/host-your-event" // Replace with the desired URL
        className="text-lg font-semibold text-gray-900 underline hover:no-underline"
      >
        Have an offbeat idea? Create your own event, fully customised!
      </a>
      <a
        href="/host-your-event" // Replace with the desired URL
        className="text-gray-900 text-2xl hover:translate-x-1 transition-transform duration-300"
      >
        →
      </a>
    </div>
  </div>
</section>

<div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <section className="w-full py-20 bg-[#2C3E50]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Special Events</h2>
            <p className="text-lg text-gray-400">
              Don't miss out on these amazing experiences
            </p>
          </div>

          <div className="relative">
            <button
              onClick={prevSlide}
              disabled={isAnimating}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white text-gray-800 p-4 rounded-full shadow-lg hover:bg-gray-200 transition-all duration-300"
            >
              <span className="text-2xl">&lt;</span>
            </button>

            <button
              onClick={nextSlide}
              disabled={isAnimating}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white text-gray-800 p-4 rounded-full shadow-lg hover:bg-gray-200 transition-all duration-300"
            >
              <span className="text-2xl">&gt;</span>
            </button>

            <div className="flex justify-center items-center">
              <div className="flex items-center justify-center gap-4 overflow-visible w-[1200px] h-[500px]">
                {specialEvents.map((event, index) => {
                  let position = index - currentSlide;
                  if (position < -1) position += specialEvents.length;
                  if (position > 1) position -= specialEvents.length;
                  
                  const isCenter = position === 0;
                  
                  return (
                    <div
                      key={event.title}
                      className="absolute transition-all duration-500 ease-in-out"
                      style={{
                        transform: `translateX(${position * 120}%) scale(${isCenter ? 1.1 : 0.8})`,
                        opacity: isCenter ? 1 : 0.3,
                        zIndex: isCenter ? 10 : 1,
                      }}
                    >
                      <div 
                        className={`w-[350px] bg-white rounded-xl overflow-hidden transition-all duration-500
                          ${isCenter ? 'shadow-2xl ring-4 ring-blue-500 ring-opacity-75' : 'shadow-lg'}
                        `}
                      >
                        <div className="relative h-48">
                          <img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-30 object-cover"
                          />
                        </div>
                        <div className={`p-10  transition-all duration-500 ${isCenter ? 'bg-white' : 'bg-gray-50'}`}>
                          <h3 className={`text-xl mb-3 font-bold  ${isCenter ? 'text-blue-600' : 'text-gray-900'}`}>
                            {event.title}
                          </h3>
                          <p className="text-gray-600 mb-4">{event.description}</p>
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-gray-500">
                              {event.date}
                            </span>
                            <button 
                              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 
                                ${isCenter 
                                  ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                                  : 'bg-gray-800 text-white hover:bg-gray-700'}
                              `}
                            >
                              Book Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

      {/* Food & Beverage Section */}
<section
  className="py-20 bg-white relative"
  style={{
    backgroundColor: "#f8f9fa", // Light grey background
    backgroundSize: "150px 150px", // Customize the size of the icons
    backgroundRepeat: "repeat",
  }}
>
  <div className="absolute inset-0 bg-black/20"></div> {/* Overlay for better readability */}
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-4 text-gray-900">Food & Beverage</h2>
      <p className="text-lg text-gray-600">Satisfy your cravings</p>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {foodSection.map((item) => (
        <div
          key={item.title}
          className="group relative rounded-2xl overflow-hidden h-[400px]"
        >
          <div className="absolute inset-0">
            <img
              src={`${item.image}?w=800&h=1200&fit=crop`}
              alt={item.title}
              className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          </div>
          <div className="relative h-full flex flex-col justify-end p-8">
            <div className="mb-6">
              <div className="inline-block p-4 rounded-full bg-white/90 shadow-xl mb-6 transform -rotate-12 group-hover:rotate-0 transition-transform duration-500">
                {item.icon}
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-gray-200 text-lg max-w-md">{item.description}</p>
            </div>
            <button className="w-full bg-white/90 text-gray-900 py-4 rounded-xl font-semibold transform translate-y-5 group-hover:translate-y-0 transition-transform duration-500">
              View Menu
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Book your slots</h2>
          <p className="text-lg text-gray-300">
            To find special offers, occupancy rates, and free time
          </p>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Calendar Date Picker */}
          <div className="flex items-center gap-4">
            <div className="bg-lime-200 text-black px-4 py-3 rounded-lg flex items-center gap-3">
              <DatePicker
                selected={selectedDate}
                onChange={(date: Date | null) => {
                  if (date) {
                    setSelectedDate(date); // Only set if `date` is not null
                  }
                }}
                dateFormat="EEEE, dd MMMM yyyy"
                minDate={new Date()}
                className="bg-transparent font-semibold text-lg outline-none"
              />
              <button
  onClick={() => {
    const inputElement = document.querySelector(
      ".react-datepicker-wrapper input"
    ) as HTMLInputElement; // Type assertion to HTMLInputElement
    inputElement?.focus(); // Use focus only if inputElement is not null
  }}
  className="text-gray-900"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 7v4m0 0v4m0-4h8m-8 0H4m4-4h8m0 0V4m0 4v4m0 4V4m4 0a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h12z"
    />
  </svg>
</button>

            </div>
            <p className="text-sm text-gray-400">
              Average wait time 5-10 mins, pre-booking activities is recommended
            </p>
          </div>
          {/* Additional Info Section */}
          <div className="text-center">
  <p className="font-bold uppercase text-2xl">Plan Your Day at Play</p>
</div>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-5 text-left text-sm">
         
            <div>
              <p className="font-semibold text-lime-400">Activities</p>
              <p>6:00 AM – 11:00 PM</p>
            </div>
            <div>
              <p className="font-semibold text-lime-400">F&B Timings</p>
              <p>10:00 AM – 11:00 PM</p>
            </div>
            <div>
              <p className="font-semibold text-lime-400">Personal Vehicles</p>
              <p>Parking available</p>
            </div>
            <div>
              <p className="font-semibold text-lime-400">Nearest Metro</p>
              <p>Silk Board (Yellow Line)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="relative overflow-hidden bg-lime-200 h-16 flex items-center">
  <div
    className="absolute whitespace-nowrap animate-scroll"
    style={{ animation: "scrollText 10s linear infinite" }}
  >
    <span className="mx-4 font-bold text-black text-lg">For the love of play!</span>
    <span className="mx-4 font-bold text-black text-lg">For the love of play!</span>
    <span className="mx-4 font-bold text-black text-lg">For the love of play!</span>
  </div>
</div>
    <section className="py-20 bg-gray-100">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Left Side - Heading */}
      <div>
        <h2 className="text-5xl font-extrabold text-gray-900 leading-tight mb-4">
          Play like <span className="text-black">a Pro</span>
        </h2>
        <p className="text-gray-600 mb-6">
          We call this our Royalty Programme.
        </p>
        <button className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg flex items-center gap-2 shadow-lg hover:bg-blue-700 transition">
          Become a member →
        </button>
      </div>

      {/* Right Side - Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div>
          <img src={p1} alt="Skip the Queue" className="mx-auto mb-4 h-16" />
          <h3 className="font-bold text-lg text-gray-900">SKIP THE QUEUE</h3>
          <p className="text-gray-600">No ticketing. Just load your card and go play.</p>
        </div>

        <div>
          <img src={p3} alt="Treats on Us" className="mx-auto mb-4 h-16" />
          <h3 className="font-bold text-lg text-gray-900">TREATS ON US</h3>
          <p className="text-gray-600">Get exclusive offers across our F&B outlets.</p>
        </div>

        <div>
          <img src={p2} alt="Big Discounts" className="mx-auto mb-4 h-16" />
          <h3 className="font-bold text-lg text-gray-900">BIG DISCOUNTS</h3>
          <p className="text-gray-600">The more you load, the bigger your discounts.</p>
        </div>
      </div>
    </div>
  </div>
</section>

            {/* Footer */}
            <footer className="bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Section */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Never miss an update</h2>
              <p className="text-gray-400 mb-6">
                Subscribe to our Newsletter
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter Email ID"
                  className="w-full px-4 py-2 text-black rounded-l-md focus:outline-none"
                />
                <button className="bg-blue-500 text-white px-4 rounded-r-md hover:bg-blue-600">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Center Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Play Arena Sports & Adventure Pvt. Ltd.
              </h3>
              <p className="text-gray-400">
                Sy#75, Hosa Road, off Sarjapur Road, <br />
                opp Silverwood Regency Apartments, <br />
                Kasavanahalli, Bangalore 560035
              </p>
              <div className="flex space-x-4 mt-4">
                {/* Social Media Icons */}
                {[Facebook, Instagram, Twitter, Youtube].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* Right Section */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-lg font-semibold mb-4">Play</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Prime</li>
                  <li>Pixel</li>
                  <li>Studio</li>
                  <li>Union</li>
                  <li>Junior</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact</h4>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-gray-400" />
                    <span>Get Directions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Phone className="w-5 h-5 text-gray-400" />
                    <span>99000 999 22</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Mail className="w-5 h-5 text-gray-400" />
                    <span>
                      <a
                        href="mailto:info@playarena.in"
                        className="hover:text-white"
                      >
                        info@playarena.in
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <p className="text-center text-gray-400">
              © {new Date().getFullYear()} PLaY. All rights reserved.{" "}
              <a href="#" className="hover:text-white">
                Disclaimer
              </a>{" "}
              |{" "}
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
