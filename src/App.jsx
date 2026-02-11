
// import React, { useState } from 'react';
// import { Sun, Battery, Lightbulb, Zap, Phone, Mail, Menu, X, ChevronRight } from 'lucide-react';
// import Footer from './components/Footer';

// const App = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const navLinks = [
//     { name: 'Home', href: '#home' },
//     { name: 'About Us', href: '#about' },
//     { name: 'Products', href: '#products' },
//     { name: 'Technologies', href: '#tech' },
//     { name: 'Contact', href: '#contact' },
//   ];

//   const products = [
//     { name: 'Solar Panels', icon: <Sun className="w-8 h-8" />, desc: 'High-efficiency monocrystalline panels for maximum yield.' },
//     { name: 'Solar Lanterns', icon: <Lightbulb className="w-8 h-8" />, desc: 'Portable, durable lighting solutions for every environment.' },
//     { name: 'Sensor Tubelights', icon: <Zap className="w-8 h-8" />, desc: 'Motion-sensing LED technology to reduce energy waste.' },
//     { name: 'Solar Water Pumps', icon: <Battery className="w-8 h-8" />, desc: 'Sustainable irrigation solutions for agricultural needs.' },
//   ];

//   return (
//     <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
//       {/* Navigation */}
//       <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm border-b border-sky-100">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-20 items-center">
//             <div className="flex items-center space-x-2">
//               <div className="bg-emerald-500 p-2 rounded-lg">
//                 <Zap className="text-white w-6 h-6" />
//               </div>
//               <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-transparent">
//                 SRAVAN POWER TECH
//               </span>
//             </div>

//             {/* Desktop Nav */}
//             <div className="hidden md:flex space-x-8 items-center">
//               {navLinks.map((link) => (
//                 <a key={link.name} href={link.href} className="hover:text-emerald-500 font-medium transition-colors">
//                   {link.name}
//                 </a>
//               ))}
//               <button className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-2 rounded-full transition-all shadow-md shadow-sky-200">
//                 Request Quote
//               </button>
//             </div>

//             {/* Mobile Menu Button */}
//             <div className="md:hidden">
//               <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
//                 {isMenuOpen ? <X /> : <Menu />}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Nav Dropdown */}
//         {isMenuOpen && (
//           <div className="md:hidden bg-white border-b border-sky-100 p-4 space-y-4">
//             {navLinks.map((link) => (
//               <a key={link.name} href={link.href} className="block text-lg hover:text-emerald-500" onClick={() => setIsMenuOpen(false)}>
//                 {link.name}
//               </a>
//             ))}
//           </div>
//         )}
//       </nav>

//       {/* Hero Section */}
//       <section id="home" className="pt-32 pb-20 px-4 bg-gradient-to-br from-sky-50 via-white to-emerald-50">
//         <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
//           <div className="md:w-1/2 space-y-6">
//             <span className="text-emerald-600 font-semibold tracking-wider uppercase text-sm">Sustainable Energy Solutions</span>
//             <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
//               Powering the Future with <span className="text-sky-500">Clean Energy</span>
//             </h1>
//             <p className="text-lg text-slate-600 max-w-lg">
//               Partnered with world-class technology to bring Australian standard solar solutions to India. High-quality, durable, and eco-friendly products.
//             </p>
//             <div className="flex space-x-4">
//               <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-bold transition-all flex items-center">
//                 Explore Products <ChevronRight className="ml-2 w-4 h-4" />
//               </button>
//               <button className="border-2 border-sky-500 text-sky-600 px-8 py-3 rounded-lg font-bold hover:bg-sky-50 transition-all">
//                 Our Tech
//               </button>
//             </div>
//           </div>
//           <div className="md:w-1/2 mt-12 md:mt-0 relative">
//              <div className="w-full h-80 bg-gradient-to-tr from-sky-200 to-emerald-200 rounded-3xl flex items-center justify-center shadow-2xl overflow-hidden">
//                 <Sun className="w-40 h-40 text-white opacity-50" />
//                 <p className="absolute text-emerald-800 font-bold text-xl uppercase tracking-widest">Solar Excellence</p>
//              </div>
//           </div>
//         </div>
//       </section>

