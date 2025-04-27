

export default function Home() {
  return (
    <div className={'space-y-72'}>
      <h1 className="text-4xl font-bold text-center">
        Welcome to My Next.js App
      </h1>
      <p className="text-center mt-4">
        This is a simple example of a Next.js application with a custom layout.
      </p>
      <div className="flex justify-center mt-10">
        <img
          src="/path/to/your/image.jpg"
          alt="Example Image"
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className="mt-10 max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Features</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Feature 1: Responsive design</li>
          <li>Feature 2: Easy to customize</li>
          <li>Feature 3: Built with Next.js</li>
        </ul>
      </div>
    </div>
  );
}
