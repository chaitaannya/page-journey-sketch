
import { Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { ChartLine, Award, PlayCircle } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  const weightData = [
    { date: '20', weight: 64.4 },
    { date: '25', weight: 63.8 },
    { date: '1', weight: 63.4 },
  ];

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

            <Card className="bg-gradient-to-r from-pink-500/10 to-rose-500/10 border-none p-6 mb-8">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm mb-2">Your Available points</p>
                  <p className="text-4xl font-bold">0 <span className="text-sm font-normal">pts.</span></p>
                  <div className="mt-4 bg-white/10 rounded-full h-2 w-48">
                    <div className="bg-gradient-to-r from-pink-500 to-rose-500 h-full rounded-full w-0" />
                  </div>
                  <p className="text-xs text-gray-400 mt-2">Complete exercises to earn points!</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-6 w-6 text-yellow-500" />
                  <span>0/50 pts</span>
                </div>
              </div>
            </Card>

            <div className="grid grid-cols-2 gap-8 mb-8">
              <Card className="bg-white/5 border-none p-6">
                <h3 className="font-semibold mb-6">Weight (kg)</h3>
                <div className="grid grid-cols-3 mb-6">
                  <div>
                    <p className="text-sm text-gray-400">Current weight</p>
                    <p className="text-2xl font-bold text-blue-500">64.4</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Last 30 days</p>
                    <p className="text-2xl font-bold text-green-500">-0.6</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Annual average</p>
                    <p className="text-2xl font-bold text-blue-500">64.6</p>
                  </div>
                </div>
                <div className="h-40">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={weightData}>
                      <defs>
                        <linearGradient id="weightGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#22c55e" stopOpacity={0.3}/>
                          <stop offset="100%" stopColor="#22c55e" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                      <XAxis dataKey="date" stroke="#666" />
                      <YAxis stroke="#666" domain={['dataMin - 1', 'dataMax + 1']} />
                      <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', borderColor: '#333' }} />
                      <Area 
                        type="monotone" 
                        dataKey="weight" 
                        stroke="#22c55e" 
                        fill="url(#weightGradient)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-xs text-gray-400 mt-2">Goal: 50.0 kg</p>
              </Card>

              <Card className="bg-white/5 border-none p-6">
                <h3 className="font-semibold mb-4">BMI Status</h3>
                <div className="text-2xl font-bold text-green-400 mb-4">24.0 <span className="text-sm font-normal">(Normal)</span></div>
                <div className="relative h-2 bg-gray-700 rounded-full mb-4">
                  <div className="absolute left-0 h-full w-[40%] bg-blue-500 rounded-full" />
                  <div className="absolute left-[40%] h-full w-[20%] bg-green-500 rounded-full" />
                  <div className="absolute left-[60%] h-full w-[20%] bg-yellow-500 rounded-full" />
                  <div className="absolute left-[80%] h-full w-[20%] bg-red-500 rounded-full" />
                  <div className="absolute left-[48%] top-[-4px] h-4 w-4 bg-white rounded-full border-2 border-green-500" />
                </div>
                <div className="flex justify-between text-xs text-gray-400">
                  <span>18.5</span>
                  <span>25.0</span>
                  <span>30.0</span>
                </div>
                <p className="text-sm text-gray-400 mt-4">
                  BMI: weight (kg)/height (m)². You can't judge if you're "obese" just by BMI value.
                </p>
              </Card>
            </div>

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
  );
};

export default Dashboard;
