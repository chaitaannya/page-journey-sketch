
import { Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { ChartLineUp, Award, PlayCircle } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 h-screen p-6 flex flex-col fixed">
          <div className="flex items-center space-x-3 mb-12">
            <Avatar className="h-12 w-12">
              <img src="/lovable-uploads/f3a0f1de-a128-427a-abc4-eb2dfed0e901.png" alt="Samantha" />
            </Avatar>
            <div>
              <h2 className="font-semibold">Samantha</h2>
              <div className="h-2 w-2 bg-red-500 rounded-full absolute top-2 right-2" />
            </div>
          </div>

          <nav className="space-y-6">
            <a href="#" className="flex items-center space-x-3 text-white">
              <span>Home</span>
            </a>
            <a href="#" className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
              <span>AAsanas</span>
            </a>
            <a href="#" className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
              <span>week plan</span>
            </a>
            <a href="#" className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
              <span>meditation</span>
            </a>
            <a href="#" className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
              <span>diet plan</span>
            </a>
            <a href="#" className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
              <span>Settings</span>
            </a>
          </nav>
        </div>

        {/* Main Content */}
        <div className="ml-64 flex-1 p-8">
          <div className="max-w-4xl">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-2xl font-semibold mb-1">Hello Samantha!</h1>
                <p className="text-gray-400">Thursday, 08 July</p>
              </div>
              <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <ChartLineUp className="h-5 w-5" />
              </button>
            </div>

            <Card className="bg-accent-peach/10 border-none p-6 mb-8">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm mb-2">Your Available points</p>
                  <p className="text-4xl font-bold">8918 <span className="text-sm font-normal">pts.</span></p>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-6 w-6 text-yellow-500" />
                  <span>25/50 pts</span>
                </div>
              </div>
            </Card>

            <div className="grid grid-cols-2 gap-8">
              <Card className="bg-white/5 border-none p-6">
                <h3 className="font-semibold mb-4">BMI</h3>
                <div className="text-2xl font-bold text-green-400 mb-2">24.0 <span className="text-sm font-normal">(Normal)</span></div>
                <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full w-1/2 bg-gradient-to-r from-green-400 to-green-500" />
                </div>
              </Card>

              <Card className="bg-accent-mint/10 border-none p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Relax Sounds</h3>
                  <PlayCircle className="h-8 w-8" />
                </div>
                <p className="text-sm text-gray-400">Sometimes the most productive thing you can do is relax.</p>
                <button className="mt-4 px-4 py-2 bg-white/10 rounded-full text-sm hover:bg-white/20 transition-colors">
                  play now
                </button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
