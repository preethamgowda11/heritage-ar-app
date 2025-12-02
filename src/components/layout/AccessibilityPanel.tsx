'use client';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { useUserPreferences } from '@/context/UserPreferencesContext';
import { useTranslation } from '@/hooks/use-translation';

interface AccessibilityPanelProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AccessibilityPanel({ open, onOpenChange }: AccessibilityPanelProps) {
  const {
    isAccessibilityOn,
    setIsAccessibilityOn,
    isAudioOn,
    setIsAudioOn,
    fontSize,
    setFontSize,
    theme,
    setTheme,
    isBionicReading,
    setIsBionicReading,
    isDyslexiaFont,
    setIsDyslexiaFont,
    isReduceMotion,
    setIsReduceMotion,
  } = useUserPreferences();
  const { t } = useTranslation();

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{t('accessibility')}</SheetTitle>
          <SheetDescription>
            {t('customize_experience')}
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-6 py-6">
          <div className="flex items-center justify-between">
            <Label htmlFor="accessibility-mode" className="text-base">
              {t('enable_accessibility_mode')}
            </Label>
            <Switch
              id="accessibility-mode"
              checked={isAccessibilityOn}
              onCheckedChange={setIsAccessibilityOn}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="audio-narration" className="text-base">
              {t('audio_narration')}
            </Label>
            <Switch
              id="audio-narration"
              checked={isAudioOn}
              onCheckedChange={setIsAudioOn}
              disabled={!isAccessibilityOn}
            />
          </div>
          <div className="space-y-3">
            <Label htmlFor="font-size" className="text-base">
              {t('font_size')}: {Math.round((fontSize / 16) * 100)}%
            </Label>
            <Slider
              id="font-size"
              min={12}
              max={24}
              step={1}
              value={[fontSize]}
              onValueChange={(value) => setFontSize(value[0])}
              disabled={!isAccessibilityOn}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="contrast-mode" className="text-base">
               {t('high_contrast_mode')}
            </Label>
            <Switch
              id="contrast-mode"
              checked={theme === 'dark'}
              onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
              disabled={!isAccessibilityOn}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="bionic-reading" className="text-base">
              Bionic Reading
            </Label>
            <Switch
              id="bionic-reading"
              checked={isBionicReading}
              onCheckedChange={setIsBionicReading}
              disabled={!isAccessibilityOn}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="dyslexia-font" className="text-base">
              Dyslexia Friendly Font
            </Label>
            <Switch
              id="dyslexia-font"
              checked={isDyslexiaFont}
              onCheckedChange={setIsDyslexiaFont}
              disabled={!isAccessibilityOn}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="reduce-motion" className="text-base">
              Reduce Motion
            </Label>
            <Switch
              id="reduce-motion"
              checked={isReduceMotion}
              onCheckedChange={setIsReduceMotion}
              disabled={!isAccessibilityOn}
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
