export default function Card(props) {
    return (
        <div class="bg-white p-1 text-center rounded-md shadow-md">
             {props.children}
        </div>
    )
}