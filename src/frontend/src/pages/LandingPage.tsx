import FloatingDecor from '../components/FloatingDecor';
import RomanticButton from '../components/RomanticButton';

interface LandingPageProps {
  navigate: (to: '/' | '/yass' | '/definitely') => void;
}

export default function LandingPage({ navigate }: LandingPageProps) {
  return (
    <div className="landing-page min-h-screen relative overflow-hidden flex items-center justify-center">
      <FloatingDecor />
      
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        <h1 className="cursive-text text-5xl md:text-7xl mb-12 text-romantic-deep animate-fade-in">
          be with me forever taruna🫴🏼🌷?
        </h1>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <RomanticButton
            onClick={() => navigate('/yass')}
            variant="primary"
          >
            yass
          </RomanticButton>
          
          <RomanticButton
            onClick={() => navigate('/definitely')}
            variant="secondary"
          >
            definitely
          </RomanticButton>
        </div>
      </div>
    </div>
  );
}
