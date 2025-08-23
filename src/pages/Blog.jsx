import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

function Blog() {
  const articles = [
    {
      title: "How to prep for Amazon FBA in France",
      excerpt: "Complete guide to preparing your products for Amazon FBA in France. Learn about requirements, regulations, and best practices for European sellers.",
      author: "Adrian Bucur",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "FBA Prep",
      slug: "how-to-prep-amazon-fba-france"
    },
    {
      title: "EU packaging rules for FBA",
      excerpt: "Understanding European Union packaging regulations for Amazon FBA. Compliance requirements, labeling standards, and avoiding common mistakes.",
      author: "Prep Center Team",
      date: "March 10, 2024",
      readTime: "7 min read",
      category: "Compliance",
      slug: "eu-packaging-rules-fba"
    },
    {
      title: "SPD vs LTL to Amazon FCs",
      excerpt: "Choosing between Small Parcel Delivery and Less Than Truckload shipping to Amazon fulfillment centers. Cost comparison and best practices.",
      author: "Adrian Bucur",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "Shipping",
      slug: "spd-vs-ltl-amazon-fcs"
    }
  ];

  const categories = ["All", "FBA Prep", "Compliance", "Shipping", "Tips"];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Amazon FBA Prep Blog - Prep Center France
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Expert insights, tips, and guides for Amazon FBA sellers in Europe from Prep Center France. Stay updated with the latest FBA prep strategies, European regulations, and best practices for Amazon fulfillment.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                index === 0
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-text-secondary hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {articles.map((article, index) => (
            <article key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
              {/* Article Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold text-xl">{article.category.charAt(0)}</span>
                  </div>
                  <p className="text-primary font-medium">{article.category}</p>
                </div>
              </div>

              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center text-sm text-text-light mb-3">
                  <User className="w-4 h-4 mr-1" />
                  <span className="mr-4">{article.author}</span>
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{article.date}</span>
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-text-primary mb-3 hover:text-primary transition-colors cursor-pointer">
                  {article.title}
                </h2>

                {/* Excerpt */}
                <p className="text-text-secondary mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Read More */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-text-light">{article.readTime}</span>
                  <button className="text-primary font-medium hover:text-primary-dark transition-colors inline-flex items-center">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <section className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-12 text-center">
          <h2 className="text-3xl font-bold text-text-primary mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest FBA prep tips, industry updates, and exclusive insights for European sellers.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors">
              Subscribe
            </button>
          </div>
        </section>

        {/* SEO Content */}
        <section className="mt-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-text-primary mb-6">
              Expert Amazon FBA Prep Guidance for European Sellers - Prep Center France
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Prep Center France provides comprehensive guides and expert insights for Amazon FBA sellers across Europe. 
              From understanding French Amazon FBA prep regulations to optimizing your European shipping strategy, we cover 
              everything you need to know about successful FBA operations in France and Europe. Whether you're looking for information 
              about Amazon FBA prep services in France, European FBA preparation, FNSKU labeling in France, or French Amazon fulfillment center shipping, 
              our expert content helps European sellers make informed decisions for Amazon FBA business growth. Our prep center in France 
              serves sellers across Germany, Italy, Spain, Netherlands, Belgium, Poland and all European Amazon marketplaces.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Blog;
