import Template from './template.js';
import Link from 'next/link';

export default function App() {
  return (
    <Template>
      Smartlist test
      <Link href="/posts/first-post" as="/sus-amongus,bruh,wtf">
        <a>sus libros</a>
        </Link>
    </Template>
  );
}
