export default function QuizLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col max-w-md mx-auto" style={{ background: '#0a0a0a' }}>
      {children}
    </div>
  );
}
