const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'src', 'app');
const pages = [
  'about', 'admissions', 'admission-policy', 'academics', 'classes',
  'teachers', 'facilities', 'playground', 'gallery', 'events', 'news',
  'results', 'downloads', 'contact'
];

const componentsBase = path.join(__dirname, 'src', 'components');
const dirsToCreate = [
  path.join(componentsBase, 'ui'),
  path.join(componentsBase, 'layout'),
  path.join(componentsBase, 'home'),
  path.join(componentsBase, 'admin')
];

pages.forEach(p => {
  const dirPath = path.join(baseDir, p);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  const title = p.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const content = `import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '${title} | Abexsun Grammar School',
  description: 'Learn more about ${title} at Abexsun Grammar School',
};

export default function ${title.replace(/\s+/g, '')}Page() {
  return (
    <div className="min-h-screen py-20 pt-32">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-primary mb-8">${title}</h1>
        <p className="text-gray-700">Content for ${title} goes here.</p>
      </div>
    </div>
  );
}
`;
  fs.writeFileSync(path.join(dirPath, 'page.tsx'), content);
});

dirsToCreate.forEach(d => {
  if (!fs.existsSync(d)) {
    fs.mkdirSync(d, { recursive: true });
  }
});

console.log('Structure created!');
