import logo from './logo.svg';
import './App.css';

function App()
{
          //array

  // let arr = [11,25,37,42,67];
  // let arr1 = [99,100];

  // let newArr = arr.concate (arr1);
  // console.log(arr);

  // let arr = [19,35,68,65,89];
  // let ans = arr.some ((a) => a > 40);    //true
  // console.log(ans);
  
  // let arr,toString= ['29,58,69,77,89'];
  //  console.log(arr.toString);

  // let arr = [11,45,66,56,88]
  // let ans = arr.find ((a) => a > 60);    //66
  // console.log(ans);
 
  // let arr = [11,25,37,42,67];
  // arr.splice(2 ,0, 35)      / [11, 25, 35, 37, 42, 67]
  // console.log(arr);

  //  let arr = [12,25,37,52,77];
  //  arr.splice(2 ,1)      // [12, 25, 52, 77]
  //  console.log(arr);

      //Object

  // let obj ={
  //   id : 6500 ,
  //   name : "payal"        //6500 'payal'
  // }    
  // console.log(obj.id ,obj['name']);



  // let x;
  // x=5;
  // console.log(x);

  // const x
  // x=5;
  // console.log(x);

  // let x=5
  // {
  //   let x=10;
  // }
  // console.log(x);

  // const x=5
  // {
  //   const x=10;
  // }
  // console.log(x);

//  const display =(name, id) =>{
//     console.log(name,id);
//  }
//  display("payal", 6500)

// let grid =[12,18,26,27,35]
//   console.log(grid);




  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with rnw
        </a>
      </header>
    </div>
  );
}

export default App;
