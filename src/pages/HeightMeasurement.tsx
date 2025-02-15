
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const HeightMeasurement = () => {
  const [unit, setUnit] = useState<'cm' | 'inches'>('cm');
  const [height, setHeight] = useState(170);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black p-6 flex flex-col">
      <div className="bg-white rounded-3xl p-8 flex-1 flex flex-col max-w-md mx-auto animate-fade-in">
        <h1 className="text-4xl font-bold mb-12">Lets Get Started..</h1>
        
        <div className="text-center mb-8">
          <h2 className="text-xl mb-2">What is your height?</h2>
          <div className="inline-flex bg-gray-100 rounded-full p-1">
            <button
              className={`px-4 py-1 rounded-full ${unit === 'inches' ? 'bg-white shadow-sm' : ''}`}
              onClick={() => setUnit('inches')}
            >
              inches
            </button>
            <button
              className={`px-4 py-1 rounded-full ${unit === 'cm' ? 'bg-white shadow-sm' : ''}`}
              onClick={() => setUnit('cm')}
            >
              cm
            </button>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div className="bg-accent-mint/20 rounded-2xl p-8 w-full max-w-xs aspect-square flex items-center justify-center">
            <div className="text-6xl font-bold">{height}</div>
          </div>
        </div>

        <div className="mt-8 flex justify-between">
          <div className="w-2 h-2 bg-gray-300 rounded-full" />
          <div className="w-2 h-2 bg-gray-900 rounded-full" />
          <div className="w-2 h-2 bg-gray-300 rounded-full" />
        </div>

        <Button 
          className="mt-6 bg-primary hover:bg-primary/90 text-white"
          onClick={() => navigate('/weight')}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default HeightMeasurement;
