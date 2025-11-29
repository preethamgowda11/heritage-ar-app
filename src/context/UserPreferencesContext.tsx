'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { UserPreferences, Language } from '@/types';

interface UserPreferencesContextType extends UserPreferences {
  setIsLowBandwidth: (value: boolean) => void;
  setIsAccessibilityOn: (value: boolean) => void;
  setIsAudioOn: (value: boolean) => void;
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
  setFontSize: (size: number) => void;
  setLanguage: (language: Language) => void;
}

const defaultPreferences: UserPreferences = {
  isLowBandwidth: false,
  isAccessibilityOn: false,
  isAudioOn: false,
  theme: 'system',
  fontSize: 16,
  language: 'en',
};

const UserPreferencesContext = createContext<UserPreferencesContextType | undefined>(undefined);

export const UserPreferencesProvider = ({ children }: { children: ReactNode }) => {
  const [isInitialized, setIsInitialized] = useState(false);
  const [prefs, setPrefs] = useState<UserPreferences>(defaultPreferences);

  useEffect(() => {
    try {
      const storedPrefs = localStorage.getItem('userPreferences');
      if (storedPrefs) {
        const parsedPrefs = JSON.parse(storedPrefs);
        setPrefs(parsedPrefs);

        // Apply theme and font size on load
        applyTheme(parsedPrefs.theme);
        applyFontSize(parsedPrefs.fontSize);
      }
    } catch (error) {
      console.error("Failed to parse user preferences from localStorage", error);
    }
    setIsInitialized(true);
  }, []);

  const savePreferences = (updatedPrefs: UserPreferences) => {
    try {
      localStorage.setItem('userPreferences', JSON.stringify(updatedPrefs));
    } catch (error) {
      console.error("Failed to save user preferences to localStorage", error);
    }
    setPrefs(updatedPrefs);
  };
  
  const applyTheme = (theme: 'light' | 'dark' | 'system') => {
      const root = window.document.documentElement;
      root.classList.remove('light', 'dark');
      let effectiveTheme = theme;
      if (theme === 'system') {
        effectiveTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }
      root.classList.add(effectiveTheme);
  };

  const applyFontSize = (size: number) => {
    window.document.documentElement.style.fontSize = `${size}px`;
  };

  const setTheme = (theme: 'light' | 'dark' | 'system') => {
    applyTheme(theme);
    savePreferences({ ...prefs, theme });
  };

  const setFontSize = (size: number) => {
    applyFontSize(size);
    savePreferences({ ...prefs, fontSize: size });
  };

  const setLanguage = (language: Language) => {
    savePreferences({ ...prefs, language });
  }

  const setIsLowBandwidth = (value: boolean) => savePreferences({ ...prefs, isLowBandwidth: value });
  const setIsAccessibilityOn = (value: boolean) => savePreferences({ ...prefs, isAccessibilityOn: value });
  const setIsAudioOn = (value: boolean) => savePreferences({ ...prefs, isAudioOn: value });

  if (!isInitialized) {
    return null; // Or a loading spinner
  }

  return (
    <UserPreferencesContext.Provider
      value={{
        ...prefs,
        setTheme,
        setFontSize,
        setLanguage,
        setIsLowBandwidth,
        setIsAccessibilityOn,
        setIsAudioOn,
      }}
    >
      {children}
    </UserPreferencesContext.Provider>
  );
};

export const useUserPreferences = () => {
  const context = useContext(UserPreferencesContext);
  if (context === undefined) {
    throw new Error('useUserPreferences must be used within a UserPreferencesProvider');
  }
  return context;
};
