'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ThemeToggle } from '../ThemeToggle';
import { MenuItem } from '@/lib/types';

interface DesktopMenuProps {
  items: MenuItem[];
}

export function DesktopMenu({ items }: DesktopMenuProps) {
  return (
    <div className="hidden md:flex items-center space-x-8">
      {items.map((item) => (
        <motion.div
          key={item.name}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href={item.href}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            {item.name}
          </Link>
        </motion.div>
      ))}
      <ThemeToggle />
    </div>
  );
}