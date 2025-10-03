import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { useState } from 'react';
import { DollarSign, Droplet, Wind, TrendingUp } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart } from 'recharts';

const InteractiveEroiLab = () => {
  const [investment, setInvestment] = useState(10);
  const [co2, setCo2] = useState(500);
  const [water, setWater] = useState(1000);

  // Calculate EROI Score (simplified formula)
  const calculateEROI = () => {
    const financialScore = investment * 0.12;
    const environmentalCost = (co2 * 0.1 + water * 0.05) / 100;
    const eroiScore = ((financialScore - environmentalCost) / investment) * 100;
    return Math.max(0, Math.min(100, eroiScore)).toFixed(1);
  };

  const calculateNPV = () => {
    const baseNPV = investment * 1.2;
    const environmentalPenalty = (co2 * 0.001 + water * 0.0005);
    const npv = baseNPV - environmentalPenalty;
    return npv.toFixed(2);
  };

  // Generate chart data
  const generateChartData = () => {
    const data = [];
    for (let year = 0; year <= 10; year++) {
      const financialReturn = investment * (1 + 0.12) ** year;
      const environmentalCost = (co2 * 0.001 + water * 0.0005) * year;
      const totalReturn = financialReturn - environmentalCost;
      
      data.push({
        year: `År ${year}`,
        'Finansiell Avkastning': financialReturn.toFixed(2),
        'Miljökostnad': environmentalCost.toFixed(2),
        'Total EROI': totalReturn.toFixed(2)
      });
    }
    return data;
  };

  return (
    <section className="section-padding bg-gradient-to-b from-background via-card/5 to-background">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-foreground">Upplev </span>
            <span className="text-glow">EROI</span>
            <span className="text-foreground"> i praktiken</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Justera parametrarna och se i realtid hur ditt projekts EROI-score och NPV förändras.
          </p>
        </motion.div>

        {/* Interactive Lab */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Controls */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="card-glass p-8 space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
                  <DollarSign className="w-6 h-6 text-primary" />
                  Projektparametrar
                </h3>
              </div>

              {/* Investment Slider */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-semibold text-foreground">
                    Initial Investering
                  </label>
                  <span className="text-2xl font-bold text-primary">
                    ${investment}M
                  </span>
                </div>
                <Slider
                  value={[investment]}
                  onValueChange={(value) => setInvestment(value[0])}
                  min={1}
                  max={100}
                  step={1}
                  className="w-full"
                />
                <p className="text-xs text-muted-foreground">
                  Skala: $1M - $100M
                </p>
              </div>

              {/* CO2 Slider */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                    <Wind className="w-4 h-4 text-destructive" />
                    CO₂ Utsläpp
                  </label>
                  <span className="text-2xl font-bold text-destructive">
                    {co2} ton
                  </span>
                </div>
                <Slider
                  value={[co2]}
                  onValueChange={(value) => setCo2(value[0])}
                  min={0}
                  max={5000}
                  step={50}
                  className="w-full"
                />
                <p className="text-xs text-muted-foreground">
                  Skala: 0 - 5,000 ton/år
                </p>
              </div>

              {/* Water Slider */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                    <Droplet className="w-4 h-4 text-accent" />
                    Vattenanvändning
                  </label>
                  <span className="text-2xl font-bold text-accent">
                    {water} m³
                  </span>
                </div>
                <Slider
                  value={[water]}
                  onValueChange={(value) => setWater(value[0])}
                  min={0}
                  max={10000}
                  step={100}
                  className="w-full"
                />
                <p className="text-xs text-muted-foreground">
                  Skala: 0 - 10,000 m³/år
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Right: Results & Chart */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Results Cards */}
            <div className="grid grid-cols-2 gap-6">
              <Card className="card-glow p-6 text-center">
                <div className="text-sm text-muted-foreground mb-2">EROI Score</div>
                <div className="text-5xl font-bold text-glow mb-2">
                  {calculateEROI()}
                </div>
                <div className="text-xs text-muted-foreground">av 100</div>
              </Card>

              <Card className="card-glow p-6 text-center">
                <div className="text-sm text-muted-foreground mb-2">Projected NPV</div>
                <div className="text-5xl font-bold text-gold-glow mb-2">
                  ${calculateNPV()}M
                </div>
                <div className="text-xs text-success flex items-center justify-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  10 år horisont
                </div>
              </Card>
            </div>

            {/* Chart */}
            <Card className="card-glass p-6">
              <h4 className="text-lg font-bold mb-4 text-foreground">
                Projektion över tid
              </h4>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={generateChartData()}>
                  <defs>
                    <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis 
                    dataKey="year" 
                    stroke="hsl(var(--muted-foreground))"
                    style={{ fontSize: '12px' }}
                  />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))"
                    style={{ fontSize: '12px' }}
                  />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="Total EROI" 
                    stroke="hsl(var(--primary))" 
                    fillOpacity={1} 
                    fill="url(#colorTotal)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveEroiLab;
