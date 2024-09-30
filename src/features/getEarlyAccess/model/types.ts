import { User } from "@/entities";

export interface EarlyAccessState {
  user: User | null;
  isListed: boolean;
}
