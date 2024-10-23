
import { createSignal } from 'solid-js';
import banner from './assets/fachry-zella-devandra-bNSdIkCBJOs-unsplash.png'
import { A } from '@solidjs/router';
import { useCartContext } from './context/CartContext';

function App(props) {
  const [darkTheme, setDarkTheme] = createSignal(false);
  function toggleTheme(){
    setDarkTheme(!darkTheme());
  }

  const {items} = useCartContext()

  const quantity =()=> {//derived value
     return items.reduce((accumulator, current) => {
       return accumulator + current.quantity
     }, 0)
  }
  

  return (
    <div class="container m-auto bg">
      <header 
         class="my-4 p-2 text-x1 flex items-center justify-between gap-4"
         classList={{"bg-neutral-900": darkTheme(), "text-white":darkTheme()}}
      >
        <span 
          class="material-symbols-outlined cursor-pointer"
          onClick={toggleTheme}   
        >
          light_mode
        </span>

        <h1>Solid Store</h1>

        <div class="flex gap-4 ">
           <A href="/">Home</A>
           <A href="/cart">Cart ({quantity()})</A>
        </div>
      </header>
      <img class="rounded-md" src={banner}></img>
      {props.children} 
    </div>
  );
}

export default App;
