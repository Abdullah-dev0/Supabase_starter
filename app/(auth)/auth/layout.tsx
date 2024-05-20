export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <main className="flex justify-center max-w-screen-sm mx-auto max-sm:px-4 min-h-screen items-center">
         {children}
      </main>
   );
}
