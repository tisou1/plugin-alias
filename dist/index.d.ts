import type { Plugin } from "rollup";
type Entri = {
    [key: string]: string;
};
type Entri2 = {
    find: string;
    replacement: string;
};
interface AliasOptions {
    entries: Entri2[] | Entri;
}
declare function alias(options: AliasOptions): Plugin;
export { alias };
