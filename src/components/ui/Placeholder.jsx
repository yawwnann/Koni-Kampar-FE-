export default function Placeholder({ title }) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">{title}</h1>
        <p className="text-gray-600 mt-4">
          Halaman ini sedang dalam pengembangan
        </p>
      </div>
    </div>
  );
}
