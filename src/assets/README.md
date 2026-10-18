# CONVEY Website Asset Guide

To ensure your website builds correctly on Netlify and other hosting platforms, you must manually add the image files to the `src/assets/` directory. 

## Image Mapping Table

Please rename your official CONVEY images to match the filenames below and place them in `/src/assets/`:

| Component / Product | Required Filename | Original Figma Hash Reference |
|---------------------|-------------------|-------------------------------|
| **Official Logo**   | `logo.png`        | `d2c64bf126bf...`             |
| **CONVEY C1**       | `c1.png`          | `ac032fc7491e...`             |
| **CONVEY C1 PLUS**  | `c1-plus.png`     | `82c57f398398...`             |
| **CONVEY C1 PRO**   | `c1-pro.png`      | `e1c145731917...`             |
| **CONVEY C1 PRO ND**| `c1-pro-nd.png`   | `589859a88d09...`             |

## Production Deployment Steps (CRITICAL)

Because the live preview environment uses a special `figma:asset` scheme to show your specific brand images, the code needs a small 10-second update before you deploy to Netlify:

1. **Upload your images**: Place your actual `.png` files in `/src/assets/` using the names in the table above.
2. **Switch the Import Mode**:
   - Open `/src/app/assets/index.ts`.
   - Comment out the **PREVIEW IMPORTS** (lines 13-18).
   - Uncomment the **PRODUCTION IMPORTS** (lines 20-27).
3. **Build**: Your Netlify/Vite build will now pass perfectly.

> **Note**: The code has already been updated to look for these files in the `src/assets/` directory. The build will fail until these files are physically present in the folder.
