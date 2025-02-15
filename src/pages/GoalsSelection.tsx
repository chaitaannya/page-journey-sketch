
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ChevronRight } from 'lucide-react';

const GoalsSelection = () => {
  const [selectedGoal, setSelectedGoal] = useState('');
  const navigate = useNavigate();

  const goals = [
    "Strength Training for Muscle Gain",
    "High-Intensity Interval Training for Fat Loss",
    "Cardiovascular Exercise for Fat Loss",
    "Functional Training for Overall Fitness"
  ];

  return (
    <div className="min-h-screen bg-black p-6 flex flex-col">
      <div className="bg-white rounded-3xl p-8 flex-1 flex flex-col max-w-md mx-auto animate-fade-in">
        <h1 className="text-4xl font-bold mb-6">Lets Get Started..</h1>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">What do you want to achieve?</h2>
          <p className="text-sm text-gray-500">
            What you are going to select will effect your workout program
          </p>
        </div>

        <div className="flex-1 space-y-4">
          {goals.map((goal) => (
            <button
              key={goal}
              className={`w-full p-4 rounded-xl border text-left transition-all ${
                selectedGoal === goal
                ? 'border-primary bg-primary/5'
                : 'border-gray-200 hover:border-primary/50'
              }`}
              onClick={() => setSelectedGoal(goal)}
            >
              {goal}
            </button>
          ))}
        </div>

        <div className="mt-8 flex justify-between">
          <div className="w-2 h-2 bg-gray-300 rounded-full" />
          <div className="w-2 h-2 bg-gray-300 rounded-full" />
          <div className="w-2 h-2 bg-gray-900 rounded-full" />
        </div>

        <Button 
          className="mt-6 bg-primary hover:bg-primary/90 text-white"
          onClick={() => navigate('/dashboard')}
          disabled={!selectedGoal}
        >
          Next <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default GoalsSelection;
