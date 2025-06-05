
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Coins, TrendingUp, Star, Zap, Crown, Diamond } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const gamblingSites = [
    {
      id: "stake",
      name: "Stake",
      description: "World's leading crypto casino",
      icon: Coins,
      gradient: "from-green-400 to-blue-500",
      bgColor: "bg-gradient-to-br from-green-50 to-blue-50"
    },
    {
      id: "91club",
      name: "91 Club",
      description: "Premium gaming experience",
      icon: Crown,
      gradient: "from-purple-400 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50"
    },
    {
      id: "tc-lottery",
      name: "TC Lottery",
      description: "Win big with lottery games",
      icon: Star,
      gradient: "from-yellow-400 to-orange-500",
      bgColor: "bg-gradient-to-br from-yellow-50 to-orange-50"
    },
    {
      id: "betway",
      name: "Betway",
      description: "Sports betting & casino",
      icon: TrendingUp,
      gradient: "from-red-400 to-pink-500",
      bgColor: "bg-gradient-to-br from-red-50 to-pink-50"
    },
    {
      id: "1xbet",
      name: "1xBet",
      description: "Global betting platform",
      icon: Zap,
      gradient: "from-blue-400 to-indigo-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50"
    },
    {
      id: "royal-casino",
      name: "Royal Casino",
      description: "Luxury gaming destination",
      icon: Diamond,
      gradient: "from-indigo-400 to-purple-500",
      bgColor: "bg-gradient-to-br from-indigo-50 to-purple-50"
    }
  ];

  const handleSiteSelect = (siteId: string, siteName: string) => {
    navigate(`/recharge/${siteId}`, { state: { siteName } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Gaming Recharge Hub
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Quick and secure recharge for your favorite gaming platforms
          </p>
        </div>

        {/* Sites Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {gamblingSites.map((site) => {
            const IconComponent = site.icon;
            return (
              <Card 
                key={site.id} 
                className={`${site.bgColor} border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group`}
                onClick={() => handleSiteSelect(site.id, site.name)}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${site.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-800">
                    {site.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-base">
                    {site.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0 pb-6">
                  <Button 
                    className={`w-full bg-gradient-to-r ${site.gradient} hover:opacity-90 text-white font-semibold py-3 rounded-lg transition-all duration-300 group-hover:shadow-lg`}
                  >
                    Recharge Now
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Features */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Instant Recharge</h3>
              <p className="text-gray-600">Lightning fast processing in seconds</p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Secure Platform</h3>
              <p className="text-gray-600">Your transactions are protected</p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round the clock assistance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
