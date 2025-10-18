import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Camera, Settings, Grid3x3, BookmarkIcon, TrendingUp } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Profile = () => {
  const stats = [
    { label: "Transactions", value: "342" },
    { label: "Categories", value: "8" },
    { label: "Saved", value: "$2,450" },
  ];

  const recentTransactions = [
    { id: 1, amount: "$45.99", category: "Food", date: "Oct 18" },
    { id: 2, amount: "$120.00", category: "Transport", date: "Oct 17" },
    { id: 3, amount: "$89.50", category: "Shopping", date: "Oct 16" },
    { id: 4, amount: "$210.00", category: "Utilities", date: "Oct 15" },
    { id: 5, amount: "$55.20", category: "Entertainment", date: "Oct 14" },
    { id: 6, amount: "$95.00", category: "Healthcare", date: "Oct 13" },
  ];

  return (
    <div className="min-h-screen bg-gradient-light pb-24">
      {/* Header with Cover Photo Effect */}
      <div className="relative">
        <div className="h-32 bg-gradient-primary" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2">
          <div className="relative">
            <Avatar className="w-24 h-24 border-4 border-background shadow-soft">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=User" />
              <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
                JD
              </AvatarFallback>
            </Avatar>
            <Button
              size="icon"
              className="absolute bottom-0 right-0 rounded-full w-8 h-8 bg-primary hover:bg-primary-dark"
            >
              <Camera className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Profile Info */}
      <div className="pt-16 px-4 text-center animate-fade-in">
        <h1 className="text-2xl font-bold text-foreground mb-1">John Doe</h1>
        <p className="text-muted-foreground mb-4">john.doe@email.com</p>
        
        <div className="flex justify-center gap-2 mb-6">
          <Button className="bg-gradient-primary hover:opacity-90">
            Edit Profile
          </Button>
          <Button variant="outline">
            <Settings className="w-4 h-4" />
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {stats.map((stat) => (
            <Card key={stat.label} className="shadow-card">
              <CardContent className="p-4 text-center">
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Tabs Section */}
      <div className="px-4 animate-slide-up">
        <Tabs defaultValue="grid" className="w-full">
          <TabsList className="w-full grid grid-cols-3 mb-4">
            <TabsTrigger value="grid">
              <Grid3x3 className="w-4 h-4" />
            </TabsTrigger>
            <TabsTrigger value="saved">
              <BookmarkIcon className="w-4 h-4" />
            </TabsTrigger>
            <TabsTrigger value="analytics">
              <TrendingUp className="w-4 h-4" />
            </TabsTrigger>
          </TabsList>

          <TabsContent value="grid" className="space-y-3">
            <h3 className="text-sm font-semibold text-muted-foreground mb-3">
              Recent Transactions
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {recentTransactions.map((transaction) => (
                <Card 
                  key={transaction.id} 
                  className="shadow-card hover:shadow-soft transition-shadow cursor-pointer aspect-square"
                >
                  <CardContent className="p-3 h-full flex flex-col justify-between">
                    <div className="text-xs text-muted-foreground text-left">
                      {transaction.date}
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-bold text-foreground">
                        {transaction.amount}
                      </p>
                      <p className="text-xs text-primary">{transaction.category}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="saved">
            <Card className="shadow-card">
              <CardContent className="p-12 text-center">
                <BookmarkIcon className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                <p className="text-muted-foreground">No saved items yet</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <Card className="shadow-card">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Spending Insights</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">This Month</span>
                      <span className="font-semibold">$2,400</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '80%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Budget Goal</span>
                      <span className="font-semibold">$3,000</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div className="bg-primary-light h-2 rounded-full" style={{ width: '60%' }} />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;
