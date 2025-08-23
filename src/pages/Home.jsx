import React, { useState } from 'react';
import { Clock, DollarSign, MapPin, Award, ArrowRight, CheckCircle, Star, Truck } from 'lucide-react';
import { useTranslation } from '../translations';

function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const { t } = useTranslation();

  const whyChooseUs = [
    {
      icon: Clock,
      title: t('heroTitle'),
      description: t('heroSubtitle')
    },
    {
      icon: DollarSign,
      title: "Transparent FBA prep pricing",
      description: "No hidden fees, competitive rates for all Amazon FBA prep services in France"
    },
    {
      icon: MapPin,
      title: "Strategic prep center location in France",
      description: "Optimal position for EU-wide Amazon fulfillment center distribution and fast shipping"
    },
    {
      icon: Award,
      title: "Amazon FBA-ready packaging",
      description: "Expert knowledge of European Amazon FBA requirements and compliance standards"
    }
  ];

  const timeline = [
    { step: t('reception'), description: "Your products arrive at our facility" },
    { step: t('qualityControl'), description: "Quality control and inspection process" },
    { step: t('labeling'), description: "FNSKU/EAN labeling application" },
    { step: t('polybagging'), description: "Polybagging and protective packaging" },
    { step: t('shipping'), description: "Fast dispatch to Amazon FCs" },
    { step: "Confirm", description: "Delivery confirmation and reporting" }
  ];

  const testimonials = [
    {
      name: "Marcus Weber",
      company: "Weber Electronics",
      text: "Prep Center France transformed our FBA operations. 24h turnaround is incredible!",
      rating: 5
    },
    {
      name: "Sophie Martin",
      company: "Martin Home & Garden",
      text: "Professional service, transparent pricing. Our go-to prep center in Europe.",
      rating: 5
    },
    {
      name: "Alessandro Rossi",
      company: "Rossi Fashion",
      text: "Excellent quality control and fast processing. Highly recommended for EU sellers.",
      rating: 5
    }
  ];

  const carriers = [
    { name: "Colissimo", logo: "📮" },
    { name: "UPS", logo: "🚚" },
    { name: "GLS", logo: "📦" },
    { name: "Chronopost", logo: "⚡" },
    { name: "Mondial Relay", logo: "🌍" },
    { name: "Colis Privé", logo: "📫" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6 leading-tight">
              {t('heroTitle')}
            </h1>
            <p className="text-lg sm:text-xl text-text-secondary mb-8 max-w-3xl mx-auto leading-relaxed">
              {t('heroSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary-dark transition-all duration-200 shadow-lg hover:shadow-xl">
                {t('getQuote')}
              </button>
              <a
                href="https://wa.me/33675116218"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-accent text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-accent-dark transition-all duration-200 shadow-lg hover:shadow-xl text-center"
              >
                {t('chatWhatsApp')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              Why Choose Prep Center France for Amazon FBA Prep
            </h2>
            <p className="text-lg sm:text-xl text-text-secondary">
              Professional Amazon FBA prep services in France designed for European sellers
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow duration-200">
                <item.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-base sm:text-lg font-semibold text-text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-text-secondary">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Timeline */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              How It Works
            </h2>
            <p className="text-lg sm:text-xl text-text-secondary">
              Simple 6-step process from arrival to Amazon FC
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
            {timeline.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-sm sm:text-base">
                  {index + 1}
                </div>
                <h3 className="text-sm sm:text-lg font-semibold text-text-primary mb-2">
                  {item.step}
                </h3>
                <p className="text-xs sm:text-sm text-text-secondary">
                  {item.description}
                </p>
                {index < timeline.length - 1 && (
                  <ArrowRight className="w-4 h-4 sm:w-6 sm:h-6 text-text-light mx-auto mt-4 hidden lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg sm:text-xl text-text-secondary">
              Trusted by global Amazon sellers
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 p-6 sm:p-8 rounded-xl text-center">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-base sm:text-lg text-text-secondary mb-6 italic">
                "{testimonials[currentTestimonial].text}"
              </p>
              <div>
                <p className="text-sm sm:text-base font-semibold text-text-primary">
                  {testimonials[currentTestimonial].name}
                </p>
                <p className="text-sm sm:text-base text-text-secondary">
                  {testimonials[currentTestimonial].company}
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-primary' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Carriers */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-4">
              Trusted Shipping Partners
            </h2>
            <p className="text-sm sm:text-base text-text-secondary">
              We work with leading carriers for reliable delivery
            </p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 lg:gap-8 items-center justify-items-center">
            {carriers.map((carrier, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-4xl mb-2">{carrier.logo}</div>
                <p className="text-xs sm:text-sm font-medium text-text-secondary">{carrier.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Private Label Services */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              Private Label & Multi-Platform Services
            </h2>
            <p className="text-lg sm:text-xl text-text-secondary">
              Complete fulfillment solutions for your brand across all platforms
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-gray-50 p-6 sm:p-8 rounded-xl">
              <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-6">Private Label Partnership</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-sm sm:text-base text-text-secondary">Custom packaging and branding</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-sm sm:text-base text-text-secondary">Product sourcing consultation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-sm sm:text-base text-text-secondary">Quality control and compliance</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-sm sm:text-base text-text-secondary">End-to-end fulfillment solutions</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-6 sm:p-8 rounded-xl">
              <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-6">Multi-Platform FBM</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-sm sm:text-base text-text-secondary">Amazon FBM fulfillment</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-sm sm:text-base text-text-secondary">eBay order processing</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-sm sm:text-base text-text-secondary">Shopify integration</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-sm sm:text-base text-text-secondary">Custom website fulfillment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Streamline Your Amazon FBA Operations in Europe?
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get started with professional Amazon FBA prep services in France. 24h turnaround times, quality control, FNSKU labeling and fast shipping to European Amazon fulfillment centers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="w-full sm:w-auto bg-white text-primary px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl">
              {t('getQuote')}
            </button>
            <a
              href="https://wa.me/33675116218"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-accent text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-accent-dark transition-all duration-200 shadow-lg hover:shadow-xl text-center"
            >
              {t('chatWhatsApp')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;