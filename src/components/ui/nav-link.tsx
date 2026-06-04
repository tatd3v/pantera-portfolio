import { ComponentProps } from 'react';

interface NavLinkProps extends ComponentProps<'a'> {
  children: React.ReactNode;
}

export default function NavLink({ children, className = '', ...props }: NavLinkProps) {
  return (
    <a
      className={`text-sm font-semibold text-slate-300 hover:text-primary hover:scale-105 transition-all duration-300 relative group ${className}`}
      {...props}
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
    </a>
  );
}
