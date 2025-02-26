'use client';

import React, { ButtonHTMLAttributes } from 'react';

import {
  Dropdown as NextUIDropdown,
  DropdownItem as NextUIDropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/dropdown';
import clsx from 'clsx';

import ArrowIcon from '@/shared/assets/icons/arrow-dropdown-up.svg';
import ChevronIcon from '@/shared/assets/icons/chevron-up.svg';
import { ComponentWithProps } from '@/shared/types';

import { DropdownView } from './const';
import styles from './Dropdown.module.scss';
import { DropdownItem } from './types';

type DropdownProps = {
  items: DropdownItem[];
  selectedTitle?: any;
  selectedKey: any;
  setSelected: (...props: any[]) => void;
  buttonContent?: string | React.ReactNode;
  viewType?: DropdownView;
  buttonProps?: DropdownButtonProps;
};

const DropdownViewToArrow: Record<DropdownView, React.FC> = {
  [DropdownView.Rounded]: ChevronIcon,
  [DropdownView.Flat]: ArrowIcon,
};

type DropdownButtonProps = Pick<DropdownProps, 'viewType'> &
  ButtonHTMLAttributes<HTMLButtonElement> & { endIcon?: React.ReactNode };

export const DropdownButton = React.forwardRef(
  (
    {
      children,
      viewType = DropdownView.Rounded,
      className,
      endIcon,
      ...props
    }: DropdownButtonProps,
    ref: React.ForwardedRef<HTMLButtonElement>,
  ) => (
    <button
      {...props}
      className={clsx(styles.button, styles[viewType], className)}
      ref={ref}
    >
      {children}
      {endIcon}
    </button>
  ),
);

export const Dropdown: ComponentWithProps<DropdownProps> = ({
  items,
  buttonContent,
  viewType = DropdownView.Rounded,
  selectedKey,
  setSelected,
  className,
  buttonProps,
}) => {
  const [isOpened, setIsOpened] = React.useState(false);
  const ArrowIcon = DropdownViewToArrow[viewType];

  const selectedTitle = items.find((item) => item.key === selectedKey)?.label;

  return (
    <NextUIDropdown className={clsx(className)} onOpenChange={setIsOpened}>
      <DropdownTrigger>
        <DropdownButton {...buttonProps}>
          {buttonContent ?? selectedTitle}
          <div className={clsx(styles.arrow, isOpened && styles.isOpened)}>
            <ArrowIcon />
          </div>
        </DropdownButton>
      </DropdownTrigger>
      <DropdownMenu>
        {items.map((item) => (
          <NextUIDropdownItem
            key={item.key}
            onClick={(event) => setSelected(item.key, event)}
            className={clsx(selectedKey === item.key && styles.selected)}
          >
            {item.label}
          </NextUIDropdownItem>
        ))}
      </DropdownMenu>
    </NextUIDropdown>
  );
};
