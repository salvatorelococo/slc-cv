const fs = require("fs");
const path = require("path");

// Path to the remixicon CSS file
const cssPath = path.resolve("node_modules/remixicon/fonts/remixicon.css");

// Path to the model file
const outputPath = path.resolve("src/app/models/icons.model.ts");

// Read the CSS file
const css = fs.readFileSync(cssPath, "utf-8");

// Extract the ri-xxx-line/fill classes
const matches = [...css.matchAll(/\.(ri-[a-z0-9-]+):before/g)];
const unique = Array.from(new Set(matches.map((m) => m[1])));

// Generate the enum
const enumEntries = unique.map((name) => {
	const key = name
		.split("-")
		.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
		.join("");
	return `  ${key} = '${name}',`;
});

// File content
const output = [
	"// AUTO-GENERATED: Do not edit manually",
	"",
	"export enum RemixIcon {",
	...enumEntries.sort(),
	"}",
	"",
].join("\n");

// Write/Overwrite the content of the file
fs.writeFileSync(outputPath, output, "utf-8");

// Log
console.log(
	`✔ remixicon.enum.ts generated with ${enumEntries.length} icons in ${outputPath}`,
);
