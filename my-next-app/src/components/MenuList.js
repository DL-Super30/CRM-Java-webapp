import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';

export default function MenuList({ options, name, size = '14px' }) {
  return (
    <Menu as="div" className="relative">
      <MenuButton className="p-2 rounded flex items-center me-2 border border-slate-300">
        <span style={{ fontSize: size }}>{name}</span>
        <img src="/downarrow.svg" width={18} alt="Down arrow" />
      </MenuButton>

      {/* Menu Items */}
      <MenuItems className="absolute right-0 z-10 bg-white divide-y-2 divide-neutral-400 border border-neutral-400 shadow min-w-max">
        {options.map((option, index) => (
          <MenuItem key={index}>
            {({ active }) => (
              <span
                className={`block px-4 py-2 text-sm cursor-pointer ${
                  active ? 'bg-neutral-200' : ''
                }`}
              >
                {option}
              </span>
            )}
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
}
