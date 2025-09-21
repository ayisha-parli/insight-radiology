import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, AlertTriangle, CheckCircle, XCircle, Eye } from "lucide-react";
import StepIndicator from "@/components/StepIndicator";

const AIFindings = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const findings = [
    {
      id: 1,
      anomaly: "Pulmonary Nodule",
      location: "Right Upper Lobe",
      confidence: 0.94,
      severity: "moderate",
      description: "Small pulmonary nodule detected in the right upper lobe measuring approximately 8mm",
      coordinates: { x: 234, y: 156 }
    },
    {
      id: 2,
      anomaly: "Pleural Thickening", 
      location: "Left Pleural Space",
      confidence: 0.87,
      severity: "mild",
      description: "Mild pleural thickening observed along the left pleural border",
      coordinates: { x: 178, y: 203 }
    },
    {
      id: 3,
      anomaly: "Pneumonia Indicators",
      location: "Right Lower Lobe",
      confidence: 0.76,
      severity: "high", 
      description: "Possible pneumonia indicators with increased opacity in right lower lobe",
      coordinates: { x: 267, y: 289 }
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'critical';
      case 'moderate': return 'warning';
      case 'mild': return 'success';
      default: return 'secondary';
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'high': return XCircle;
      case 'moderate': return AlertTriangle;
      case 'mild': return CheckCircle;
      default: return CheckCircle;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-primary/10">
      <div className="container mx-auto p-6">
        {/* Header */}
        <div className="flex items-center mb-6">
          <Button
            variant="ghost"
            onClick={() => navigate(`/analysis/${id}`)}
            className="mr-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Analysis
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-foreground">AI Findings</h1>
            <p className="text-muted-foreground">Detected anomalies and confidence scores</p>
          </div>
        </div>

        {/* Step Indicator */}
        <StepIndicator currentStep={3} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Findings List */}
          <Card className="lg:col-span-2 p-6 bg-glass-card backdrop-blur-md border-glass-border shadow-glass">
            <h3 className="text-xl font-semibold text-foreground mb-6">Detected Anomalies</h3>
            
            <div className="space-y-4">
              {findings.map((finding, index) => {
                const SeverityIcon = getSeverityIcon(finding.severity);
                const severityColor = getSeverityColor(finding.severity);
                
                return (
                  <Card 
                    key={finding.id}
                    className="p-4 bg-gradient-glass border border-glass-border hover:shadow-card transition-all duration-200 animate-slide-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <SeverityIcon className={`h-5 w-5 text-${severityColor}`} />
                        <div>
                          <h4 className="font-semibold text-foreground">{finding.anomaly}</h4>
                          <p className="text-sm text-muted-foreground">{finding.location}</p>
                        </div>
                      </div>
                <Badge variant={severityColor as any} className="text-xs">
                        {finding.severity}
                      </Badge>
                    </div>
                    
                    <p className="text-sm text-foreground mb-3">{finding.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div>
                          <span className="text-xs text-muted-foreground">Confidence</span>
                          <div className="flex items-center space-x-2">
                            <div className="w-20 bg-muted rounded-full h-2">
                              <div 
                                className="bg-gradient-medical h-2 rounded-full transition-all duration-300"
                                style={{ width: `${finding.confidence * 100}%` }}
                              ></div>
                            </div>
                            <span className="text-sm font-medium text-foreground">
                              {(finding.confidence * 100).toFixed(1)}%
                            </span>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-2" />
                        View on Image
                      </Button>
                    </div>
                  </Card>
                );
              })}
            </div>
          </Card>

          {/* Analysis Summary */}
          <div className="space-y-6">
            <Card className="p-6 bg-glass-card backdrop-blur-md border-glass-border shadow-glass">
              <h3 className="text-lg font-semibold text-foreground mb-4">Analysis Summary</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Total Findings</span>
                  <span className="font-semibold text-foreground">{findings.length}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">High Priority</span>
                  <span className="font-semibold text-critical">
                    {findings.filter(f => f.severity === 'high').length}
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Average Confidence</span>
                  <span className="font-semibold text-foreground">
                    {(findings.reduce((acc, f) => acc + f.confidence, 0) / findings.length * 100).toFixed(1)}%
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Analysis Time</span>
                  <span className="font-semibold text-foreground">2.3s</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-glass-card backdrop-blur-md border-glass-border shadow-glass">
              <h3 className="text-lg font-semibold text-foreground mb-4">Next Steps</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Review detailed analysis and clinical recommendations for each finding.
              </p>
              <Button 
                onClick={() => navigate(`/detailed/${id}`)}
                className="w-full"
                variant="medical"
              >
                View Detailed Analysis
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIFindings;