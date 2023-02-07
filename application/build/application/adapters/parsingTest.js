"use strict";
// // give me a script in javascript that can parse this page :https://www.dofus.com/fr/mmorpg/encyclopedie/classes
// // Also parse the sub characters classes pages of Dofus
// // and give me a json file with all the classes and sub classes
// // Use puppeteer to parse the pages
// // Use typescript
// // Use the following libraries : puppeteer, cheerio, fs, path
// // Use the following folder structure :
// // - src
// //   - adapters
// //     - dofus
// //       - index.ts
// //       - classes.ts
// //       - subClasses.ts
// //       - utils.ts
// //   - index.ts
// //   - types.ts
// // - package.json
// // - tsconfig.json
// // - .gitignore
// // - .eslintrc.json
// // - .prettierrc.json
// // - .editorconfig
// // - .gitignore
// //index.ts
// import { getClassesData } from "./adapters/dofus/classes";
// import { getSubClassesData } from "./adapters/dofus/subClasses";
// import { writeJsonFile } from "./adapters/dofus/utils";
// const main = async () => {
//     const classesData = await getClassesData();
//     const subClassesData = await getSubClassesData();
//     const allClassesData = [...classesData, ...subClassesData];
//     writeJsonFile(allClassesData);
// }
// main();
// //classes.ts
// import { Page } from "puppeteer";
// import { Class } from "../types";
// import { getSubClassesData } from "./subClasses";
// export const getClassesData = async (page: Page): Promise<Class[]> => {
//     const classesData = await getClasses(page);
//     const classesDataWithDetails = await Promise.all(
//         classesData.map(async (classe) => {
//             const { name, link } = classe;
//             const { description, stats } = await getClassDetails(page, link);
//             return {
//                 name,
//                 link,
//                 description,
//                 stats,
//             };
//         }
//     ));
//     const subClassesData = await getSubClassesData(page);
//     const allClassesData = [...classesDataWithDetails, ...subClassesData];
//     return allClassesData;
// }
// const getClasses = async (page: Page): Promise<Class[]> => {
//     await page.goto("https://www.dofus.com/fr/mmorpg/encyclopedie/classes");
//     const classes = await page.$$(".ak-encyclo-detail-type");
//     const classesArray = await Promise.all(classes.map((el) => el.getProperty("innerText")));
//     const classesNames = await Promise.all(classesArray.map((el) => el.jsonValue()));
//     const classesLinks = await Promise.all(classes.map((el) => el.getProperty("href")));
//     const classesData = classesNames.map((name, index) => ({
//         name,
//         link: classesLinks[index],
//     }));
//     return classesData;
// }
// const getClassDetails = async (page: Page, link: string): Promise<Class> => {
//     await page.goto(link);
//     const description = await page.$eval(".
// ak-container.ak-panel-stack", (el) => el.innerText);
//     const stats = await page.$eval(".
// ak-container.ak-panel-stack", (el) => el.innerText);
//     return {
//         description,
//         stats,
//     };
// }
// //subClasses.ts
// import { Page } from "puppeteer";
// import { Class } from "../types";
// export const getSubClassesData = async (page: Page): Promise<Class[]> => {
//     const classesData = await getClasses(page);
//     const classesDataWithDetails = await Promise.all(
//         classesData.map(async (classe) => {
//             const { name, link } = classe;
//             const { description, stats } = await getClassDetails(page, link);
//             return {
//                 name,
//                 link,
//                 description,
//                 stats,
//             };
//         }
//     ));
//     return classesDataWithDetails;
// }
// const getClasses = async (page: Page): Promise<Class[]> => {
//     await page.goto("https://www.dofus.com/fr/mmorpg/encyclopedie/classes");
//     const classes = await page.$$(".ak-encyclo-detail-type");
//     const classesArray = await Promise.all(classes.map((el) => el.getProperty("innerText")));
//     const classesNames = await Promise.all(classesArray.map((el) => el.jsonValue()));
//     const classesLinks = await Promise.all(classes.map((el) => el.getProperty("href")));
//     const classesData = classesNames.map((name, index) => ({
//         name,
//         link: classesLinks[index],
//     }));
//     return classesData;
// }
// const getClassDetails = async (page: Page, link: string): Promise<Class> => {
//     await page.goto(link);
//     const description = await page.$eval(".
// ak-container.ak-panel-stack", (el) => el.innerText);
//     const stats = await page.$eval(".
// ak-container.ak-panel-stack", (el) => el.innerText);
//     return {
//         description,
//         stats,
//     };
// }
// //utils.ts
// import { Class } from "./types";
// import { writeFileSync } from "fs";
// import { join } from "path";
// export const writeJsonFile = (data: Class[]): void => {
//     const path = join(__dirname, "../", "data.json");
//     writeFileSync
//     (path, JSON.stringify(data, null, 2));
// }
// //types.ts
// export interface Class {
//     name: string;
//     link: string;
//     description?: string;
//     stats?: string;
// }
// //tsconfig.json
// {
//     "compilerOptions": {
//         "target": "ES2017",
//         "module": "commonjs",
//         "lib": [
//             "es2017"
//         ],
//         "strict": true,
//         "noImplicitAny": true,
//         "strictNullChecks": true,
//         "strictFunctionTypes": true,
//         "strictPropertyInitialization": true,
//         "noImplicitThis": true,
//         "alwaysStrict": true,
//         "noUnusedLocals": true,
//         "noUnusedParameters": true,
//         "noImplicitReturns": true,
//         "noFallthroughCasesInSwitch": true,
//         "moduleResolution": "node",
//         "esModuleInterop": true,
//         "resolveJsonModule": true,
//         "experimentalDecorators": true,
//         "emitDecoratorMetadata": true,
//         "sourceMap": true,
//         "outDir": "./dist",
//         "baseUrl": "./src",
//         "paths": {
//             "*": [
//                 "types/*"
//             ]
//         }
//     },
//     "include": [
//         "src/**/*"
//     ],
//     "exclude": [
//         "node_modules"
//     ]
// }
