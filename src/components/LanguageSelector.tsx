import React from 'react';
import { Language, languageFlags, translations } from '@/lib/translations';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown, Globe } from 'lucide-react';

interface LanguageSelectorProps {
  currentLanguage: Language;
  onLanguageChange: (language: Language) => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  currentLanguage,
  onLanguageChange,
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          className="btn-vip-outline text-luxury-gold border-luxury-gold/30 hover:bg-luxury-gold/10 backdrop-blur-sm"
        >
          <Globe className="w-4 h-4 mr-2" />
          <span className="mr-1">{languageFlags[currentLanguage]}</span>
          {translations[currentLanguage].languageName}
          <ChevronDown className="w-4 h-4 ml-2" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="bg-luxury-black/95 backdrop-blur-lg border-luxury-gold/20 shadow-vip"
      >
        {Object.entries(translations).map(([lang, translation]) => (
          <DropdownMenuItem
            key={lang}
            onClick={() => onLanguageChange(lang as Language)}
            className={`
              cursor-pointer text-luxury-white hover:bg-luxury-gold/20 focus:bg-luxury-gold/20
              ${currentLanguage === lang ? 'bg-luxury-gold/10 text-luxury-gold' : ''}
              ${lang === 'ar' ? 'text-right' : ''}
            `}
            dir={lang === 'ar' ? 'rtl' : 'ltr'}
          >
            <span className="mr-2">{languageFlags[lang as Language]}</span>
            {translation.languageName}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};