import React from 'react';
import { Palette, Sparkles, Sun, Moon, Zap, Heart } from 'lucide-react';

export interface FilterType {
  id: string;
  name: string;
  icon: React.ReactNode;
  cssFilter: string;
  description: string;
}

interface FilterSelectorProps {
  selectedFilter: FilterType;
  onFilterSelect: (filter: FilterType) => void;
  previewImage?: string;
}

export const filters: FilterType[] = [
  {
    id: 'none',
    name: 'ORIGINAL',
    icon: <Palette size={24} />,
    cssFilter: 'none',
    description: 'No filter'
  },
  {
    id: 'blackwhite',
    name: 'B&W',
    icon: <Moon size={24} />,
    cssFilter: 'grayscale(100%) contrast(120%)',
    description: 'Classic black and white'
  },
  {
    id: 'sepia',
    name: 'VINTAGE',
    icon: <Sun size={24} />,
    cssFilter: 'sepia(80%) saturate(120%) contrast(110%)',
    description: 'Warm vintage vibes'
  },
  {
    id: 'neon',
    name: 'NEON',
    icon: <Zap size={24} />,
    cssFilter: 'contrast(150%) saturate(200%) hue-rotate(90deg) brightness(110%)',
    description: 'Electric neon effect'
  },
  {
    id: 'cyberpunk',
    name: 'CYBER',
    icon: <Sparkles size={24} />,
    cssFilter: 'contrast(130%) saturate(150%) hue-rotate(270deg) brightness(105%)',
    description: 'Cyberpunk aesthetics'
  },
  {
    id: 'love',
    name: 'LOVE',
    icon: <Heart size={24} />,
    cssFilter: 'saturate(150%) hue-rotate(320deg) brightness(110%) contrast(120%)',
    description: 'Romantic pink tones'
  }
];

export const FilterSelector: React.FC<FilterSelectorProps> = ({
  selectedFilter,
  onFilterSelect,
  previewImage
}) => {
  return (
    <div className="space-y-4">
      <h2 className="brutal-heading text-2xl">🎨 FILTERS</h2>
      
      <div className="grid grid-cols-2 gap-4">
        {filters.map((filter) => (
          <div
            key={filter.id}
            onClick={() => onFilterSelect(filter)}
            className={`brutal-card cursor-pointer p-4 text-center transition-all duration-200 ${
              selectedFilter.id === filter.id
                ? 'bg-primary text-primary-foreground transform translate-x-[-2px] translate-y-[-2px] shadow-[8px_8px_0px_0px_#000]'
                : 'hover:bg-muted'
            }`}
          >
            <div className="flex flex-col items-center gap-2">
              <div className={`${selectedFilter.id === filter.id ? 'text-primary-foreground' : 'text-foreground'}`}>
                {filter.icon}
              </div>
              <div className="font-black text-sm uppercase tracking-wider">
                {filter.name}
              </div>
              
              {previewImage && (
                <div className="w-16 h-12 border-2 border-black overflow-hidden">
                  <img
                    src={previewImage}
                    alt="Filter preview"
                    className="w-full h-full object-cover"
                    style={{ filter: filter.cssFilter }}
                  />
                </div>
              )}
              
              <div className="text-xs opacity-75 mt-1">
                {filter.description}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="brutal-card bg-muted p-4">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles size={16} />
          <span className="font-bold text-sm uppercase">Selected:</span>
        </div>
        <div className="font-black text-lg">{selectedFilter.name}</div>
        <div className="text-sm opacity-75">{selectedFilter.description}</div>
      </div>
    </div>
  );
};