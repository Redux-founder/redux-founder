export interface SpreadActionsProps {
  state?: object;
}
export interface typesProps {
  INIT: string;
  PENDING: string;
  SUCCESS: string;
  FAILURE: string;
}
export type typeTypes = string | typesProps;

export interface SpreadReducerProps {
  init?: () => void;
  pending: () => void;
  success: () => void;
  failure: () => void;
  callback: (draft: object, payload: object, state: object) => void;
}

export interface callbackProps {
  draft: object;
  payload: object;
  state: object;
}

export interface setPartialProps {
  fn: (props: callbackProps) => void;
  draft: object;
  payload: object;
  state: object;
  type: string;
}
