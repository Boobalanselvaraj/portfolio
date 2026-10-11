import { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Play, RotateCcw, Copy, Check } from 'lucide-react';
import { calculateExperience } from '../utils/experience';
import { useToast } from '../context/ToastContext';

interface CommandOutput {
  command: string;
  output: React.ReactNode;
}

export const InteractiveTerminal = () => {
  const [input, setInput] = useState('');
  const [copied, setCopied] = useState(false);
  const expText = calculateExperience();
  const { showToast } = useToast();
  const terminalContainerRef = useRef<HTMLDivElement>(null);

  const initialHistory: CommandOutput[] = [
    {
      command: 'boobalan.getCurrentRole()',
      output: (
        <div className="space-y-1 text-emerald-300">
          <div>🚀 <span className="font-bold">Role:</span> Full Stack Developer</div>
          <div>🏢 <span className="font-bold">Company:</span> S10 Health</div>
          <div>📍 <span className="font-bold">Location:</span> Chennai, Tamil Nadu</div>
          <div>⏳ <span className="font-bold">Period:</span> Oct 2026 – Present</div>
          <div className="text-gray-400 text-xs mt-1">Focus: Enterprise healthcare web platforms, reactive full-stack microservices & scalable UI.</div>
        </div>
      ),
    },
  ];

  const [history, setHistory] = useState<CommandOutput[]>(initialHistory);

  useEffect(() => {
    // Only scroll the internal terminal container, never the main window
    if (terminalContainerRef.current) {
      terminalContainerRef.current.scrollTop = terminalContainerRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    const cleanCmd = cmd.trim().toLowerCase();

    let output: React.ReactNode = null;

    if (cleanCmd === 'status' || cleanCmd === 'boobalan.getcurrentrole()' || cleanCmd === 'role') {
      output = (
        <div className="space-y-1 text-emerald-300">
          <div>🚀 <span className="font-bold">Role:</span> Full Stack Developer</div>
          <div>🏢 <span className="font-bold">Company:</span> S10 Health</div>
          <div>📍 <span className="font-bold">Location:</span> Chennai, Tamil Nadu</div>
          <div>⏳ <span className="font-bold">Period:</span> Oct 2026 – Present</div>
          <div>⚡ <span className="font-bold">Total Experience:</span> {expText} Years (Starting May 2024)</div>
        </div>
      );
    } else if (cleanCmd === 'skills' || cleanCmd === 'boobalan.gettechstack()') {
      output = (
        <div className="space-y-1 text-cyan-300 text-xs">
          <div>⚛️ <span className="font-bold text-white">Frontend:</span> React, TypeScript, JavaScript ES6+, Tailwind CSS, TanStack Table</div>
          <div>🟢 <span className="font-bold text-white">Backend:</span> Node.js, Express.js, REST APIs, JWT, RBAC</div>
          <div>🐬 <span className="font-bold text-white">Database & ORM:</span> MySQL, Prisma ORM</div>
          <div>📡 <span className="font-bold text-white">Real-Time & Maps:</span> MQTT Protocol, WebSockets, Google Maps API</div>
          <div>🛠️ <span className="font-bold text-white">DevOps & Tools:</span> Git, GitHub, Docker, Postman, Vite</div>
        </div>
      );
    } else if (cleanCmd === 'history' || cleanCmd === 'experience') {
      output = (
        <div className="space-y-2 text-xs">
          <div className="text-emerald-300">
            <span className="font-bold">1. S10 Health</span> — Full Stack Developer (Oct 2026 – Present) | Chennai
          </div>
          <div className="text-cyan-300">
            <span className="font-bold">2. Realtech GPS PVT LTD</span> — Junior Software Developer (May 2024 – Sep 2026) | Erode
            <div className="text-gray-400">Shipped iChlorine, iTank IoT water management & live telemetry mapping.</div>
          </div>
        </div>
      );
    } else if (cleanCmd === 'contact') {
      output = (
        <div className="space-y-1 text-amber-300 text-xs">
          <div>📧 <span className="font-bold">Email:</span> smartboobalan77@gmail.com</div>
          <div>📱 <span className="font-bold">Phone:</span> +91 6380601667</div>
          <div>🐙 <span className="font-bold">GitHub:</span> github.com/Boobalanselvaraj</div>
          <div>📍 <span className="font-bold">Based In:</span> Chennai, Tamil Nadu</div>
        </div>
      );
    } else if (cleanCmd === 'clear') {
      setHistory([]);
      setInput('');
      return;
    } else if (cleanCmd === 'help') {
      output = (
        <div className="space-y-1 text-gray-300 text-xs">
          <div>Available commands:</div>
          <div className="text-cyan-400">status, skills, history, contact, clear, help</div>
        </div>
      );
    } else {
      output = (
        <div className="text-rose-400 text-xs">
          Command not recognized: "{cmd}". Type <span className="text-cyan-300 underline cursor-pointer" onClick={() => handleCommand('help')}>help</span> for options.
        </div>
      );
    }

    setHistory((prev) => [...prev, { command: cmd, output }]);
    setInput('');
  };

  const handleCopySnippet = () => {
    navigator.clipboard.writeText('npx boobalan-portfolio');
    setCopied(true);
    showToast('Terminal signature copied!');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-2xl overflow-hidden bg-gray-950/95 border border-cyan-500/30 shadow-2xl backdrop-blur-2xl text-left font-mono text-sm">
      {/* Terminal Title Bar */}
      <div className="px-4 py-3 bg-gray-900/90 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
          <div className="ml-2 flex items-center gap-1.5 text-xs text-gray-400 font-sans font-medium">
            <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
            <span>boobalan@s10health:~</span>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setHistory(initialHistory)}
            className="p-1 rounded text-gray-400 hover:text-white transition-colors"
            title="Reset Terminal"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={handleCopySnippet}
            className="p-1 rounded text-gray-400 hover:text-cyan-300 transition-colors"
            title="Copy"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Terminal Content Body */}
      <div
        ref={terminalContainerRef}
        className="p-4 max-h-72 overflow-y-auto space-y-3 text-xs sm:text-sm scroll-smooth"
      >
        <div className="text-gray-500 text-xs">
          // Interactive Terminal v2.5 — Type or click commands below:
        </div>

        {history.map((item, idx) => (
          <div key={idx} className="space-y-1.5">
            <div className="flex items-center gap-2 text-cyan-400 font-bold">
              <span className="text-fuchsia-400">❯</span>
              <span>{item.command}</span>
            </div>
            <div className="pl-4">{item.output}</div>
          </div>
        ))}

        {/* Input Line */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (input.trim()) handleCommand(input);
          }}
          className="flex items-center gap-2 pt-1"
        >
          <span className="text-fuchsia-400 font-bold">❯</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type 'status', 'skills', 'contact', 'help'..."
            className="w-full bg-transparent outline-none text-white placeholder-gray-600 text-xs sm:text-sm font-mono"
          />
        </form>
      </div>

      {/* Quick Interactive Command Buttons */}
      <div className="px-4 py-2.5 bg-gray-900/60 border-t border-white/5 flex flex-wrap gap-1.5 text-xs font-sans">
        <span className="text-gray-500 text-[11px] self-center mr-1">Quick Run:</span>
        {[
          { label: 'Role & Status', cmd: 'status' },
          { label: 'Tech Stack', cmd: 'skills' },
          { label: 'Work History', cmd: 'history' },
          { label: 'Contact Info', cmd: 'contact' },
        ].map((btn) => (
          <button
            key={btn.cmd}
            type="button"
            onClick={() => handleCommand(btn.cmd)}
            className="px-2.5 py-1 rounded-md bg-white/5 hover:bg-cyan-500/20 text-gray-300 hover:text-cyan-300 border border-white/10 hover:border-cyan-400/40 text-[11px] font-mono transition-colors flex items-center gap-1"
          >
            <Play className="w-2.5 h-2.5 text-cyan-400" />
            <span>{btn.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
