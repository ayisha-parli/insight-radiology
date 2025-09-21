import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, User, FileText, AlertTriangle } from "lucide-react";
import StepIndicator from "@/components/StepIndicator";

const PatientOverview = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const patientData = {
    id: id,
    name: "John Anderson",
    age: 45,
    gender: "Male",
    dob: "1978-06-15",
    studyType: "Chest X-Ray",
    studyDate: "2024-01-15",
    clinicalIndication: "Persistent cough, shortness of breath",
    priorStudies: 2,
    allergies: ["Contrast medium"],
    currentMedications: ["Lisinopril", "Metformin"],
    referringPhysician: "Dr. Sarah Williams",
    department: "Pulmonology"
  };

  const patientCards = [
    {
      title: "Patient Demographics",
      icon: User,
      items: [
        { label: "Name", value: patientData.name },
        { label: "Age", value: `${patientData.age} years` },
        { label: "Gender", value: patientData.gender },
        { label: "Date of Birth", value: patientData.dob }
      ]
    },
    {
      title: "Study Information", 
      icon: FileText,
      items: [
        { label: "Study Type", value: patientData.studyType },
        { label: "Study Date", value: patientData.studyDate },
        { label: "Referring Physician", value: patientData.referringPhysician },
        { label: "Department", value: patientData.department }
      ]
    },
    {
      title: "Clinical Details",
      icon: AlertTriangle,
      items: [
        { label: "Clinical Indication", value: patientData.clinicalIndication },
        { label: "Prior Studies", value: `${patientData.priorStudies} previous scans` },
        { label: "Allergies", value: patientData.allergies.join(", ") },
        { label: "Current Medications", value: patientData.currentMedications.join(", ") }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-primary/10">
      <div className="container mx-auto p-6">
        {/* Header */}
        <div className="flex items-center mb-6">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mr-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Patient Overview</h1>
            <p className="text-muted-foreground">Review patient information before analysis</p>
          </div>
        </div>

        {/* Step Indicator */}
        <StepIndicator currentStep={1} />

        {/* Patient Info Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {patientCards.map((card, index) => (
            <Card 
              key={card.title}
              className="p-6 bg-glass-card backdrop-blur-md border-glass-border shadow-glass animate-slide-up hover:shadow-card transition-all duration-200"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <card.icon className="h-5 w-5 text-primary mr-2" />
                <h3 className="font-semibold text-foreground">{card.title}</h3>
              </div>
              <div className="space-y-3">
                {card.items.map((item, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-sm text-muted-foreground">{item.label}</span>
                    <span className="font-medium text-foreground">{item.value}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Action Card */}
        <Card className="p-6 bg-glass-card backdrop-blur-md border-glass-border shadow-glass">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Ready for Image Analysis</h3>
              <p className="text-muted-foreground">
                Patient information verified. Proceed to upload and analyze medical images.
              </p>
            </div>
            <Button 
              onClick={() => navigate(`/analysis/${id}`)}
              size="lg"
              variant="medical"
            >
              <Calendar className="h-4 w-4 mr-2" />
              Start Analysis
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PatientOverview;