//       {/* Products Grid */}
//       <section id="products" className="py-20 px-4 max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl font-bold mb-4">Our Premium Products</h2>
//           <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {products.map((product, idx) => (
//             <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group">
//               <div className="text-sky-500 mb-4 group-hover:scale-110 transition-transform">
//                 {product.icon}
//               </div>
//               <h3 className="text-xl font-bold mb-2">{product.name}</h3>
//               <p className="text-slate-500 text-sm leading-relaxed">{product.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* About/CTA Section */}
//       <section id="about" className="bg-slate-900 py-20 px-4 text-white">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
//           <div>
//             <h2 className="text-3xl font-bold mb-6 italic text-emerald-400">Australian Quality, Indian Roots.</h2>
//             <p className="text-slate-300 mb-6">
//               Green Power Tech is proud to be associated with Australian Premium Solar (APS). Our manufacturing facility in Ahmedabad, Gujarat, follows strict international quality standards to deliver IEC-certified panels.
//             </p>
//             <ul className="space-y-3">
//               <li className="flex items-center"><Zap className="w-5 h-5 mr-2 text-sky-400" /> State of the Art Manufacturing</li>
//               <li className="flex items-center"><Zap className="w-5 h-5 mr-2 text-sky-400" /> IEC Certified Products</li>
//               <li className="flex items-center"><Zap className="w-5 h-5 mr-2 text-sky-400" /> 25+ Years of Industry Expertise</li>
//             </ul>
//           </div>
//           <div className="grid grid-cols-2 gap-4">
//             <div className="bg-emerald-500/10 p-6 rounded-xl border border-emerald-500/20 text-center">
//               <p className="text-4xl font-bold text-emerald-400">10k+</p>
//               <p className="text-sm uppercase tracking-widest">Clients</p>
//             </div>
//             <div className="bg-sky-500/10 p-6 rounded-xl border border-sky-500/20 text-center">
//               <p className="text-4xl font-bold text-sky-400">15+</p>
//               <p className="text-sm uppercase tracking-widest">Years</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-20 px-4 max-w-3xl mx-auto text-center">
//         <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
//         <div className="grid md:grid-cols-2 gap-6 mb-12">
//           <div className="flex items-center justify-center space-x-3 p-4 bg-sky-50 rounded-lg text-sky-700">
//             <Phone className="w-5 h-5" />
//             <span>+91-7032376748</span>
//           </div>
//           <div className="flex items-center justify-center space-x-3 p-4 bg-emerald-50 rounded-lg text-emerald-700">
//             <Mail className="w-5 h-5" />
//             <span>sravankumargaddamedhi@gmail.com</span>
//           </div>
//         </div>
//         <form className="space-y-4">
//           <input type="text" placeholder="Your Name" className="w-full p-4 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
//           <input type="email" placeholder="Email Address" className="w-full p-4 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
//           <textarea placeholder="Your Message" rows="4" className="w-full p-4 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"></textarea>
//           <button className="w-full bg-emerald-500 text-white font-bold py-4 rounded-lg hover:bg-emerald-600 transition-colors">
//             Send Message
//           </button>
//         </form>
//       </section>

//       {/* Footer */}
//       <footer className="bg-slate-50 border-t border-slate-200 py-10 text-center text-slate-500 text-sm">
//         <p>© 2026 Green Power Tech. All rights reserved.</p>
//         <p className="mt-2">Designed with Sustainability in Mind</p>
//       </footer>
//       <Footer></Footer>
//     </div>
//   );
// };

// export default App;




