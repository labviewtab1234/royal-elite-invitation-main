import React, { useState, useEffect } from 'react';
import { Language, translations } from '@/lib/translations';
import { LanguageSelector } from './LanguageSelector';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { 
  Crown, 
  Ship, 
  Star, 
  Users, 
  Clock, 
  DollarSign,
  ArrowRight,
  CheckCircle,
  Sparkles
} from 'lucide-react';

// Import luxury images
import heroImage from '@/assets/hero-luxury-cruise.jpg';
import vipLounge from '@/assets/vip-lounge.jpg';
import luxurySuite from '@/assets/luxury-suite.jpg';
import vipNetworking from '@/assets/vip-networking.jpg';

const VipLandingPage: React.FC = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  const t = translations[currentLanguage];
  const isRTL = currentLanguage === 'ar';

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleCtaClick = () => {
    // Replace with actual referral link
    window.open('[INSERT MY REFERRAL LINK HERE]', '_blank');
  };

  const benefits = [
    { icon: DollarSign, title: t.benefit1 },
    { icon: Ship, title: t.benefit2 },
    { icon: Star, title: t.benefit3 },
    { icon: Users, title: t.benefit4 },
    { icon: Clock, title: t.benefit5 },
    { icon: Crown, title: t.benefit6 }
  ];

  const steps = [
    { number: "01", title: t.step1 },
    { number: "02", title: t.step2 },
    { number: "03", title: t.step3 }
  ];

  return (
    <div className={`min-h-screen bg-luxury-black text-luxury-white ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Header with Language Selector */}
      <header className="fixed top-0 w-full z-50 bg-luxury-black/80 backdrop-blur-lg border-b border-luxury-gold/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Crown className="w-8 h-8 text-luxury-gold" />
            <span className="text-xl font-display font-bold text-luxury-gold">Royal Cruiser Club</span>
          </div>
          <LanguageSelector 
            currentLanguage={currentLanguage}
            onLanguageChange={setCurrentLanguage}
          />
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center parallax-bg"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${heroImage})` }}
      >
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <Badge className="mb-6 bg-luxury-gold text-luxury-black px-6 py-2 text-sm font-semibold">
            <Sparkles className="w-4 h-4 mr-2" />
            {t.vipInvitationOnly}
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
            <span className="text-gradient-gold">{t.heroTitle}</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-luxury-white/90 leading-relaxed">
            {t.heroSubtitle}
          </p>
          
          <Button 
            onClick={handleCtaClick}
            className="btn-vip text-lg px-12 py-6 gold-shine"
          >
            {t.ctaRequestInvitation}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-luxury-gold rounded-full flex justify-center">
            <div className="w-1 h-3 bg-luxury-gold rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-luxury-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 text-gradient-gold">
            {t.socialProofText}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="vip-card text-center">
              <img 
                src={vipLounge} 
                alt="VIP Lounge" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-luxury-black/80">Exclusive VIP lounges worldwide</p>
            </div>
            <div className="vip-card text-center">
              <img 
                src={luxurySuite} 
                alt="Luxury Suite" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-luxury-black/80">Premium suites at member prices</p>
            </div>
            <div className="vip-card text-center">
              <img 
                src={vipNetworking} 
                alt="VIP Networking" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-luxury-black/80">Elite networking events</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-luxury-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-center mb-16 text-gradient-gold">
            {t.benefitsTitle}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="vip-card group hover:scale-105 transition-transform duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-luxury-gold rounded-full flex items-center justify-center group-hover:shadow-vip transition-all duration-300">
                    <benefit.icon className="w-8 h-8 text-luxury-black" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-luxury-black mb-4">
                    {benefit.title}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Exclusivity & Scarcity */}
      <section className="py-20 bg-vip-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 text-luxury-black">
            {t.exclusivityTitle}
          </h2>
          <p className="text-2xl mb-12 text-luxury-black/80 max-w-3xl mx-auto">
            {t.exclusivityText}
          </p>
          
          {/* Countdown Timer */}
          <div className="bg-luxury-black/80 backdrop-blur-lg rounded-2xl p-8 max-w-2xl mx-auto shadow-luxury">
            <h3 className="text-2xl font-display font-bold mb-6 text-luxury-gold">
              {t.limitedSpots}
            </h3>
            <div className="grid grid-cols-4 gap-4">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Minutes', value: timeLeft.minutes },
                { label: 'Seconds', value: timeLeft.seconds }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-luxury-gold text-luxury-black text-3xl font-bold p-4 rounded-lg mb-2">
                    {item.value.toString().padStart(2, '0')}
                  </div>
                  <div className="text-luxury-white/70 text-sm">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-luxury-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-center mb-16 text-gradient-gold">
            {t.howItWorksTitle}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-luxury-gold rounded-full flex items-center justify-center mx-auto shadow-gold group-hover:shadow-vip transition-all duration-300">
                    <span className="text-3xl font-bold text-luxury-black">{step.number}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-luxury-gold/30 -translate-y-1/2"></div>
                  )}
                </div>
                <h3 className="text-xl font-display font-semibold text-luxury-white mb-4">
                  {step.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-luxury-gradient">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-center mb-16 text-gradient-gold">
            {t.faqTitle}
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                { question: t.faq1Question, answer: t.faq1Answer },
                { question: t.faq2Question, answer: t.faq2Answer },
                { question: t.faq3Question, answer: t.faq3Answer },
                { question: t.faq4Question, answer: t.faq4Answer },
                { question: t.faq5Question, answer: t.faq5Answer },
                { question: t.faq6Question, answer: t.faq6Answer }
              ].map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-luxury-black/50 backdrop-blur-sm border border-luxury-gold/20 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left text-luxury-gold hover:text-luxury-gold-light font-display font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-luxury-white/90 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-luxury-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-12 text-gradient-gold">
            {t.finalCtaTitle}
          </h2>
          
          <Button 
            onClick={handleCtaClick}
            className="btn-vip text-xl px-16 py-8 gold-shine"
          >
            <Crown className="w-6 h-6 mr-3" />
            {t.finalCtaButton}
            <ArrowRight className="w-6 h-6 ml-3" />
          </Button>
        </div>
      </section>

      {/* Fixed Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-luxury-black/95 backdrop-blur-lg border-t border-luxury-gold/20 p-4">
        <Button 
          onClick={handleCtaClick}
          className="btn-vip w-full py-4"
        >
          <Crown className="w-5 h-5 mr-2" />
          {t.ctaRequestInvitation}
        </Button>
      </div>

      {/* Footer */}
      <footer className="bg-luxury-black border-t border-luxury-gold/10 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Crown className="w-6 h-6 text-luxury-gold" />
            <span className="text-lg font-display font-bold text-luxury-gold">Royal Cruiser Club</span>
          </div>
          <p className="text-luxury-white/60 text-sm">
            © 2024 Royal Cruiser Club. Exclusive VIP membership by invitation only.
          </p>
          <p className="text-luxury-white/40 text-xs mt-2">
            Powered by inCruises International
          </p>
        </div>
      </footer>
    </div>
  );
};

export default VipLandingPage;