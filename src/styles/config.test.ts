import { describe, it, expect } from 'vitest';
import { readFileSync, existsSync } from 'fs';
import { resolve } from 'path';

const projectRoot = resolve(__dirname, '../..');

describe('Tailwind Configuration', () => {
  const globalCssPath = resolve(projectRoot, 'src/styles/global.css');
  const globalCss = readFileSync(globalCssPath, 'utf-8');

  it('includes tailwindcss import', () => {
    expect(globalCss).toContain('@import "tailwindcss"');
  });

  it('defines theme colors from Aimug template', () => {
    expect(globalCss).toContain('--color-thm-base: #bb54e1');
    expect(globalCss).toContain('--color-thm-primary: #00CB88');
    expect(globalCss).toContain('--color-thm-body-bg: #111022');
    expect(globalCss).toContain('--color-thm-main-bg: #15152c');
    expect(globalCss).toContain('--color-thm-bdr-color: #3C3C77');
  });

  it('defines gradient colors', () => {
    expect(globalCss).toContain('--color-gradient-purple: #8F79FF');
    expect(globalCss).toContain('--color-gradient-blue: #426BFF');
  });

  it('defines custom gradient utility', () => {
    expect(globalCss).toContain('--gradient-thm-main');
    expect(globalCss).toContain('@utility bg-thm-main');
  });
});

describe('Layout Component', () => {
  const layoutPath = resolve(projectRoot, 'src/layouts/Layout.astro');
  const layoutContent = readFileSync(layoutPath, 'utf-8');

  it('imports global CSS', () => {
    expect(layoutContent).toContain("import '../styles/global.css'");
  });

  it('has proper HTML structure', () => {
    expect(layoutContent).toContain('<!doctype html>');
    expect(layoutContent).toContain('<html lang="es">');
  });

  it('includes title prop', () => {
    expect(layoutContent).toContain('interface Props');
    expect(layoutContent).toContain('title: string');
  });

  it('uses Tailwind color classes for body', () => {
    expect(layoutContent).toContain('bg-thm-body-bg');
    expect(layoutContent).toContain('text-thm-gray');
  });
});

describe('Index Page', () => {
  const indexPath = resolve(projectRoot, 'src/pages/index.astro');
  const indexContent = readFileSync(indexPath, 'utf-8');

  it('imports Layout component', () => {
    expect(indexContent).toContain("import Layout from '../layouts/Layout.astro'");
  });

  it('uses Tailwind color classes', () => {
    expect(indexContent).toContain('bg-thm-body-bg');
    expect(indexContent).toContain('text-thm-white');
    expect(indexContent).toContain('text-thm-base');
    expect(indexContent).toContain('bg-thm-main-bg');
  });

  it('includes interactive elements', () => {
    expect(indexContent).toContain('<button');
    expect(indexContent).toContain('bg-thm-main');
  });
});

describe('Astro Config', () => {
  const astroConfigPath = resolve(projectRoot, 'astro.config.mjs');
  const astroConfig = readFileSync(astroConfigPath, 'utf-8');

  it('includes Tailwind CSS plugin', () => {
    expect(astroConfig).toContain("@tailwindcss/vite");
    expect(astroConfig).toContain('tailwindcss()');
  });
});

describe('Package.json', () => {
  const packageJsonPath = resolve(projectRoot, 'package.json');
  const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));

  it('has tailwindcss dependency', () => {
    expect(packageJson.dependencies).toHaveProperty('tailwindcss');
  });

  it('has @tailwindcss/vite dependency', () => {
    expect(packageJson.dependencies).toHaveProperty('@tailwindcss/vite');
  });

  it('has vitest devDependency', () => {
    expect(packageJson.devDependencies).toHaveProperty('vitest');
  });

  it('has test script', () => {
    expect(packageJson.scripts).toHaveProperty('test');
  });
});

describe('Assets', () => {
  it('has fonts directory', () => {
    const fontsDir = resolve(projectRoot, 'public/fonts');
    expect(existsSync(fontsDir)).toBe(true);
  });

  it('has images directory', () => {
    const imagesDir = resolve(projectRoot, 'public/images');
    expect(existsSync(imagesDir)).toBe(true);
  });

  it('has icon fonts (FontAwesome)', () => {
    const faFont = resolve(projectRoot, 'public/fonts/fa-solid-900.ttf');
    expect(existsSync(faFont)).toBe(true);
  });

  it('has custom icon fonts (icomoon)', () => {
    const icomoon = resolve(projectRoot, 'public/fonts/icomoon.svg');
    expect(existsSync(icomoon)).toBe(true);
  });

  it('has logos', () => {
    const logo = resolve(projectRoot, 'public/images/resource/logo-1.png');
    expect(existsSync(logo)).toBe(true);
  });

  it('has icons', () => {
    const icon = resolve(projectRoot, 'public/images/icons/ai-chat.png');
    expect(existsSync(icon)).toBe(true);
  });

  it('has favicon', () => {
    const favicon = resolve(projectRoot, 'public/images/favicon-kcumen.png');
    expect(existsSync(favicon)).toBe(true);
  });

  it('has brand logos', () => {
    const brandLogo = resolve(projectRoot, 'public/images/brand/brand-logo-1.png');
    expect(existsSync(brandLogo)).toBe(true);
  });
});

describe('Layout includes assets', () => {
  const layoutPath = resolve(projectRoot, 'src/layouts/Layout.astro');
  const layoutContent = readFileSync(layoutPath, 'utf-8');

  it('references favicon', () => {
    expect(layoutContent).toContain('favicon-kcumen.png');
  });

  it('includes Google Fonts (Sora)', () => {
    expect(layoutContent).toContain('fonts.googleapis.com');
    expect(layoutContent).toContain('Sora');
  });

  it('includes Google Fonts (Inter)', () => {
    expect(layoutContent).toContain('Inter');
  });
});
