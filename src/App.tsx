import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ShieldCheck,
  Zap,
  ThumbsUp,
  CheckCircle2,
  ArrowRight,
  Calculator as CalcIcon,
  MapPin,
  User,
  Mail,
  Phone,
  Leaf,
  Award,
  Check
} from 'lucide-react';

export default function App() {
  const funnelRef = useRef<HTMLDivElement>(null);
  const [selectedHeating, setSelectedHeating] = useState('');

  const scrollToFunnel = () => {
    funnelRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Leaf className="w-6 h-6 text-blue-600" />
            <span className="font-bold text-xl tracking-tight text-slate-900">Värme<span className="text-blue-600">Kollen</span></span>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-sm font-medium text-slate-600">
            <span className="flex items-center gap-1"><Check className="w-4 h-4 text-green-500" /> Gratis & Obindande</span>
            <span className="flex items-center gap-1"><Check className="w-4 h-4 text-green-500" /> Svar inom 24h</span>
          </div>
        </div>
      </header>

      {/* Floating CTA Button */}
      <motion.button
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={scrollToFunnel}
        className="fixed top-24 right-4 z-40 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-2xl flex items-center gap-2 transition-all md:right-8"
      >
        <CalcIcon className="w-5 h-5" />
        <span className="hidden sm:inline">Få offerter</span>
      </motion.button>

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-slate-50 -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6"
          >
            Sänk din elkostnad med <br className="hidden sm:block" />
            <span className="text-blue-600">rätt värmesystem</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10"
          >
            Jämför marknadens bästa installatörer och få 3 kostnadsfria offerter på under 60 sekunder. Utnyttja Grön Teknik-avdraget för 2026.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <button
              onClick={scrollToFunnel}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-2 mx-auto"
            >
              Få 3 Kostnadsfria Offerter <ArrowRight className="w-5 h-5" />
            </button>
            <p className="mt-4 text-sm text-slate-500 flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4" /> 100% kostnadsfritt och utan köptvång
            </p>
          </motion.div>
        </div>
      </section>



      {/* Main Content: Funnel & Features */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">

        {/* Left Column: Funnel */}
        <div ref={funnelRef} className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 sm:p-8 relative overflow-hidden">
          <Funnel selectedHeating={selectedHeating} setSelectedHeating={setSelectedHeating} />
        </div>

        {/* Right Column: Features & Calculator */}
        <div className="space-y-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Varför jämföra via oss?</h2>
            <div className="space-y-6">
              <FeatureCard
                icon={<Zap className="w-6 h-6 text-yellow-500" />}
                title="Spara upp till 80%"
                description="Genom att byta till en modern värmepump kan du sänka dina uppvärmningskostnader drastiskt, speciellt med dagens elpriser."
              />
              <FeatureCard
                icon={<ShieldCheck className="w-6 h-6 text-blue-500" />}
                title="Certifierade installatörer"
                description="Vi matchar dig endast med lokala, certifierade och kvalitetsgranskade företag med F-skatt."
              />
              <FeatureCard
                icon={<ThumbsUp className="w-6 h-6 text-green-500" />}
                title="Helt utan köptvång"
                description="Tjänsten är 100% gratis. Du binder dig inte till något och väljer själv om du vill gå vidare med en offert."
              />
            </div>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 text-white shadow-lg">
            <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
              <CalcIcon className="w-6 h-6 text-blue-400" /> Besparingskalkylator
            </h3>
            <p className="text-slate-300 mb-6 text-sm">Se din potentiella besparing per år.</p>
            <Calculator heatingType={selectedHeating} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-500 text-sm">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Leaf className="w-5 h-5 text-slate-400" />
            <span className="font-bold text-lg text-slate-700">VärmeKollen</span>
          </div>
          <p className="mb-4">© 2026 VärmeKollen Sverige AB. Alla rättigheter förbehållna.</p>
          <div className="flex justify-center gap-4">
            <a href="#" className="hover:text-blue-600 transition-colors">Integritetspolicy</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Användarvillkor</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Kontakta oss</a>
          </div>
        </div>
      </footer>
    </div >
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 shadow-sm">
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-bold text-slate-900 mb-1">{title}</h4>
        <p className="text-slate-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function Funnel({ selectedHeating, setSelectedHeating }: { selectedHeating: string, setSelectedHeating: (heating: string) => void }) {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [formData, setFormData] = useState({
    heating: '',
    area: 120,
    zip: '',
    name: '',
    email: '',
    phone: '',
    gdpr: false
  });

  const updateForm = (key: string, value: any) => {
    setFormData(prev => ({ ...prev, [key]: value }));
    if (key === 'heating') {
      setSelectedHeating(value);
    }
  };

  const nextStep = () => setStep(s => Math.min(s + 1, 5));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  // Swedish zip code validation (XXX XX format)
  const isValidZip = (zip: string) => /^\d{3}\s?\d{2}$/.test(zip.replace(/\s/g, ''));
  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPhone = (phone: string) => /^[\d\+\-\s]{7,}$/.test(phone);

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');
    
    if (!formData.gdpr) {
      setSubmitError('Du måste godkänna integritetspolicyn för att fortsätta.');
      return;
    }

    if (!isValidZip(formData.zip)) {
      setSubmitError('Ange ett giltigt postnummer (t.ex. 123 45).');
      return;
    }

    if (!isValidEmail(formData.email)) {
      setSubmitError('Ange en giltig e-postadress.');
      return;
    }

    if (!isValidPhone(formData.phone)) {
      setSubmitError('Ange ett giltigt telefonnummer.');
      return;
    }

    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStep(5); // Success step
    } catch (error) {
      setSubmitError('Något gick fel. Vänligen försök igen.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-2 bg-slate-100 z-10">
        <motion.div
          className="h-full bg-blue-600"
          initial={{ width: '25%' }}
          animate={{ width: `${(Math.min(step, 4) / 4) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <div className="min-h-[400px] flex flex-col pt-4">
        <div className="flex justify-between items-center mb-8">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
            {step < 5 ? `Steg ${step} av 4` : 'Klart!'}
          </span>
          {step > 1 && step < 5 && (
            <button onClick={prevStep} className="text-sm text-slate-500 hover:text-slate-900">
              Tillbaka
            </button>
          )}
        </div>

        <div className="flex-grow flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold text-slate-900">Vad har du för nuvarande uppvärmning?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {['Direktverkande El', 'Olja / Pellets', 'Ved', 'Gammal Värmepump', 'Fjärrvärme', 'Annat'].map(type => (
                    <button
                      key={type}
                      onClick={() => { updateForm('heating', type); nextStep(); }}
                      className={`p-4 rounded-xl border-2 text-left font-medium transition-all ${formData.heating === type
                        ? 'border-blue-600 bg-blue-50 text-blue-700'
                        : 'border-slate-200 hover:border-blue-300 hover:bg-slate-50 text-slate-700'
                        }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold text-slate-900">Ungefärlig boyta?</h3>
                <div className="pt-8 pb-4">
                  <div className="text-center mb-6">
                    <span className="text-4xl font-extrabold text-blue-600">{formData.area}</span>
                    <span className="text-xl text-slate-500 ml-1">m²</span>
                  </div>
                  <input
                    type="range"
                    min="30"
                    max="400"
                    step="5"
                    value={formData.area}
                    onChange={(e) => updateForm('area', parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                  <div className="flex justify-between text-xs text-slate-400 mt-2">
                    <span>30 m²</span>
                    <span>400+ m²</span>
                  </div>
                </div>
                <button
                  onClick={nextStep}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-colors flex justify-center items-center gap-2"
                >
                  Nästa <ArrowRight className="w-5 h-5" />
                </button>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold text-slate-900">Var ska installationen ske?</h3>
                <p className="text-slate-600">Vi behöver ditt postnummer för att matcha dig med lokala installatörer.</p>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="123 45"
                    value={formData.zip}
                    onChange={(e) => {
                      const value = e.target.value;
                      // Auto-format Swedish zip code
                      const digits = value.replace(/\D/g, '').slice(0, 5);
                      const formatted = digits.length > 3 ? `${digits.slice(0, 3)} ${digits.slice(3)}` : digits;
                      updateForm('zip', formatted);
                    }}
                    className={`w-full pl-12 pr-4 py-4 rounded-xl border-2 focus:border-blue-600 focus:ring-0 outline-none text-lg transition-colors ${
                      formData.zip && !isValidZip(formData.zip) 
                        ? 'border-red-300 bg-red-50' 
                        : 'border-slate-200'
                    }`}
                    aria-label="Postnummer"
                    aria-invalid={formData.zip && !isValidZip(formData.zip)}
                  />
                </div>
                {formData.zip && !isValidZip(formData.zip) && (
                  <p className="text-sm text-red-600 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                    Ogiltigt postnummer. Format: 123 45
                  </p>
                )}
                <button
                  onClick={nextStep}
                  disabled={!isValidZip(formData.zip)}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-colors flex justify-center items-center gap-2"
                >
                  Nästa <ArrowRight className="w-5 h-5" />
                </button>
              </motion.div>
            )}

            {step === 4 && (
              <motion.form
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onSubmit={submitForm}
                className="space-y-5"
              >
                <h3 className="text-2xl font-bold text-slate-900">Sista steget!</h3>
                <p className="text-slate-600">Vem ska vi skicka offerterna till?</p>

                {submitError && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-700 text-sm" role="alert">
                    {submitError}
                  </div>
                )}

                <div className="space-y-3">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <input
                      type="text" required placeholder="För- och efternamn"
                      value={formData.name} onChange={(e) => updateForm('name', e.target.value)}
                      className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-600 outline-none transition-colors"
                      aria-label="Namn"
                    />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <input
                      type="email" required placeholder="E-postadress"
                      value={formData.email} onChange={(e) => updateForm('email', e.target.value)}
                      className={`w-full pl-12 pr-4 py-3 rounded-xl border-2 focus:border-blue-600 outline-none transition-colors ${
                        formData.email && !isValidEmail(formData.email) ? 'border-red-300 bg-red-50' : 'border-slate-200'
                      }`}
                      aria-label="E-post"
                      aria-invalid={formData.email && !isValidEmail(formData.email)}
                    />
                  </div>
                  {formData.email && !isValidEmail(formData.email) && (
                    <p className="text-sm text-red-600 -mt-2">Ange en giltig e-postadress.</p>
                  )}
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <input
                      type="tel" required placeholder="Telefonnummer"
                      value={formData.phone} onChange={(e) => updateForm('phone', e.target.value)}
                      className={`w-full pl-12 pr-4 py-3 rounded-xl border-2 focus:border-blue-600 outline-none transition-colors ${
                        formData.phone && !isValidPhone(formData.phone) ? 'border-red-300 bg-red-50' : 'border-slate-200'
                      }`}
                      aria-label="Telefon"
                      aria-invalid={formData.phone && !isValidPhone(formData.phone)}
                    />
                  </div>
                  {formData.phone && !isValidPhone(formData.phone) && (
                    <p className="text-sm text-red-600 -mt-2">Ange ett giltigt telefonnummer.</p>
                  )}
                </div>

                <label className="flex items-start gap-3 cursor-pointer mt-4">
                  <input
                    type="checkbox" required
                    checked={formData.gdpr} onChange={(e) => updateForm('gdpr', e.target.checked)}
                    className="mt-1 w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-600"
                  />
                  <span className="text-xs text-slate-500 leading-relaxed">
                    Jag godkänner att VärmeKollen och dess partners kontaktar mig med offerter. Jag har läst och förstått <a href="#" className="underline text-blue-600">integritetspolicyn</a> (GDPR).
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={!formData.gdpr || isLoading}
                  className="w-full bg-green-600 hover:bg-green-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-colors flex justify-center items-center gap-2 text-lg shadow-lg"
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Skickar...
                    </>
                  ) : (
                    'Få mina offerter nu'
                  )}
                </button>
              </motion.form>
            )}

            {step === 5 && (
              <motion.div
                key="step5"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-4 py-8"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900">Tack för din förfrågan!</h3>
                <p className="text-slate-600 max-w-sm mx-auto">
                  Vi har mottagit dina uppgifter. Upp till 3 lokala installatörer kommer snart att kontakta dig med prisförslag.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}

function Calculator({ heatingType: propHeatingType }: { heatingType?: string }) {
  const [heatingType, setHeatingType] = useState(propHeatingType || 'Direktverkande El');
  const [cost, setCost] = useState(30000);

  // Sync with funnel selection when provided
  React.useEffect(() => {
    if (propHeatingType) {
      setHeatingType(propHeatingType);
    }
  }, [propHeatingType]);

  const savingsMap: Record<string, number> = {
    'Direktverkande El': 0.65,
    'Olja / Pellets': 0.60,
    'Ved': 0.30,
    'Gammal Värmepump': 0.25,
    'Fjärrvärme': 0.15,
  };

  const savingPercent = savingsMap[heatingType] || 0.40;
  const savedAmount = Math.round(cost * savingPercent);

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-slate-200 mb-2">Nuvarande uppvärmning</label>
        <select
          value={heatingType}
          onChange={(e) => setHeatingType(e.target.value)}
          className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none"
        >
          {Object.keys(savingsMap).map(type => (
            <option key={type} value={type} className="bg-slate-800 text-white">{type}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-200 mb-2">
          Nuvarande årskostnad (SEK)
        </label>
        <div className="flex items-center gap-4">
          <input
            type="range"
            min="10000"
            max="100000"
            step="1000"
            value={cost}
            onChange={(e) => setCost(parseInt(e.target.value))}
            className="flex-grow h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
          <span className="font-mono bg-slate-800 px-3 py-1 rounded text-blue-300 font-bold min-w-[80px] text-center">
            {cost.toLocaleString('sv-SE')}
          </span>
        </div>
      </div>

      <div className="pt-6 border-t border-slate-700">
        <div className="flex justify-between items-end">
          <div>
            <p className="text-sm text-slate-300 mb-1">Potentiell besparing per år*</p>
            <p className="text-3xl font-bold text-green-400">
              ~ {savedAmount.toLocaleString('sv-SE')} kr
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs text-slate-400">Minskning</p>
            <p className="text-lg font-bold text-white">-{Math.round(savingPercent * 100)}%</p>
          </div>
        </div>
        <p className="text-[10px] text-slate-400 mt-4 leading-tight">
          *Kalkylen är en uppskattning baserad på schablonvärden och historiska elpriser. Din faktiska besparing kan variera beroende på husets isolering, vald värmepump och framtida elpriser.
        </p>
      </div>
    </div>
  );
}

