
import { useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, User, DollarSign, CreditCard } from "lucide-react";

const RechargeForm = () => {
  const { siteId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const siteName = location.state?.siteName || "Gaming Site";
  
  const [userId, setUserId] = useState("");
  const [amount, setAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const quickAmounts = [500, 1000, 2500, 5000, 10000, 25000];

  const handleProceed = async () => {
    if (!userId || !amount) {
      return;
    }
    
    setIsLoading(true);
    
    // Simulate processing time
    setTimeout(() => {
      navigate("/success", { 
        state: { 
          siteName, 
          userId, 
          amount: parseFloat(amount).toLocaleString('en-IN'),
          siteId 
        } 
      });
    }, 2000);
  };

  const handleQuickAmount = (quickAmount: number) => {
    setAmount(quickAmount.toString());
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 py-8">
      <div className="container mx-auto px-4 max-w-2xl">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={() => navigate("/")}
          className="mb-6 text-gray-600 hover:text-gray-800"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Sites
        </Button>

        <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center pb-6">
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-purple-400 to-blue-500 flex items-center justify-center mb-4">
              <CreditCard className="w-10 h-10 text-white" />
            </div>
            <CardTitle className="text-3xl font-bold text-gray-800">
              Recharge {siteName}
            </CardTitle>
            <CardDescription className="text-lg text-gray-600">
              Enter your details to complete the recharge
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* User ID Input */}
            <div className="space-y-2">
              <Label htmlFor="userId" className="text-sm font-semibold text-gray-700 flex items-center">
                <User className="w-4 h-4 mr-2" />
                User ID
              </Label>
              <Input
                id="userId"
                type="text"
                placeholder="Enter your user ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                className="h-12 text-lg border-gray-200 focus:border-purple-500 focus:ring-purple-500"
              />
            </div>

            {/* Amount Input */}
            <div className="space-y-2">
              <Label htmlFor="amount" className="text-sm font-semibold text-gray-700 flex items-center">
                <DollarSign className="w-4 h-4 mr-2" />
                Recharge Amount (₹)
              </Label>
              <Input
                id="amount"
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="h-12 text-lg border-gray-200 focus:border-purple-500 focus:ring-purple-500"
              />
            </div>

            {/* Quick Amount Buttons */}
            <div className="space-y-2">
              <Label className="text-sm font-semibold text-gray-700">Quick Amounts</Label>
              <div className="grid grid-cols-3 gap-3">
                {quickAmounts.map((quickAmount) => (
                  <Button
                    key={quickAmount}
                    variant="outline"
                    onClick={() => handleQuickAmount(quickAmount)}
                    className="h-12 text-sm font-medium border-gray-200 hover:border-purple-500 hover:text-purple-600 transition-colors"
                  >
                    ₹{quickAmount.toLocaleString('en-IN')}
                  </Button>
                ))}
              </div>
            </div>

            {/* Proceed Button */}
            <Button
              onClick={handleProceed}
              disabled={!userId || !amount || isLoading}
              className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 transition-all duration-300 disabled:opacity-50"
            >
              {isLoading ? (
                <div className="flex items-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Processing...
                </div>
              ) : (
                "Proceed to Recharge"
              )}
            </Button>

            {/* Security Note */}
            <div className="text-center text-sm text-gray-500 bg-gray-50 p-4 rounded-lg">
              🔒 This is a demo application. No real transactions are processed.
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RechargeForm;
