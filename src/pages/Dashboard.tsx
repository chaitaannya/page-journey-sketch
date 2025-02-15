
import { Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { ChartLine, Award, PlayCircle } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  const bmiData = [
    { month: 'Jan', bmi: 25.2 },
    { month: 'Feb', bmi: 24.8 },
    { month: 'Mar', bmi: 24.5 },
    { month: 'Apr', bmi: 24.2 },
    { month: 'May', bmi: 24.0 },
    { month: 'Jun', bmi: 24.0 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-[#1a1a1a] to-gray-900 text-white">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 h-screen p-6 flex flex-col fixed backdrop-blur-xl bg-black/30">
          <div className="flex items-center space-x-3 mb-12">
            <Avatar className="h-12 w-12">
              <img src="/lovable-uploads/f3a0f1de-a128-427a-abc4-eb2dfed0e901.png" alt="Samantha" />
            </Avatar>
            <div>
              <h2 className="font-semibold">Samantha</h2>
              <div className="h-2 w-2 bg-green-500 rounded-full absolute top-2 right-2" />
            </div>
          </div>

          <nav className="space-y-6">
            <a href="#" className="flex items-center space-x-3 text-white">
              <span>Home</span>
            </a>
            <a href="#" className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
              <span>Asanas</span>
            </a>
            <a href="#" className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
              <span>Week Plan</span>
            </a>
            <a href="#" className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
              <span>Meditation</span>
            </a>
            <a href="#" className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
              <span>Diet Plan</span>
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
                <ChartLine className="h-5 w-5" />
              </button>
            </div>

            <Card className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-none p-6 mb-8">
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
                <h3 className="font-semibold mb-4">BMI Progress</h3>
                <div className="text-2xl font-bold text-green-400 mb-4">24.0 <span className="text-sm font-normal">(Normal)</span></div>
                <div className="h-40">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={bmiData}>
                      <defs>
                        <linearGradient id="bmiGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#10B981" stopOpacity={0.8}/>
                          <stop offset="100%" stopColor="#10B981" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                      <XAxis dataKey="month" stroke="#666" />
                      <YAxis stroke="#666" />
                      <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', borderColor: '#333' }} />
                      <Area 
                        type="monotone" 
                        dataKey="bmi" 
                        stroke="#10B981" 
                        fill="url(#bmiGradient)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </Card>

              <Card className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border-none p-6">
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
