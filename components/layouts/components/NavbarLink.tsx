import { MenuItem } from '@/utils/types/types';
import { NavLink, ThemeIcon } from '@mantine/core';
import Link from 'next/link';

import { useRouter } from 'next/router';

interface INavbarLink {
  icon: any;
  label: string;
  link?: string;
  soon?: boolean;
  onClick?: () => void;
  c?: string;
  subMenu?: MenuItem[];
  disabled?: boolean;
}

export default function NavbarLink({
  icon: Icon,
  label,
  link = '#',
  soon = false,
  onClick = () => {},
  c = '',
  subMenu,
  disabled = false,
}: INavbarLink) {
  const router = useRouter();
  const active = router.pathname.startsWith(link);
  console.log(router.pathname, active);
  return (
    <NavLink
      component={Link}
      href={link}
      w="100%"
      onClick={onClick}
      c={c}
      label={`${label}${soon ? ' (soon)' : ''}`}
      disabled={disabled || soon}
      active={active}
      leftSection={
        <ThemeIcon
          variant={active ? 'light' : 'subtle'}
          color={active ? c || 'blue' : c || 'blue.4'}
          size="md"
        >
          <Icon size={18} />
        </ThemeIcon>
      }
    >
      {subMenu?.map((item) => <NavbarLink {...item} key={item.label} />)}
    </NavLink>
  );
}
