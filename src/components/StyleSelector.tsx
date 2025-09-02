import React from 'react';
import { Wand2, Castle, Sparkles, Shirt, PenTool } from 'lucide-react';

export interface StyleType {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
}

export const styles: StyleType[] = [
  {
    id: 'original',
    name: 'Original',
    icon: <Sparkles className="w-6 h-6" />,
    description: '✨ Keep it real, keep it you!'
  },
  {
    id: 'hogwarts',
    name: 'Hogwarts',
    icon: <Castle className="w-6 h-6" />,
    description: '🪄 Wingardium Fabulous-osa!'
  },
  {
    id: 'disney',
    name: 'Disney',
    icon: <Wand2 className="w-6 h-6" />,
    description: '🏰 When you wish upon a filter...'
  },
  {
    id: 'anime',
    name: 'Anime',
    icon: <Shirt className="w-6 h-6" />,
    description: '🌸 Kawaii transformation power!'
  },
  {
    id: 'comic',
    name: 'Comic',
    icon: <PenTool className="w-6 h-6" />,
    description: '💥 POW! BAM! Super style!'
  }
];

interface StyleSelectorProps {
  selectedStyle: StyleType;
  onStyleSelect: (style: StyleType) => void;
}

export const StyleSelector: React.FC<StyleSelectorProps> = ({
  selectedStyle,
  onStyleSelect,
}) => {
  return (
    <div className="space-y-4">
      <h2 className="brutal-heading text-2xl">✨ STYLES</h2>
      
      <div className="grid grid-cols-2 gap-3">
        {styles.map((style) => (
          <button
            key={style.id}
            onClick={() => onStyleSelect(style)}
            className={`brutal-card p-4 text-left transition-all ${
              selectedStyle.id === style.id
                ? 'bg-primary text-primary-foreground'
                : 'bg-card hover:bg-muted/80'
            }`}
          >
            <div className="flex items-center gap-2 mb-2">
              {style.icon}
              <span className="font-bold">{style.name}</span>
            </div>
            <p className="text-sm opacity-85">{style.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
};
