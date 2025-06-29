import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Росин Севастьян</h1>
        <p className="text-lg">Developer</p>
      </header>
      <main className="max-w-2xl mx-auto space-y-6">
        <section>
          <h2 className="text-2xl font-semibold">Обо мне</h2>
          <p>Краткое описание кто ты и чем занимаешься.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold">Проекты</h2>
          <ul className="list-disc pl-5">
            <li>Название проекта 1 — <a href="#" className="text-blue-500">ссылка</a></li>
            <li>Название проекта 2 — <a href="#" className="text-blue-500">ссылка</a></li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold">Контакты</h2>
          <p>Email: <a href="mailto:rosevrosin@gmail.com" className="text-blue-500">your@email.com</a></p>
          <p>GitHub: <a href="https://github.com/SevastyanRosin" className="text-blue-500">SevastyanRosin</a></p>
        </section>
      </main>
    </div>
  );
}