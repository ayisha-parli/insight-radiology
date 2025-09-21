import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Activity, Users, FileText, TrendingUp } from "lucide-react";
import heroImage from "@/assets/medical-hero.jpg";

const Dashboard = () => {
  const navigate = useNavigate();

  const mockPatients = [
    {
      id: "1",
      name: "John Anderson",
      age: 45,
      gender: "Male",
      studyType: "Chest X-Ray",
      studyDate: "2024-01-15",
      status: "pending",
      priority: "high"
    },
    {
      id: "2", 
      name: "Sarah Chen",
      age: 32,
      gender: "Female",
      studyType: "Brain MRI",
      studyDate: "2024-01-15",
      status: "completed",
      priority: "normal"
    },
    {
      id: "3",
      name: "Michael Roberts",
      age: 67,
      gender: "Male", 
      studyType: "Abdominal CT",
      studyDate: "2024-01-14",
      status: "pending",
      priority: "urgent"
    }
  ];

  const stats = [
    { label: "Active Studies", value: "24", icon: Activity, change: "+12%" },
    { label: "Patients Today", value: "156", icon: Users, change: "+8%" },
    { label: "Reports Generated", value: "89", icon: FileText, change: "+23%" },
    { label: "AI Accuracy", value: "94.2%", icon: TrendingUp, change: "+2.1%" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-primary/10">
      <div className="container mx-auto p-6">
        {/* Header */}
        <div className="relative mb-8 rounded-2xl overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
          <div className="relative p-8">
            <h1 className="text-5xl font-bold bg-gradient-medical bg-clip-text text-transparent mb-3">
              Medical Imaging Diagnosis Assistant
            </h1>
            <p className="text-muted-foreground text-xl max-w-2xl">
              AI-powered radiological analysis and reporting system for enhanced diagnostic accuracy
            </p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card 
              key={stat.label}
              className="p-6 bg-glass-card backdrop-blur-md border-glass-border shadow-glass animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-success">{stat.change}</p>
                </div>
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
            </Card>
          ))}
        </div>

        {/* Recent Studies */}
        <Card className="p-6 bg-glass-card backdrop-blur-md border-glass-border shadow-glass">
          <h2 className="text-2xl font-semibold mb-6 text-foreground">Recent Studies</h2>
          <div className="space-y-4">
            {mockPatients.map((patient, index) => (
              <div 
                key={patient.id}
                className="flex items-center justify-between p-4 rounded-lg bg-gradient-glass border border-glass-border hover:shadow-card transition-all duration-200 animate-slide-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-3 h-3 rounded-full ${
                    patient.priority === 'urgent' ? 'bg-critical animate-pulse-glow' : 
                    patient.priority === 'high' ? 'bg-warning' : 'bg-success'
                  }`} />
                  <div>
                    <h3 className="font-semibold text-foreground">{patient.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {patient.age}y • {patient.gender} • {patient.studyType}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="text-sm font-medium text-foreground">{patient.studyDate}</p>
                    <p className={`text-xs ${
                      patient.status === 'completed' ? 'text-success' : 'text-warning'
                    }`}>
                      {patient.status}
                    </p>
                  </div>
                  <Button 
                    onClick={() => navigate(`/patient/${patient.id}`)}
                    variant="medical"
                  >
                    Analyze
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;