import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
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
