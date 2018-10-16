import { execute } from "./execute";

export function addPackage(packageName: string): Promise<void> {
    return execute("npm", ["install", packageName]).then(() => undefined);
}
