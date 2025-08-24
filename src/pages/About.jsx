import React from 'react';
import { Award, Users, Clock, Shield } from 'lucide-react';
import { useTranslation } from '../translations';
function About() {
  const { t } = useTranslation();
  const stats = [
    { number: "4+", labelKey: "yearsExperience", icon: Clock },
    { number: "1000+", labelKey: "ordersProcessed", icon: Award },
    { number: "50+", labelKey: "happyClients", icon: Users },
    { number: "24h", labelKey: "averageTurnaround", icon: Shield }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            {t('aboutPageTitle')}
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            {t('aboutPageSubtitle')}
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Story */}
          <div>
            <h2 className="text-3xl font-bold text-text-primary mb-6">{t('ourStory')}</h2>
            <div className="space-y-4 text-text-secondary">
              <p>
                {t('ourStoryP1')}
              </p>
              <p>
                {t('ourStoryP2')}
              </p>
              <p>
                {t('ourStoryP3')}
              </p>
              <p>
                {t('ourStoryP4')}
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
                <div className="text-text-secondary">{t(stat.labelKey)}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-text-primary mb-12 text-center">{t('ourValues')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-text-primary mb-4">{t('speedEfficiency')}</h3>
              <p className="text-text-secondary">
                {t('speedEfficiencyDesc')}
              </p>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-text-primary mb-4">{t('qualityCompliance')}</h3>
              <p className="text-text-secondary">
                {t('qualityComplianceDesc')}
              </p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-text-primary mb-4">{t('partnershipSupport')}</h3>
              <p className="text-text-secondary">
                {t('partnershipSupportDesc')}
              </p>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-text-primary mb-12 text-center">{t('meetFounder')}</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-16 h-16 text-gray-400" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-text-primary mb-2">{t('adrianBucur')}</h3>
                  <p className="text-primary font-medium mb-4">{t('founderCEO')}</p>
                  <p className="text-text-secondary">
                    {t('adrianDesc')}
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
              {t('readyPartner')}
            </h2>
            <p className="text-xl text-text-secondary mb-8">
              {t('joinCommunity')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-primary text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary-dark transition-colors text-center"
            >
                {t('getStartedToday')}
            </a>
              <a
                href="https://wa.me/33675116218"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-accent-dark transition-colors"
              >
                {t('chatWhatsApp')}
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;