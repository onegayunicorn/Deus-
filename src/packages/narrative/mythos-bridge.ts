import conceptMap from '../../narrative-library/translation-maps/concept-to-tech.json';
import { DEUS_CONFIG } from '../config/app.config';

export type NarrativeConcept = keyof typeof conceptMap;
export type ConceptDetails = typeof conceptMap[NarrativeConcept];

/**
 * Translates narrative concepts to technical implementation details
 */
export const MythosBridge = {
  getConcept: (concept: NarrativeConcept): ConceptDetails => {
    if (!conceptMap[concept]) {
      throw new Error(`Concept ${concept} not found in narrative library`);
    }
    return conceptMap[concept];
  },

  getActiveConcepts: (): ConceptDetails[] => {
    return DEUS_CONFIG.mythosBridge.activeConcepts.map(concept => 
      MythosBridge.getConcept(concept as NarrativeConcept)
    );
  },

  validateAlignment: (concept: NarrativeConcept, componentPath: string): boolean => {
    const details = MythosBridge.getConcept(concept);
    return details.relatedCode.includes(componentPath);
  },
};
