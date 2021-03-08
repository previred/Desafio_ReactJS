import { ReactNode } from "react";

interface Column<T> {
  key: string;
  label: string;
  align?:  'inherit' | 'left' | 'center' | 'right' | 'justify';
  render: (record: T) => ReactNode;
}

export type { Column };
