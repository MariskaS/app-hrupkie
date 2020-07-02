import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {environment} from '../../../environments/environment';
import {sidebarNode, sidebarReducer} from '../sidebar/sidebar.reducer';
import {SidebarState} from '../../interfaces';

export interface State {
  [sidebarNode]: SidebarState;
}

export const reducers: ActionReducerMap<State> = {
  [sidebarNode]: sidebarReducer
};

export  const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
