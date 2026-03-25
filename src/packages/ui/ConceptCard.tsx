import React from 'react';
import { ConceptDetails } from '../narrative/mythos-bridge';

interface ConceptCardProps {
  concept: ConceptDetails;
  conceptName: string;
}

export const ConceptCard: React.FC<ConceptCardProps> = ({ concept, conceptName }) => {
  return (
    <div className="bg-white dark:bg-hardware-800 rounded-lg shadow-md border border-gray-200 dark:border-hardware-700 overflow-hidden transition-all hover:shadow-lg">
      <div className="bg-divine-900 text-white p-3">
        <h3 className="font-mythic text-lg">{conceptName}</h3>
      </div>
      <div className="p-4">
        <div className="space-y-3">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">NARRATIVE</p>
            <p className="font-medium">{concept.narrativeDescription}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">TECH IMPLEMENTATION</p>
            <p className="font-medium">{concept.techImplementation}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">CURRENT COMPONENT</p>
            <p className="font-mono text-sm text-quantum-500">{concept.currentComponent}</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-sm text-gray-500 dark:text-gray-400">FEASIBILITY</p>
            <div className="w-full bg-gray-200 dark:bg-hardware-700 rounded-full h-2">
              <div
                className="bg-quantum-500 h-2 rounded-full"
                style={{ width: `${concept.feasibilityScore * 100}%` }}
              />
            </div>
            <span className="text-sm font-medium">{(concept.feasibilityScore * 100)}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};
