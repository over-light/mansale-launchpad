import { ColorSchemeToggle } from '@/components/index/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '@/components/index/Welcome/Welcome';

export default function HomePage() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
    </>
  );
}
