import { For, useContext } from 'solid-js';
import Card from '../components/Card';
import { CartContext, useCartContext } from '../context/CartContext';

export default function Cart() {
    const {items} = useCartContext()

    const total =()=> {//derived value
      return items.reduce((accumulator, current) => {
        return accumulator + (current.quantity*current.price)
      }, 0)
    }
    
    return (
      <div class="max-w-md my-8 mx-auto">
        <Card>
            <h2 class="border-b-2">Shopping Cart</h2>
            <For each={items}>
              {(item) => (
                <p class="my-3">{item.title} - {item.price} x {item.quantity}</p>
              )}
            </For>

            <p class="mt-8 pt-4 border-t-2 font-bold">Total cart price - ${total()}</p>
        </Card>
      </div>
    )
}