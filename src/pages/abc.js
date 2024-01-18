// synchronous and asynchronous
// synch is top to bottom
// asynch is all of them at the same time

// could use setTimeOut() showText() main() "last in first out - stack logic"
// webAPIs - AJAX Events Timing - Callback queue - V8 engine runtime "first in first out - queue logic"
// promise works with async function and await

// async function waitFunction() {
//   const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Promise resolved");
//     }, 1000);
//   });
//   return myPromise;
// }

// (fetch) => json;

// export default function Home() {
//   async function getTodos() {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/todos?_limit=5"
//     );
//     const data = await response.json();
//     console.log(response);
//     setTodos(data);
//   }
//   return (
//     <div className="p-5">
//       {" "}
//       <h1 className={"text-green-500 text-xl"}>hello </h1>{" "}
//       {todos.map((todo) => {
//         return (
//           <div className="card">
//             {" "}
//             <h1 className="text-2xl">Title: {todo.title}</h1>{" "}
//             <p>Completed: {todo.completed}</p>{" "}
//           </div>
//         );
//       })}{" "}
//       <button onClick={getTodos} className={"border-2 p-2 rounded"}>
//         {" "}
//         Get todos{" "}
//       </button>{" "}
//     </div>
//   );
// }
