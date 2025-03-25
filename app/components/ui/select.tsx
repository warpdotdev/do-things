'use client';

import { type ComponentRef, type ComponentPropsWithoutRef, forwardRef } from 'react';
import * as Select from '@radix-ui/react-select';
import { cn } from '@/lib/utils';
import { ChevronDownIcon } from '@radix-ui/react-icons';

// Types
type SelectTriggerProps = ComponentPropsWithoutRef<typeof Select.Trigger>
type SelectContentProps = ComponentPropsWithoutRef<typeof Select.Content>
type SelectItemProps = ComponentPropsWithoutRef<typeof Select.Item>

// Base styles
const selectTriggerStyles = "flex h-10 w-full items-center rounded-md border border-input bg-background pl-3 pr-12 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 relative";
const selectContentStyles = "relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2";
const selectItemStyles = "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50";

/**
 * SelectTrigger component that displays the selected value and opens the select menu
 */
const SelectTrigger = forwardRef<ComponentRef<typeof Select.Trigger>, SelectTriggerProps>(
  ({ className, children, ...props }, ref) => (
    <Select.Trigger
      ref={ref}
      className={cn(selectTriggerStyles, className)}
      {...props}
    >
      {children}
      <Select.Icon asChild className="absolute right-3">
        <ChevronDownIcon className="h-4 w-4 opacity-50" />
      </Select.Icon>
    </Select.Trigger>
  )
);
SelectTrigger.displayName = Select.Trigger.displayName;

/**
 * SelectContent component that contains the select options
 */
const SelectContent = forwardRef<ComponentRef<typeof Select.Content>, SelectContentProps>(
  ({ className, children, position = "popper", ...props }, ref) => (
    <Select.Portal>
      <Select.Content
        ref={ref}
        className={cn(
          selectContentStyles,
          position === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          className
        )}
        position={position}
        {...props}
      >
        <Select.Viewport
          className={cn(
            "p-1",
            position === "popper" &&
              "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          )}
        >
          {children}
        </Select.Viewport>
      </Select.Content>
    </Select.Portal>
  )
);
SelectContent.displayName = Select.Content.displayName;

/**
 * SelectItem component that represents a single option in the select menu
 */
const SelectItem = forwardRef<ComponentRef<typeof Select.Item>, SelectItemProps>(
  ({ className, children, ...props }, ref) => (
    <Select.Item
      ref={ref}
      className={cn(selectItemStyles, className)}
      {...props}
    >
      <Select.ItemText>{children}</Select.ItemText>
    </Select.Item>
  )
);
SelectItem.displayName = Select.Item.displayName;

// Re-export Radix UI components with custom names
const Root = Select.Root;
const Value = Select.Value;

export {
  Root as Select,
  Value as SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem
};

