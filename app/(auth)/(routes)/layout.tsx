export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="h-full bg-red-500">
            {children}
        </div>
    );
}
