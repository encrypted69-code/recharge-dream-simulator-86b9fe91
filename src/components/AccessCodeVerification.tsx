
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock, Unlock, ExternalLink, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface AccessCodeVerificationProps {
  onAccessGranted: () => void;
}

const AccessCodeVerification = ({ onAccessGranted }: AccessCodeVerificationProps) => {
  const [accessCode, setAccessCode] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const { toast } = useToast();

  // Valid access codes
  const validCodes = [
    "CRYPTO2024",
    "VEGAS777",
    "GOLDEN888",
    "DIAMOND999",
    "PREMIUM666",
    "ROYAL2024",
    "JACKPOT555",
    "LUCKY2024",
    "MEGA2024",
    "SUPER2024"
  ];

  const handleVerifyCode = () => {
    setIsVerifying(true);
    
    setTimeout(() => {
      if (validCodes.includes(accessCode.toUpperCase())) {
        toast({
          title: "Access Granted! 🎉",
          description: "Welcome to Encrypted Recharge Hub!",
        });
        onAccessGranted();
      } else {
        toast({
          title: "Invalid Access Code",
          description: "Please check your code and try again.",
          variant: "destructive",
        });
      }
      setIsVerifying(false);
    }, 1500);
  };

  const handleGetAccessKey = () => {
    window.open("https://telegram.me/encryptedxyz", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-blue-900 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2760%27 height=%2760%27 viewBox=%270 0 60 60%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg fill=%27none%27 fill-rule=%27evenodd%27%3E%3Cg fill=%27%23ffd700%27 fill-opacity=%270.1%27%3E%3Ccircle cx=%2730%27 cy=%2730%27 r=%272%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
      
      <Card className="w-full max-w-md bg-gradient-to-br from-gray-900/95 to-black/95 border-2 border-yellow-400 shadow-2xl backdrop-blur-sm">
        <CardHeader className="text-center pb-6">
          <div className="mb-4">
            <Lock className="w-16 h-16 mx-auto text-yellow-400 animate-bounce" />
          </div>
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            🎰 ENCRYPTED ACCESS 🎰
          </CardTitle>
          <p className="text-gray-300 mt-2">
            Enter your exclusive access code to continue
          </p>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="relative">
              <Input
                type="text"
                placeholder="Enter Access Code"
                value={accessCode}
                onChange={(e) => setAccessCode(e.target.value)}
                className="bg-gray-800/50 border-yellow-400/50 text-white placeholder-gray-400 text-center text-lg font-mono tracking-wider focus:border-yellow-400 focus:ring-yellow-400"
                onKeyPress={(e) => e.key === 'Enter' && handleVerifyCode()}
              />
              <Sparkles className="absolute right-3 top-3 w-5 h-5 text-yellow-400 animate-pulse" />
            </div>
            
            <Button
              onClick={handleVerifyCode}
              disabled={!accessCode || isVerifying}
              className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold py-3 text-lg transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              {isVerifying ? (
                <div className="flex items-center">
                  <div className="animate-spin w-5 h-5 border-2 border-black border-t-transparent rounded-full mr-2"></div>
                  Verifying...
                </div>
              ) : (
                <>
                  <Unlock className="w-5 h-5 mr-2" />
                  Enter Encrypted Hub
                </>
              )}
            </Button>

            <Button
              onClick={handleGetAccessKey}
              variant="outline"
              className="w-full border-purple-500 text-purple-300 hover:bg-purple-900/50 hover:text-white transition-all duration-300"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Get Your Access Key
            </Button>
          </div>

          <div className="text-center text-xs text-gray-400 space-y-1">
            <p className="animate-pulse">🔒 Secure • Encrypted • Exclusive 🔒</p>
            <p>Join our Telegram for instant access codes</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AccessCodeVerification;
