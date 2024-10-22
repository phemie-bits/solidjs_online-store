import { createResource, For, Show } from 'solid-js';
import Card from '../components/Card';
import { A } from '@solidjs/router';

const fetchProducts = async () => {
    const res = await fetch('http://localhost:4000/products')
    return res.json()
}

export default function Home() {
    const [products] = createResource(fetchProducts)  
    
    return (
     <> <h1 class="my-5 text-center">ITEMS</h1>
      <Show when={products()} fallback={<p>Loading...</p>}>
        <div class="grid grid-cols-4 gap-10 my-4">
          <For each={products()}>
            {(product) => (
               <Card>
                  <img src={product.img}/>
                  <h2 class="font-light my-5">{product.title}</h2>
                  <A href={"/product/" + product.id} class="btn">View Product</A>
               </Card>
            )}
          </For>
       </div>
     </Show>
     </>
    )
}