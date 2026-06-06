const CheckoutLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto min-h-svh max-w-7xl px-4 py-4  sm:px-6 sm:pb-6 md:px-8 md:py-8">
      
      {children}
    </div>
  );
};

export default CheckoutLayout;