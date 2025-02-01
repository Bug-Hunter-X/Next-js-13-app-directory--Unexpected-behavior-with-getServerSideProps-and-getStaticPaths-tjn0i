```javascript
// pages/index.js

// Remove getServerSideProps if you are using getStaticPaths.  The App Router does not combine those functions
// in the way the pages router did.

export default async function Home() {
  const response = await fetch('/api/data');
  const data = await response.json();

  return (
    <div>Hello World! {data.message}</div>
  );
}
```
```javascript
// pages/api/data.js

export default async function handler(req, res) {
  res.status(200).json({ message: 'Data fetched from API' });
}
```