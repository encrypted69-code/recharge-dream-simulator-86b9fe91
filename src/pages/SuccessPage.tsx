
import { useLocation, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Home, RefreshCw } from "lucide-react";
import { useEffect, useState } from "react";

const SuccessPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showAnimation, setShowAnimation] = useState(false);
  
  const { siteName, userId, amount, siteId } = location.state || {};

  useEffect(() => {
    // Trigger animation after component mounts
    setTimeout(() => setShowAnimation(true), 100);
  }, []);

  const handleNewRecharge = () => {
    navigate(`/recharge/${siteId}`, { state: { siteName } });
  };

  const handleBackHome = () => {
    navigate("/");
  };

  // Generate a fake transaction ID
  const transactionId = `TXN${Date.now().toString().slice(-8)}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 py-8 flex items-center justify-center">
      <div className="container mx-auto px-4 max-w-2xl">
        <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm overflow-hidden">
          <CardHeader className="text-center pb-6 bg-gradient-to-r from-green-400 to-blue-500 text-white">
            <div className={`transition-all duration-1000 ${showAnimation ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
              <CheckCircle className="w-24 h-24 mx-auto mb-4 animate-bounce" />
            </div>
            <CardTitle className="text-3xl font-bold">
              Recharge Successful!
            </CardTitle>
            <p className="text-green-100 text-lg">
              Your transaction has been completed
            </p>
          </CardHeader>
          
          <CardContent className="p-8 space-y-6">
            {/* Transaction Details */}
            <div className="bg-gray-50 rounded-lg p-6 space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Transaction Details</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Platform</p>
                  <p className="text-lg font-semibold text-gray-800">{siteName}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">User ID</p>
                  <p className="text-lg font-semibold text-gray-800">{userId}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Amount</p>
                  <p className="text-lg font-semibold text-green-600">₹{amount}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Transaction ID</p>
                  <p className="text-lg font-semibold text-gray-800">{transactionId}</p>
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-500">Status</p>
                <div className="flex items-center mt-1">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <p className="text-lg font-semibold text-green-600">Completed</p>
                </div>
              </div>
            </div>

            {/* Success Message */}
            <div className="text-center bg-green-50 border border-green-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-green-800 mb-2">
                🎉 Congratulations!
              </h4>
              <p className="text-green-700">
                Your account has been credited with ₹{amount}. You can now enjoy gaming on {siteName}!
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={handleNewRecharge}
                className="flex-1 h-12 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold"
              >
                <RefreshCw className="w-5 h-5 mr-2" />
                New Recharge
              </Button>
              <Button
                onClick={handleBackHome}
                variant="outline"
                className="flex-1 h-12 border-gray-300 hover:border-gray-400"
              >
                <Home className="w-5 h-5 mr-2" />
                Back to Home
              </Button>
            </div>

            {/* Note */}
            <div className="text-center text-sm text-gray-500 bg-blue-50 p-4 rounded-lg border border-blue-200">
              💡 This is a simulation. No real money has been transferred.
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SuccessPage;
