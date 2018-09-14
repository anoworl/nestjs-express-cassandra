export interface EntityOptions<T = any> {
  table_name?: string;
  key?: Array<keyof T | Array<keyof T>>;
  materialize_views?: (keyof T)[] | MaterializeViewStatic<T>[];
  clustering_order?: Partial<{ [P in keyof T]: 'desc' | 'asc' }>;
  options?: EntityExtraOptions;
  indexes?: Array<keyof T> | string[];
  custom_indexes?: Partial<CustomIndexOptions>[];
}

export type ClusterOrder<T> = Partial<{ [P in keyof T]: 'desc' | 'asc' }>;

export interface MaterializeViewStatic<T> {
  select: Array<keyof T>;
  key: Array<keyof T | Array<keyof T>>;
  clustering_order?: ClusterOrder<T>;
  filter?: FilterOptions<T>;
}

export interface EntityExtraOptions {
  timestamps?: {
    createdAt?: string;
    updatedAt?: string;
  };

  versions?: { key: string };
}

type FilterOptions<T> = Partial<{ [P in keyof T]: FilterOptionsStatic<T> }>;

interface FilterOptionsStatic<T> {
  $gte?: any;
}

interface CustomIndexOptions {
  on: string;
  using: any;
  options: any;
}
