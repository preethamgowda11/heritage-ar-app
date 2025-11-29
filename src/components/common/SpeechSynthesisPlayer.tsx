
'use client';

import { Play, Pause, Square, Volume2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface SpeechSynthesisPlayerProps {
  text: string;
}

export function SpeechSynthesisPlayer({ text }: SpeechSynthesisPlayerProps) {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    setIsSupported(typeof window !== 'undefined' && 'speechSynthesis' in window);
  }, []);

  useEffect(() => {
    const handleEnd = () => {
      setIsSpeaking(false);
      setIsPaused(false);
    };

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-IN'; // Default to English (India)
    utterance.onend = handleEnd;
    
    // Cleanup on component unmount
    return () => {
      speechSynthesis.cancel();
    };

  }, [text]);

  const handlePlay = () => {
    if (!isSupported || !text) return;
    
    if (isPaused) {
      speechSynthesis.resume();
      setIsPaused(false);
    } else {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-IN';
      utterance.rate = 0.9;
      utterance.pitch = 1.1;
      utterance.onend = () => {
        setIsSpeaking(false);
        setIsPaused(false);
      };
      speechSynthesis.cancel(); // Stop any previous speech
      speechSynthesis.speak(utterance);
    }
    setIsSpeaking(true);
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
     <Button onClick={handlePlay} variant="outline" disabled={!text}>
       <Volume2 className="w-5 h-5 mr-2" />
       Read description aloud
    </Button>
  );
}
