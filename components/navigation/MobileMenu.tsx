'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ThemeToggle } from '../ThemeToggle';
import { MenuItem } from '@/lib/types';

interface MobileMenuProps {
  isOpen: boolean;
  items: MenuItem[];
  onClose: () => void;
}

const menuVariants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: '100%' },
};

export function MobileMenu({ isOpen, items, onClose }: MobileMenuProps) {
  return (
    <motion.div
      initial="closed"
      animate={isOpen ? 'open' : 'closed'}
      variants={menuVariants}
      className="md:hidden fixed inset-y-0 right-0 w-64 bg-background shadow-lg"
    >
      <div className="p-4 space-y-4">
        {items.map((item) => (
          <motion.div
            key={item.name}
            whileHover={{ x: 5 }}
            className="block"
          >
            <Link
              href={item.href}
              className="text-muted-foreground hover:text-primary transition-colors"
              onClick={onClose}
            >
              {item.name}
            </Link>
          </motion.div>
        ))}
        <ThemeToggle />
      </div>
    </motion.div>
  );
}