
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Coins, TrendingUp, Star, Zap, Crown, Diamond, Sparkles } from "lucide-react";
import TelegramPopup from "@/components/TelegramPopup";

const Index = () => {
  const navigate = useNavigate();
  const [showTelegramPopup, setShowTelegramPopup] = useState(false);

  useEffect(() => {
    // Show telegram popup after 2 seconds
    const timer = setTimeout(() => {
      setShowTelegramPopup(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const gamblingSites = [
    {
      id: "stake",
      name: "Stake",
      description: "World's leading crypto casino",
      icon: Coins,
      gradient: "from-green-400 to-emerald-600",
      bgColor: "bg-gradient-to-br from-green-900/20 to-emerald-900/20",
      borderColor: "border-green-400/30"
    },
    {
      id: "91club",
      name: "91 Club",
      description: "Premium gaming experience",
      icon: Crown,
      gradient: "from-purple-400 to-violet-600",
      bgColor: "bg-gradient-to-br from-purple-900/20 to-violet-900/20",
      borderColor: "border-purple-400/30"
    },
    {
      id: "tc-lottery",
      name: "TC Lottery",
      description: "Win big with lottery games",
      icon: Star,
      gradient: "from-yellow-400 to-orange-600",
      bgColor: "bg-gradient-to-br from-yellow-900/20 to-orange-900/20",
      borderColor: "border-yellow-400/30"
    },
    {
      id: "betway",
      name: "Betway",
      description: "Sports betting & casino",
      icon: TrendingUp,
      gradient: "from-red-400 to-pink-600",
      bgColor: "bg-gradient-to-br from-red-900/20 to-pink-900/20",
      borderColor: "border-red-400/30"
    },
    {
      id: "1xbet",
      name: "1xBet",
      description: "Global betting platform",
      icon: Zap,
      gradient: "from-blue-400 to-cyan-600",
      bgColor: "bg-gradient-to-br from-blue-900/20 to-cyan-900/20",
      borderColor: "border-blue-400/30"
    },
    {
      id: "royal-casino",
      name: "Royal Casino",
      description: "Luxury gaming destination",
      icon: Diamond,
      gradient: "from-indigo-400 to-purple-600",
      bgColor: "bg-gradient-to-br from-indigo-900/20 to-purple-900/20",
      borderColor: "border-indigo-400/30"
    }
  ];

  const handleSiteSelect = (siteId: string, siteName: string) => {
    navigate(`/recharge/${siteId}`, { state: { siteName } });
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-blue-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffd700" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
        
        <div className="container mx-auto px-4 py-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="mb-6">
              <h1 className="text-6xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent mb-4 animate-pulse">
                🎰 ENCRYPTED RECHARGE HUB 🎰
              </h1>
              <div className="flex justify-center items-center space-x-2 mb-4">
                <Sparkles className="w-6 h-6 text-yellow-400 animate-bounce" />
                <p className="text-xl text-gray-300 font-semibold">
                  Premium • Secure • Exclusive Gaming Experience
                </p>
                <Sparkles className="w-6 h-6 text-yellow-400 animate-bounce" />
              </div>
            </div>
          </div>

          {/* Sites Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
            {gamblingSites.map((site, index) => {
              const IconComponent = site.icon;
              return (
                <Card 
                  key={site.id} 
                  className={`${site.bgColor} ${site.borderColor} border-2 shadow-2xl hover:shadow-yellow-400/20 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 cursor-pointer group backdrop-blur-sm`}
                  onClick={() => handleSiteSelect(site.id, site.name)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="text-center pb-4">
                    <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-r ${site.gradient} flex items-center justify-center mb-4 group-hover:animate-spin transition-all duration-300 shadow-lg`}>
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
                      {site.name}
                    </CardTitle>
                    <CardDescription className="text-gray-300 text-base">
                      {site.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0 pb-6">
                    <Button 
                      className={`w-full bg-gradient-to-r ${site.gradient} hover:shadow-xl hover:shadow-yellow-400/30 text-white font-bold py-4 rounded-lg transition-all duration-300 group-hover:scale-105 text-lg`}
                    >
                      🎯 Recharge Now 🎯
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Features */}
          <div className="mt-16 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="p-6 bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-xl border border-green-400/30 backdrop-blur-sm">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">⚡ Lightning Recharge</h3>
                <p className="text-gray-300">Instant processing in seconds</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-xl border border-blue-400/30 backdrop-blur-sm">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">🔒 Encrypted Security</h3>
                <p className="text-gray-300">Military-grade protection</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-purple-900/30 to-violet-900/30 rounded-xl border border-purple-400/30 backdrop-blur-sm">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-violet-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                  <Crown className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">👑 VIP Support</h3>
                <p className="text-gray-300">24/7 premium assistance</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <TelegramPopup 
        isOpen={showTelegramPopup} 
        onClose={() => setShowTelegramPopup(false)} 
      />
    </>
  );
};

export default Index;
