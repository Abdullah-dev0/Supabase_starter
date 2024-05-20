export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <main className="flex justify-center min-h-screen items-center">
         {children}
      </main>
   );
}
