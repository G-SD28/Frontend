import type { ContainerProps } from '../types';

const Container = ({ children, style }: ContainerProps) => {
  return (
    <div style={{ border: '2px dashed #888', padding: '1rem', ...style }}>
      {children}
    </div>
  );
};

export default Container;
