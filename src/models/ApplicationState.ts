import { UserState } from '../store/user/reducer';
import { LayoutState } from '../store/layout/reducer';
import { ProblemState } from '../store/problem/reducer';
export interface ApplicationState {
    readonly _persist?: {
      readonly version: number;
      readonly rehydrated: boolean;
    };
    readonly User: UserState;
    readonly Layout:LayoutState;
    readonly Problem:ProblemState;
}