import BaseGenerator from "./generators/BaseGenerator";
import TemplateGenerator, { ITemplateGeneratorArgs } from "./generators/TemplateGenerator";
import { execute } from "./util/execute";
import { mkdir } from "fs";
import { getHikeDirectory, getNodeModulesDirectory } from "./util/paths";
import { writeToFile } from "./util/file";
import { addPackage } from "./util/package";

export {
    BaseGenerator,
    TemplateGenerator,
    ITemplateGeneratorArgs,
    execute,
    mkdir,
    writeToFile,
    getHikeDirectory,
    getNodeModulesDirectory,
    addPackage,
};

// Test