import React from 'react';
import { DEUS_CONFIG } from '../config/app.config';
import { MythosBridge } from '../narrative/mythos-bridge';

export const DeusHeader = () => {
  const activeConcepts = MythosBridge.getActiveConcepts();

  return (
    <header className="bg-hardware-900 text-white shadow-lg border-b border-divine-500/20">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-divine-500 animate-quantum-pulse flex items-center justify-center">
            <span className="text-xl font-mythic font-bold">✠</span>
          </div>
          <div>
            <h1 className="text-2xl font-mythic">{DEUS_CONFIG.appName}</h1>
            <p className="text-sm text-gray-300">{DEUS_CONFIG.narrativeGrounding} • {DEUS_CONFIG.appVersion}</p>
          </div>
        </div>

        <div className="mt-4 md:mt-0 flex flex-wrap gap-3">
          {activeConcepts.map((concept, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full bg-mythic-900/50 border border-mythic-500/30 text-xs animate-narrative-fade"
              style={{ animationDelay: `${i * 200}ms` }}
            >
              {concept.narrativeDescription.split(' ')[0]} → {concept.techImplementation.split(' ')[0]}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
};
