import React, { useEffect } from 'react';
import { Wand2, Castle, Sparkles, Shirt, PenTool, Skull } from 'lucide-react';


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
    "**Core Transformation Goal:** Convert the provided human image into a character that is indistinguishable from an original Fujiko F. Fujio human character (specifically, a primary child character like Nobita, Suneo, Shizuka, or Gian) found in the Doraemon manga or early 1979-era anime series. The transformation must prioritize faithful stylistic replication over strict photorealism of the original subject, capturing the *essence* of his iconic human designs.",
    "**Pose & Orientation - Front-Facing Primary Focus:** The character should be rendered in a clear, straightforward, **front-facing** pose. The body should be generally upright and symmetrical from the viewer's perspective. Avoid complex angles or dynamic action poses unless explicitly present and simple in the original image. Focus should be on the upper body/bust, or a full-body standing pose if the original implies it, always with the face clearly looking forward.",
    "**Facial Features - Extreme Stylization for Essence:** The facial features must be highly stylized according to Fujiko F. Fujio's signature conventions to capture the character's *essence*:\n- **Eyes:** Large, perfectly round or slightly oval, simple black pupils (often a single dot or small circle). Whites of the eyes should be bright. No complex iris details or reflections. Eyebrows, if present, are thin, curved lines. \n- **Nose:** Extremely simplified; a small, rounded 'C' shape, a dot, or a very short, curved line. \n- **Mouth:** A simple, expressive line, often a wide, friendly curve for a smile or a small 'o' for surprise. \n- **Face Shape:** Predominantly round or gently oval, with soft, undefined jawlines. Cheeks may have subtle, small blush marks (two parallel curved lines) if the expression warrants it. \n- **Glasses:** If present, they should be simple, thick-rimmed circular or slightly square frames with clear, flat lenses. \n- **Expression:** Translate the original expression into one of Fujiko F. Fujio's characteristic emotions: wide-eyed wonder, mischievous grin, gentle smile, or mild surprise. Avoid complex or subtle adult emotions.",
    "**Hair Style - Distinct Shapes:** Hair should be simplified into solid, distinct, rounded, or slightly spiky shapes (depending on the original hair's volume). Avoid any individual strand detailing. The hairline should be very clean and clearly defined against the skin.",
    "**Body Proportions - Exaggerated Youthful & Rounded, with Bigger Head:** Adapt the subject's body into the characteristic Fujiko F. Fujio proportions for children or young teenagers. This means:\n- **Head Size:** The head should be noticeably **bigger** in proportion to the rest of the body, often maintaining a 1:2.5 to 1:3 total height ratio (head is 1/2.5 to 1/3 of the total height). This contributes significantly to the 'child-like' and 'cute' aesthetic. \n- **Limbs:** Short, thick, and rounded limbs (arms and legs) that taper slightly. \n- **Hands & Feet:** Simple, rounded hands (often drawn with only 3 or 4 fingers visible, or simplified mittens/gloves if worn). Feet are also very rounded, often visible in simple shoes (like sneakers or school shoes). \n- **Posture:** The posture should be simple and direct, reinforcing the front-facing view. Avoid stiff or overly realistic stances.",
    "**Line Work - Iconic Cleanliness:** Use consistent, very clean, and uniformly thick black outlines for all characters and elements. Shading should be minimal to non-existent, typically just flat colors or small, stark shadows where necessary. Edges should be crisp, not textured or sketch-like.",
    "**Color Palette - Flat & Vibrant:** Employ a limited palette of bright, flat, primary-like colors without gradients or complex textures. Skin tones should be a uniform, light peach/tan. Clothing should have distinct, block colors (e.g., solid blue, bright yellow, simple plaid patterns with two strong colors). Backgrounds should be very simple pastel solid colors (e.g., light blue, pale yellow, soft green) or minimalistic indoor settings with clearly defined, simple objects (e.g., a single bookshelf, a plain bed).",
    "**Clothing Style:** Simplify any clothing details from the original image into block shapes and common styles seen in Fujiko F. Fujio's characters (e.g., a simple t-shirt, collared shirt, shorts, or trousers). Plaid patterns should be large, clear, and two-toned. Minimize intricate folds or fabric textures.",
    "**Background Context - Extremely Simple:** The character should be presented against an **extremely simple, uniform, solid pastel-toned background** (e.g., light blue, pale yellow, soft green). No complex patterns, objects, furniture, or elaborate scenery should be present. The background's purpose is solely to provide a clean, unobtrusive backdrop that keeps the entire focus on the character, just like in a character reference sheet or a very clean manga panel.",
    "**Overall Aesthetic - Authentic Fujiko F. Fujio Essence:** The final image must possess the unmistakable charm, innocence, and slightly whimsical feel of an authentic Fujiko F. Fujio illustration. It should appear to be a character design directly from a classic Doraemon episode or manga panel, making the original subject completely integrated into that specific universe, with all the signature stylistic traits prominently displayed.",
    "**Resolution & Output:** Generate a high-resolution image (at least 1024x1024 pixels or larger) with clear, anti-aliased lines and vibrant colors, suitable for immediate use in a digital context."
  ],
  "style": "Fujiko F. Fujio Art Style (Doraemon Classic), 1970s-1980s Anime/Manga, children's cartoon, retro Japanese animation, simple, clean, vibrant, expressive, rounded forms, block colors",
  "output_format": "png",
  "quality": "max"
}`
  },
  {
    id: 'tatami',
    name: 'Tatami Galaxy',
    icon: <Skull className="w-6 h-6" />,
    description: '🌀 Taitai World!',
    prompt: `{
  "instructions": [
    "**Core Transformation Goal - Exact Replication:** Convert the provided human image into a character that is an **exact stylistic match** to the art style of Masaaki Yuasa's works, specifically as seen in *The Tatami Galaxy* and *Night is Short, Walk On Girl*. The transformation must strictly adhere to the visual conventions, **prioritizing faithful stylistic replication above all else** to capture the precise *essence* and appearance of his human character designs.",
    "**Pose & Orientation - Front-Facing Bust:** The character must be rendered in a **front-facing bust shot**, from the chest up. The head should be perfectly centered and looking directly forward. The posture must be simple, symmetrical, and completely frontal, mirroring the static, contemplative feeling often conveyed in this style. No angled views, dynamic poses, or full-body shots. This ensures maximum focus on the iconic head and facial features.",
    "**Facial Features - Highly Stylized & Distinctive:** All facial features must adhere *precisely* to the unique conventions of this art style:\n- **Eyes:** Large, distinct, and highly stylized. They should be wide, often with a slightly oval or elongated shape, and usually feature a thin, clean outline. Pupils are small, dark, and perfectly round or slightly oval. The whites of the eyes must be prominent and unshaded. Dark circles under the eyes, if present in the original or implied, should be rendered as thin, clean lines. Eyebrows are thin, often slightly angular lines, conveying subtle expressions. \n- **Nose:** Extremely minimalist and abstract. Often just two small, distinct dots or very short, parallel lines for nostrils. Alternatively, it can be a tiny, sharp, inverted 'V' or 'U' shape. \n- **Mouth:** A very thin, precise line. It can be a slight, subtle curve for a gentle smile, a straight line for pensiveness, or a slightly open 'o' shape for mild surprise/thought. No complex lip definitions. \n- **Face Shape:** Faces tend to be elongated or have a subtle angularity, particularly in the jawline or chin, rather than being perfectly round. They appear simplified and almost schematic, conveying an impression of youth or slight weariness. \n- **Glasses:** If present, they must be simple, round or slightly oval frames with thin, consistent black outlines and clear, flat lenses. \n- **Expression:** A thoughtful, slightly melancholic, quietly observant, or mildly concerned expression is characteristic. Avoid overly joyful, angry, or exaggerated cartoon expressions. The expression should be subtle and introspective.",
    "**Hair Style - Solid, Angular Blocks:** Hair must be stylized into **solid, distinct, often geometric-like blocks of color (typically solid black)**. It must have sharp, clean edges and clearly defined shapes, with **absolutely no internal detail, individual strands, gradients, or complex highlights**. The hairline must be extremely clean and precisely defined against the skin, maintaining the original's general volume and part but simplifying it into a block form.",
    "**Body Proportions - Slender & Slightly Elongated:** The character's proportions must be slender and somewhat elongated, reflecting a youthful or lean build. Limbs (if visible) should appear long and thin. The neck is often rendered as distinctly long and slender, supporting the proportionally sized head. Shoulders should be softly sloped or subtly angular, fitting the overall minimalist form.",
    "**Line Work - Extremely Clean, Thin, & Consistent:** Utilize **extremely clean, uniformly thin, and consistently black outlines** for all elements of the character. This includes facial features, hair, clothing, and the outer silhouette. There should be **no subtle lines, varying thickness, sketchy quality, or textured lines**. Lines are precise and define form rather than creating volume. Shading must be completely flat or absent, using only clear, block colors.",
    "**Color Palette - Flat, Desaturated, & Limited (White Pale Skin):** Employ a very limited palette of **flat, solid colors with absolutely no gradients, textures, or subtle color variations**. Colors should lean towards desaturated tones: **skin tones must be uniformly white pale, almost porcelain-like**, stark black for hair, and muted, subtle colors for clothing (e.g., desaturated blues, greens, greys, browns). The background must be a single, uniform, solid pastel or desaturated color (e.g., light blue, pale grey, off-white) with **zero details, patterns, or objects**.",
    "**Clothing Style - Simplified & Clean Draping:** Simplify any clothing details from the original image into clean, untextured block shapes. Clothing should drape smoothly with minimal, simple folds that are defined by thin, clean lines. Patterns (like plaid) should be large, clear, and composed of only two strong, flat, desaturated colors. Avoid intricate details, wrinkles, or realistic fabric textures.",
    "**Background Context - Absolute Minimalism:** The character must be placed against an **unbroken, single, uniform, solid pastel-toned or desaturated background**. No room details, no furniture, no patterns, no textures, no subtle lighting. The background's sole purpose is to isolate and highlight the character with ultimate, stark simplicity, just like a character reference sheet.",
    "**Overall Aesthetic - Unmistakable Masaaki Yuasa Icon:** The final output must be utterly unmistakable as a character directly from Masaaki Yuasa's *The Tatami Galaxy* or *Night is Short, Walk On Girl*. It must perfectly embody the unique visual language, psychological depth, and stylistic minimalism of those works, making the transformed subject feel like an original character from that specific animated universe.",
    "**Resolution & Output:** Generate a high-resolution image (at least 1024x1024 pixels or larger) with crisp, anti-aliased lines and vibrant, flat colors."
  ],
  "negative_prompt": [
    "realistic, photorealistic, photography, 3D render, complex shading, gradients, subtle color variations, detailed textures, individual hair strands, blurry, deformed, distorted, adult proportions (if aiming for younger character), muscular, aged, wrinkles, dark/overly saturated colors, busy background, patterned background, complex background, objects in background, text, watermark, signature, anime girl (generic), anime boy (generic), chibi, cartoon (generic), manga panel with speech bubbles, sketch, drawing, painting, harsh shadows, intricate details, highly detailed skin, facial hair (unless prominent in original and stylized), wrinkles on clothes (excessive), soft light, shiny, glossy, tan skin, dark skin, colored skin (any other than white pale)"
  ],
  "style": "Masaaki Yuasa Art Style (The Tatami Galaxy, Night is Short Walk On Girl), minimalist anime, highly stylized, graphic design aesthetic, clean lines, flat colors, subtle expression, elongated proportions, stark, introspective, unique character design",
  "output_format": "png",
  "quality": "max"
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
