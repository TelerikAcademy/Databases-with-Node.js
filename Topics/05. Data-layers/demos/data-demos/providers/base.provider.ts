import { IData } from "./../data/base.data";

export interface IProvider {
    provide<T>(type: string): IData<T>;
}