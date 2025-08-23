import React from 'react';
import { Award, Users, Clock, Shield } from 'lucide-react';

function About() {
  const stats = [
    { number: "4+", label: "Years Experience", icon: Clock },
    { number: "1000+", label: "Orders Processed", icon: Award },
    { number: "50+", label: "Happy Clients", icon: Users },
    { number: "24h", label: "Average Turnaround", icon: Shield }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            About Prep Center France - Leading Amazon FBA Prep Services in Europe
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Founded by Adrian Bucur with 4+ years Amazon FBA experience. Professional Amazon FBA prep center in France serving European sellers with 24h turnaround, quality control, FNSKU labeling and fast shipping to Amazon fulfillment centers.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Story */}
          <div>
            <h2 className="text-3xl font-bold text-text-primary mb-6">Our Story</h2>
            <div className="space-y-4 text-text-secondary">
              <p>
                Prep Center France was founded with a simple mission: to provide European Amazon sellers with reliable, fast, and professional FBA preparation services. Located strategically in France, we serve as the perfect hub for EU-wide distribution.
              </p>
              <p>
                Our founder, Adrian Bucur, brings over 4 years of hands-on Amazon FBA experience. Having faced the challenges of FBA preparation firsthand, Adrian understood the need for a prep center that combines speed, quality, and transparency.
              </p>
              <p>
                Today, we handle hundreds of orders monthly across multiple platforms including Amazon FBA/FBM, eBay, Shopify, and custom websites. We maintain our commitment to 24-hour turnaround times while ensuring every product meets platform requirements. Our team of experienced professionals treats every shipment with the care and attention it deserves.
              </p>
              <p>
                We believe in building long-term partnerships with our clients, providing not just prep services but also Private Label consultation and multi-platform fulfillment solutions to help European sellers succeed across all e-commerce channels.
              </p>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center">
            <div className="text-center">
              <Award className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">Warehouse Facility Photo</p>
              <p className="text-sm text-gray-400">Professional prep center operations</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <section className="mb-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-text-primary mb-2">{stat.number}</div>
                <div className="text-text-secondary">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-text-primary mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-text-primary mb-4">Speed & Efficiency</h3>
              <p className="text-text-secondary">
                We understand that time is money in the Amazon marketplace. Our 24-hour turnaround commitment ensures your products reach Amazon FCs quickly.
              </p>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-text-primary mb-4">Quality & Compliance</h3>
              <p className="text-text-secondary">
                Every product undergoes thorough quality control. We ensure 100% compliance with Amazon's FBA requirements to prevent any issues.
              </p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-text-primary mb-4">Partnership & Support</h3>
              <p className="text-text-secondary">
                We're not just a service provider – we're your partner in success. Our team provides ongoing support and guidance for your FBA journey.
              </p>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-text-primary mb-12 text-center">Meet Our Founder</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-16 h-16 text-gray-400" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-text-primary mb-2">Adrian Bucur</h3>
                  <p className="text-primary font-medium mb-4">Founder & CEO</p>
                  <p className="text-text-secondary">
                    With over 4 years of Amazon FBA experience, Adrian founded Prep Center France to solve the challenges he faced as a European seller. His deep understanding of Amazon's requirements and commitment to excellence drives our company's mission to provide the best prep services in Europe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-12">
            <h2 className="text-3xl font-bold text-text-primary mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-text-secondary mb-8">
              Join the growing community of successful European Amazon sellers who trust us with their FBA prep.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary-dark transition-colors">
                Get Started Today
              </button>
              <a
                href="https://wa.me/33123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-accent-dark transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
