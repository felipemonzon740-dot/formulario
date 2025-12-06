export interface ForgivenessFormData {
  name: string;
  incidentDate: string;
  reason: string;
  angerLevel: number; // 1-10
}

export enum AppStage {
  FORM = 'FORM',
  DECISION = 'DECISION',
  SUCCESS = 'SUCCESS',
}
