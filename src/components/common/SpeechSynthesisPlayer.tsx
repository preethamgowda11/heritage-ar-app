
'use client';

import { Play, Pause, Square, Volume2, Loader } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface SpeechSynthesisPlayerProps {
  text: string;
}

export function SpeechSynthesisPlayer({ text }: SpeechSynthesisPlayerProps) {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const [isLoadingVoices, setIsLoadingVoices] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      setIsSupported(true);
      // The voices are not immediately available. We need to wait for the 'voiceschanged' event.
      const handleVoicesChanged = () => {
        setIsLoadingVoices(false);
        // Remove the listener once the voices are loaded.
        speechSynthesis.removeEventListener('voiceschanged', handleVoicesChanged);
      };

      speechSynthesis.addEventListener('voiceschanged', handleVoicesChanged);
      // In some browsers, the event is not fired if the voices are already cached.
      if (speechSynthesis.getVoices().length > 0) {
        handleVoicesChanged();
      }

      // Cleanup: if the component unmounts, cancel any ongoing speech.
      return () => {
        speechSynthesis.cancel();
        speechSynthesis.removeEventListener('voiceschanged', handleVoicesChanged);
      };
    }
  }, []);

  const handlePlay = () => {
    if (!isSupported || !text || isLoadingVoices) return;
    
    if (isPaused) {
      speechSynthesis.resume();
      setIsPaused(false);
      setIsSpeaking(true);
    } else {
      // Always cancel previous speech before starting a new one.
      speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(text);
      
      // Find a suitable voice.
      const voices = speechSynthesis.getVoices();
      let selectedVoice = voices.find(voice => voice.lang === 'en-IN');
      if (!selectedVoice) {
          selectedVoice = voices.find(voice => voice.lang.startsWith('en-'));
      }
      
      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }
      
      utterance.lang = 'en-IN';
      utterance.rate = 0.9;
      utterance.pitch = 1.1;

      utterance.onend = () => {
        setIsSpeaking(false);
        setIsPaused(false);
      };
      
      utterance.onerror = (event) => {
        console.error('SpeechSynthesisUtterance.onerror', event);
        setIsSpeaking(false);
        setIsPaused(false);
      };

      speechSynthesis.speak(utterance);
      setIsSpeaking(true);
      setIsPaused(false);
    }
  };

  const handlePause = () => {
    if (!isSupported) return;
    speechSynthesis.pause();
    setIsPaused(true);
  };

  const handleStop = () => {
    if (!isSupported) return;
    speechSynthesis.cancel();
    setIsSpeaking(false);
    setIsPaused(false);
  };
  
  if (!isSupported) {
    return <p className="text-sm text-muted-foreground">Text-to-speech is not supported in your browser.</p>;
  }
  
  if (isLoadingVoices) {
     return (
        <Button variant="outline" disabled>
           <Loader className="w-5 h-5 mr-2 animate-spin" />
           Loading audio...
        </Button>
     );
  }

  if (isSpeaking) {
    return (
      <div className="flex items-center gap-2 p-2 border rounded-lg bg-card/50">
        <Button onClick={isPaused ? handlePlay : handlePause} variant="ghost" size="sm">
          {isPaused ? <Play className="w-5 h-5 mr-2" /> : <Pause className="w-5 h-5 mr-2" />}
          {isPaused ? 'Resume' : 'Pause'}
        </Button>
        <Button onClick={handleStop} variant="ghost" size="sm">
          <Square className="w-5 h-5 mr-2" />
          Stop
        </Button>
        <span className="text-sm text-muted-foreground animate-pulse ml-auto">Speaking...</span>
      </div>
    );
  }

  return (
     <Button onClick={handlePlay} variant="outline" disabled={!text || isLoadingVoices}>
       <Volume2 className="w-5 h-5 mr-2" />
       Read description aloud
    </Button>
  );
}
