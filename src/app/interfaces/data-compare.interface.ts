export interface DataCompare {
    name: string;
    value: number;
}

export interface GroupedDataCompare {
    name: string;
    series: DataCompare[];
}