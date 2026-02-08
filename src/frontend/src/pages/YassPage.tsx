import RomanticButton from '../components/RomanticButton';
import { ArrowLeft } from 'lucide-react';

interface YassPageProps {
  navigate: (to: '/' | '/yass' | '/definitely') => void;
}

export default function YassPage({ navigate }: YassPageProps) {
  return (
    <div className="yass-page min-h-screen relative overflow-hidden">
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

      <img
        src="/assets/generated/kiss-stamp.dim_256x256.png"
        alt="Kiss stamp"
        className="absolute bottom-8 right-8 w-24 h-24 md:w-32 md:h-32 opacity-80 rotate-12 z-10"
      />

      <div className="flex items-center justify-center min-h-screen px-6 py-20">
        <div className="max-w-3xl text-center">
          <p className="bubble-text text-baby-pink text-3xl md:text-5xl leading-relaxed whitespace-pre-line animate-fade-in">
            {`kannu-azaghuu, voice'u- aiyoooo 🤌🏼, figure'uh bestuuuu.
When life gets hard they say God sends u someone to keep u happy, and your that some for me.
Love youuu taruuu`}
          </p>
        </div>
      </div>
    </div>
  );
}
