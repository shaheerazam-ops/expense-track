import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Wallet } from "lucide-react";

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/dashboard");
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="fixed inset-0 bg-gradient-primary flex items-center justify-center">
      <div className="text-center animate-scale-in">
        <div className="relative">
          <div className="absolute inset-0 bg-white/20 blur-3xl rounded-full animate-pulse" />
          <div className="relative bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 shadow-soft">
            <Wallet className="w-24 h-24 text-white mx-auto mb-4" strokeWidth={1.5} />
            <h1 className="text-4xl font-bold text-white mb-2">Expense Tracker</h1>
            <p className="text-white/90 text-sm">Track. Save. Succeed.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Splash;
