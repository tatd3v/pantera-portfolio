// Placeholder for public portfolio routes
export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="public-layout">
      <main>{children}</main>
    </div>
  );
}
