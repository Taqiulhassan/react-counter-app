// import './App.css';
// import Box from '@mui/material/Box';
// // import TextField from '@mui/material/TextField';
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
// import { useState } from 'react';

// function App() {
//   const [counter, setCounter] = useState(0);

//   const handleClick1 = () => {
//     // Counter state is incremented
//     setCounter(counter + 1);
//   };

//   // Function is called everytime decrement button is clicked
//   const handleClick2 = () => {
//     // Counter state is decremented

//     if (counter === 0) {
//       return 0;
//     } else {
//       setCounter(counter - 1);
//     }
//   };
//   const handleClick3 = () => {
//     // Counter state is incremented
//     setCounter(counter == 0);
//     window.location.reload();
//   };

//   return (
//     <>
//       <Box
//         component="form"
//         sx={{
//           '& > :not(style)': { m: 1, width: '25ch' },
//         }}
//         noValidate
//         autoComplete="off"
//       ></Box>

//       <div className="app">
//         <div className="container">
//           <div
//             className="total_amount_card"
//             style={{
//               backgroundImage: `linear-gradient(to right,  rgba(253, 230, 90, 100%), rgba(204, 254, 87, 100%))`,
//             }}
//           >
//             <div className="right">
//               <svg
//                 onClick={handleClick3}
//                 xmlns="http://www.w3.org/2000/svg"
//                 id="Outline"
//                 viewBox="0 0 24 24"
//                 width="17"
//                 height="17"
//               >
//                 <path d="M21.962,12.875A10.03,10.03,0,1,1,19.122,5H16a1,1,0,0,0-1,1h0a1,1,0,0,0,1,1h4.143A1.858,1.858,0,0,0,22,5.143V1a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1V3.078A11.985,11.985,0,1,0,23.95,13.1a1.007,1.007,0,0,0-1-1.1h0A.982.982,0,0,0,21.962,12.875Z" />
//               </svg>
//             </div>
//             <div className="card_text ">
//               <h3 className="total_amount_heading">{counter}</h3>
//             </div>
//           </div>
//           <form>
//             <div className="button_collection">
//               <Stack spacing={2} direction="row">
//                 <Button
//                   onClick={handleClick1}
//                   variant="contained"
//                   className="btn_one"
//                 >
//                   +
//                 </Button>
//                 <Button
//                   onClick={handleClick2}
//                   variant="contained"
//                   className="btn_two"
//                 >
//                   -
//                 </Button>
//               </Stack>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

import './App.css';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function App() {
  const [counter, setCounter] = useState(0);

  // Increment counter
  const handleIncrement = () => {
    setCounter((prev) => prev + 1);
  };

  // Decrement counter (minimum 0)
  const handleDecrement = () => {
    setCounter((prev) => Math.max(0, prev - 1));
  };

  // Reset counter
  const handleReset = () => {
    setCounter(0);
  };

  return (
    <div className="app">
      <div className="container">
        <div className="total_amount_card">
          <button
            className="reset_button"
            onClick={handleReset}
            aria-label="Reset counter"
          >
            ↻
          </button>

          <div className="card_text">
            <h1 className="total_amount_heading">{counter}</h1>
          </div>
        </div>

        <div className="button_collection">
          <Stack spacing={3} direction="row">
            <Button
              onClick={handleIncrement}
              variant="contained"
              className="counter_btn"
            >
              +
            </Button>

            <Button
              onClick={handleDecrement}
              variant="contained"
              className="counter_btn"
            >
              −
            </Button>
          </Stack>
        </div>
      </div>
    </div>
  );
}

export default App;
