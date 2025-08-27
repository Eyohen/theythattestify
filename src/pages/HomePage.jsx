import React, { useState } from 'react';
import { ChevronDown, Play, Users, Heart, Globe, Star, Mail, Phone, MapPin, Menu, X } from 'lucide-react';

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Share Your Story', id: 'share' },
    { name: 'Watch Stories', id: 'watch' },
    { name: 'Get Involved', id: 'involved' },
    { name: 'Contact', id: 'contact' }
  ];

  const NavBar = () => (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-blue-900">TheyThatTestify</h1>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  currentPage === item.id
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`block px-3 py-2 text-base font-medium w-full text-left ${
                  currentPage === item.id
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );

  const HomePage = () => (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              1 Million Testimonies of Jesus.
              <br />
              <span className="text-yellow-400">One Global Witness.</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
              We're on a mission to document and share 1 million real-life stories of what Jesus has done in the lives of believers across the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button 
                onClick={() => setCurrentPage('share')}
                className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                Share Your Testimony
              </button>
              <button 
                onClick={() => setCurrentPage('watch')}
                className="border-2 border-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <Play size={20} />
                Watch Stories
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
            In a world full of noise, the voice of truth still cuts through—<em>the voice of testimony</em>. 
            Revelation 12:11 says, <strong>"They overcame by the blood of the Lamb and by the word of their testimony."</strong> 
            Your story matters. Whether it's a moment of healing, freedom from fear, provision in need, or salvation itself—your testimony has the power to inspire faith and glorify God.
          </p>
        </div>
      </section>

      {/* Featured Video Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Mission Video</h2>
            <p className="text-lg text-gray-600">Discover the heart behind 1 Million Testimonies</p>
          </div>
          <div className="bg-gray-800 rounded-lg aspect-video flex items-center justify-center">
            <div className="text-center text-white">
              <Play size={64} className="mx-auto mb-4 text-yellow-400" />
              <p className="text-lg">60-Second Mission Video</p>
              <p className="text-sm text-gray-300">Coming Soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Progress</h2>
          <div className="bg-white bg-opacity-10 rounded-lg p-8">
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-semibold">Stories Documented</span>
                <span className="text-lg font-semibold">Goal: 1,000,000</span>
              </div>
              <div className="w-full bg-white bg-opacity-20 rounded-full h-4">
                <div className="bg-yellow-400 h-4 rounded-full" style={{width: '0.1%'}}></div>
              </div>
            </div>
            <div className="text-4xl font-bold text-yellow-400">000</div>
            <p className="text-lg mt-2">Every story matters. Every testimony counts.</p>
          </div>
        </div>
      </section>
    </div>
  );

  const AboutPage = () => (
    <div className="pt-16">
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why 1 Million Testimonies?</h1>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              This mission began with a simple yet overwhelming word from God: <em>"Document 1 million testimonies of Jesus."</em> 
              At first, it seemed impossible. But then I realized—it's not about numbers. It's about obedience. 
              It's about raising a witness in this generation.
            </p>
            
            <p className="text-lg leading-relaxed mb-8">
              Every testimony we share becomes a light in someone's darkness. A reminder that God is still moving, 
              still healing, still saving. This is not my mission alone—it's a global movement. Together, we can tell 
              the world about Jesus, one story at a time, until we reach a million.
            </p>
          </div>

          {/* Mission Statement Box */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-8 my-12">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Our Mission Statement</h3>
            <p className="text-lg text-blue-800 italic">
              To collect and share 1 million testimonies of Jesus to inspire faith, glorify God, 
              and build a living archive of His power in our time.
            </p>
          </div>

          {/* Core Values */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Heart, title: 'Faith-Centered', desc: 'Jesus is always at the center.' },
                { icon: Star, title: 'Authenticity', desc: 'Real people, real moments.' },
                { icon: Heart, title: 'Compassion', desc: 'Listening with love.' },
                { icon: Star, title: 'Excellence', desc: 'Quality storytelling for the Kingdom.' },
                { icon: Users, title: 'Community', desc: 'Many voices, one message.' },
                { icon: Globe, title: 'Global Impact', desc: 'Reaching every nation with testimony.' }
              ].map((value, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                  <value.icon className="mx-auto mb-4 text-blue-600" size={48} />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const SharePage = () => (
    <div className="pt-16">
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Story Can Change Someone's Life.
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              No testimony is too small. If Jesus has done anything in your life—set you free, healed you, 
              provided for you, restored relationships, saved your soul—it's worth telling. When you share 
              your testimony here, you give hope to someone who needs it. You remind the world that our God 
              is alive and still working.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Share Your Testimony</h2>
              <p className="text-gray-600">Click the button below to access our submission form</p>
            </div>
            
            <div className="text-center">
              <a 
                href="https://forms.gle/jvRVLqxBFS6AW7zq6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                Open Testimony Form
              </a>
            </div>

            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <h3 className="font-semibold mb-2">Share Your Story</h3>
                <p className="text-sm text-gray-600">Tell us how Jesus has worked in your life</p>
              </div>
              <div className="text-center p-4">
                <div className="bg-yellow-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <span className="text-yellow-600 font-bold">2</span>
                </div>
                <h3 className="font-semibold mb-2">We Review</h3>
                <p className="text-sm text-gray-600">Our team carefully reviews each submission</p>
              </div>
              <div className="text-center p-4">
                <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-600 font-bold">3</span>
                </div>
                <h3 className="font-semibold mb-2">Inspire Others</h3>
                <p className="text-sm text-gray-600">Your story becomes part of our global archive</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const WatchPage = () => (
    <div className="pt-16">
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Be Encouraged by What Jesus is Doing.
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Here are real stories from real people whose lives have been changed by Jesus. 
              Let these testimonies remind you that God's power is still at work—everywhere, every day.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['All Stories', 'Healing', 'Salvation', 'Provision', 'Deliverance', 'Other'].map((filter) => (
              <button
                key={filter}
                className="px-6 py-2 rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Featured Story */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-8 mb-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="bg-white bg-opacity-20 rounded-lg aspect-video w-full md:w-1/2 flex items-center justify-center">
                <Play size={64} className="text-white" />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold mb-4">Featured Story</h3>
                <p className="text-lg mb-4">
                  "God completely transformed my life when I thought all hope was lost..."
                </p>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-6 py-3 rounded-lg font-semibold transition-colors">
                  Watch Now
                </button>
              </div>
            </div>
          </div>

          {/* Story Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((story) => (
              <div key={story} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-gray-300 aspect-video flex items-center justify-center">
                  <Play size={48} className="text-gray-600" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2">Testimony #{story}</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    A powerful story of transformation and God's faithfulness...
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Healing</span>
                    <button className="text-blue-600 hover:text-blue-800 font-semibold">Watch →</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">New testimonies are added weekly—check back for fresh stories of faith.</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              View All Stories
            </button>
          </div>
        </div>
      </section>
    </div>
  );

  const InvolvedPage = () => (
    <div className="pt-16">
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Join the Mission.</h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              We believe this is Kingdom work—and Kingdom work is best done together. You can get involved by:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                title: 'Share Your Testimony',
                desc: 'The heart of the mission.',
                action: 'Share Now',
                color: 'blue'
              },
              {
                title: 'Tell Others',
                desc: 'Spread the word online and offline.',
                action: 'Get Resources',
                color: 'green'
              },
              {
                title: 'Invite Us',
                desc: 'If you\'re a pastor or event organizer, invite us to record testimonies at your gathering.',
                action: 'Send Invitation',
                color: 'purple'
              },
              {
                title: 'Support Financially',
                desc: 'Help cover travel, equipment, and production costs.',
                action: 'Donate Now',
                color: 'yellow'
              },
              {
                title: 'Pray',
                desc: 'Pray for more hearts to be reached through these stories.',
                action: 'Prayer Guide',
                color: 'red'
              }
            ].map((way, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{way.title}</h3>
                <p className="text-gray-600 mb-4">{way.desc}</p>
                <button className={`bg-${way.color}-600 hover:bg-${way.color}-700 text-white px-6 py-2 rounded-lg transition-colors`}>
                  {way.action}
                </button>
              </div>
            ))}
          </div>

          <div className="bg-blue-900 text-white rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Make an Impact?</h2>
            <p className="text-lg mb-6">Choose how you'd like to partner with us in this global mission.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                Invite Us to Your Event
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                Support the Mission
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const ContactPage = () => (
    <div className="pt-16">
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Let's Connect.</h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you have a testimony to share, want to invite us to your event, or have a question about the mission, we'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us more..."
                  ></textarea>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                  Send Message
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="text-blue-600 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email Us</h3>
                    <p className="text-gray-600">hello@1milliontestimonies.org</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="text-blue-600 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Call Us</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="text-blue-600 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Visit Us</h3>
                    <p className="text-gray-600">123 Mission Street<br />Faith City, FC 12345</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h3 className="font-bold text-blue-900 mb-2">Quick Response</h3>
                <p className="text-blue-800 text-sm">
                  We typically respond to messages within 24-48 hours. For urgent matters, please call us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const Footer = () => (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">TheyThatTestify</h3>
            <p className="text-gray-300 mb-4">
              Creating the world's largest archive of Jesus testimonies to inspire faith and glorify God.
            </p>
            <p className="text-sm text-gray-400">
              "They overcame by the blood of the Lamb and by the word of their testimony." - Revelation 12:11
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><button onClick={() => setCurrentPage('about')} className="hover:text-white">About</button></li>
              <li><button onClick={() => setCurrentPage('share')} className="hover:text-white">Share Story</button></li>
              <li><button onClick={() => setCurrentPage('watch')} className="hover:text-white">Watch Stories</button></li>
              <li><button onClick={() => setCurrentPage('involved')} className="hover:text-white">Get Involved</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-300">
              <li><button onClick={() => setCurrentPage('contact')} className="hover:text-white">Contact Us</button></li>
              <li><a href="#" className="hover:text-white">Prayer Requests</a></li>
              <li><a href="#" className="hover:text-white">Newsletter</a></li>
              <li><a href="#" className="hover:text-white">Social Media</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 TheyThatTestify. All rights reserved. | 501(c)(3) Non-profit Organization</p>
        </div>
      </div>
    </footer>
  );

  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <HomePage />;
      case 'about': return <AboutPage />;
      case 'share': return <SharePage />;
      case 'watch': return <WatchPage />;
      case 'involved': return <InvolvedPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      {renderPage()}
      <Footer />
    </div>
  );
};

export default HomePage;