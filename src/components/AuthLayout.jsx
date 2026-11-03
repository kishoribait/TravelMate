export default function AuthLayout({ children }) {
  return (
    <section className="min-h-screen bg-gradient-to-br from-orange-100 via-white to-blue-100 flex items-center justify-center px-4">

      <div className="w-full max-w-md">

        {children}

      </div>

    </section>
  );
}