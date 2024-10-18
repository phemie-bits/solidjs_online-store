import Card from '../components/Card';

export default function Home() {
    return (
        <div class="grid grid-cols-3 gap-10 my-4">
         <Card>
            <h2>Viatu, white</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam reprehenderit nisi fugiat.</p>
            <p>Only $15</p>
            <button class="btn">VIEW</button>
            
         </Card>
         <Card>
         <h2>Viatu, gold</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam reprehenderit nisi fugiat.</p>
            <p>Only $20</p>
            <button class="btn">VIEW</button>
            
         </Card> 
         <Card>
         <h2>Viatu, black</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam reprehenderit nisi fugiat.</p>
            <p>Only $10</p>
            <button class="btn">VIEW</button>
           
         </Card>
      </div>
    )
}