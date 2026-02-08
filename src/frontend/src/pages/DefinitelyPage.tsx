import RomanticButton from '../components/RomanticButton';
import TwinklingStars from '../components/TwinklingStars';
import { ArrowLeft, Heart } from 'lucide-react';

interface DefinitelyPageProps {
  navigate: (to: '/' | '/yass' | '/definitely') => void;
}

export default function DefinitelyPage({ navigate }: DefinitelyPageProps) {
  return (
    <div className="definitely-page min-h-screen relative overflow-hidden bg-white">
      <TwinklingStars />
      
      <div className="absolute top-6 left-6 z-20">
        <RomanticButton
          onClick={() => navigate('/')}
          variant="ghost"
          size="sm"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </RomanticButton>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen px-6 py-20">
        <div className="max-w-4xl">
          <img
            src="/assets/generated/two-girls-jumping-heart.dim_1200x900.png"
            alt="Two girls jumping with heart"
            className="w-full max-w-2xl mx-auto mb-8 animate-fade-in"
          />
          
          <div className="text-center">
            <p className="bubble-text text-cherry-pink text-4xl md:text-6xl inline-flex items-center gap-3 animate-fade-in-delay">
              together forever- taru and shara
              <Heart className="w-10 h-10 md:w-12 md:h-12 fill-cherry-pink text-cherry-pink" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
