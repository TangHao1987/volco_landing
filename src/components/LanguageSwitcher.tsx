import React, { useState } from 'react';
import { languages } from '../i18n/ui';
import { getRouteFromUrl } from '../i18n/utils';

interface LanguageSwitcherProps {
  currentUrl: string;
  currentLang: string;
}

export function LanguageSwitcher({ currentUrl, currentLang }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  const url = new URL(currentUrl);
  const route = getRouteFromUrl(url);
  
  const currentLanguageLabel = languages[currentLang as keyof typeof languages];
  
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-700 hover:text-indigo-600 transition-colors rounded-md"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.681 0 3.445.304 5.194.905l-.681 4.086a26.54 26.54 0 0 0-4.513-.415m0 0V2.25M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.681 0 3.445.304 5.194.905l-.681 4.086a26.54 26.54 0 0 0-4.513-.415m0 0V2.25m-6 3.371H3.75" />
        </svg>
        {currentLanguageLabel}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 z-20 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              {Object.entries(languages).map(([lang, label]) => {
                const href = lang === 'en' ? `/${route}` : `/${lang}/${route}`;
                const isCurrentLang = lang === currentLang;
                
                return (
                  <a
                    key={lang}
                    href={href}
                    className={`block px-4 py-2 text-sm transition-colors ${
                      isCurrentLang 
                        ? 'bg-indigo-50 text-indigo-600 font-medium' 
                        : 'text-slate-700 hover:bg-slate-50 hover:text-indigo-600'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {label}
                  </a>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
} 