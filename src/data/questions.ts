import { Question } from '../types';
import { PEDIATRIA_QUESTIONS } from './pediatria';
import { CLINICA_QUESTIONS } from './clinica';
import { CIRURGIA_QUESTIONS } from './cirurgia';
import { GINECOLOGIA_QUESTIONS } from './ginecologia';
import { SAUDE_COLETIVA_QUESTIONS } from './saude_coletiva';
import { BASICAS_QUESTIONS } from './basicas';
import { ENAMED_QUESTIONS } from './enamed';
import { ENAMED_2026_QUESTIONS } from './enamed2026';
import { UNIFESP_2025_QUESTIONS } from './unifesp2025';
import { HOSBOS_2027_QUESTIONS } from './hosbos2027';
import { USPRP_2025_QUESTIONS } from './usprp2025';
import { SCMBH_2026_QUESTIONS } from './scmbh2026';
import { SUSBA_2025_QUESTIONS } from './susba2025';
import { HIAE_2025_QUESTIONS } from './hiae2025';
import { REVALIDA_2025_1_QUESTIONS } from './revalida2025_1';
import { UNIMEDPB_2026_QUESTIONS } from './unimedpb2026';
import { IOG_2026_QUESTIONS } from './iog2026';
import { SESPE_2026_QUESTIONS } from './sespe2026';
import { HPP_2026_QUESTIONS } from './hpp2026';
import { HSRC_2026_QUESTIONS } from './hsrc2026';
import { AMP_2026_QUESTIONS } from './amp2026';
import { AMRIGS_2025_QUESTIONS } from './amrigs2025';

export const QUESTIONS: Question[] = [
  ...PEDIATRIA_QUESTIONS,
  ...CLINICA_QUESTIONS,
  ...CIRURGIA_QUESTIONS,
  ...GINECOLOGIA_QUESTIONS,
  ...SAUDE_COLETIVA_QUESTIONS,
  ...BASICAS_QUESTIONS,
  ...ENAMED_QUESTIONS,
  ...ENAMED_2026_QUESTIONS,
  ...UNIFESP_2025_QUESTIONS,
  ...HOSBOS_2027_QUESTIONS,
  ...USPRP_2025_QUESTIONS,
  ...SCMBH_2026_QUESTIONS,
  ...SUSBA_2025_QUESTIONS,
  ...HIAE_2025_QUESTIONS,
  ...REVALIDA_2025_1_QUESTIONS,
  ...UNIMEDPB_2026_QUESTIONS,
  ...IOG_2026_QUESTIONS,
  ...SESPE_2026_QUESTIONS,
  ...HPP_2026_QUESTIONS,
  ...HSRC_2026_QUESTIONS,
  ...AMP_2026_QUESTIONS,
  ...AMRIGS_2025_QUESTIONS
];
