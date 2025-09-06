import React, { useEffect } from 'react';
import { Wand2, Castle, Sparkles, Shirt, PenTool } from 'lucide-react';


export interface StyleType {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  prompt: string;
}

export const styles: StyleType[] = [
  {
    id: 'hogwarts',
    name: 'Hogwarts',
    icon: <Castle className="w-6 h-6" />,
    description: '🪄 Wingardium Fabulous-osa!',
    prompt: `{
      "instructions": [
        "Transform the person in the image into a wizard or witch within the Hogwarts universe from Harry Potter.",
        "Preserve the original facial features and body proportions to keep the person recognizable.",
        "Add magical elements like wands, cloaks, and subtle sparks of magic around them.",
        "The background should resemble a Hogwarts setting, such as the Great Hall, library, or castle corridors, with a mystical atmosphere.",
        "Use a cinematic, slightly dark yet magical tone for the overall look."
      ],
      "style": "Hogwarts, fantasy, magical realism",
      "output_format": "png",
      "quality": "high"
    }`
  },
  {
    id: 'disney',
    name: 'Disney',
    icon: <Wand2 className="w-6 h-6" />,
    description: '🏰 When you wish upon a filter...',
    prompt: `{
      "instructions": [
        "Transform the given image into a classic Disney animated character.",
        "Maintain the original facial features and body proportions so the person remains clearly recognizable.",
        "Use soft, vibrant colors, clean outlines, and a whimsical, dreamy atmosphere.",
        "Make the background resemble a magical Disney world with subtle fairytale elements such as sparkles or castles.",
        "Ensure the final output looks like an authentic Disney movie scene."
      ],
      "style": "Disney, whimsical, magical, fairytale",
      "output_format": "png",
      "quality": "high"
    }`
  },
  {
    id: 'anime',
    name: 'Anime',
    icon: <Shirt className="w-6 h-6" />,
    description: '🌸 Kawaii transformation power!',
    prompt: `{
      "instructions": [
        "Transform the person in the image into a character from a high-quality anime.",
        "Keep the facial features and body proportions recognizable but stylized in an anime format.",
        "Use sharp, clean lines and bright, expressive eyes characteristic of anime art.",
        "The background should be simple yet colorful, evoking a slice-of-life anime scene.",
        "Ensure the character design feels authentic to anime aesthetics while staying true to the original image."
      ],
      "style": "Anime, vibrant, expressive, detailed",
      "output_format": "png",
      "quality": "high"
    }`
  },
  {
    id: 'comic',
    name: 'Doraemon',
    icon: <PenTool className="w-6 h-6" />,
    description: '💥 Fujiko Fujio made you',
    prompt: `{
      "instructions": [
        "Transform the given image into a Doraemon-style cartoon character.",
        "Preserve the original facial features and body proportions so the character remains recognizable.",
        "Use soft, pale tones for the background to keep focus on the character.",
        "Apply the signature Doraemon universe art style: round shapes, clean outlines, vibrant but simple colors.",
        "Ensure the final output looks like a seamless part of the Doraemon world while maintaining the essence of the person in the original image."
      ],
      "style": "Doraemon universe, playful, minimalistic, bright",
      "output_format": "png",
      "quality": "high"
    }`
  }
];


interface StyleSelectorProps {
  selectedStyle: StyleType;
  onStyleSelect: (style: StyleType) => void;
  isProcessing: boolean;
}

export const StyleSelector: React.FC<StyleSelectorProps> = ({
  selectedStyle,
  onStyleSelect,
  isProcessing,
}) => {

  useEffect(() => {
    if (selectedStyle) {
      console.log("Currently Selected Style Prompt:", selectedStyle.prompt);
    }
  }, [selectedStyle]);

  return (
    <div className="space-y-4">
      <h2 className="brutal-heading text-2xl">✨ STYLES</h2>

      <div className="grid grid-cols-2 gap-3">
        {styles.map((style) => (
          <button
            key={style.id}
            onClick={() => !isProcessing && onStyleSelect(style)}
            disabled={isProcessing}
            className={`brutal-card p-4 text-left transition-all ${
              selectedStyle.id === style.id
                ? 'bg-primary text-primary-foreground'
                : 'bg-card hover:bg-muted/80'
            } ${
              isProcessing
                ? 'opacity-50 cursor-not-allowed'
                : 'cursor-pointer'
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
