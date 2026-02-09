const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');

// Directories to process
const directories = [
    path.join(publicDir, 'portfolio'),
    path.join(publicDir, 'assets'),
    publicDir
];

async function convertImage(inputPath, outputPath) {
    try {
        await sharp(inputPath)
            .webp({ quality: 85 })
            .toFile(outputPath);

        const inputStats = fs.statSync(inputPath);
        const outputStats = fs.statSync(outputPath);
        const reduction = ((1 - outputStats.size / inputStats.size) * 100).toFixed(2);

        console.log(`✓ Converted: ${path.basename(inputPath)}`);
        console.log(`  ${(inputStats.size / 1024 / 1024).toFixed(2)}MB → ${(outputStats.size / 1024 / 1024).toFixed(2)}MB (${reduction}% reduction)`);

        return { success: true, inputSize: inputStats.size, outputSize: outputStats.size };
    } catch (error) {
        console.error(`✗ Failed to convert ${inputPath}:`, error.message);
        return { success: false, inputSize: 0, outputSize: 0 };
    }
}

async function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    const results = [];

    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isFile() && (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg'))) {
            const outputPath = filePath.replace(/\.(png|jpg|jpeg)$/i, '.webp');

            // Skip if WebP already exists
            if (fs.existsSync(outputPath)) {
                console.log(`⊘ Skipping ${file} (WebP already exists)`);
                continue;
            }

            const result = await convertImage(filePath, outputPath);
            results.push(result);
        }
    }

    return results;
}

async function main() {
    console.log('🖼️  Starting image conversion to WebP...\n');

    let totalInputSize = 0;
    let totalOutputSize = 0;
    let successCount = 0;
    let failCount = 0;

    for (const dir of directories) {
        if (!fs.existsSync(dir)) {
            console.log(`⊘ Directory not found: ${dir}`);
            continue;
        }

        console.log(`\n📁 Processing: ${path.relative(publicDir, dir) || 'root'}`);
        const results = await processDirectory(dir);

        results.forEach(result => {
            if (result.success) {
                totalInputSize += result.inputSize;
                totalOutputSize += result.outputSize;
                successCount++;
            } else {
                failCount++;
            }
        });
    }

    console.log('\n' + '='.repeat(60));
    console.log('📊 Conversion Summary:');
    console.log(`   ✓ Successfully converted: ${successCount} images`);
    console.log(`   ✗ Failed: ${failCount} images`);
    console.log(`   📦 Total size before: ${(totalInputSize / 1024 / 1024).toFixed(2)}MB`);
    console.log(`   📦 Total size after: ${(totalOutputSize / 1024 / 1024).toFixed(2)}MB`);
    console.log(`   💾 Total saved: ${((totalInputSize - totalOutputSize) / 1024 / 1024).toFixed(2)}MB (${((1 - totalOutputSize / totalInputSize) * 100).toFixed(2)}% reduction)`);
    console.log('='.repeat(60));
}

main().catch(console.error);
