'use client'; // Required for useState and event handlers

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaBookOpen, FaCalculator, FaMusic, FaLinkedin, FaYoutube, FaInstagram, FaEnvelope, FaUsers, FaLightbulb, FaFilm } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';

// Simple Logo Component (Can be expanded or replaced with an Image component if you have a logo file)
const CompanyLogo = () => (
  <Link href="/" className="text-2xl md:text-3xl font-bold text-brand-font-darkest hover:text-brand-font-dark transition-colors">
    Math-e-Music
  </Link>
);

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Smooth scroll for internal links
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId.substring(1)); // remove #
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    if (isMobileMenuOpen) { // Close mobile menu on link click
        toggleMobileMenu();
    }
  };


  const navLinks = [
    { href: '#why', label: 'Why Math-e-Music?' },
    { href: '#features', label: 'Features' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#about', label: 'About' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans"> {/* Using Inter via layout.tsx */}

      {/* Header */}
      <header className="sticky top-0 z-50 bg-brand-bg-medium/90 backdrop-blur-lg shadow-md">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
          <CompanyLogo />
          <nav className="hidden md:flex space-x-5 lg:space-x-6 items-center">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} onClick={(e) => handleScrollTo(e, link.href)} className="text-brand-font-dark hover:text-brand-font-darkest transition-colors duration-150 font-medium">
                {link.label}
              </Link>
            ))}
            <Link href="#contact" onClick={(e) => handleScrollTo(e, "#contact")} className="bg-brand-font-medium hover:bg-brand-font-dark text-white font-semibold py-2.5 px-5 rounded-lg shadow hover:shadow-md transition-all duration-150 transform hover:scale-105">
              Book a Meeting
            </Link>
          </nav>
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} aria-label="Toggle menu" className="text-brand-font-darkest focus:outline-none p-2">
              {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-brand-bg-medium shadow-xl py-3 z-40">
            <nav className="flex flex-col items-center space-y-3">
              {navLinks.map((link) => (
                <Link key={link.label} href={link.href} onClick={(e) => handleScrollTo(e, link.href)} className="text-brand-font-dark hover:text-brand-font-darkest transition-colors duration-150 block w-full text-center py-2 font-medium">
                  {link.label}
                </Link>
              ))}
              <Link href="#contact" onClick={(e) => handleScrollTo(e, "#contact")} className="bg-brand-font-medium hover:bg-brand-font-dark text-white font-semibold py-2.5 px-6 rounded-lg shadow hover:shadow-md transition-all duration-150 mt-2 inline-block">
                Book a Meeting
              </Link>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-brand-bg-accent text-brand-font-darkest py-20 md:py-28 lg:py-32 text-center">
          <div className="container mx-auto px-4 sm:px-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              Math and Science Like Never Before:
              <br />
              <span className="text-brand-font-dark">A Celebration in Music</span>
            </h1>
            <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-brand-font-dark/90">
              For too long, mathematics has been seen as cold and detached—devoid of emotion and creativity. This perception has led to a stoic image of math that distances learners from its true beauty and essence.
            </p>
            <Link href="#contact" onClick={(e) => handleScrollTo(e, "#contact")} className="bg-brand-font-darkest hover:bg-brand-font-dark text-white font-bold py-3.5 px-8 sm:py-4 sm:px-10 text-lg rounded-lg shadow-xl hover:shadow-2xl transition-all duration-150 transform hover:scale-105 inline-block">
              Book Your Show Today!
            </Link>
          </div>
        </section>

        {/* Why Math-e-Music? Section */}
        <section id="why" className="py-16 md:py-24 bg-white"> {/* Alternating background */}
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-font-darkest mb-12 md:mb-16">
              Why Math-e-Music?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
              {[
                { icon: FaBookOpen, title: "Engaging Learning", description: "Transforms abstract concepts into tangible, exciting musical experiences, making learning math and science fun and memorable for students of all ages." },
                { icon: FaCalculator, title: "Curriculum Aligned", description: "Our shows can be tailored to complement existing school curricula, reinforcing key mathematical and scientific principles in a unique and engaging way." },
                { icon: FaLightbulb, title: "Sparks Curiosity", description: "Encourages students to see the beauty and creativity in STEM fields, fostering a lifelong interest and potentially inspiring future innovators." },
                { icon: FaUsers, title: "Inclusive Experience", description: "Designed to be accessible and enjoyable for diverse learners, bridging gaps and making STEM approachable for everyone.", className: "md:col-span-2 lg:col-span-1 lg:col-start-auto" }, // Example: make it span or center
              ].map((item, index) => (
                <div key={index} className={`bg-brand-bg-light p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ${item.className || ''}`}>
                  <div className="flex items-center mb-4">
                    <div className="bg-brand-font-medium text-white p-3 rounded-full mr-4">
                      <item.icon size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-brand-font-dark">{item.title}</h3>
                  </div>
                  <p className="text-brand-font-dark/80">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 md:py-24 bg-brand-bg-medium">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-font-darkest mb-12 md:mb-16">
              What Makes Our Shows Unique?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {[
                { icon: FaMusic, title: "Celebrates math and science in an engaging, memorable way."  },
                { icon: FaCalculator, title: "Explores abstract concepts and real-world applications." },
                { icon: FaFilm, title: "Inspires curiosity and encourages a deeper connection with STEM subjects." },
              ].map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="text-brand-font-medium mb-5 text-center">
                    <feature.icon size={40} className="mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-font-dark mb-3 text-center">{feature.title}</h3>
                  <p className="text-brand-font-dark/80 text-center text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 md:py-24 bg-brand-bg-light">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-font-darkest mb-12 md:mb-16">
              Words from Educators & Leaders
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { quote: "...It is such an interesting initiative for making the students curious about Math, Science or any domain! I am sure many of them would have been inspired from your session...", name: "Rahul Batra", title: "Co-Founder, Prakriti School", avatar: "RB" },
                { quote: "It was truly a wonderful experience. All the teachers of the department were all praises for you- For the simple reason that the act is unique and we have never seen something like this before.Beautifully woven and connected.", name: "Sukhda Khosla", title: "Head of Mathematics, Vasant Valley School", avatar: "SK" },
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                  <p className="text-brand-font-dark italic mb-6 text-md md:text-lg leading-relaxed flex-grow">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center mt-auto">
                    <div className="w-12 h-12 bg-brand-font-medium text-white rounded-full mr-4 flex items-center justify-center font-semibold text-xl">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-brand-font-dark">{testimonial.name}</p>
                      <p className="text-sm text-brand-font-dark/70">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About the Artist Section */}
        <section id="about" className="py-16 md:py-24 bg-white"> {/* Alternating background */}
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-font-darkest mb-12 md:mb-16">
              About the Artist
            </h2>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
              <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 relative rounded-full overflow-hidden shadow-xl mx-auto md:mx-0 flex-shrink-0 border-4 border-brand-bg-medium">
                <Image
                  src="/artist-placeholder.jpg" // MAKE SURE you have this image in /public/artist-placeholder.jpg
                  alt="Poojan Sahil - Math-e-Music Artist"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full" // Redundant due to overflow hidden on parent, but good practice
                  onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/300x300/ffc39c/0c2f39?text=Artist'; }} // Basic fallback
                />
              </div>
              <div className="text-center md:text-left flex-grow">
                <h3 className="text-2xl lg:text-3xl font-semibold text-brand-font-dark mb-2">Poojan Sahil</h3>
                <p className="text-brand-font-dark/80 mb-6 leading-relaxed max-w-xl lg:max-w-2xl">
                  Poojan is an independent musician who has collaborated with the likes of Vishal Dadlani, Saba Azaad, Penn Masala, Sumit Roy etc. His work has also been featured on NDTV, Indian Express, Scroll, ScoopWhoop and by several other media houses.
                </p>
                <div className="flex justify-center md:justify-start space-x-4 sm:space-x-5">
                  {[
                    { href: "https://www.linkedin.com/in/poojan-sahil-1822701b6", icon: FaLinkedin, label: "LinkedIn" },
                    { href: "https://www.youtube.com/@PoojanSahil", icon: FaYoutube, label: "Youtube" },
                    { href: "https://instagram.com/poojansahil", icon: FaInstagram, label: "Instagram" },
                    { href: "mailto:poojansahil@gmail.com", icon: FaEnvelope, label: "Email" },
                  ].map((social) => (
                    <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="text-brand-font-medium hover:text-brand-font-darkest transition-colors duration-150 p-2 rounded-full hover:bg-brand-bg-light/50">
                      <social.icon size={26} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final Call-to-Action Section */}
        <section id="contact" className="py-20 md:py-28 lg:py-32 bg-brand-bg-accent text-brand-font-darkest text-center">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Bring Math-e-Music to Your School or Event?
            </h2>
            <p className="text-lg md:text-xl mb-10 max-w-xl mx-auto text-brand-font-dark/90">
              Let's discuss how we can tailor a performance to inspire your students and audience.
            </p>
            <a
              href="mailto:youremail@example.com?subject=Math-e-Music Booking Inquiry" // Replace with your Calendly or contact form link if preferred
              className="bg-brand-font-darkest hover:bg-brand-font-dark text-white font-bold py-3.5 px-8 sm:py-4 sm:px-10 text-lg rounded-lg shadow-xl hover:shadow-2xl transition-all duration-150 transform hover:scale-105 inline-block"
            >
              Write to me
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-brand-font-darkest text-brand-bg-light py-10 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="mb-4 md:mb-6">
             <Link href="/" onClick={(e) => handleScrollTo(e, "#")} className="text-xl md:text-2xl font-bold text-brand-bg-light hover:text-brand-bg-accent transition-colors">
                Math-e-Music
            </Link>
          </div>
          <div className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mb-6 text-sm">
            {navLinks.map(link => (
                 <Link key={`footer-${link.label}`} href={link.href} onClick={(e) => handleScrollTo(e, link.href)} className="hover:text-brand-bg-accent transition-colors">
                    {link.label}
                 </Link>
            ))}
            {/* Optional: Add Privacy Policy or Terms of Service links */}
            {/* <Link href="/privacy" className="hover:text-brand-bg-accent transition-colors">Privacy Policy</Link> */}
          </div>
          <div className="flex justify-center space-x-5 sm:space-x-6 mb-6 md:mb-8">
             {[
                { href: "www.linkedin.com/in/poojan-sahil-1822701b6", icon: FaLinkedin, label: "LinkedIn" },
                { href: "https://www.youtube.com/@PoojanSahil", icon: FaYoutube, label: "YouTube" },
                { href: "https://instagram.com/poojansahil", icon: FaInstagram, label: "Instagram" },
                { href: "mailto:poojansahil@gmail.com", icon: FaEnvelope, label: "Email" },
             ].map((social) => (
                <a key={`footer-social-${social.label}`} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="hover:text-brand-bg-accent transition-colors">
                  <social.icon size={22} />
                </a>
              ))}
          </div>
          <p className="text-xs sm:text-sm text-brand-bg-light/70">
            &copy; {new Date().getFullYear()} Math-e-Music by [Your Name]. All Rights Reserved.
          </p>
           <p className="text-xs text-brand-bg-light/50 mt-1">
            Designed with passion.
          </p>
        </div>
      </footer>
    </div>
  );
}
