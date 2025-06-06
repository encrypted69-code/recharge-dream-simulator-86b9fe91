
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink, Zap, Star } from "lucide-react";

interface TelegramPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const TelegramPopup = ({ isOpen, onClose }: TelegramPopupProps) => {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setShowAnimation(true), 100);
    } else {
      setShowAnimation(false);
    }
  }, [isOpen]);

  const handleJoinTelegram = () => {
    window.open("https://telegram.me/encryptedxyz", "_blank");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md bg-gradient-to-br from-purple-900 via-blue-900 to-black border-2 border-yellow-400 shadow-2xl">
        <DialogHeader className="text-center">
          <div className={`transition-all duration-1000 ${showAnimation ? 'scale-100 opacity-100 rotate-0' : 'scale-0 opacity-0 rotate-180'}`}>
            <div className="relative mb-4">
              <Zap className="w-16 h-16 mx-auto text-yellow-400 animate-pulse" />
              <Star className="w-8 h-8 absolute -top-2 -right-2 text-yellow-300 animate-spin" />
            </div>
          </div>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            🎰 VIP ACCESS REQUIRED! 🎰
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 text-center">
          <div className="bg-gradient-to-r from-purple-800/50 to-blue-800/50 p-4 rounded-lg border border-yellow-400/30">
            <h3 className="text-white font-semibold mb-2">Join Our Exclusive Community</h3>
            <p className="text-gray-300 text-sm">
              Get premium recharge deals, exclusive bonuses, and insider gaming tips!
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <Button
              onClick={handleJoinTelegram}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Join Telegram Channel
            </Button>
            
            <Button
              onClick={onClose}
              variant="outline"
              className="border-gray-400 text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-300"
            >
              Continue to App
            </Button>
          </div>

          <div className="text-xs text-gray-400 animate-pulse">
            ⚡ Limited time offer - Premium access awaits! ⚡
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TelegramPopup;
