import { ArrowRight, Zap, Brain, Cog, Mail, Phone, Linkedin, CheckCircle, Sparkles, BarChart3, Clock, Shield } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Zap className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                NEO Automate Agents
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</a>
              <a href="#solutions" className="text-gray-600 hover:text-blue-600 transition-colors">Solutions</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
            </div>
            <a
              href="#contact"
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all hover:shadow-lg hover:scale-105"
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
                  Intelligent Automation Solutions
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Transform Your Business with{' '}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  AI-Powered Automation
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                NEO Agents delivers cutting-edge automation solutions that streamline operations,
                boost productivity, and drive growth. From intelligent agentic systems to robust
                process automation.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="group bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all hover:shadow-xl hover:scale-105 flex items-center space-x-2"
                >
                  <span className="font-semibold">Start Automating</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#services"
                  className="bg-gray-100 text-gray-900 px-8 py-4 rounded-full hover:bg-gray-200 transition-all hover:shadow-lg font-semibold"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-12 space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-3 rounded-xl">
                      <Brain className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Agentic AI</h3>
                      <p className="text-gray-600 text-sm">Autonomous decision-making</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                  <div className="flex items-center space-x-4">
                    <div className="bg-cyan-100 p-3 rounded-xl">
                      <Cog className="w-8 h-8 text-cyan-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Process Automation</h3>
                      <p className="text-gray-600 text-sm">Streamlined workflows</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-3 rounded-xl">
                      <Sparkles className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Custom Solutions</h3>
                      <p className="text-gray-600 text-sm">Tailored to your needs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Our Automation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the right automation approach for your business needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all hover:scale-105 border border-gray-100">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Agentic Automation</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Intelligent AI agents that can reason, plan, and execute complex tasks autonomously.
                Perfect for dynamic environments requiring adaptive decision-making.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Context-aware decision making</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Self-learning and adaptation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Natural language interaction</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Multi-step task orchestration</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all hover:scale-105 border border-gray-100">
              <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Cog className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Traditional Automation</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Robust, rule-based automation for predictable, high-volume tasks.
                Ideal for structured processes and workflows with consistent patterns.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Workflow optimization</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Data processing pipelines</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">API integrations</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Scheduled task execution</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Why Choose NEO Agents
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the benefits of intelligent automation
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 p-6 hover:bg-gray-50 rounded-2xl transition-colors">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Save Time</h3>
              <p className="text-gray-600">
                Reduce manual work by up to 90% and focus on what matters most for your business growth
              </p>
            </div>
            <div className="text-center space-y-4 p-6 hover:bg-gray-50 rounded-2xl transition-colors">
              <div className="bg-cyan-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto">
                <BarChart3 className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Boost Productivity</h3>
              <p className="text-gray-600">
                Increase operational efficiency and scale your business without proportional cost increases
              </p>
            </div>
            <div className="text-center space-y-4 p-6 hover:bg-gray-50 rounded-2xl transition-colors">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Reduce Errors</h3>
              <p className="text-gray-600">
                Minimize human errors and ensure consistent, reliable execution of critical processes
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-blue-50">
            Get in touch to discuss how NEO Agents can transform your operations
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <a
              href="mailto:jumakitula0@gmail.com"
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all hover:scale-105 group"
            >
              <Mail className="w-8 h-8 text-white mx-auto mb-4" />
              <h3 className="font-semibold text-white mb-2">Email</h3>
              <p className="text-blue-50 text-sm break-all">jumakitula0@gmail.com</p>
            </a>
            <a
              href="https://wa.me/255711813131"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all hover:scale-105 group"
            >
              <Phone className="w-8 h-8 text-white mx-auto mb-4" />
              <h3 className="font-semibold text-white mb-2">WhatsApp</h3>
              <p className="text-blue-50 text-sm">+255 711 813 131</p>
            </a>
            <a
              href="https://www.linkedin.com/in/juma-bakari-4712ab152/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all hover:scale-105 group"
            >
              <Linkedin className="w-8 h-8 text-white mx-auto mb-4" />
              <h3 className="font-semibold text-white mb-2">LinkedIn</h3>
              <p className="text-blue-50 text-sm">Connect with Juma</p>
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Zap className="w-6 h-6 text-blue-500" />
            <span className="text-xl font-bold text-white">NEO Automate Agents</span>
          </div>
          <p className="mb-4">Intelligent Automation Solutions for Modern Business</p>
          <p className="text-sm">© 2025 NEO Automate Agents. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
