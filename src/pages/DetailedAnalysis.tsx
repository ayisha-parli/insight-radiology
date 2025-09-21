import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, BookOpen, Stethoscope, Calendar, FileText } from "lucide-react";
import StepIndicator from "@/components/StepIndicator";

const DetailedAnalysis = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const detailedFindings = [
    {
      id: 1,
      anomaly: "Pulmonary Nodule",
      explanation: "The detected nodule exhibits characteristics consistent with a benign granuloma. The smooth, well-defined borders and calcification patterns suggest inflammatory origin rather than malignancy.",
      clinicalSignificance: "Requires monitoring with follow-up imaging in 3-6 months to assess for growth or changes in morphology.",
      recommendations: [
        "Follow-up CT scan in 3 months",
        "Consider PET scan if growth detected",
        "Review patient smoking history",
        "Pulmonology consultation recommended"
      ],
      severity: "moderate"
    },
    {
      id: 2,
      anomaly: "Pleural Thickening",
      explanation: "Focal pleural thickening observed along the left pleural surface. The pattern suggests possible asbestos-related pleural disease or post-inflammatory changes.",
      clinicalSignificance: "Generally benign but requires correlation with occupational history and clinical symptoms.",
      recommendations: [
        "Occupational exposure history review",
        "Pulmonary function tests",
        "Annual follow-up imaging",
        "Symptom monitoring for dyspnea"
      ],
      severity: "mild"
    },
    {
      id: 3,
      anomaly: "Pneumonia Indicators",
      explanation: "Consolidation pattern in the right lower lobe with air bronchograms suggests bacterial pneumonia. The distribution and density are consistent with community-acquired pneumonia.",
      clinicalSignificance: "Active infection requiring immediate antibiotic therapy and close monitoring.",
      recommendations: [
        "Immediate antibiotic therapy",
        "Blood cultures and sputum analysis",
        "Follow-up chest X-ray in 48-72 hours",
        "Hospital admission consideration"
      ],
      severity: "high"
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-primary/10">
      <div className="container mx-auto p-6">
        {/* Header */}
        <div className="flex items-center mb-6">
          <Button
            variant="ghost"
            onClick={() => navigate(`/findings/${id}`)}
            className="mr-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Findings
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Detailed Analysis</h1>
            <p className="text-muted-foreground">Explainable AI insights and clinical recommendations</p>
          </div>
        </div>

        {/* Step Indicator */}
        <StepIndicator currentStep={4} />

        <div className="space-y-6">
          {detailedFindings.map((finding, index) => (
            <Card 
              key={finding.id}
              className="p-6 bg-glass-card backdrop-blur-md border-glass-border shadow-glass animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-semibold text-foreground">{finding.anomaly}</h3>
                <Badge variant={getSeverityColor(finding.severity) as any}>
                  {finding.severity} priority
                </Badge>
              </div>

              <Tabs defaultValue="explanation" className="w-full">
                <TabsList className="grid w-full grid-cols-4 mb-6">
                  <TabsTrigger value="explanation" className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Explanation
                  </TabsTrigger>
                  <TabsTrigger value="clinical" className="flex items-center">
                    <Stethoscope className="h-4 w-4 mr-2" />
                    Clinical
                  </TabsTrigger>
                  <TabsTrigger value="recommendations" className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    Actions
                  </TabsTrigger>
                  <TabsTrigger value="references" className="flex items-center">
                    <FileText className="h-4 w-4 mr-2" />
                    References
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="explanation" className="space-y-4">
                  <div className="bg-gradient-glass rounded-lg p-4 border border-glass-border">
                    <h4 className="font-semibold text-foreground mb-2">AI Explanation</h4>
                    <p className="text-foreground leading-relaxed">{finding.explanation}</p>
                  </div>
                </TabsContent>

                <TabsContent value="clinical" className="space-y-4">
                  <div className="bg-gradient-glass rounded-lg p-4 border border-glass-border">
                    <h4 className="font-semibold text-foreground mb-2">Clinical Significance</h4>
                    <p className="text-foreground leading-relaxed">{finding.clinicalSignificance}</p>
                  </div>
                </TabsContent>

                <TabsContent value="recommendations" className="space-y-4">
                  <div className="bg-gradient-glass rounded-lg p-4 border border-glass-border">
                    <h4 className="font-semibold text-foreground mb-3">Recommended Actions</h4>
                    <ul className="space-y-2">
                      {finding.recommendations.map((rec, i) => (
                        <li key={i} className="flex items-start">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-foreground">{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TabsContent>

                <TabsContent value="references" className="space-y-4">
                  <div className="bg-gradient-glass rounded-lg p-4 border border-glass-border">
                    <h4 className="font-semibold text-foreground mb-3">Clinical References</h4>
                    <div className="space-y-2 text-sm">
                      <p className="text-muted-foreground">• Fleischner Society Guidelines for Management of Solid Nodules</p>
                      <p className="text-muted-foreground">• American College of Radiology - Lung CT Screening Reporting</p>
                      <p className="text-muted-foreground">• Chest Imaging Guidelines - Community Acquired Pneumonia</p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </Card>
          ))}
        </div>

        {/* Action Buttons */}
        <Card className="p-6 bg-glass-card backdrop-blur-md border-glass-border shadow-glass mt-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Analysis Complete</h3>
              <p className="text-muted-foreground">
                Ready to generate comprehensive radiology report with all findings and recommendations.
              </p>
            </div>
            <Button 
              onClick={() => navigate(`/report/${id}`)}
              size="lg"
              variant="medical"
            >
              <FileText className="h-4 w-4 mr-2" />
              Generate Report
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DetailedAnalysis;