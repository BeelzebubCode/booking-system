// src/app/test/layout.tsx

export default function TestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ backgroundColor: '#fff', padding: '30px', border: '1px solid #ccc' }}>
      <h2>[Layout เฉพาะส่วน /test]</h2>
      {children} 
    </div>
  );
}