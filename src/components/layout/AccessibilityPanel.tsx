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
    setTheme
  } = useUserPreferences();

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Accessibility</SheetTitle>
          <SheetDescription>
            Customize your experience for your needs.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-6 py-6">
          <div className="flex items-center justify-between">
            <Label htmlFor="accessibility-mode" className="text-base">
              Enable Accessibility Mode
            </Label>
            <Switch
              id="accessibility-mode"
              checked={isAccessibilityOn}
              onCheckedChange={setIsAccessibilityOn}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="audio-narration" className="text-base">
              Audio Narration
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
              Font Size: {Math.round((fontSize / 16) * 100)}%
            </Label>
            <Slider
              id="font-size"
              min={12}
              max={24}
              step={1}
              value={[fontSize]}
              onValueChange={(value) => setFontSize(value[0])}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="contrast-mode" className="text-base">
               High Contrast Mode
            </Label>
            <Switch
              id="contrast-mode"
              checked={theme === 'dark'}
              onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
