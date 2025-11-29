
'use client';

import { Play, Pause, Square, Volume2, Loader } from 'lucide-react';
import { useState, useEffect, useRef, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/use-translation';


interface SpeechSynthesisPlayerProps {
  text: string;
}

export function SpeechSynthesisPlayer({ text }: SpeechSynthesisPlayerProps) {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const [isLoadingVoices, setIsLoadingVoices] = useState(true);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const { t } = useTranslation();

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      setIsSupported(true);
      const synth = window.speechSynthesis;

      const loadVoices = () => {
        const voices = synth.getVoices();
        if (voices.length > 0) {
          setIsLoadingVoices(false);
          // Create the utterance once voices are loaded
          const newUtterance = new SpeechSynthesisUtterance(text);
          const voices = synth.getVoices();
          let selectedVoice = voices.find(voice => voice.lang === 'en-IN' && voice.name.includes('Google'));
          if (!selectedVoice) {
            selectedVoice = voices.find(voice => voice.lang === 'en-IN');
          }
          if (!selectedVoice) {
              selectedVoice = voices.find(voice => voice.lang.startsWith('en-') && voice.default);
          }
           if (!selectedVoice) {
              selectedVoice = voices.find(voice => voice.lang.startsWith('en-'));
          }

          if (selectedVoice) {
            newUtterance.voice = selectedVoice;
          }
          newUtterance.lang = 'en-IN';
          newUtterance.rate = 0.9;
          newUtterance.pitch = 1.1;

          newUtterance.onstart = () => {
            setIsSpeaking(true);
            setIsPaused(false);
          };
          newUtterance.onpause = () => {
            setIsSpeaking(true);
            setIsPaused(true);
          };
          newUtterance.onresume = () => {
            setIsSpeaking(true);
            setIsPaused(false);
          };
          newUtterance.onend = () => {
            setIsSpeaking(false);
            setIsPaused(false);
          };
          newUtterance.onerror = (event) => {
            console.error('SpeechSynthesisUtterance.onerror', event);
            setIsSpeaking(false);
            setIsPaused(false);
          };
          utteranceRef.current = newUtterance;
        }
      };

      // The 'voiceschanged' event is fired when the list of supported voices is ready.
      synth.addEventListener('voiceschanged', loadVoices);
      // In some browsers (like Chrome on desktop), the voices might be ready immediately.
      loadVoices();

      // Cleanup function to cancel speech and remove listeners when the component unmounts.
      return () => {
        synth.cancel();
        synth.removeEventListener('voiceschanged', loadVoices);
      };
    }
  }, [text]); // Re-create utterance if text changes

  const handlePlay = useCallback(() => {
    const synth = window.speechSynthesis;
    if (!synth || !utteranceRef.current || isLoadingVoices) return;

    if (synth.paused && isPaused) {
      synth.resume();
    } else if (!synth.speaking) {
      // Always cancel any previous speech before starting a new one.
      synth.cancel();
      synth.speak(utteranceRef.current);
    }
  }, [isPaused, isLoadingVoices]);

  const handlePause = useCallback(() => {
    const synth = window.speechSynthesis;
    if (synth && synth.speaking && !synth.paused) {
      synth.pause();
    }
  }, []);

  const handleStop = useCallback(() => {
    const synth = window.speechSynthesis;
    if (synth) {
      synth.cancel(); // This will trigger the 'onend' event.
    }
  }, []);

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
     <Button onClick={handlePlay} variant="outline" disabled={!text}>
       <Volume2 className="w-5 h-5 mr-2" />
       {t('read_description_aloud')}
    </Button>
  );
}
