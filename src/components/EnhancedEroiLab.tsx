import { useTranslation } from 'react-i18next';
import { useState, useMemo } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { ArrowRight, Calculator, TrendingUp, Lightbulb, BarChart3 } from "lucide-react";

const EnhancedEroiLab = () => {
  const { t } = useTranslation();
  
  // Enhanced state for more comprehensive calculations
  const [investment, setInvestment] = useState([100]);
  const [revenue, setRevenue] = useState([150]);
  const [emissions, setEmissions] = useState([1000]);
  const [carbonPrice, setCarbonPrice] = useState([800]);
  const [waterUsage, setWaterUsage] = useState([5000]);
  const [wasteGeneration, setWasteGeneration] = useState([500]);

  // Advanced EROI calculations with shadow pricing
  const calculations = useMemo(() => {
    const investmentValue = investment[0];
    const annualRevenue = revenue[0];
    const co2Emissions = emissions[0];
    const co2Price = carbonPrice[0];
    const water = waterUsage[0];
    const waste = wasteGeneration[0];

    // Shadow pricing for externalities
    const carbonCost = co2Emissions * co2Price;
    const waterCost = water * 15; // SEK per m³ shadow price
    const wasteCost = waste * 300; // SEK per ton shadow price
    
    const totalEnvironmentalCost = carbonCost + waterCost + wasteCost;
    const adjustedRevenue = annualRevenue - (totalEnvironmentalCost / 1000); // Convert to MSEK
    
    const eroi = adjustedRevenue / investmentValue;
    const paybackYears = investmentValue / Math.max(adjustedRevenue, 0.1);
    const npv = adjustedRevenue * 5 - investmentValue; // 5-year simplified NPV
    const irr = (Math.pow(adjustedRevenue / investmentValue, 1/5) - 1) * 100;
    const environmentalImpact = (totalEnvironmentalCost / (annualRevenue * 1000)) * 100;

    return {
      eroi: eroi.toFixed(2),
      paybackYears: paybackYears.toFixed(1),
      npv: npv.toFixed(1),
      irr: irr.toFixed(1),
      carbonCost: (carbonCost / 1000).toFixed(1), // MSEK
      waterCost: (waterCost / 1000).toFixed(2), // MSEK
      wasteCost: (wasteCost / 1000).toFixed(2), // MSEK
      totalEnvironmentalCost: (totalEnvironmentalCost / 1000).toFixed(1), // MSEK
      adjustedRevenue: adjustedRevenue.toFixed(1),
      environmentalImpact: environmentalImpact.toFixed(1)
    };
  }, [investment, revenue, emissions, carbonPrice, waterUsage, wasteGeneration]);

  return (
    <section className="section-padding bg-gradient-to-b from-card/20 to-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium">
              {t('eroiLab.title')}
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-primary">Environmental ROI</span> Calculator
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            {t('eroiLab.subtitle')}
          </p>

          <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto">
            {t('eroiLab.description')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Controls */}
          <div className="space-y-8">
            <Card className="card-glow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="w-5 h-5" />
                  Investment Parameters
                </CardTitle>
                <CardDescription>
                  Adjust the sliders to explore different scenarios
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Investment */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-sm font-medium">{t('eroiLab.investment')}</label>
                    <span className="text-primary font-semibold">{investment[0]} MSEK</span>
                  </div>
                  <Slider
                    value={investment}
                    onValueChange={setInvestment}
                    max={500}
                    min={10}
                    step={10}
                    className="w-full"
                  />
                </div>

                {/* Revenue */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-sm font-medium">{t('eroiLab.revenue')}</label>
                    <span className="text-primary font-semibold">{revenue[0]} MSEK</span>
                  </div>
                  <Slider
                    value={revenue}
                    onValueChange={setRevenue}
                    max={300}
                    min={10}
                    step={5}
                    className="w-full"
                  />
                </div>

                {/* CO2 Emissions */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-sm font-medium">{t('eroiLab.emissions')}</label>
                    <span className="text-destructive font-semibold">{emissions[0]} tons/year</span>
                  </div>
                  <Slider
                    value={emissions}
                    onValueChange={setEmissions}
                    max={5000}
                    min={100}
                    step={100}
                    className="w-full"
                  />
                </div>

                {/* Carbon Price */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-sm font-medium">{t('eroiLab.carbonPrice')}</label>
                    <span className="text-primary font-semibold">{carbonPrice[0]} SEK/ton</span>
                  </div>
                  <Slider
                    value={carbonPrice}
                    onValueChange={setCarbonPrice}
                    max={2000}
                    min={200}
                    step={50}
                    className="w-full"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Advanced Parameters */}
            <Card className="card-glass">
              <CardHeader>
                <CardTitle className="text-lg">Advanced Environmental Factors</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Water Usage */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-sm font-medium">{t('eroiLab.waterUsage')}</label>
                    <span className="text-blue-500 font-semibold">{waterUsage[0]} m³/year</span>
                  </div>
                  <Slider
                    value={waterUsage}
                    onValueChange={setWaterUsage}
                    max={20000}
                    min={1000}
                    step={500}
                    className="w-full"
                  />
                </div>

                {/* Waste Generation */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-sm font-medium">{t('eroiLab.wasteGeneration')}</label>
                    <span className="text-orange-500 font-semibold">{wasteGeneration[0]} tons/year</span>
                  </div>
                  <Slider
                    value={wasteGeneration}
                    onValueChange={setWasteGeneration}
                    max={2000}
                    min={50}
                    step={50}
                    className="w-full"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <div className="space-y-6">
            {/* Main EROI Result */}
            <Card className="card-glow border-primary/20">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl flex items-center justify-center gap-2">
                  <TrendingUp className="w-6 h-6 text-primary" />
                  {t('eroiLab.results')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <div className="text-5xl font-bold text-primary mb-2">
                    {calculations.eroi}
                  </div>
                  <div className="text-lg text-muted-foreground">{t('eroiLab.eroiValue')}</div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-card/50 rounded-lg">
                    <div className="text-2xl font-bold text-foreground">{calculations.paybackYears}</div>
                    <div className="text-sm text-muted-foreground">years</div>
                    <div className="text-xs text-muted-foreground">{t('eroiLab.paybackPeriod')}</div>
                  </div>
                  
                  <div className="text-center p-4 bg-card/50 rounded-lg">
                    <div className="text-2xl font-bold text-success">{calculations.npv}</div>
                    <div className="text-sm text-muted-foreground">MSEK</div>
                    <div className="text-xs text-muted-foreground">{t('eroiLab.npvAnalysis')}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Detailed Breakdown */}
            <Card className="card-glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  {t('eroiLab.explanationTree')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Annual Revenue:</span>
                      <span className="font-semibold">{revenue[0]} MSEK</span>
                    </div>
                    <div className="flex justify-between text-destructive">
                      <span>Carbon Cost:</span>
                      <span className="font-semibold">-{calculations.carbonCost} MSEK</span>
                    </div>
                    <div className="flex justify-between text-blue-600">
                      <span>Water Cost:</span>
                      <span className="font-semibold">-{calculations.waterCost} MSEK</span>
                    </div>
                    <div className="flex justify-between text-orange-600">
                      <span>Waste Cost:</span>
                      <span className="font-semibold">-{calculations.wasteCost} MSEK</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between border-t pt-2">
                      <span className="font-semibold">Adjusted Revenue:</span>
                      <span className="font-bold text-primary">{calculations.adjustedRevenue} MSEK</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Investment Cost:</span>
                      <span className="font-semibold">{investment[0]} MSEK</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Environmental Impact:</span>
                      <span className="font-semibold text-destructive">{calculations.environmentalImpact}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>IRR:</span>
                      <span className="font-semibold text-success">{calculations.irr}%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Shadow Pricing Info */}
            <Card className="card-glass border-accent/20">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-accent" />
                  {t('eroiLab.shadowPricing')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {t('eroiLab.uniqueValue')}
                </p>
                <div className="text-xs text-muted-foreground space-y-1">
                  <div>• Carbon: {carbonPrice[0]} SEK/ton CO₂</div>
                  <div>• Water: 15 SEK/m³ (shadow price)</div>
                  <div>• Waste: 300 SEK/ton (shadow price)</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button className="btn-hero group text-lg">
            Book Live Demo of Full Platform
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EnhancedEroiLab;