import { Section } from "@/components/Section";
import { CaseStudy, CaseSection } from "@/components/CaseStudy";
import { useContactForm } from "@/hooks/use-contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  const { form, mutation } = useContactForm();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border/50">
        <div className="container max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-lg tracking-tight">Alex Dev</span>
          <div className="flex gap-6 text-sm font-medium text-muted-foreground">
            <button onClick={() => scrollTo('work')} className="hover:text-primary transition-colors">Work</button>
            <button onClick={() => scrollTo('process')} className="hover:text-primary transition-colors">Process</button>
            <button onClick={() => scrollTo('contact')} className="hover:text-primary transition-colors">Contact</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Section id="hero" className="pt-32 md:pt-40 pb-20 border-none">
        <div className="max-w-3xl">
          <p className="font-mono text-primary mb-6 bg-muted inline-block px-3 py-1 rounded text-sm">
            Solutions Engineer Intern
          </p>
          <h1 className="text-balance text-foreground mb-8">
            I design and explain technical solutions that bridge product needs and system constraints.
          </h1>
          
          <div className="flex flex-wrap gap-6 text-sm font-medium">
            <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-0.5">
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-0.5">
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
            <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-0.5">
              <Download className="w-4 h-4" /> Resume
            </a>
          </div>
        </div>
      </Section>

      {/* What I Do */}
      <Section id="about" title="Capabilities">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-foreground">Technical Translation</h3>
            <ul className="space-y-3">
              <li>Translating business problems into system workflows</li>
              <li>Explaining complex systems to non-technical stakeholders</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-foreground">System Design</h3>
            <ul className="space-y-3">
              <li>Designing solution architectures under constraints</li>
              <li>Supporting implementation with clear logic and trade-offs</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Case Studies */}
      <Section id="work" title="Case Studies" subtitle="Engineering specific solutions for complex constraints.">
        
        {/* Case Study 1 */}
        <CaseStudy title="PolicyPath AI" role="System Architect">
          <CaseSection title="Problem">
            <p className="mb-0">
              Insurance adjusters were spending 40% of their time manually cross-referencing claims against changing policy documents, leading to bottlenecks and inconsistent approvals.
            </p>
          </CaseSection>
          
          <CaseSection title="Constraints">
            <ul className="mb-0">
              <li>Must run on-premise due to data privacy regulations (No public cloud APIs).</li>
              <li>Latency must be under 200ms for real-time suggestions.</li>
              <li>Legacy mainframe integration required for policy retrieval.</li>
            </ul>
          </CaseSection>

          <CaseSection title="Solution Flow">
            <p>
              Designed a retrieval-augmented generation (RAG) pipeline.
            </p>
            <div className="bg-muted p-4 rounded-md font-mono text-xs md:text-sm my-4 overflow-x-auto whitespace-pre">
              {`User Query -> Vector DB (Local) -> Context Retrieval
-> LLM (Llama-2 Quantized) -> Structured Output
-> Mainframe Validation -> Response UI`}
            </div>
          </CaseSection>

          <CaseSection title="Trade-offs">
            <p className="mb-0">
              Chose quantized local models over larger cloud models. 
              <span className="block mt-2 font-medium text-foreground">Impact:</span> 
              Slightly lower reasoning capability, but achieved 150ms latency and full data sovereignty compliance.
            </p>
          </CaseSection>

          <CaseSection title="Stakeholder Comms">
            <p className="mb-0">
              Created a "Black Box vs. Glass Box" visual analogy to explain how the RAG system cites sources, building trust with the non-technical compliance team who feared AI "hallucinations."
            </p>
          </CaseSection>
        </CaseStudy>

        {/* Case Study 2 */}
        <CaseStudy title="Smart City Waste Nodes (SCWN)" role="IoT Solutions Designer">
          <CaseSection title="Framing">
            <p className="mb-0">
              Municipal waste collection routes were static, resulting in 30% of pickups being for empty bins while overflowing bins elsewhere were missed.
            </p>
          </CaseSection>

          <CaseSection title="Stakeholders">
            <p className="mb-0">
              City Council (Budget), Drivers (Union/Route efficiency), Citizens (Service quality).
            </p>
          </CaseSection>

          <CaseSection title="Workflow">
            <p className="mb-0">
              Sensors wake up every 4 hours &rarr; Measure fill level &rarr; LoRaWAN transmission &rarr; Central Dashboard &rarr; Dynamic Route Optimization Algorithm &rarr; Driver Tablet App.
            </p>
          </CaseSection>

          <CaseSection title="Trade-offs">
            <p className="mb-0">
              <span className="font-semibold text-foreground">Battery Life vs. Real-time Data:</span> 
              Reduced transmission frequency to 4-hour intervals instead of real-time. 
              Extended sensor battery life from 6 months to 3 years, reducing maintenance costs by 60% while still providing sufficient granularity for daily route planning.
            </p>
          </CaseSection>

          <CaseSection title="Demo Strategy">
            <p className="mb-0">
              Simulated a week of collection data in a dashboard view. Showed side-by-side comparison: "Current Static Route" (Red lines, long distance) vs. "Optimized Route" (Green lines, 40% shorter). Visualized cost savings immediately.
            </p>
          </CaseSection>
        </CaseStudy>
      </Section>

      {/* Framework */}
      <Section id="process" title="My Framework" subtitle="A consistent approach to solving ambiguity.">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { step: "01", title: "Clarify the Problem", desc: "Isolate the root cause from the symptoms. Define success metrics." },
            { step: "02", title: "Identify Constraints", desc: "Technical, budget, regulatory, and time boundaries." },
            { step: "03", title: "Design Workflows", desc: "Map data flow, user actions, and system states." },
            { step: "04", title: "Define Edge Cases", desc: "What happens when things go wrong? Error handling." },
            { step: "05", title: "Decide Trade-offs", desc: "Speed vs. Cost. Scale vs. Complexity. Document choices." },
            { step: "06", title: "Prepare Narrative", desc: "Tailor the explanation to the audience (Tech vs. Biz)." },
          ].map((item) => (
            <div key={item.step} className="p-6 bg-muted/30 rounded-lg border border-border/50 hover:border-primary/20 transition-colors">
              <span className="block text-xs font-mono font-bold text-primary mb-3">{item.step}</span>
              <h4 className="text-lg font-semibold mb-2 text-foreground">{item.title}</h4>
              <p className="text-sm mb-0">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Get in Touch" className="border-none">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          <div>
            <h3 className="text-3xl font-bold mb-6 text-foreground">Happy to walk through any solution live.</h3>
            <p className="mb-8">
              I'm currently looking for Solutions Engineering opportunities. 
              Let's discuss how I can help your team bridge the gap between complex technology and business value.
            </p>
            
            <div className="space-y-4">
              <a href="mailto:alex@example.com" className="flex items-center gap-3 text-foreground hover:text-primary/70 transition-colors font-medium">
                <Mail className="w-5 h-5" /> alex@example.com
              </a>
              <a href="#" className="flex items-center gap-3 text-foreground hover:text-primary/70 transition-colors font-medium">
                <Linkedin className="w-5 h-5" /> LinkedIn Profile
              </a>
              <a href="#" className="flex items-center gap-3 text-foreground hover:text-primary/70 transition-colors font-medium">
                <Github className="w-5 h-5" /> GitHub Profile
              </a>
            </div>
          </div>

          <div className="bg-muted/30 p-6 md:p-8 rounded-xl border border-border/50">
            <Form {...form}>
              <form onSubmit={form.handleSubmit((data) => mutation.mutate(data))} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} className="bg-background" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="your@email.com" {...field} className="bg-background" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="How can I help?" 
                          className="min-h-[120px] bg-background resize-none" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={mutation.isPending}
                >
                  {mutation.isPending ? "Sending..." : (
                    <span className="flex items-center gap-2">
                      Send Message <ArrowRight className="w-4 h-4" />
                    </span>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </Section>
      
      <footer className="py-8 border-t border-border mt-12 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Alex Dev. Built with React & Tailwind.</p>
      </footer>
    </main>
  );
}
