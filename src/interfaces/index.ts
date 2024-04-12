import { ReactElement } from 'react';

export interface ReactChildrenProps {
   children: ReactElement;
}

export interface DropDownLanguageInterface {
   currentLang: number;
   updateCurrentLang(i: number): void;
}