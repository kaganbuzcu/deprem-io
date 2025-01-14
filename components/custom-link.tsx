import Link from 'next/link';
import { cx } from '@/lib/utils';
import { CustomLinkProps } from '@/lib/types/component-props/custom-link.props';

export default function CustomLink({
  children,
  className,
  ...props
}: CustomLinkProps) {
  return (
    <Link className={cx('text-blue-500 underline', className)} {...props}>
      {children}
    </Link>
  );
}
