export type Variant = "primary" | "secondary";

export interface TabsProps {
  categories: [
    {
      id: number;
      name: string;
    }
  ];
  variant?: Variant;
}
