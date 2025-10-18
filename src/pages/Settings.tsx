import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { 
  Bell, 
  Moon, 
  Lock, 
  Download, 
  Trash2, 
  ChevronRight,
  DollarSign,
  Globe,
  Shield
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Settings = () => {
  return (
    <div className="min-h-screen p-4 pb-24">
      <div className="mb-6 animate-fade-in">
        <h1 className="text-3xl font-bold text-foreground mb-2">Settings</h1>
        <p className="text-muted-foreground">Manage your app preferences</p>
      </div>

      <div className="space-y-4 animate-slide-up">
        {/* Notifications */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Bell className="w-4 h-4 text-primary" />
              </div>
              Notifications
            </CardTitle>
            <CardDescription>Manage your notification preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Bill Reminders</Label>
                <p className="text-sm text-muted-foreground">
                  Get notified before bills are due
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Budget Alerts</Label>
                <p className="text-sm text-muted-foreground">
                  Alert when approaching budget limit
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Daily Summary</Label>
                <p className="text-sm text-muted-foreground">
                  Receive daily expense summary
                </p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>

        {/* Appearance */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Moon className="w-4 h-4 text-primary" />
              </div>
              Appearance
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Dark Mode</Label>
                <p className="text-sm text-muted-foreground">
                  Toggle dark theme
                </p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>

        {/* Currency & Region */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Globe className="w-4 h-4 text-primary" />
              </div>
              Currency & Region
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="outline" className="w-full justify-between">
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4" />
                <span>Currency: USD ($)</span>
              </div>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </CardContent>
        </Card>

        {/* Security */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Shield className="w-4 h-4 text-primary" />
              </div>
              Security
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Biometric Authentication</Label>
                <p className="text-sm text-muted-foreground">
                  Use fingerprint or face ID
                </p>
              </div>
              <Switch />
            </div>
            <Separator />
            <Button variant="outline" className="w-full justify-between">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4" />
                <span>Change Password</span>
              </div>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </CardContent>
        </Card>

        {/* Data Management */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Download className="w-4 h-4 text-primary" />
              </div>
              Data Management
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="outline" className="w-full justify-between">
              <div className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                <span>Export Data (CSV)</span>
              </div>
              <ChevronRight className="w-4 h-4" />
            </Button>
            <Button variant="outline" className="w-full justify-between">
              <div className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                <span>Export Data (PDF)</span>
              </div>
              <ChevronRight className="w-4 h-4" />
            </Button>
            <Separator />
            <Button 
              variant="destructive" 
              className="w-full justify-start"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Clear All Data
            </Button>
          </CardContent>
        </Card>

        {/* About */}
        <Card className="shadow-card">
          <CardContent className="pt-6 text-center text-sm text-muted-foreground">
            <p>Expense Tracker v1.0.0</p>
            <p className="mt-1">© 2025 All rights reserved</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Settings;
