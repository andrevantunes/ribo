import type { Input, Rules } from "@andrevantunes/andrevds-constraints";

export interface ConstraintsProps {
  rules: Rules;
  children: any;
  data: Input;
  active: boolean;
}
