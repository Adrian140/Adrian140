import React, { useState } from 'react';
import { Package, CheckCircle, Calculator, Download, Gift, Truck, Star } from 'lucide-react';
function ServicesPricing() {
  const [quantity, setQuantity] = useState(100);
  const [fbmOrders, setFbmOrders] = useState(50);
  const [storagePallets, setStoragePallets] = useState(1);
  const [selectedServices, setSelectedServices] = useState({
    labeling: true,
     fbmShipping: false,
   storage: false
  });

  const services = [
    {
      title: "Reception",
       description: "Professional receiving with visual inspection",
     features: ["Inventory tracking", "Damage inspection", "Photo documentation"]
    },
    {
      title: "Quality Control",
       description: "Visual inspection included in standard service",
     features: ["Visual inspection", "Functionality testing", "Compliance check"]
    },
    {
      title: "FNSKU/EAN Labeling",
       description: "Complete FBA prep with polybagging included",
     features: ["FNSKU application", "EAN labeling", "Barcode verification"]
    },
    {
      title: "Polybagging",
       description: "Included in standard FNSKU service",
     features: ["Clear poly bags", "Suffocation warnings", "Size optimization"]
    },
    {
      title: "Bundling/Kitting",
      description: "Product bundling and kit assembly",
      features: ["Multi-product kits", "Custom bundling", "Secure packaging"]
    },
    {
      title: "Repacking",
      description: "Product repackaging and optimization",
      features: ["Damage repair", "Size optimization", "Brand compliance"]
    },
    {
      title: "Storage",
      description: "Secure warehouse storage solutions",
      features: ["Pallet storage", "Bin storage", "Climate controlled"]
    },
    {
      title: "Prep for SPD/LTL",
      description: "Specialized preparation for different shipping methods",
      features: ["SPD preparation", "LTL consolidation", "Carrier requirements"]
    }
  ];

   const calculateTotal = () => {
    let total = 0;
     if (selectedServices.labeling) {
      const rate = quantity <= 100 ? 0.45 : 0.50; // New customer bonus for demo
      total += quantity * rate;
    }
    if (selectedServices.fbmShipping) {
      let shippingRate = 1.20;
      if (fbmOrders >= 2000) shippingRate = 0.95;
      else if (fbmOrders >= 1000) shippingRate = 1.10;
      total += fbmOrders * shippingRate;
    }
   if (selectedServices.storage) total += storagePallets * 15; // €15 per pallet
    return total.toFixed(2);
  };

  const pricing = [
    { service: "Bubble Wrap", price: "€0.60", unit: "per unit" },
    { service: "Shrink Wrap", price: "€0.55", unit: "per unit" },
    { service: "Custom Boxing", price: "€1.50", unit: "per unit" },
    { service: "Palletizing", price: "€15", unit: "per pallet" },
    { service: "Returns Processing", price: "€1.00", unit: "per unit" },
    { service: "Quality Control Check", price: "€0.30", unit: "per unit" },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Amazon FBA Prep Services & Pricing - Prep Center France
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Complete Amazon FBA prep services in France with competitive pricing. Professional reception, quality control inspection, FNSKU labeling, polybagging & fast shipping to European Amazon fulfillment centers.
         </p>
        </div>

         {/* New Customer Bonus Banner */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-accent to-accent-dark rounded-xl p-6 text-center">
            <div className="flex items-center justify-center mb-4">
              <Gift className="w-8 h-8 text-white mr-3" />
              <h2 className="text-2xl font-bold text-white">New Customer Bonus</h2>
            </div>
            <p className="text-white text-lg mb-4">
              First 2 months: €0.45/product (instead of €0.50) + Free setup consultation
            </p>
            <p className="text-orange-100 text-sm">
              Plus: 100 FREE FNSKU labels when you exceed 1000 units in any calendar month
            </p>
          </div>
        </section>

        {/* Standard FBA Services */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <Star className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Standard FBA Services
            </h2>
            <p className="text-text-secondary">
              Complete prep solution with everything included
            </p>
          </div>
          
          <div className="bg-white rounded-xl border-2 border-primary p-8 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-text-primary mb-4">
                  FNSKU Labeling Service
                </h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-text-secondary">Reception & visual inspection</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-text-secondary">Professional polybagging</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-text-secondary">FNSKU labeling</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-text-secondary">Dunnage protection</span>
                  </div>
                </div>
              </div>
              <div className="text-center lg:text-right">
                <div className="bg-gray-50 rounded-xl p-6">
                  <p className="text-sm text-text-secondary mb-2">Standard Rate</p>
                  <p className="text-4xl font-bold text-primary mb-2">€0.50</p>
                  <p className="text-text-secondary mb-4">per product</p>
                  <div className="bg-accent text-white px-4 py-2 rounded-lg inline-block">
                    <p className="text-sm font-medium">New customers: €0.45</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Private Label & Multi-Platform Services */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Private Label & Multi-Platform Services
            </h2>
            <p className="text-text-secondary">
              Complete fulfillment solutions for Amazon, eBay, Shopify and custom websites
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-text-primary mb-4">Private Label Partnership</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Custom Packaging Design</span>
                  <span className="font-medium text-primary">Custom Quote</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Product Sourcing Consultation</span>
                  <span className="font-medium text-primary">Free</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Brand Compliance Check</span>
                  <span className="font-medium text-primary">€0.20 / unit</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-text-primary mb-4">Multi-Platform FBM</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Amazon FBM Orders</span>
                  <span className="font-medium text-primary">€1.20 / order</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">eBay Integration</span>
                  <span className="font-medium text-primary">€1.30 / order</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Shopify/Website Orders</span>
                  <span className="font-medium text-primary">€1.40 / order</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* FBM Shipping Rates */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <Truck className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              FBM Shipping Rates
            </h2>
            <p className="text-text-secondary">
              Competitive rates based on your monthly volume
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
              <h3 className="text-lg font-semibold text-text-primary mb-2">Starter</h3>
              <p className="text-text-secondary mb-4">0-999 units/month</p>
              <p className="text-3xl font-bold text-primary mb-2">€1.20</p>
              <p className="text-sm text-text-secondary">per order</p>
            </div>
            <div className="bg-white rounded-xl border-2 border-primary p-6 text-center relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">Popular</span>
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">Growth</h3>
              <p className="text-text-secondary mb-4">1000-1999 units/month</p>
              <p className="text-3xl font-bold text-primary mb-2">€1.10</p>
              <p className="text-sm text-text-secondary">per order</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
              <h3 className="text-lg font-semibold text-text-primary mb-2">Enterprise</h3>
              <p className="text-text-secondary mb-4">2000+ units/month</p>
              <p className="text-3xl font-bold text-primary mb-2">€0.95</p>
              <p className="text-sm text-text-secondary">per order</p>
            </div>
          </div>
          
          <div className="bg-blue-50 rounded-xl p-6">
            <h4 className="font-semibold text-text-primary mb-3">Additional FBM Charges:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                <span className="text-text-secondary">Multi-product parcels &gt;2kg: +€0.10/extra product</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                <span className="text-text-secondary">Single products &gt;3kg: Custom pricing</span>
              </div>
            </div>
          </div>
        </section>

        {/* Transport Pricing */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-text-primary mb-12 text-center">
            FBM Transport Pricing
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <h3 className="text-xl font-semibold text-text-primary mb-6 text-center">FBM Package Shipping Rates</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Delivery in France (&lt;2kg)</span>
                  <span className="font-medium text-primary">€5.25</span>
                </div>
                <p className="text-sm text-text-light">Via Colissimo</p>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">International delivery (&lt;3kg)</span>
                  <span className="font-medium text-primary">€10.60</span>
                </div>
                <p className="text-sm text-text-light mb-4">These prices are indicative</p>
                <div className="border-t pt-4 mt-4">
                  <h4 className="font-semibold text-text-primary mb-3">Specialized Transport:</h4>
                  <div className="flex justify-between items-center">
                    <span className="text-text-secondary">Dangerous goods (max 60x40x40cm, 20kg)</span>
                    <span className="font-medium text-primary">€12.40</span>
                  </div>
                  <p className="text-sm text-text-light">Via UPS - 24h delivery</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Storage */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <Package className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Storage Solutions
            </h2>
            <p className="text-text-secondary">
              Secure and affordable storage for your inventory
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-text-primary mb-4">Warehouse Storage</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Pallet Storage</span>
                  <span className="font-medium text-primary">€15 / pallet / month</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Pick & Pack</span>
                  <span className="font-medium text-primary">€1.00 / order</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-text-primary mb-4">Specialized Storage</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Climate Controlled</span>
                  <span className="font-medium text-primary">+€5 / pallet / month</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Hazardous Materials</span>
                  <span className="font-medium text-primary">Custom Pricing</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">High-Value Items</span>
                  <span className="font-medium text-primary">Custom Pricing</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <Calculator className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Get a Custom Quote
            </h2>
            <p className="text-text-secondary">
              Calculate your estimated costs based on your needs
            </p>
          </div>
          
          <div className="bg-white rounded-xl border-2 border-primary p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2 space-y-6">
                <div>
                <label htmlFor="quantity" className="block text-lg font-medium text-text-primary mb-2">
                  Number of Units (for FNSKU Labeling)
                </label>
                <input
                  type="number"
                  id="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary shadow-sm text-lg"
                  min="1"
                />
                </div>
                
                {selectedServices.fbmShipping && (
                  <div>
                    <label htmlFor="fbmOrders" className="block text-lg font-medium text-text-primary mb-2">
                      Number of FBM Orders per Month
                    </label>
                    <input
                      type="number"
                      id="fbmOrders"
                      value={fbmOrders}
                      onChange={(e) => setFbmOrders(parseInt(e.target.value, 10))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary shadow-sm text-lg"
                      min="1"
                    />
                  </div>
                )}
                
                {selectedServices.storage && (
                  <div>
                    <label htmlFor="storagePallets" className="block text-lg font-medium text-text-primary mb-2">
                      Number of Pallets for Storage
                    </label>
                    <input
                      type="number"
                      id="storagePallets"
                      value={storagePallets}
                      onChange={(e) => setStoragePallets(parseInt(e.target.value, 10))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary shadow-sm text-lg"
                      min="1"
                    />
                  </div>
                )}
              </div>
              <div className="lg:col-span-1">
                <h3 className="text-xl font-semibold text-text-primary mb-4">Select Services:</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="labeling"
                      checked={selectedServices.labeling}
                      onChange={(e) => setSelectedServices({ ...selectedServices, labeling: e.target.checked })}
                      className="h-5 w-5 text-primary rounded mr-3 focus:ring-primary"
                    />
                    <label htmlFor="labeling" className="text-text-secondary">FNSKU Labeling</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="fbmShipping"
                      checked={selectedServices.fbmShipping}
                      onChange={(e) => setSelectedServices({ ...selectedServices, fbmShipping: e.target.checked })}
                      className="h-5 w-5 text-primary rounded mr-3 focus:ring-primary"
                    />
                    <label htmlFor="fbmShipping" className="text-text-secondary">FBM Shipping</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="storage"
                      checked={selectedServices.storage}
                      onChange={(e) => setSelectedServices({ ...selectedServices, storage: e.target.checked })}
                      className="h-5 w-5 text-primary rounded mr-3 focus:ring-primary"
                    />
                    <label htmlFor="storage" className="text-text-secondary">Storage</label>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <p className="text-lg font-semibold text-text-primary">Estimated Total Cost:</p>
                <p className="text-4xl font-bold text-primary mt-2">€{calculateTotal()}</p>
              </div>
              <button className="bg-accent hover:bg-accent-dark text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out flex items-center">
                <Download className="w-5 h-5 mr-2" />
                Request a Quote
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ServicesPricing;