import React, { useState } from 'react';
import { Sun, Battery, Lightbulb, Zap, Phone, Mail, Menu, X, ChevronRight } from 'lucide-react';
import Footer from './components/Footer';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Technologies', href: '#tech' },
    { name: 'Contact', href: '#contact' },
  ];

  const products = [
    { name: 'Solar Panels', icon: <Sun className="w-8 h-8" />, desc: 'High-efficiency monocrystalline panels for maximum yield.' },
    { name: 'Solar Lanterns', icon: <Lightbulb className="w-8 h-8" />, desc: 'Portable, durable lighting solutions for every environment.' },
    { name: 'Sensor Tubelights', icon: <Zap className="w-8 h-8" />, desc: 'Motion-sensing LED technology to reduce energy waste.' },
    { name: 'Solar Water Pumps', icon: <Battery className="w-8 h-8" />, desc: 'Sustainable irrigation solutions for agricultural needs.' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-md z-50 shadow-sm border-b border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center space-x-2 shrink-0">
              <div className="bg-emerald-500 p-2 rounded-lg">
                <Zap className="text-white w-5 h-5 md:w-6 md:h-6" />
              </div>
              <span className="text-lg md:text-2xl font-bold bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-transparent truncate">
                SRAVAN POWER TECH
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-8 items-center">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="hover:text-emerald-500 font-medium transition-colors">
                  {link.name}
                </a>
              ))}
              <button className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-2 rounded-full transition-all shadow-md shadow-sky-200">
                Request Quote
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        <div className={`md:hidden absolute w-full bg-white border-b border-sky-100 transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100 py-6' : 'max-h-0 opacity-0 pointer-events-none overflow-hidden'}`}>
          <div className="flex flex-col space-y-4 px-6">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-lg font-medium hover:text-emerald-500" onClick={() => setIsMenuOpen(false)}>
                {link.name}
              </a>
            ))}
            <button className="bg-sky-500 text-white px-6 py-3 rounded-xl font-bold">
              Request Quote
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-16 md:pb-24 px-4 bg-gradient-to-br from-sky-50 via-white to-emerald-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <span className="text-emerald-600 font-bold tracking-widest uppercase text-xs md:text-sm">Sustainable Energy Solutions</span>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Powering the Future with <span className="text-sky-500">Clean Energy</span>
            </h1>
            <p className="text-base md:text-lg text-slate-600 max-w-lg mx-auto md:mx-0">
              Partnered with world-class technology to bring Australian standard solar solutions to India. High-quality, durable, and eco-friendly products.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-4">
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center shadow-lg shadow-emerald-200">
                Explore Products <ChevronRight className="ml-2 w-4 h-4" />
              </button>
              <button className="border-2 border-sky-500 text-sky-600 px-8 py-4 rounded-xl font-bold hover:bg-sky-50 transition-all">
                Our Tech
              </button>
            </div>
          </div>
          <div className="md:w-1/2 w-full relative">
             <div className="w-full h-64 md:h-96 bg-gradient-to-tr from-sky-200 to-emerald-200 rounded-3xl flex items-center justify-center shadow-2xl overflow-hidden">
                <Sun className="w-32 h-32 md:w-48 md:h-48 text-white opacity-40 animate-pulse" />
                <p className="absolute text-emerald-900/40 font-black text-4xl md:text-6xl uppercase tracking-tighter rotate-12 select-none">Solar Power</p>
             </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Premium Products</h2>
          <div className="w-20 h-1.5 bg-emerald-500 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 group">
              <div className="text-sky-500 mb-6 bg-sky-50 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:bg-emerald-500 group-hover:text-white transition-all">
                {product.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{product.name}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{product.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About/CTA Section */}
      <section id="about" className="bg-slate-900 py-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 italic text-emerald-400">Australian Quality, Indian Roots.</h2>
            <p className="text-slate-300 mb-8 text-lg leading-relaxed">
              Green Power Tech is proud to be associated with Australian Premium Solar (APS). Our manufacturing facility in Ahmedabad, Gujarat, follows strict international quality standards.
            </p>
            <ul className="space-y-4">
              {[
                'State of the Art Manufacturing',
                'IEC Certified Products',
                '25+ Years of Industry Expertise'
              ].map((item, i) => (
                <li key={i} className="flex items-center text-slate-100 font-medium">
                  <div className="mr-3 p-1 bg-sky-500/20 rounded-full">
                    <Zap className="w-4 h-4 text-sky-400" fill="currentColor" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
            <div className="bg-emerald-500/10 p-8 rounded-3xl border border-emerald-500/20 text-center backdrop-blur-sm">
              <p className="text-4xl md:text-5xl font-black text-emerald-400 mb-2">10k+</p>
              <p className="text-xs uppercase tracking-[0.2em] text-emerald-200/60 font-bold">Clients</p>
            </div>
            <div className="bg-sky-500/10 p-8 rounded-3xl border border-sky-500/20 text-center backdrop-blur-sm">
              <p className="text-4xl md:text-5xl font-black text-sky-400 mb-2">15+</p>
              <p className="text-xs uppercase tracking-[0.2em] text-sky-200/60 font-bold">Years</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-slate-500">Have questions? We'd love to hear from you.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <a href="tel:+917032376748" className="flex items-center justify-center space-x-4 p-5 bg-white border border-slate-100 rounded-2xl text-slate-700 hover:shadow-md transition-shadow">
            <Phone className="w-5 h-5 text-sky-500" />
            <span className="font-semibold">+91 7032376748</span>
          </a>
          <a href="mailto:sravankumargaddamedhi@gmail.com" className="flex items-center justify-center space-x-4 p-5 bg-white border border-slate-100 rounded-2xl text-slate-700 hover:shadow-md transition-shadow">
            <Mail className="w-5 h-5 text-emerald-500" />
            <span className="font-semibold text-sm md:text-base break-all">sravankumargaddamedhi@gmail.com</span>
          </a>
        </div>

        <form className="bg-white p-6 md:p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-50 space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input type="text" placeholder="Your Name" className="w-full p-4 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-emerald-500 transition-all" />
            <input type="email" placeholder="Email Address" className="w-full p-4 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-emerald-500 transition-all" />
          </div>
          <textarea placeholder="How can we help you?" rows="4" className="w-full p-4 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-emerald-500 transition-all"></textarea>
          <button className="w-full bg-emerald-500 text-white font-bold py-4 rounded-xl hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-100">
            Send Message
          </button>
        </form>
      </section>

      {/* Main Specialized Footer Component */}
      <Footer />
    </div>
  );
};

export default App;