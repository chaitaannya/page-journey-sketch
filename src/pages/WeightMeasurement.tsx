
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const WeightMeasurement = () => {
  const [unit, setUnit] = useState<'kg' | 'lb'>('kg');
  const [weight, setWeight] = useState(70);
  const navigate = useNavigate();

  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    setWeight(value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 p-6 flex flex-col">
      <div className="bg-white rounded-3xl p-8 flex-1 flex flex-col max-w-md mx-auto animate-fade-in">
        <h1 className="text-4xl font-bold mb-12">Lets Get Started..</h1>
        
        <div className="text-center mb-8">
          <h2 className="text-xl mb-2">What is your weight?</h2>
          <div className="inline-flex bg-gray-100 rounded-full p-1 mb-4">
            <button
              className={`px-4 py-1 rounded-full ${unit === 'lb' ? 'bg-white shadow-sm' : ''}`}
              onClick={() => setUnit('lb')}
            >
              lb
            </button>
            <button
              className={`px-4 py-1 rounded-full ${unit === 'kg' ? 'bg-white shadow-sm' : ''}`}
              onClick={() => setUnit('kg')}
            >
              kg
            </button>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div className="bg-accent-peach/20 rounded-2xl p-8 w-full max-w-xs">
            <Input
              type="number"
              value={weight}
              onChange={handleWeightChange}
              className="text-4xl font-bold text-center bg-transparent border-none focus:ring-0"
              min="0"
              max={unit === 'kg' ? "300" : "660"}
            />
            <p className="text-center text-gray-500 mt-2">{unit}</p>
          </div>
        </div>

        <div className="mt-8 flex justify-between">
          <div className="w-2 h-2 bg-gray-300 rounded-full" />
          <div className="w-2 h-2 bg-gray-900 rounded-full" />
          <div className="w-2 h-2 bg-gray-300 rounded-full" />
        </div>

        <Button 
          className="mt-6 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white"
          onClick={() => navigate('/goals')}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default WeightMeasurement;
