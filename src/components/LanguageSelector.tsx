import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export type Language = 'en' | 'hi' | 'mr';

interface LanguageSelectorProps {
  value: Language;
  onChange: (lang: Language) => void;
}

const languages = [
  { code: 'en' as Language, label: 'English', native: 'English' },
  { code: 'hi' as Language, label: 'Hindi', native: 'हिंदी' },
  { code: 'mr' as Language, label: 'Marathi', native: 'मराठी' },
];

const LanguageSelector = ({ value, onChange }: LanguageSelectorProps) => {
  return (
    <motion.div
      className="fixed top-6 right-6 z-50"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <Select value={value} onValueChange={(val) => onChange(val as Language)}>
        <SelectTrigger className="w-[140px] bg-card/80 backdrop-blur-sm border-primary/30 text-foreground font-body">
          <Globe className="w-4 h-4 mr-2 text-primary" />
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="bg-card border-primary/30">
          {languages.map((lang) => (
            <SelectItem 
              key={lang.code} 
              value={lang.code}
              className="font-body hover:bg-primary/10"
            >
              <span className="flex items-center gap-2">
                <span>{lang.native}</span>
                <span className="text-muted-foreground text-xs">({lang.label})</span>
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </motion.div>
  );
};

export default LanguageSelector;
