import * as React from 'react';

import { cn } from '@/lib/utils';
import { v4 as uuidv4 } from 'uuid';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const errorClassName = props.error ? 'border-red-500' : '';
    const errorSpanId = uuidv4();
    return (
      <div className="flex flex-col gap-1">
        <input
          type={type}
          className={cn(
            'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            className,
            errorClassName,
          )}
          ref={ref}
          aria-describedby={props.error ? errorSpanId : undefined}
          {...props}
        />
        {props.error && (
          <span id={errorSpanId} className="text-sm text-red-700">
            {props.error}
          </span>
        )}
      </div>
    );
  },
);
Input.displayName = 'Input';

export { Input };
