# my-hox
A lite version of "hox" (a share-hook library ) 



### how to use

```js
// useHox.ts
const useHox = () => {
  const [hox, setHox] = useState("");
  return { hox, setHox };
};

export default createModel(useHox);

// App.tsx
function App() {
  const { hox } = useHox();
  return (
    <div>
      <h1>ezio love {hox}</h1>
    </div>
  );
}

```
