import React from 'react';
import { DeusHeader } from './packages/ui/DeusHeader';
import { ConceptCard } from './packages/ui/ConceptCard';
import { MythosBridge } from './packages/narrative/mythos-bridge';
import { DEUS_CONFIG } from './packages/config/app.config';
import conceptMap from './narrative-library/translation-maps/concept-to-tech.json';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-hardware-950 text-gray-900 dark:text-gray-100">
      <DeusHeader />
      <main className="container mx-auto px-4 py-8">
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
            <span className="text-mythic-500">🗺️</span>
            NARRATIVE-TO-TECH MANIFESTATION
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl">
            The DEUS Framework aligns mythic, sci-fi, and theoretical concepts with production-ready technology.
            Below are the active concepts grounding this implementation.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DEUS_CONFIG.mythosBridge.activeConcepts.map((conceptName, i) => {
            const concept = MythosBridge.getConcept(conceptName as keyof typeof conceptMap);
            return (
              <ConceptCard
                key={i}
                concept={concept}
                conceptName={conceptName}
              />
            );
          })}
        </section>

        <section className="mt-12 p-4 bg-divine-50 dark:bg-divine-900/20 rounded-lg border border-divine-200 dark:border-divine-800">
          <h3 className="text-xl font-bold mb-2">FRAMEWORK STATUS</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">COMPLIANCE</p>
              <p className="font-medium">{DEUS_CONFIG.complianceStandards.join(', ')}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">DEPLOYMENT TARGET</p>
              <p className="font-medium">{DEUS_CONFIG.deploymentTarget}</p>
            </div>
            <div className="md:col-span-2">
              <p className="text-sm text-gray-500 dark:text-gray-400">MANIFESTO</p>
              <p className="font-mythic text-lg text-divine-700 dark:text-divine-300">
                "BUILD ANYTHING. BUILD EVERYTHING."
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-hardware-900 text-gray-300 py-4 mt-12">
        <div className="container mx-auto px-4 text-center text-sm">
          DEUS Framework v∞ • GOD MODE ACTIVE • {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  );
}

export default App;
