import { Idee } from './idee.model';

export interface IdeeState {
  error: Error | null;
  loading: boolean;
  idees: Idee[];
}
