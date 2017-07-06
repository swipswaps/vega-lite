import { Channel } from '../../channel';
import { Config } from '../../config';
import { DateTime } from '../../datetime';
import { FieldDef } from '../../fielddef';
import { Legend } from '../../legend';
import { ScaleType } from '../../scale';
import { Type } from '../../type';
export declare function title(legend: Legend, fieldDef: FieldDef<string>, config: Config): string;
export declare function values(legend: Legend): string[] | number[] | DateTime[] | {
    signal: string;
}[];
export declare function type(legend: Legend, type: Type, channel: Channel, scaleType: ScaleType): "symbol" | "gradient";
