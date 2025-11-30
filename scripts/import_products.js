const fs = require('fs');
const path = require('path');

const SOURCE_DIR = '/Users/cris/Downloads/Fotos Jayson';
const DEST_DIR = path.join(process.cwd(), 'public/products');
const OUTPUT_FILE = path.join(process.cwd(), 'lib/products.ts');

// Ensure destination directory exists
if (!fs.existsSync(DEST_DIR)) {
    fs.mkdirSync(DEST_DIR, { recursive: true });
}

// Helper to get product code from filename
function getProductCode(filename) {
    if (filename.startsWith('SIN CODIGO') || filename.startsWith('SIN CODIG')) {
        return 'SIN_CODIGO';
    }
    // Split by underscore and take the first part
    const parts = filename.split('_');
    return parts[0];
}

const productsMap = new Map();

// Read source directory
const files = fs.readdirSync(SOURCE_DIR);

console.log(`Found ${files.length} files.`);

files.forEach(file => {
    if (file.startsWith('.') || file === 'Listas') return; // Skip hidden files and folders

    const sourcePath = path.join(SOURCE_DIR, file);
    const destPath = path.join(DEST_DIR, file);

    // Copy file
    fs.copyFileSync(sourcePath, destPath);

    // Grouping
    const code = getProductCode(file);
    if (!productsMap.has(code)) {
        productsMap.set(code, []);
    }
    productsMap.get(code).push(`/products/${file}`);
});

// Generate TypeScript content
let tsContent = `export interface Product {
  id: string;
  title: string;
  category: string;
  description: string;
  images: string[];
}

export const products: Product[] = [
`;

productsMap.forEach((images, code) => {
    tsContent += `  {
    id: "${code}",
    title: "${code}",
    category: "General",
    description: "Descripción pendiente para el producto ${code}.",
    images: ${JSON.stringify(images)},
  },
`;
});

tsContent += `];

export const categories = Array.from(new Set(products.map((p) => p.category)));
`;

// Write to lib/products.ts
fs.writeFileSync(OUTPUT_FILE, tsContent);

console.log(`Successfully imported images and generated ${OUTPUT_FILE}`);
console.log(`Created ${productsMap.size} products.`);
