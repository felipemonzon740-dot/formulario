import React, { useState } from 'react';
import FormStage from './components/FormStage';
import DecisionStage from './components/DecisionStage';
import SuccessStage from './components/SuccessStage';
import { AppStage, ForgivenessFormData } from './types';

const App: React.FC = () => {
  const [stage, setStage] = useState<AppStage>(AppStage.FORM);
  const [formData, setFormData] = useState<ForgivenessFormData | null>(null);

  const handleFormSubmit = (data: ForgivenessFormData) => {
    setFormData(data);
    setStage(AppStage.DECISION);
  };

  const handleYes = () => {
    setStage(AppStage.SUCCESS);
  };

  const handleReset = () => {
    setStage(AppStage.FORM);
    setFormData(null);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-pink-100 via-rose-100 to-pink-200 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      
      {/* Background Floating Hearts (Decorative) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-[10%] text-pink-300 opacity-50 animate-pulse text-6xl">♥</div>
        <div className="absolute bottom-20 right-[20%] text-rose-300 opacity-50 animate-bounce text-8xl">♥</div>
        <div className="absolute top-1/2 left-[5%] text-pink-200 opacity-30 text-4xl">♥</div>
      </div>

      <div className="z-10 w-full flex justify-center">
        {stage === AppStage.FORM && (
          <FormStage onSubmit={handleFormSubmit} />
        )}
        
        {stage === AppStage.DECISION && formData && (
          <DecisionStage formData={formData} onYes={handleYes} />
        )}

        {stage === AppStage.SUCCESS && formData && (
          <SuccessStage formData={formData} onReset={handleReset} />
        )}
      </div>

      <footer className="absolute bottom-4 text-pink-400 text-xs text-center font-medium opacity-70">
        Hecho con ♥ y un poco de arrepentimiento
      </footer>
    </div>
  );
};

export default App;
